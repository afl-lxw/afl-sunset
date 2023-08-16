# ColorFiltered

ColorFiltered 是 Flutter 中的一个组件，用于在子组件上应用颜色滤镜。通过使用 ColorFiltered，您可以对子组件应用不同的颜色效果，例如改变子组件的颜色、饱和度、亮度等。以下是 ColorFiltered 的详细介绍和用法示例：

## 属性

colorFilter：ColorFilter 类型，表示要应用的颜色滤镜。
ColorFilter 类型：

mode：BlendMode 枚举类型，用于指定滤镜的混合模式。
`colors：List<Color>` 类型，用于指定颜色的通道（红、绿、蓝、透明度）的倍数。
`matrix：List<double>` 类型，用于指定一个 5x4 的矩阵来应用颜色转换。

## 用法示例

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('ColorFiltered Example')),
        body: Center(child: ColorFilteredExample()),
      ),
    );
  }
}

class ColorFilteredExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ColorFiltered(
      colorFilter: ColorFilter.mode(
        Colors.blue, // 滤镜的颜色
        BlendMode.saturation, // 滤镜的混合模式
      ),
      child: Image.asset('assets/image.jpg'), // 替换为您的图片路径
    );
  }
}
```

在上述示例中，我们使用 ColorFiltered 将一张图片应用了颜色滤镜。我们指定了颜色为蓝色，混合模式为 BlendMode.saturation（饱和度模式）。您可以根据需求修改颜色和混合模式，以实现不同的颜色效果。

请注意，ColorFiltered 不会改变子组件的大小和布局，它仅会改变子组件的显示效果。
