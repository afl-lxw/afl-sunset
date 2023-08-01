# Image、Text、Icon

## Image

Image是Flutter中用于显示图片的小部件，它可以加载网络图片、本地图片或者内存中的图片，并根据需要调整大小。Image支持多种图片格式，包括PNG、JPEG、GIF、WebP等。下面是Image的常用属性及其功能：

```dart
  const Image({
    super.key,
    required this.image,
    this.frameBuilder,
    this.loadingBuilder,
    this.errorBuilder,
    this.semanticLabel,
    this.excludeFromSemantics = false,
    this.width,
    this.height,
    this.color,
    this.opacity,
    this.colorBlendMode,
    this.fit,
    this.alignment = Alignment.center,
    this.repeat = ImageRepeat.noRepeat,
    this.centerSlice,
    this.matchTextDirection = false,
    this.gaplessPlayback = false,
    this.isAntiAlias = false,
    this.filterQuality = FilterQuality.low,
  })
```

- image（ImageProvider）：用于指定要显示的图片。可以是NetworkImage用于加载网络图片，AssetImage用于加载本地资源图片，FileImage用于加载本地文件图片，还可以是其他ImageProvider的子类。
- width（double）：设置图片的宽度。
- height（double）：设置图片的高度。
- fit（BoxFit）：控制图片在容器中的展示方式。常见的值有BoxFit.contain（保持图片比例，将图片放在容器内，不裁剪，可能留有空白）、BoxFit.cover（保持图片比例，将图片铺满容器，可能裁剪）、BoxFit.fill（拉伸图片以填充整个容器）、BoxFit.fitWidth（保持图片宽度和容器宽度一致，可能裁剪）等。
- alignment（AlignmentGeometry）：控制图片在容器中的对齐方式。
- color（Color）：对图片应用颜色混合，实现颜色过滤。
- colorBlendMode（BlendMode）：设置颜色混合模式，用于调整color属性的应用方式。
- repeat（ImageRepeat）：设置图片的重复方式。常见的值有ImageRepeat.noRepeat（不重复）、ImageRepeat.repeat（横向和纵向都重复）、ImageRepeat.repeatX（横向重复）、ImageRepeat.repeatY（纵向重复）。
- frameBuilder：一个回调函数，用于在图片加载过程中构建帧布局。
- loadingBuilder：一个回调函数，用于在图片加载过程中构建加载中的布局。
- errorBuilder：一个回调函数，用于在图片加载失败时构建错误提示的布局。

下面是一个示例代码，演示了Image的用法和部分属性：

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
        appBar: AppBar(title: Text('Image Example')),
        body: Center(
          child: Image.network(
            '<https://via.placeholder.com/200>',
            width: 150,
            height: 150,
            fit: BoxFit.cover,
          ),
        ),
      ),
    );
  }
}
```

在上面的示例中，我们使用Image.network来加载网络图片，并设置了图片的宽度和高度为150，并且使用BoxFit.cover来保持图片比例并铺满容器。

注意事项：

- 使用Image加载网络图片时，要确保设备可以访问网络，否则图片将无法加载。
- 当加载大量图片时，注意内存的使用，以避免内存溢出的问题。可以使用ImageProvider的缓存功能来优化图片加载。
- 对于本地图片，需要先在pubspec.yaml文件中声明图片资源，然后使用AssetImage加载。加载本地图片时，确保图片路径是正确的。
- 当图片加载失败时，可以使用errorBuilder属性来展示错误提示或替代图片。
- 图片在不同设备上可能会因为分辨率的不同而显示效果不同，可以使用Image.asset的scale属性来控制图片的显示比例。
