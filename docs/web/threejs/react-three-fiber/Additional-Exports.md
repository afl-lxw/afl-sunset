# Additional Exports

在 React Three Fiber（R3F）中，Additional Exports 是一组额外导出的功能和组件，它们提供了更多的功能和选项，使您能够更灵活地控制和定制您的 Three.js 场景和组件。

以下是一些常见的 Additional Exports，它们为您提供了更多的功能和选项：

- useGraph：这是一个自定义钩子（Hook），用于获取场景（Scene）中的节点和材质。通过 useGraph，您可以访问加载的 3D 模型的节点和材质，以便进一步操作和定制。

- extend：这是一个函数，用于扩展 Three.js 的内置类或组件。通过 extend，您可以为 Three.js 的对象添加自定义属性和方法，从而实现更高级的功能。

- animated：这是一个高阶组件（HOC），用于创建支持动画的 Three.js 组件。通过 animated，您可以在 Three.js 场景中轻松地添加动画效果，例如平移、旋转、缩放等。

- applyProps：这是一个函数，用于应用属性到 Three.js 组件。通过 applyProps，您可以将 React 组件的属性应用到 Three.js 组件，实现属性的同步更新。

- useFrame：这是一个自定义钩子（Hook），用于在每一帧渲染时执行自定义的更新逻辑。通过 useFrame，您可以实现动画、交互和其他复杂的场景效果。

- useGLTF：这是一个自定义钩子（Hook），用于加载 GLTF 格式的 3D 模型，并返回场景和模型的数据。通过 useGLTF，您可以轻松地加载和使用 GLTF 格式的模型。

注意事项：

- Additional Exports 提供了更多的灵活性和功能，但也需要谨慎使用。确保您理解每个功能的用途和使用方式，以避免出现不必要的问题或性能问题。

- 在使用 Additional Exports 时，确保您已经正确导入相应的功能和组件。例如，useGraph 和 useGLTF 需要从正确的模块导入，而不是从 react-three-fiber 模块导入。

- 某些 Additional Exports 可能涉及高级 Three.js 和 React Three Fiber 的概念，如动画、组件定制等。确保您已经对 Three.js 和 R3F 有一定的了解，以便更好地使用这些功能。

回调函数的属性：

Additional Exports 中的一些钩子，例如 useFrame 和 useGLTF，可能接收回调函数作为参数，用于获取额外的信息或执行定制逻辑。

回调函数的具体属性和用法取决于每个钩子的实现。例如，在 useFrame 中，回调函数接收一个参数，用于获取渲染器、场景、相机等 Three.js 实例，以及渲染的尺寸和视口信息。

在使用 Additional Exports 中的钩子时，请查阅相关文档或源代码，了解每个回调函数的属性和用法，以便正确地使用它们并实现所需的功能
