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
        body: Column(
          children:[
            Image(
              image: NetworkImage(
                  "https://avatars2.githubusercontent.com/u/20411648?s=460&v=4"),
              width: 100.0,
            ),
            Image.network(
              '<https://via.placeholder.com/200>',
              width: 150,
              height: 150,
              fit: BoxFit.cover,
            ),
            Image(
              image: AssetImage("images/avatar.png"),
              width: 100.0
            ),
            Image.asset("images/avatar.png",
              width: 100.0,
            )
          ] 
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

## ICON

> Icon是Flutter中的一个小部件，用于显示矢量图标。它可以显示Material Design图标、自定义图标和系统字体图标。Icon通常用作按钮、导航栏、标签栏等界面元素的图标展示。

### 属性

```dart
Icon(
  IconData codePoint, // 图标的代码点
  {
    Key? key,
    double size = 24.0, // 图标的大小，默认为24.0
    Color? color, // 图标的颜色
    String? semanticLabel, // 图标的语义标签，用于辅助技术
    TextDirection? textDirection, // 图标的文本方向，默认为从左到右
  }
)
```

#### 属性及功能

1. codePoint（IconData）：指定要显示的图标的数据。可以使用Flutter提供的Icons类中的常量来表示Material Design图标，也可以使用自定义图标字体的代码点（codePoint）。

功能：用于指定要显示的图标。

示例：

```dart
Icon(
  Icons.favorite, // 使用Material Design图标
  color: Colors.red, // 图标颜色
)

Icon(
  IconData(0xe900, fontFamily: 'MyCustomFont'), // 使用自定义图标字体
  color: Colors.blue, // 图标颜色
)
```

2.size（double）：指定图标的大小。默认为24。

功能：控制图标的大小。

示例：

```dart
Icon(
  Icons.home,
  size: 36,
)
```

3.color（Color）：设置图标的颜色。可以用于改变图标的颜色。

功能：控制图标的颜色。

示例：

```dart
Icon(
  Icons.favorite,
  color: Colors.red,
)
```

4.semanticLabel（String）：设置图标的语义标签，用于辅助技术识别图标。

功能：提供图标的语义信息，用于无障碍支持。

示例：

```dart
Icon(
  Icons.settings,
  semanticLabel: 'Settings',
)
```

5.textDirection（TextDirection）：设置图标的文本方向。默认为从左到右（TextDirection.ltr）。

功能：控制图标的文本方向。

示例：

```dart
Icon(
  Icons.arrow_back,
  textDirection: TextDirection.rtl,
)
```

### 注意事项

- 使用Icon时，需要确保使用正确的IconData表示要显示的图标。可以在Icons类中查找要使用的Material Design图标。
- 如果要使用自定义图标字体，需要先在pubspec.yaml文件中声明字体资源，并使用FontFamily和IconData创建自定义图标。
- 图标的大小和颜色可以根据设计需求进行调整，但要注意不要过度调整，以免影响用户体验和视觉效果。
- 在使用Icon时，要注意与文本一起使用时的布局问题，以确保图标和文本之间的间距和对齐是合适的。可以使用Row、Column、Stack等布局小部件来组合图标和文本。
- 考虑到不同设备的分辨率和屏幕尺寸，图标的大小应该适配不同的屏幕。可以根据设备的屏幕密度来设置图标的大小，或者使用相对大小的单位（如dp、sp）来指定图标的大小。
