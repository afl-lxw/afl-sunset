# 解析

上面我们提到使用react-fiber 写了一个小案例
现在我们开始逐步解析一下
```jsx
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div id="canvas-container">
      <Canvas />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
```

我们首先`<Canvas />`从 React 树导入组件`@react-three/fiber`并将其放入 React 树中。

Canvas 组件在幕后执行一些重要的设置工作：

- 它设置了**Scene**和**Camera**，这是渲染所需的基本构建块
- 它每帧渲染我们的场景，您不需要传统的渲染循环

> Canvas 能够响应适应父节点，因此您可以通过更改父节点的宽度和高度来控制它的大小，在本例中为 

## 添加网格组件

为了实际看到场景中的某些内容，我们将添加一个小写`<mesh />`的本机元素，它与 new THREE.Mesh() 直接等效。

```js
<Canvas>
  <mesh />
</Canvas>
```

请注意，我们不需要导入任何内容，所有三个.js 对象都将被视为原生 JSX 元素，就像您可以在常规 ReactDOM 中编写 <div /> 或 <span /> 一样。一般规则是 Fiber 组件在 Three.js 中以其名称的驼峰式版本提供。

[`Mesh`](https://threejs.org/docs/#api/en/objects/Mesh)是 Three.js 中的基本场景对象，用于保存在 3D 空间中表示形状所需的几何图形和材质。**我们将使用BoxGeometry**和**MeshStandardMaterial**创建一个新的网格，它们[会自动附加](https://docs.pmnd.rs/react-three-fiber/api/objects#attach)到其父级。

```jsx
<Canvas>
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
</Canvas>
```

让我们暂停一下，准确了解这里发生了什么。我们刚刚编写的代码与以下 Three.js 代码等效：

```jsx
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
document.querySelector('#canvas-container').appendChild(renderer.domElement)

const mesh = new THREE.Mesh()
mesh.geometry = new THREE.BoxGeometry()
mesh.material = new THREE.MeshStandardMaterial()

scene.add(mesh)

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()
```

### 构造函数参数

根据[文档，`BoxGeometry`](https://threejs.org/docs/#api/en/geometries/BoxGeometry)我们可以选择传递三个参数：宽度、长度和深度：

```js
new THREE.BoxGeometry(2, 2, 2)
```

为了在 Fiber 中做到这一点，我们使用`args`prop，它_总是_采用一个数组，其项目代表构造函数参数。

```jsx
<boxGeometry args={[2, 2, 2]} />
```

请注意，每次更改 args 时，都必须重新构造对象！

## 添加灯光

接下来，我们将通过将这些组件放入画布中来向场景添加一些灯光。

```jsx
<Canvas>
  <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
</Canvas>
```

### 道具

这向我们介绍了 Fiber 的最后一个基本概念，即 React 如何`props`在 Three.js 对象上工作。当您在 Fiber 组件上设置任何 prop 时，它将在 Three.js 实例上设置同名的属性。

让我们关注 our `ambientLight`，它的[文档](https://threejs.org/docs/#api/en/lights/AmbientLight)告诉我们，我们可以选择使用颜色来构造它，但它也可以接收 props。

```jsx
<ambientLight intensity={0.1} />
```

这相当于：

```jsx
const light = new THREE.AmbientLight()
light.intensity = 0.1
```


### 快捷方式
对于具有方法（颜色、矢量等）的道具，有一些快捷方式`.set()`。

```jsx
const light = new THREE.DirectionalLight()
light.position.set(0, 0, 5)
light.color.set('red')
```

这与 JSX 中的以下内容相同：

```jsx
<directionalLight position={[0, 0, 5]} color="red" />
```

请参阅 API 以获得[更深入的解释](https://docs.pmnd.rs/react-three-fiber/api/objects)。

## 结果

```jsx
<Canvas>
  <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
</Canvas>
```