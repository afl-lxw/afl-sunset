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

`InputDecoration` 属性如下

```dart
const InputDecoration(
  // 输入框前面显示的图标
  icon: Icon(Icons.person),
  // 图标的颜色
  iconColor: Colors.blue,
  // 整个输入框的标签
  label: Text('Full Name'),
  // 标签的文本内容
  labelText: 'Full Name',
  // 标签的样式
  labelStyle: TextStyle(color: Colors.green),
  // 浮动标签的样式
  floatingLabelStyle: TextStyle(color: Colors.orange),
  // 输入框的帮助文本
  helperText: 'Please enter your full name',
  // 帮助文本的样式
  helperStyle: TextStyle(color: Colors.grey),
  // 帮助文本的最大行数
  helperMaxLines: 2,
  // 输入框中的提示文本
  hintText: 'John Doe',
  // 提示文本的样式
  hintStyle: TextStyle(color: Colors.grey),
  // 提示文本的方向
  hintTextDirection: TextDirection.ltr,
  // 提示文本的最大行数
  hintMaxLines: 1,
  // 输入框的错误文本
  errorText: 'Please enter a valid name',
  // 错误文本的样式
  errorStyle: TextStyle(color: Colors.red),
  // 错误文本的最大行数
  errorMaxLines: 1,
  // 浮动标签的显示行为
  floatingLabelBehavior: FloatingLabelBehavior.auto,
  // 浮动标签的对齐方式
  floatingLabelAlignment: Alignment.center,
  // 是否将输入框的高度收缩为单行的高度
  isCollapsed: false,
  // 是否将输入框设置为紧凑模式
  isDense: false,
  // 输入框的内边距
  contentPadding: EdgeInsets.all(8),
  // 输入框前缀的图标
  prefixIcon: Icon(Icons.person),
  // 输入框前缀的约束
  prefixIconConstraints: BoxConstraints.tightFor(height: 20),
  // 输入框前缀的小部件
  prefix: Text('Name:'),
  // 输入框前缀的文本内容
  prefixText: 'Name:',
  // 前缀文本的样式
  prefixStyle: TextStyle(fontWeight: FontWeight.bold),
  // 前缀图标的颜色
  prefixIconColor: Colors.blue,
  // 输入框后缀的图标
  suffixIcon: Icon(Icons.check),
  // 输入框后缀的小部件
  suffix: Text('Verified'),
  // 输入框后缀的文本内容
  suffixText: 'Verified',
  // 后缀文本的样式
  suffixStyle: TextStyle(color: Colors.green),
  // 后缀图标的颜色
  suffixIconColor: Colors.green,
  // 输入框的计数器小部件
  counter: Text('0/50'),
  // 输入框的计数器文本内容
  counterText: '0/50',
  // 计数器文本的样式
  counterStyle: TextStyle(color: Colors.grey),
  // 是否为输入框提供填充背景
  filled: true,
  // 填充背景的颜色
  fillColor: Colors.grey[200],
  // 输入框获取焦点时的颜色
  focusColor: Colors.blue,
  // 鼠标悬停在输入框上方时的颜色
  hoverColor: Colors.blue[100],
  // 输入框在出现错误时的边框样式
  errorBorder: UnderlineInputBorder(
    borderSide: BorderSide(color: Colors.red),
  ),
  // 输入框在获取焦点时的边框样式
  focusedBorder: UnderlineInputBorder(
    borderSide: BorderSide(color: Colors.blue),
  ),
  // 输入框在获取焦点且出现错误时的边框样式
  focusedErrorBorder: UnderlineInputBorder(
    borderSide: BorderSide(color: Colors.red),
  ),
  // 输入框禁用时的边框样式
  disabledBorder: UnderlineInputBorder(
    borderSide: BorderSide(color: Colors.grey),
  ),
  // 输入框启用时的边框样式
  enabledBorder: UnderlineInputBorder(
    borderSide: BorderSide(color: Colors.grey),
  ),
  // 输入框默认的边框样式
  border: UnderlineInputBorder(),
  // 是否启用输入框
  enabled: true,
  // 用于辅助技术的计数器文本
  semanticCounterText: 'characters',
  // 是否将标签与提示文本对齐
  alignLabelWithHint: false,
  // 输入框的约束
  constraints: BoxConstraints(maxHeight: 100),
)
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
