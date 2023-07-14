# three.js

## 介绍

首先要明白创建一个场景所具备的几个必要条件

- 场景(Scene)
- 相机(Camera)
- 渲染器(WebGLRenderer)

创建一个物体则需要

- 几何形状(Geometry)
- 材质(Material)
- 网状物(Mesh)

下面我会介绍上面每一项

### Scene

在Three.js中，`Scene`是用于管理和渲染3D场景的类。它包含了场景中的所有对象、光源和相机，并负责处理它们之间的交互。下面是关于`Scene`的一些重要信息：
类型：

- `Scene`：Three.js中的`Scene`类。

属性：

- `background`：场景的背景，可以是颜色、渐变或纹理。
- `fog`：场景中的雾效设置。
- `autoUpdate`：指示场景是否自动更新对象的矩阵变换。
- `overrideMaterial`：覆盖场景中所有对象的材质。

细节方法：

- `add(object)`：将对象添加到场景中。
- `remove(object)`：从场景中移除对象。
- `getObjectByName(name)`：通过名称获取场景中的对象。
- `traverse(callback)`：遍历场景中的所有子对象，并对每个对象应用回调函数。

### Camera

在Three.js中，`Camera`用于定义观察场景的视角和投影。它确定了场景中哪些对象会显示在渲染结果中。下面是关于`Camera`的一些重要信息：

类型：

- `PerspectiveCamera`：透视投影相机，用于创建透视效果的视角。
- `OrthographicCamera`：正交投影相机，用于创建无透视效果的平行视角。

属性：

- `position`：相机在世界坐标系中的位置。
- `rotation`：相机的旋转角度。
- `fov`（透视相机）：视场角，即相机视锥体的垂直视角。
- `zoom`（正交相机）：缩放比例。
- `near`：相机视锥体的近裁剪面。
- `far`：相机视锥体的远裁剪面。

细节方法：

- `lookAt(target)`：使相机对准指定的目标点。
- `updateProjectionMatrix()`：更新相机的投影矩阵。
- `worldToLocal(vector)`：将世界坐标系中的向量转换为相机本地坐标系中的向量。
- `localToWorld(vector)`：将相机本地坐标系中的向量转换为世界坐标系中的向量。

小技巧：

- 使用透视相机可以创建逼真的3D效果，而正交相机适用于2D或需要无透视效果的场景。
- `lookAt`方法可以将相机对准指定的目标点，使其面向该点。
- 调整相机的`near`和`far`属性可以控制渲染的可见范围，以提高性能。
- 使用`worldToLocal`和`localToWorld`方法可以在世界坐标系和相机本地坐标系之间进行坐标转换。

通过使用不同类型的相机，您可以选择适合您场景需求的投影方式，并通过设置属性和调用方法来控制相机的行为和视角。

### WebGLRenderer

在Three.js中，`WebGLRenderer`是用于渲染3D场景的主要渲染器。它使用WebGL技术将场景中的对象转换为可视化结果。下面是关于`WebGLRenderer`的一些重要信息：

类型：

- `WebGLRenderer`：Three.js中用于基于WebGL渲染3D场景的主要渲染器。

属性：

- `domElement`：渲染器的DOM元素，用于将渲染结果嵌入到网页中。
- `autoClear`：指示渲染器是否在渲染新帧之前自动清除之前的渲染结果。
- `shadowMap.enabled`：指示是否启用阴影映射。
- `toneMapping`：色调映射算法，用于调整渲染结果的颜色范围。

细节方法：

- `setSize(width, height)`：设置渲染器的输出大小。
- `render(scene, camera)`：渲染指定场景和相机的结果。
- `setClearColor(color, alpha)`：设置渲染器的清除颜色。
- `setPixelRatio(ratio)`：设置渲染器的设备像素比例。

小技巧：

- 使用`WebGLRenderer`的`domElement`属性，将渲染结果嵌入到HTML页面中的指定元素中。
- 在渲染新帧之前，可以选择手动清除之前的渲染结果，以在场景中实现叠加效果。
- 启用阴影映射可以在场景中创建逼真的阴影效果。
- 调整渲染器的`setSize`和`setPixelRatio`方法可以优化渲染结果的质量和性能。

通过使用`WebGLRenderer`，您可以将Three.js场景渲染为逼真的3D效果，并通过设置属性和调用方法来控制渲染器的行为和输出结果。

### Geometry

在Three.js中，有多个可用的Geometry类型，每个类型都用于描述不同的几何形状。以下是一些常见的可用Geometry类型的简要介绍：

1. `BoxGeometry`：用于创建立方体或长方体的几何形状。
2. `SphereGeometry`：用于创建球体的几何形状。
3. `CylinderGeometry`：用于创建圆柱体的几何形状。
4. `ConeGeometry`：用于创建圆锥体的几何形状。
5. `TorusGeometry`：用于创建圆环体的几何形状。
6. `PlaneGeometry`：用于创建平面的几何形状。
7. `TorusKnotGeometry`：用于创建环状结的几何形状。
8. `BufferGeometry`：用于创建自定义几何形状的高性能缓冲几何形状。

除了上述类型外，还有其他一些特定的几何形状类型可供使用，例如`TextGeometry`用于创建文本几何形状，`TubeGeometry`用于创建沿着路径的管状几何形状等。

请注意，Three.js还提供了`Geometry`类，它是用于创建自定义几何形状的基类。通过添加顶点、面和其他属性，可以使用`Geometry`类创建任意形状的几何体。

属性：

Three.js中的Geometry是用于描述3D对象的几何形状的类。它具有许多属性，包括：

1. `vertices`：一个包含所有顶点位置的数组。
2. `colors`：一个包含每个顶点颜色的数组。
3. `faces`：一个包含构成对象表面的面的数组。
4. `faceVertexUvs`：一个包含每个面的UV坐标的数组。
5. `lineDistances`：一个包含每个顶点之间距离的数组。
6. `morphTargets`：一个包含变形目标的数组，用于在动画中改变几何形状。
7. `morphNormals`：一个包含变形法线的数组，用于在动画中改变法线方向。
8. `skinWeights`：一个包含每个顶点的蒙皮权重的数组，用于骨骼动画。
9. `skinIndices`：一个包含每个顶点的蒙皮索引的数组，用于骨骼动画。
10. `boundingBox`：一个描述几何形状边界框的对象。
11. `boundingSphere`：一个描述几何形状边界球的对象。

这些属性提供了对几何形状的不同方面的访问和控制，以便创建和操作3D对象。

### Material

在Three.js中，`Material`是用于定义3D对象的外观和渲染方式的类。它决定了对象如何对光源和环境进行反射和折射。下面是关于`Material`的一些重要信息：

类型：

- `MeshBasicMaterial`：基本材质，不受光照影响，只显示颜色或纹理。
- `MeshLambertMaterial`：Lambert材质，根据光照产生漫反射效果。
- `MeshPhongMaterial`：Phong材质，根据光照产生镜面反射效果。
- `MeshStandardMaterial`：标准材质，结合漫反射、镜面反射和光照贴图等效果。
- `MeshPhysicalMaterial`：物理材质，用于模拟真实物体的光学特性。
- `ShaderMaterial`：着色器材质，通过自定义着色器程序定义材质外观。

属性：

- `color`：材质的颜色。
- `map`：材质的纹理贴图。
- `opacity`：材质的透明度。
- `transparent`：指示材质是否是透明的。
- `side`：材质的渲染面，可以是正面、背面或双面。

细节方法：

- `clone()`：克隆材质，创建一个新的材质实例。
- `dispose()`：释放材质占用的内存。
- `onBeforeCompile(shader)`：在编译着色器程序之前执行的回调函数。

小技巧：

- 使用不同类型的材质可以实现不同的渲染效果，如基本颜色、纹理、光照反射等。
- 调整材质的颜色、透明度和贴图可以改变对象的外观。
- 使用`clone`方法可以复制材质，并对副本进行修改，而不影响原始材质。
- 在不需要使用的材质时，使用`dispose`方法释放其占用的内存，以优化性能。

通过使用不同类型的`Material`，您可以根据需要定义对象的外观和渲染方式，并通过设置属性和调用方法来控制材质的行为和效果。

### Mesh

在Three.js中，`Mesh`是用于呈现3D对象的类。它结合了几何体(`Geometry`或`BufferGeometry`)和材质(`Material`)，定义了对象的外观和渲染方式。下面是关于`Mesh`的一些重要信息：

类型：

- `Mesh`：基本网格，用于呈现具有几何体和材质的3D对象。
- `SkinnedMesh`：蒙皮网格，用于呈现具有骨骼动画的3D对象。

属性：

- `geometry`：网格的几何体，定义对象的形状。
- `material`：网格的材质，定义对象的外观和渲染方式。
- `position`：网格在世界坐标系中的位置。
- `rotation`：网格的旋转角度。
- `scale`：网格的缩放比例。
- `visible`：指示网格是否可见。

细节方法：

- `clone()`：克隆网格，创建一个新的网格实例。
- `raycast(raycaster, intersects)`：执行射线投射与网格的碰撞检测。
- `updateMatrix()`：更新网格的变换矩阵。
- `dispose()`：释放网格占用的内存。

小技巧：

- 使用不同类型的几何体和材质可以创建不同形状和外观的网格。
- 调整网格的位置、旋转和缩放可以控制其在场景中的位置和大小。
- 使用`clone`方法可以复制网格，并对副本进行修改，而不影响原始网格。
- 在不需要使用的网格时，使用`dispose`方法释放其占用的内存，以优化性能。

通过使用`Mesh`，您可以将几何体和材质组合在一起，创建具有特定形状和外观的3D对象，并通过设置属性和调用方法来控制网格的行为和效果。

### 案例

下面拿官网的案例来展现一下

```javascript
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
 requestAnimationFrame( animate );

 cube.rotation.x += 0.01;
 cube.rotation.y += 0.01;

 renderer.render( scene, camera );
}

animate();
```
