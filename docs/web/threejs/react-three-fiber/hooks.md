# Hooks

>Hooks 是 R3F 的核心
挂钩允许您将特定信息绑定或请求到您的组件。例如，想要参与渲染循环的组件可以使用useFrame，需要了解 Three.js 细节的组件可以使用useThree等等。一旦组件卸载，所有挂钩都会自行清理。
___

**钩子只能在 Canvas 元素内部使用，因为它们依赖于上下文！**

❌ 你不能指望这样的事情会起作用：

```jsx
import { useThree } from '@react-three/fiber'

function App() {
  const { size } = useThree() // This will just crash
  return (
    <Canvas>
      <mesh>
```

✅ 这样做：

```jsx
function Foo() {
  const { size } = useThree()
  ...
}

function App() {
  return (
    <Canvas>
      <Foo />
```

## useThree

useThree 是一个自定义钩子（Hook），它用于获取与渲染器（Renderer）、场景（Scene）、相机（Camera）等相关的 Three.js 实例和状态。使用 useThree 钩子，您可以轻松地访问和操作 R3F 中的 Three.js 状态

### useThree使用方法

在使用 useThree 钩子时，只需在函数组件中调用它即可。它会返回一个对象，包含了当前的 Three.js 状态和实例。

```jsx
import { useThree } from 'react-three-fiber';

const MyComponent = () => {
  const { gl, scene, camera } = useThree();

  // 在这里可以使用 gl、scene、camera 等对象进行相关操作
  // ...

  return null;
};
```

### useThree注意事项

- useThree 钩子应该在 R3F 组件的函数体内部使用，不要在组件的顶层使用或在其他钩子的依赖数组中使用，这可能会导致无法获取正确的 Three.js 状态。
- 在组件卸载后，useThree 钩子不再可用，因此避免在组件卸载后仍然尝试使用它。
- 当使用 useThree 钩子时，确保在组件的层次结构中有 Canvas 组件，因为 useThree 钩子需要依赖 Canvas 提供的 Three.js 上下文。

回调用法 useThree((state) => state)：

```jsx
import { useThree } from 'react-three-fiber';

const MyComponent = () => {
  const state = useThree((state) => state);

  // 在这里可以使用 state 对象来访问 Three.js 状态
  // ...

  return null;
};
```

回调方式的用法与直接使用 useThree 钩子类似，都能获取 Three.js 的实例和状态，只是在写法上有所不同。

state 对象属性：

|属性 |描述 |类型|
|---|---|---|
|gl| 渲染器 |THREE.WebGLRenderer|
|scene| 场景| THREE.Scene|
|camera| 相机| THREE.PerspectiveCamera
|raycaster| 默认射线投射器 |THREE.Raycaster
|pointer| 包含更新的、归一化的指针坐标 |THREE.Vector2
|mouse |注意：已弃用，请使用 pointer 代替！归一化的事件坐标 |THREE.Vector2
|clock| 运行系统时钟 |THREE.Clock
|linear| 当色彩空间为线性时 |布尔值
|flat |当未使用色调映射时 |布尔值
|legacy| 通过 THREE.ColorManagement 禁用全局颜色管理 |布尔值
|frameloop| 渲染模式：始终渲染、按需渲染、从不渲染 "always"、"demand"、"never"|
|performance| 系统性能回归 |{ current: 数值, min: 数值, max: 数值, debounce: 数值, regress: () => void } |-|
|size| 画布尺寸（像素） { width: 数值, height: 数值, top: 数值, left: 数值, updateStyle?: 布尔值 }| -|
|viewport| 在 Three.js 单位中的视口尺寸 { width: 数值, height: 数值, initialDpr: 数值, dpr: 数值, factor: 数值, distance: 数值, aspect: 数值, getCurrentViewport: (camera?: Camera, target?: THREE.Vector3, size?: Size) => Viewport } |-|
|xr| XR 接口，管理 WebXR 渲染 |{ connect: () => void, disconnect: () => void }|
|set| 允许您设置任何状态属性 `(state: SetState<RootState>)` => void| -|
|get |允许您非响应式地检索任何状态属性 `() => GetState<RootState>` |-|
|invalidate| 请求新的渲染，前提是 frameloop === 'demand' () => void| -|
|advance| 前进一帧，前提是 frameloop === 'never' (timestamp: 数值, runGlobalEffects?: 布尔值) => void |-|
|setSize| 调整画布大小 (width: 数值, height: 数值, updateStyle?: 布尔值, top?: 数值, left?: 数值) => void |-|
|setDpr| 设置像素比率 (dpr: 数值) |-|
|setFrameloop| 设置当前渲染模式的快捷方式 (frameloop?: 'always'、'demand'、'never') => void |-|
|setEvents| 设置事件层的快捷方式 `(events: Partial<EventManager<any>>)` => void |-|
|onPointerMissed| 对于未命中目标的指针点击的响应 () => void |-|
|events| 指针事件处理 { connected: TargetNode, handlers: Events, connect: (target: TargetNode) => void, disconnect: () => void } |-|

## useFrame

useFrame 是一个自定义钩子（Hook），它允许您在每一帧渲染时执行自定义的更新逻辑。使用 useFrame 钩子，您可以在 Three.js 场景渲染时对组件进行实时更新，实现动画、交互和其他复杂的场景效果。

### useFrame使用方法

在使用 useFrame 钩子时，只需在函数组件中调用它即可。它需要一个回调函数作为参数，这个回调函数将在每一帧渲染时被调用。

```jsx
import { useFrame } from 'react-three-fiber';

const MyComponent = () => {
  useFrame(() => {
    // 在这里可以编写每一帧渲染时的更新逻辑
    // ...
  });

  return null;
};
```

### useFrame注意事项

useFrame 钩子应该在 R3F 组件的函数体内部使用，不要在组件的顶层使用或在其他钩子的依赖数组中使用，这可能会导致无法正确调用回调函数。
当组件被卸载时，useFrame 钩子会自动停止渲染循环，并清理相应的资源。
在回调函数中进行复杂的计算或频繁地修改 Three.js 场景，可能会导致性能问题，建议避免过多的计算和渲染。
回调函数的属性：
在回调函数中，可以通过参数来获取有关渲染的一些信息，以便您根据实际需要进行更新。

```jsx
useFrame(({ gl, scene, camera, clock }) => {
  // gl: THREE.WebGLRenderer 实例，表示 Three.js 的渲染器
  // scene: THREE.Scene 实例，表示 Three.js 的场景
  // camera: THREE.Camera 实例，表示 Three.js 的相机
  // clock: THREE.Clock 实例，表示 Three.js 的时钟，用于获取当前时间和时间间隔
  // ...

  // 在这里可以根据渲染的状态进行更新逻辑
  // ...
});
```

使用这些属性，您可以在每一帧渲染时对 Three.js 场景进行实时更新。例如，您可以使用 clock 来实现基于时间的动画，使用 camera 和 scene 来实现相机和场景的交互等。
除了上述属性，回调函数还接收其他参数，如 size 和 viewport，它们提供了关于 Three.js 渲染尺寸和视口尺寸的信息。

```jsx
useFrame(({ size, viewport }) => {
  // size: 对象，表示 Three.js 的渲染尺寸，包含 width、height、top 和 left 属性
  // viewport: 对象，表示 Three.js 的视口尺寸，包含 width、height、initialDpr、dpr、factor、distance 和 aspect 属性
  // ...

  // 在这里可以根据渲染尺寸和视口尺寸进行更新逻辑
  // ...
});
```

使用这些属性，您可以根据渲染的尺寸和视口尺寸，实现响应式的场景更新，使您的 Three.js 应用适应不同的屏幕大小和设备。

#### 渲染排序

可以使用负指数（负帧数）来实现在组件渲染循环中进行更新的指定顺序。
R3F 中的 useFrame 钩子会在每一帧渲染时调用注册的回调函数。回调函数的执行顺序由其添加到组件的顺序决定，而负指数（负帧数）允许您通过调整回调函数的注册顺序来控制它们在渲染循环中的执行顺序。

例如，如果您有多个回调函数，并且希望某个回调函数在其他回调函数之前执行，可以为该回调函数使用较大的负指数。

使用方法：

```jsx
import { useFrame } from 'react-three-fiber';
const MyComponent = () => {
  useFrame(() => {
    // 在这里编写第一个回调函数的更新逻辑
    // ...
  });
  useFrame(() => {
    // 在这里编写第二个回调函数的更新逻辑
    // ...
  }, -1); // 使用负指数 -1 来确保第二个回调函数先于第一个回调函数执行
  return null;
};
```

在上面的示例中，我们使用了两个 useFrame 钩子，并在第二个钩子中传递了 -1 作为第二个参数。这将确保第二个回调函数在第一个回调函数之前执行。
请注意，负指数（负帧数）的数值越小，优先级越高。即使两个回调函数都使用了负指数，数值较小的回调函数会先于数值较大的回调函数执行。
使用负指数排序的 useFrame 钩子允许您更好地控制在组件的渲染循环中的更新顺序，以满足复杂场景下的特定需求。但请谨慎使用，确保您对回调函数之间的执行顺序有清晰的理解和设计。不恰当的回调顺序可能导致不稳定的行为或性能问题。

## useLoader

useLoader 是一个自定义钩子（Hook），它用于加载外部资源，例如模型、纹理、字体等，并在加载完成后将其应用于 Three.js 场景中的组件。useLoader 钩子简化了加载和使用外部资源的过程，使得在 R3F 中添加各种资源变得更加容易。

### 使用方法

在使用 useLoader 钩子时，您需要提供加载器（Loader）的类型以及所需资源的路径。加载器是用于加载资源的 Three.js 对象，根据需要加载模型、纹理、字体等资源，不同的资源类型需要使用不同的加载器。

```jsx
import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model() {
  const result = useLoader(GLTFLoader, '/model.glb')
  // You don't need to check for the presence of the result, when we're here
  // the result is guaranteed to be present since useLoader suspends the component
  return <primitive object={result.scene} />
}

function App() {
  return (
    <Suspense fallback={<FallbackComponent /> /* or null */}>
      <Model />
    </Suspense>
  )
}
```

#### Loader extensions

如果您需要配置加载程序，您可以提供回调作为第三个参数：

```jsx
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

useLoader(GLTFLoader, url, (loader) => {
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('/draco-gltf/')
  loader.setDRACOLoader(dracoLoader)
})
```

#### 一次加载多个资源

```jsx
const [bumpMap, specMap, normalMap] = useLoader(TextureLoader, [url1, url2, url2])
```

> 默认情况下，使用 useLoader 加载的资源会被缓存。给定的 url 用作缓存键。这允许您在组件树中的任何位置重用加载的数据。
> 更改或处置加载的资产时要非常小心，尤其是当您计划重新使用它们时。请参阅 API 中的自动处置部分。

#### 加载状态

您可以从作为第四个参数提供的回调中获取加载状态。尽管考虑像 THREE.DefaultLoadingManager 或更好的替代品，Drei 的加载助手。

```jsx
useLoader(loader, url, extensions, (xhr) => {
  console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
})
```

#### GLTFLoader

如果result.scene找到道具，钩子将自动创建一个对象和材质集合：{ nodes, materials }。这使您可以有选择地构建不可变的场景图。您还可以专门更改数据，而无需遍历它。GLTFJSX特别依赖于该数据。

```jsx
const { nodes, material } = useLoader(GLTFLoader, url)
```

#### 预加载资产

您可以在全局空间中预加载资源，以便在将模型安装到组件树中之前可以预先加载模型。

```jsx
useLoader.preload(GLTFLoader, '/model.glb' /*extensions*/)
```

### 注意事项

useLoader 钩子应该在 R3F 组件的函数体内部使用，不要在组件的顶层使用或在其他钩子的依赖数组中使用，这可能会导致无法正确加载资源。
加载资源是异步操作，因此确保在加载完成前不要尝试在组件中使用资源。
当组件被卸载时，useLoader 钩子会自动取消未完成的加载操作，并清理相应的资源。

回调函数的属性：
在 useLoader 钩子的回调函数中，可以使用第一个参数来访问加载完成的资源。回调函数将在资源加载完成后被调用，并将加载结果作为参数传递给回调函数。

```jsx
const texture = useLoader(TextureLoader, '/path/to/texture.png', (texture) => {
  // 在这里可以使用加载完成的 texture 资源
  // ...
});
```

除了加载的资源外，回调函数还可以接收其他参数，如加载的进度和错误信息。

```jsx
const texture = useLoader(TextureLoader, '/path/to/texture.png', (texture) => {
  // 在这里可以使用加载完成的 texture 资源
  // ...
}, (progressEvent) => {
  // 加载进度信息
  const progress = progressEvent.loaded / progressEvent.total;
}, (error) => {
  // 加载错误信息
  console.error('Error loading texture:', error);
});
```

通过使用回调函数的参数，您可以在加载资源时获取加载进度和错误信息，以便在加载过程中显示进度条或处理加载错误。这使得在 R3F 中加载外部资源更加灵活和可控。

## useGraph

```jsx
import { useLoader, useGraph } from '@react-three/fiber'

function Model(url) {
  const scene = useLoader(OBJLoader, url)
  const { nodes, materials } = useGraph(scene)
  return <mesh geometry={nodes.robot.geometry} material={materials.metal} />
}
```
