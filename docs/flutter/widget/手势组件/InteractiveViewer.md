# InteractiveViewer

> 在 Flutter 中，InteractiveViewer 是一个用于支持用户交互式缩放、平移和旋转的小部件。它允许用户对子部件进行手势操作，从而实现对大型、可滚动或可变换的内容进行交互式探索。

## 属性

以下是 InteractiveViewer 的一些常用属性

- child: 放置在 InteractiveViewer 中的子部件。
- transformationController: 控制变换的控制器，可以用于实现手动控制缩放、平移和旋转。
- boundaryMargin: 子部件到边界的最小间距。
- minScale: 允许的最小缩放比例。
- maxScale: 允许的最大缩放比例。
- scaleEnabled: 是否启用缩放。
- panEnabled: 是否启用平移。
- boundaryMargin: 子部件到边界的最小间距。
- constrained: 是否受父部件约束。
- clipBehavior: 裁剪行为。

## 功能

- 支持用户通过手势缩放、平移和旋转子部件。
- 可以在用户进行手势操作时提供反馈效果，例如拖动边界反馈。

## 用法

- InteractiveViewer 可以包裹需要支持交互式缩放、平移和旋转的子部件，例如图片、地图等。

## 使用场景

- 在大图像、地图等内容上实现缩放、平移和旋转的交互。
- 在用户可以探索可变换内容的场景中使用，如手绘图、可视化数据等。

## 注意事项

- 在一些场景下，需要设置 transformationController 控制器来实现手动控制缩放、平移和旋转。
- 当 InteractiveViewer 嵌套在其他可滚动小部件中时，可能会与其他滚动手势产生冲突。

## 示例

以下示例演示了如何使用 InteractiveViewer 支持用户对图片进行缩放、平移和旋转操作

```dart
InteractiveViewer(
  boundaryMargin: EdgeInsets.all(20), // 子部件到边界的最小间距
  minScale: 0.1, // 最小缩放比例
  maxScale: 2.0, // 最大缩放比例
  scaleEnabled: true, // 启用缩放
  panEnabled: true, // 启用平移
  child: Image.asset('assets/image.jpg'), // 放置在InteractiveViewer中的子部件
)
```

在上面的示例中，用户可以通过手势对图片进行缩放、平移和旋转，同时限制了缩放和平移的范围。
