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
