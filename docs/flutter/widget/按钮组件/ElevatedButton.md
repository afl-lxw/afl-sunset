# ElevatedButton

ElevatedButton 是 Flutter 中的一个按钮组件，它具有一些常用的属性和样式定制的能力。让我们一一讲解 ElevatedButton 的主要属性，并深入了解 ElevatedButton.styleFrom 中的各种样式配置。

ElevatedButton 主要属性：
onPressed（回调函数）：按钮点击时触发的事件，即处理按钮的点击操作。

```dart
ElevatedButton(
  onPressed: () {
    // 处理按钮点击事件
  },
  child: Text('Click Me'),
)
```

style（按钮样式）：用于定义按钮的外观样式，可以使用 ElevatedButton.styleFrom 函数进行配置。

```dart
ElevatedButton(
  onPressed: () {
    // 处理按钮点击事件
  },
  style: ElevatedButton.styleFrom(
    primary: Colors.blue, // 按钮背景色
    onPrimary: Colors.white, // 按钮文本颜色
    elevation: 8, // 阴影高度
  ),
  child: Text('Click Me'),
)
```

child（子组件）：定义按钮中的内容，通常是一个文本组件。

```dart
ElevatedButton(
  onPressed: () {
    // 处理按钮点击事件
  },
  child: Text('Click Me'),
)
```

ElevatedButton.styleFrom 属性：
ElevatedButton.styleFrom 函数提供了一种方便的方式来配置按钮的样式。以下是该函数支持的一些属性：

- primary（颜色）：按钮的主要颜色，通常表示按钮的背景色。
- onPrimary（颜色）：按钮的文本颜色，即按钮上的字体颜色。
- elevation（双精度浮点数）：按钮的阴影高度。
- textStyle（文本样式）：按钮中文本的样式，例如字体大小、粗细等。
- padding（内边距）：按钮的内边距，即按钮内容与按钮边缘的距离。
- minimumSize、fixedSize、maximumSize（尺寸）：按钮的最小、固定和最大尺寸。
- side（边框样式）：按钮的边框样式，可以设置边框的颜色、宽度等。
- shape（边框形状）：按钮的边框形状，例如圆角矩形。
- alignment（对齐方式）：按钮内容的对齐方式。
- visualDensity（视觉密度）：按钮的视觉密度，用于控制按钮的大小和内边距。
- tapTargetSize（点击目标大小）：按钮的点击目标大小。
- enableFeedback（反馈效果）：是否启用按钮点击时的反馈效果。
- animationDuration（动画持续时间）：按钮点击时的动画持续时间。

下面是一个使用 ElevatedButton.styleFrom 配置样式的例子：

```dart
ElevatedButton(
  onPressed: () {
    // 处理按钮点击事件
  },
  style: ElevatedButton.styleFrom(
    primary: Colors.green,
    onPrimary: Colors.white,
    elevation: 4,
    textStyle: TextStyle(fontSize: 18),
    padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(8),
    ),
  ),
  child: Text('Custom Style'),
)
```

通过这些属性，你可以轻松地自定义 ElevatedButton 的外观和样式，以满足你的设计需求。
