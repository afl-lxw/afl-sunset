# DragTarget

DragTarget 是 Flutter 中的一个组件，用于实现一个可以接收拖拽操作的目标区域。它允许将拖拽的数据放置到指定的区域，并在放置完成时触发相应的回调。

## 属性

- builder (BuildContext, `List<candidateData>`, `List<rejectedData>`): 构建拖拽目标区域的回调函数。
- onWillAccept (`onWillAccept<T>`): 判断是否可以接收拖拽数据的回调函数。
- onAccept (`onAccept<T>`): 拖拽数据被接受时的回调函数。
- onLeave (VoidCallback): 拖拽数据离开目标区域时的回调函数。

## 功能

- 创建一个可以接收拖拽数据的目标区域。
- 支持根据拖拽数据的类型来判断是否可以接收。
- 在数据被放置到目标区域时触发回调函数。

## 用法

```dart
DragTarget<String>(
  builder: (context, candidateData, rejectedData) {
    return Container(
      width: 200,
      height: 200,
      color: Colors.grey[300],
      child: Center(
        child: Text(
          candidateData.isNotEmpty
              ? 'Release here to drop'
              : 'Drag here',
          style: TextStyle(fontSize: 16),
        ),
      ),
    );
  },
  onWillAccept: (data) {
    return data == 'dragData';
  },
  onAccept: (data) {
    // Handle the accepted data
    print('Data accepted: $data');
  },
  onLeave: () {
    print('Data left the target');
  },
)
```

## 使用场景

- 创建一个拖拽目标区域，用于接收从其他区域拖拽而来的数据。
- 在拖拽操作中，需要根据数据的类型来判断是否可以接收。

## 注意事项

- builder 回调函数中通常会显示一个区域，指示用户何时可以释放拖拽数据。
- onWillAccept 回调函数用于判断是否可以接收拖拽数据，它接收一个类型为泛型 T 的参数，表示拖拽的数据。
- onAccept 回调函数在数据被成功接收时触发，可以在这里处理接收到的数据。
- onLeave 回调函数在拖拽数据离开目标区域时触发，可以在这里执行一些清理操作。
