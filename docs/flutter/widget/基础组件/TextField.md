# TextField

## 用法

```dart
  const TextField({
    super.key,
    // 控制器，用于获取或设置文本内容，以及监听文本变化事件
  this.controller,
  // 一个焦点节点，用于管理输入框的焦点状态
  this.focusNode,
  // 输入框的装饰，包括提示文本、边框、背景等
  this.decoration = const InputDecoration(),
  // 设置键盘的类型，如数字键盘、邮箱键盘、电话键盘等 text multiline number phone datetime emailAddress url
  TextInputType? keyboardType,
  // 设置输入动作，如 "done"、"search" 等
  this.textInputAction,
  // 设置输入文本的大小写处理方式
  this.textCapitalization = TextCapitalization.none,
  // 文本样式，包括字体、颜色、大小等
  this.style,
  // 用于设置基线对齐的文本样式
  this.strutStyle,
  // 设置文本在输入框内的对齐方式
  this.textAlign = TextAlign.start,
  // 设置垂直方向上的文本对齐方式
  this.textAlignVertical,
  // 设置文本的方向
  this.textDirection,
  // 是否只读，设置为 true 时，文本不可编辑
  this.readOnly = false,
  // 是否显示光标
  this.showCursor,
  // 是否自动获取焦点
  this.autofocus = false,
  // 用于替代密码输入框中的隐藏字符
  this.obscuringCharacter = '•',
  // 是否隐藏输入内容，通常用于密码输入框
  this.obscureText = false,
  // 是否自动纠正输入内容
  this.autocorrect = true,
  // 是否启用输入建议
  this.enableSuggestions = true,
  // 最大行数
  this.maxLines = 1,
  // 最小行数
  this.minLines,
  // 是否随着内容自动扩展高度
  this.expands = false,
  // 最大长度
  this.maxLength,
  // 最大长度的强制方式
  this.maxLengthEnforcement,
  // 文本变化事件回调
  this.onChanged,
  // 编辑完成事件回调
  this.onEditingComplete,
  // 提交事件回调
  this.onSubmitted,
  // 输入格式化器列表
  this.inputFormatters,
  // 是否启用输入框
  this.enabled,
  // 光标宽度
  this.cursorWidth = 2.0,
  // 光标高度
  this.cursorHeight,
  // 光标圆角半径
  this.cursorRadius,
  // 光标颜色
  this.cursorColor,
  // 选择区域的高度样式
  this.selectionHeightStyle = ui.BoxHeightStyle.tight,
  // 选择区域的宽度样式
  this.selectionWidthStyle = ui.BoxWidthStyle.tight,
  // 键盘外观
  this.keyboardAppearance,
  // 滚动填充区域
  this.scrollPadding = const EdgeInsets.all(20.0),
  // 拖动开始行为
  this.dragStartBehavior = DragStartBehavior.start,
  // 是否启用交互式选择
  bool? enableInteractiveSelection,
  // 选择控件
  this.selectionControls,
  // 点击事件回调
  this.onTap,
  // 鼠标光标
  this.mouseCursor,
  // 构建输入框计数器部件的回调
  this.buildCounter,
  // 滚动控制器
  this.scrollController,
  // 滚动物理效果
  this.scrollPhysics,
  // 自动填充提示
  this.autofillHints = const <String>[],
  // 剪裁行为
  this.clipBehavior = Clip.hardEdge,
  // 用于恢复状态的 ID
  this.restorationId,
  // 是否启用涂鸦输入
  this.scribbleEnabled = true,
  // 是否启用输入法个性化学习
  this.enableIMEPersonalizedLearning = true,
  })
```

## 注意事项

当需要监听文本变化时，可以使用 controller 的 addListener 方法，而不仅仅是使用 onChanged 回调。
考虑用户体验，在设置 obscureText 时要谨慎，避免误操作。
在移动设备上，键盘弹出时可能会遮挡输入框，可以使用 ListView、SingleChildScrollView 等容器来确保输入框在键盘弹出时也能正常显示。

## 示例

以下是一个示例，展示如何使用 TextField 创建一个简单的文本输入框：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyTextFieldPage(),
    );
  }
}

class MyTextFieldPage extends StatefulWidget {
  @override
  _MyTextFieldPageState createState() =>_MyTextFieldPageState();
}

class _MyTextFieldPageState extends State<MyTextFieldPage> {
  final TextEditingController myController = TextEditingController();

  @override
  void dispose() {
    myController.dispose(); // 释放控制器
    super.dispose();
  }

  @override
  void initState() {
    //监听输入改变  
    myController.addListener((){
      print(myController.text);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('TextField Example'),
      ),
      body: Center(
        child: TextField(
          controller: myController,
          decoration: InputDecoration(
            hintText: 'Enter your text',
          ),
          // onChanged 监听文本
          onChanged: (v) {
            print("onChange: $v");
          }
        ),
      ),
    );
  }
}
```

在这个示例中，我们使用 TextField 创建了一个简单的文本输入框，用户可以在输入框中输入文本。我们还创建了一个 TextEditingController 来监听文本变化事件，并在 dispose 方法中释放控制器，以避免内存泄漏。
两种方式相比，onChanged是专门用于监听文本变化，而controller的功能却多一些，除了能监听文本变化外，它还可以设置默认值、选择文本
