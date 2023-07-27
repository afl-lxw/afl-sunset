# Canvas

```jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'

const App = () => (
  <Canvas>
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  </Canvas>
)
```

## 属性
下面是以表格形式输出的 `Canvas` 组件的属性参数、作用和例子：

|属性名|作用|例子|
|---|---|---|
|children|添加 three.js JSX 元素或普通组件到场景|`<Canvas><mesh><boxBufferGeometry /><meshStandardMaterial /></mesh></Canvas>`|
|camera|传递给默认相机的属性，或者自定义 THREE.Camera 的属性|`<Canvas camera={customCamera}>{/* 添加场景内容 */}</Canvas>`|
|onCreated|当 `Canvas` 组件创建时触发的回调函数|`<Canvas onCreated={handleCanvasCreated}>{/* 添加场景内容 */}</Canvas>`|
|pixelRatio|渲染器的像素比例，控制渲染的清晰度|`<Canvas pixelRatio={window.devicePixelRatio}>{/* 添加场景内容 */}</Canvas>`|
|shadowMap|是否启用阴影映射|`<Canvas shadowMap>{/* 添加场景内容 */}</Canvas>`|
|gl2|是否使用 WebGL 2 渲染器|`<Canvas gl2>{/* 添加场景内容 */}</Canvas>`|
|concurrent|是否启用并发渲染|`<Canvas concurrent>{/* 添加场景内容 */}</Canvas>`|
|resize|是否启用自动调整大小|`<Canvas resize={false}>{/* 添加场景内容 */}</Canvas>`|
|style|设置 `Canvas` 组件的样式|`<Canvas style={{ width: '100vw', height: '100vh' }}>{/* 添加场景内容 */}</Canvas>`|
|gl|通过 `gl` 属性传递额外的属性给 WebGLRenderer|`<Canvas gl={{ powerPreference: 'high-performance' }}>{/* 添加场景内容 */}</Canvas>`|
|scene|添加自定义的 three.js 场景|`<Canvas scene={customScene}>{/* 添加场景内容 */}</Canvas>`|
|shadows|控制是否启用阴影效果|`<Canvas shadows>{/* 添加场景内容 */}</Canvas>`|
|raycaster|传递自定义的 raycaster，用于检测鼠标/触摸事件|`<Canvas raycaster={customRaycaster}>{/* 添加场景内容 */}</Canvas>`|
|frameloop|自定义帧循环函数，可以用于添加额外的渲染逻辑|`<Canvas frameloop={customFrameLoop}>{/* 添加场景内容 */}</Canvas>`|
|orthographic|是否使用正交相机进行渲染|`<Canvas orthographic>{/* 添加场景内容 */}</Canvas>`|
|dpr|设置渲染器的设备像素比例|`<Canvas dpr={2}>{/* 添加场景内容 */}</Canvas>`|
|legacy|是否使用传统的渲染器（WebGLRenderer），而不是默认的渲染器（ThreeFiber）|`<Canvas legacy>{/* 添加场景内容 */}</Canvas>`|
|linear|是否将渲染器的色彩空间设置为线性（linear）|`<Canvas linear>{/* 添加场景内容 */}</Canvas>`|
|events|控制是否启用鼠标/触摸事件|`<Canvas events>{/* 添加场景内容 */}</Canvas>`|
|eventSource|指定监听事件的 DOM 元素|`<Canvas eventSource={document}>{/* 添加场景内容 */}</Canvas>`|
|eventPrefix|指定监听事件的前缀，用于区分事件名|`<Canvas eventPrefix="myScene">{/* 添加场景内容 */}</Canvas>`|
|flat|设置渲染器是否使用 FlatShading 来绘制几何体|`<Canvas flat>{/* 添加场景内容 */}</Canvas>`|
|onPointerMissed|添加指针（鼠标/触摸）事件的监听器，当指针未命中任何物体时触发|`<Canvas onPointerMissed={handlePointerMissed}>{/* 添加场景内容 */}</Canvas>`|

通过使用上述属性，您可以配置和控制 `Canvas` 组件，实现自定义的 three.js 场景渲染和交互效果。

## 渲染默认值

Canvas 使用[createRoot](https://docs.pmnd.rs/react-three-fiber/api/canvas#createroot)它将`THREE.WebGLRenderer`使用以下构造函数参数创建一个半透明：

- antialias=true
- alpha=true
- powerPreference="high-performance"

并具有以下属性：

- outputColorSpace = THREE.SRGBColorSpace
- toneMapping = THREE.ACESFilmicToneMapping

它还将创建以下场景内部：

-  `THREE.Perspective` camera
-  `THREE.Orthographic` cam if `orthographic` is true
-  `THREE.PCFSoftShadowMap` if `shadows` is true
-  `THREE.Scene` (into which all the JSX is rendered) and a `THREE.Raycaster`

以上就是创建完之后附带的默认值项

