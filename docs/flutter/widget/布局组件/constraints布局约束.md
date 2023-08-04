# constraints 布局约束

## Flutter布局模型

Flutter 中有两种布局模型：

- 基于 RenderBox 的盒模型布局。
- 基于 Sliver ( RenderSliver ) 按需加载列表布局。

两种布局方式在细节上略有差异，但大体流程相同，布局流程如下：

1. 上层组件向下层组件传递约束（constraints）条件。
2. 下层组件确定自己的大小，然后告诉上层组件。注意下层组件的大小必须符合父组件的约束。
3. 上层组件确定下层组件相对于自身的偏移和确定自身的大小（大多数情况下会根据子组件的大小来确定自身的大小）。

比如，父组件传递给子组件的约束是“最大宽高不能超过100，最小宽高为0”，如果我们给子组件设置宽高都为200，则子组件最终的大小是100*100，因为任何时候子组件都必须先遵守父组件的约束，在此基础上再应用子组件约束（相当于父组件的约束和自身的大小求一个交集）。

本节我们主要看一下盒模型布局，然后会在可滚动组件一章中介绍 Sliver 布局模型。盒模型布局组件有两个特点：

1. 组件对应的渲染对象都继承自 RenderBox 类。在本书后面文章中如果提到某个组件是 RenderBox，则指它是基于盒模型布局的，而不是说组件是 RenderBox 类的实例。
2. 在布局过程中父级传递给子级的约束信息由 BoxConstraints 描述

## BoxConstraints

在 Flutter 中，BoxConstraints 是一个类，用于定义尺寸的约束条件 ，通过 constraints，可以确保小部件在不同的布局情况下得到适当的大小。
constraints 是一种用于限制小部件大小的机制。它定义了小部件在可用空间内的最大和最小尺寸范围。
在使用 Flutter 构建布局时，常常需要控制小部件的大小，以适应不同的屏幕尺寸和布局需求。
constraints 可以帮助实现这种控制。例如，可以使用 constraints 来确保一个容器小部件不会超出指定的最大宽度和高度，或者确保一个文本小部件不会过于宽广而导致溢出。

**以下是一个简单的示例，演示如何使用 constraints 来控制小部件的大小*

```dart
Container(
  constraints: BoxConstraints(
    minWidth: 100,
    maxWidth: 200,
    minHeight: 50,
    maxHeight: 100,
  ),
  child: Text(
    'This is a constrained text widget.',
    style: TextStyle(fontSize: 16),
  ),
)
```

> constraints 的设置通常应该考虑到父级容器的约束。如果父级容器的约束不允许设置的 constraints 生效，可能会出现不符合预期的结果。
> constraints 只是影响小部件大小的一种工具，同时也会受到其他因素的影响，如小部件的内容、布局算法等。

总之，constraints 是用于控制小部件大小的一种机制，通过设置最大最小宽高限制来实现。在布局设计中，它可以帮助确保小部件在各种情况下都能够得到适当的大小。

## ConstrainedBox

ConstrainedBox用于对子组件添加额外的约束。例如，如果你想让子组件的最小高度是80像素，你可以使用const BoxConstraints(minHeight: 80.0)作为子组件的约束。

### 示例

我们先定义一个redBox，它是一个背景颜色为红色的盒子，不指定它的宽度和高度：

```dart
Widget redBox = DecoratedBox(
  decoration: BoxDecoration(color: Colors.red),
);
```

我们实现一个最小高度为50，宽度尽可能大的红色容器。

```dart
ConstrainedBox(
  constraints: BoxConstraints(
    minWidth: double.infinity, //宽度尽可能大
    minHeight: 50.0 //最小高度为50像素
  ),
  child: Container(
    height: 5.0,
    child: redBox ,
  ),
)
```

## SizedBox

SizedBox用于给子元素指定固定的宽高，如：

```dart
SizedBox(
  width: 80.0,
  height: 80.0,
  child: redBox
)
```

实际上SizedBox只是ConstrainedBox的一个定制，上面代码等价于：

```dart
ConstrainedBox(
  constraints: BoxConstraints.tightFor(width: 80.0,height: 80.0),
  child: redBox,
)
```

而BoxConstraints.tightFor(width: 80.0,height: 80.0)等价于：

```dart
BoxConstraints(minHeight: 80.0,maxHeight: 80.0,minWidth: 80.0,maxWidth: 80.0)
```

而实际上ConstrainedBox和SizedBox都是通过RenderConstrainedBox来渲染的，我们可以看到ConstrainedBox和SizedBox的createRenderObject()方法都返回的是一个RenderConstrainedBox对象：

```dart
@override
RenderConstrainedBox createRenderObject(BuildContext context) {
  return RenderConstrainedBox(
    additionalConstraints: ...,
  );
}
```

## 多重限制

多重限制在以下情况下非常有用：

- 当需要在不同的尺寸约束下显示同一个小部件时，可以使用多重限制来对其进行不同的限制。
- 当希望同时对小部件的宽度和高度进行不同的限制时，也可以使用多重限制。

### 示例和注意事项

以下是一个使用多重限制的示例：

```dart
ConstrainedBox(
  constraints: BoxConstraints(minWidth: 100, maxWidth: 200),
  child: ConstrainedBox(
    constraints: BoxConstraints(minHeight: 50, maxHeight: 100),
    child: Container(
      color: Colors.blue,
      child: Text(
        'Multiple Constraints Example',
        style: TextStyle(fontSize: 18, color: Colors.white),
      ),
    ),
  ),
)
```

### 注意事项

- 当使用多个限制容器时，后面的限制容器会覆盖前面的限制容器。因此，小部件最终的限制将受到最后一个限制容器的影响。
- 需要谨慎设计多重限制的顺序，以确保达到期望的尺寸效果。
- 总之，多重限制是通过嵌套使用多个限制容器来实现的，它可以在布局中精细控制小部件的尺寸范围。注意在设计多重限制时，考虑每个限制容器的顺序和约束条件，以达到预期的布局效果。
