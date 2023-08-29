# ThreeJS库

## React

**以下基本上都是围绕着three-fiber的生态**
There is a vibrant and extensive eco system around three-fiber, full of libraries, helpers and abstractions.

- [`@react-three/drei`](https://github.com/pmndrs/drei) – 提供一些有用的帮助工具，这是一个功能丰富的生态系统。
- [`@react-three/gltfjsx`](https://github.com/pmndrs/gltfjsx) –将GLTF模型转换为JSX组件，方便在React中使用GLTF模型。
- [`@react-three/postprocessing`](https://github.com/pmndrs/react-postprocessing) – 提供后处理效果，可以在渲染完成后对场景进行后处理，实现各种特效。
- [`@react-three/test-renderer`](https://github.com/pmndrs/react-three-fiber/tree/master/packages/test-renderer) – 用于在Node.js中进行单元测试的工具。
- [`@react-three/flex`](https://github.com/pmndrs/react-three-flex) – 为`react-three-fiber`提供了Flexbox布局功能，方便在Three.js场景中进行灵活的布局。
- [`@react-three/xr`](https://github.com/pmndrs/react-xr) – 提供VR/AR控制器和事件的功能，方便在Three.js中实现虚拟现实和增强现实应用。
- [`@react-three/csg`](https://github.com/pmndrs/react-three-csg) – 提供了用于构造实体几何的功能，可以进行实体几何的合并、相交等操作。
- [`@react-three/rapier`](https://github.com/pmndrs/react-three-rapier) – 使用Rapier实现的3D物理引擎，可以在Three.js场景中添加物理效果。
- [`@react-three/cannon`](https://github.com/pmndrs/use-cannon) – 使用Cannon实现的3D物理引擎，同样可以在Three.js场景中添加物理效果。
- [`@react-three/p2`](https://github.com/pmndrs/use-p2) –使用P2实现的2D物理引擎，方便在Three.js中实现2D物理效果。
- [`@react-three/a11y`](https://github.com/pmndrs/react-three-a11y) – 为Three.js场景提供真实的辅助功能，使得Three.js应用更加可访问。
- [`@react-three/gpu-pathtracer`](https://github.com/pmndrs/react-three-gpu-pathtracer) – 实现逼真的光线追踪效果的GPU加速路径追踪库。
- [`create-r3f-app next`](https://github.com/pmndrs/react-three-next) – 基于Next.js的React Three.js应用的脚手架模板。
- [`lamina`](https://github.com/pmndrs/lamina) – 基于图层的着色器材质库，用于实现复杂的图层材质效果。
- [`zustand`](https://github.com/pmndrs/zustand) –基于Flux架构的状态管理库，方便管理React应用的状态。
- [`jotai`](https://github.com/pmndrs/jotai) – 基于Atoms的状态管理库，可以更简单地管理React应用的状态。
- [`valtio`](https://github.com/pmndrs/valtio) – 基于Proxy的状态管理库，可以方便地管理React应用的状态。
- [`react-spring`](https://github.com/pmndrs/react-spring) – 基于弹簧物理效果的动画库，可以实现流畅的动画效果。
- [`framer-motion-3d`](https://www.framer.com/docs/three-introduction/) –流行的动画库Framer Motion在Three.js中的应用。
- [`use-gesture`](https://github.com/pmndrs/react-use-gesture) –用于处理鼠标/触摸手势的库，方便实现交互效果。
- [`leva`](https://github.com/pmndrs/leva) – 用于在几秒钟内创建GUI控件的库，方便调试和交互。
- [`maath`](https://github.com/pmndrs/maath) – 系列数学辅助工具的集合，方便在Three.js应用中进行数学计算。
- [`miniplex`](https://github.com/hmans/miniplex) – 实体管理系统，方便在Three.js应用中管理实体对象。
- [`composer-suite`](https://github.com/hmans/composer-suite) – 用于组合着色器、粒子效果和游戏机制的库，可以实现复杂的场

## Vue

Vue 生态系统中也有一些类似的库和插件，以下是其中一些常用的库及其作用：

-[`vue-gltf`](https://github.com/n5ro/vue-gltf)：用于将GLTF模型转换为Vue组件，方便在Vue应用中使用GLTF模型。
-[`vue-postprocessing`](https://github.com/posva/vue-postprocessing)：提供Vue组件化的后处理效果，可以在渲染完成后对场景进行后处理，实现各种特效。
-[`vue-test-utils`](https://github.com/vuejs/vue-test-utils)：用于在Vue应用中进行单元测试的工具，可以帮助测试Vue组件的行为和渲染结果。
-[`vue-flexboxgrid`](https://github.com/nathanielmahieu/vue-flexboxgrid)：为Vue应用提供Flexbox布局功能，方便在Vue应用中进行灵活的布局。
-[`vue-xr`](https://github.com/MozillaReality/vue-xr)：提供VR/AR控制器和事件的功能，方便在Vue应用中实现虚拟现实和增强现实应用。
-[`vue-three-csg`](https://github.com/codrops/vue-three-csg)：提供了用于构造实体几何的功能，可以进行实体几何的合并、相交等操作。
-[`vue-physics`](https://github.com/scottbedard/vue-physics)：提供了物理引擎的功能，方便在Vue应用中添加物理效果。
-[`vue-a11y`](https://github.com/vue-a11y/vue-a11y)：为Vue应用提供真实的辅助功能，使得Vue应用更加可访问。
-[`vue-gpu-pathtracer`](https://github.com/fzwoch/vue-gpu-pathtracer)：实现逼真的光线追踪效果的GPU加速路径追踪库。
-[`vue-math`](https://github.com/okvue/vue-math)：一系列数学辅助工具的集合，方便在Vue应用中进行数学计算。
-[`vue-ecs`](https://github.com/hmans/vue-ecs)：实体管理系统，方便在Vue应用中管理实体对象。
-[`vue-composer`](https://github.com/hmans/vue-composer)：用于组合着色器、粒子效果和游戏机制的库，可以实现复杂的场景。

## JS

-[Cesium](https://cesium.com/)
