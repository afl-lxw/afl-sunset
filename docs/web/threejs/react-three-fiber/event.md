# Event

three.js可以通过在对象上声明事件来与实现自己raycast方法（网格、线等）的对象进行交互。我们支持指针事件、点击和滚轮滚动。事件包含浏览器事件以及three.js事件数据（对象、点、距离等）。如果您担心的话，您可能需要对它们进行填充。

此外，onUpdate每次对象获得新道具时都会调用一个特殊的函数，这对于诸如self => (self.verticesNeedUpdate = true).
另请注意onPointerMissed画布元素上的 ，该元素会在未击中任何网格的单击时触发。

```jsx
<mesh
  onClick={(e) => console.log('click')}
  onContextMenu={(e) => console.log('context menu')}
  onDoubleClick={(e) => console.log('double click')}
  onWheel={(e) => console.log('wheel spins')}
  onPointerUp={(e) => console.log('up')}
  onPointerDown={(e) => console.log('down')}
  onPointerOver={(e) => console.log('over')}
  onPointerOut={(e) => console.log('out')}
  onPointerEnter={(e) => console.log('enter')} // see note 1
  onPointerLeave={(e) => console.log('leave')} // see note 1
  onPointerMove={(e) => console.log('move')}
  onPointerMissed={() => console.log('missed')}
  onUpdate={(self) => console.log('props have been updated')}
/>
```

事件数据

```jsx
({
  ...DomEvent                   // All the original event data
  ...Intersection                 // All of Three's intersection data - see note 2
  intersections: Intersection[]    // The first intersection of each intersected object
  object: Object3D              // The object that was actually hit
  eventObject: Object3D         // The object that registered the event
  unprojectedPoint: Vector3     // Camera-unprojected point
  ray: Ray                      // The ray that was used to strike the object
  camera: Camera                // The camera that was used in the raycaster
  sourceEvent: DomEvent         // A reference to the host event
  delta: number                 // Distance between mouse down and mouse up event in pixels
}) => ...
```

事件系统如何工作、冒泡和捕获
> pointerenter事件pointerleave的工作方式与pointerover 和pointerout 完全相同。 pointerenter并且pointerleave语义没有实现。
> 某些事件（例如）在和 射线pointerout之间没有相交时发生。eventObject发生这种情况时，该事件将包含先前事件与该对象的交集数据。

## 事件传播（冒泡）

传播的工作方式与 DOM 略有不同，因为对象在 3D 中可以相互遮挡。事件中的数组intersections包括与射线相交的所有对象，而不仅仅是最近的对象。仅包含与每个对象的第一个交集。事件首先传递到距离相机最近的对象，然后像在 DOM 中一样通过其祖先向上冒泡。之后，它被传递给下一个最近的对象，然后是它的祖先，依此类推。这意味着默认情况下对象对于指针事件是透明的，即使对象处理该事件也是如此。

event.stopPropagation()不仅阻止此事件冒泡，还阻止其传递到更远的对象（位于该事件后面的对象）。当指针位于该对象上方时，所有其他对象（无论较近还是较远）都不再算作被击中。如果它们之前被传递了pointerover 事件，那么它们将立即被传递pointerout 事件。如果你想让一个对象阻止来自它后面的对象的指针事件，它需要有一个事件处理程序，如下所示：

```jsx
onPointerOver={e => {
  e.stopPropagation()
  // ...
}}
```

即使您不希望该对象响应指针事件。如果您确实想像使用一样处理该事件stopPropagation()，请记住指针事件将在调用期间发生stopPropagation()。您可能希望其他事件处理在此之后发生。

## 指针捕获

由于事件会到达所有相交的对象，因此捕获指针的工作方式也有所不同。在 DOM 中，捕获对象取代了命中测试，但在 React Three Fiber 中，捕获对象被添加到命中测试结果中：如果捕获对象没有被命中，那么所有命中对象（及其祖先）都会获得首先是事件，然后是捕获对象及其祖先。捕获对象还可以使用，event.stopPropagation()以便真正被命中的对象获取指针事件。

请注意，您只能通过以下方式访问setPointerCapture和releasePointerCapture方法：它们不会添加到场景图中的实例中。event.targetObject3D

setPointerCapture并像在 DOM 中一样releasePointerCapture接受pointerId参数，但目前它们不支持多个活动指针。欢迎 PR！

```jsx
onPointerDown={e => {
  // Only the mesh closest to the camera will be processed
  e.stopPropagation()
  // You may optionally capture the target
  e.target.setPointerCapture(e.pointerId)
}}
onPointerUp={e => {
  e.stopPropagation()
  // Optionally release capture
  e.target.releasePointerCapture(e.pointerId)
}}
```

自定义事件设置
对于某些高级用法，可以使用eventson 属性全局自定义事件管理器的设置`<Canvas/>`：

```jsx
import { Canvas, events } from '@react-three/fiber'

const eventManagerFactory: Parameters<typeof Canvas>[0]['events'] = (state) => ({
  // Default configuration
  ...events(state),

  // Determines if the event layer is active
  enabled: true,

  // Event layer priority, higher prioritized layers come first and may stop(-propagate) lower layer
  priority: 1,

  // The filter can re-order or re-structure the intersections
  filter: (items: THREE.Intersection[], state: RootState) => items,

  // The compute defines how pointer events are translated into the raycaster and pointer vector2
  compute: (event: DomEvent, state: RootState, previous?: RootState) => {
    state.pointer.set((event.offsetX / state.size.width) *2 - 1, -(event.offsetY / state.size.height)* 2 + 1)
    state.raycaster.setFromCamera(state.pointer, state.camera)
  },

  // Find more configuration default on ./packages/fiber/src/web/events.ts
  // And type definitions in ./packages/fiber/src/core/events.ts
})

function App() {
  return (
    <Canvas events={eventManagerFactory}>
}
```

### 使用不同的目标元素

在某些情况下，您可能希望将事件处理程序连接到另一个 DOM 元素而不是画布。这样做通常是为了让事件发生在共享父级上，这样画布和 dom 覆盖层都可以接收事件。

您可以使用事件管理器：

```jsx
const events => useThree(state => state.events)
useEffect(() => {
  state.events.connect(domNode)
```

或者，eventSource画布上的快捷方式（仅限 DOM），它接受 dom 节点和 React.RefObjects 到 dom 节点。

```jsx
function App() {
  const target = useRef()
  return (
    <div ref={target}>
      <Canvas eventSource={target.current}>
```

使用不同的前缀（仅限 DOM）
默认情况下，Fiber 将使用 offsetX/offsetY 来设置光线投射器。您可以使用eventPrefix快捷方式更改此设置。

```tsx
function App() {
  return (
    <Canvas eventPrefix="client">
```

允许光线投射而无需用户交互
默认情况下，Fiber 仅在用户与画布交互时才会进行光线投射。例如，如果相机将可悬停对象移动到光标下方，则不会触发悬停事件。如果这是想要的行为，您可以通过执行强制光线投射update()，并在必要时调用它。

```tsx
const events => useThree(state => state.events)
useEffect(() => {
  // Will trigger a onPointerMove with the last-known pointer event
  state.events.update()
```

您可以将其抽象为更复杂的逻辑。

```tsx
function RaycastWhenCameraMoves() {
  const matrix = new THREE.Matrix4()
  useFrame((state) => {
    // Act only when the camera has moved
    if (!matrix.equals(state.camera.matrixWorld)) {
      state.events.update()
      matrix.copy(state.camera.matrixWorld)
    }
  })
}
```
