# isolate

> Isolate 是 Dart 中用于实现并发的一种机制。每个 Isolate 都有自己的内存空间，独立于主线> 程和其他 Isolate，可以在其上执行计算任务。这使得 Dart 可以充分利用多核处理器。

以下是一个简单的 Dart Isolate 示例：

```dart
import 'dart:isolate';

void isolateFunction(SendPort sendPort) {
  // 在 Isolate 中执行的任务
  sendPort.send('Hello from Isolate!');
}

void main() async {
  // 创建一个新的 ReceivePort 用于接收消息
  ReceivePort receivePort = ReceivePort();

  // 创建一个新的 Isolate，并将消息发送端口传递给它
  Isolate.spawn(isolateFunction, receivePort.sendPort);

  // 监听 Isolate 发送的消息
  receivePort.listen((message) {
    print('Received message: $message');
    receivePort.close(); // 关闭 ReceivePort，结束监听
  });

  print('Main thread continues to run');
}
```

在这个例子中，Isolate.spawn 用于创建一个新的 Isolate，然后将 receivePort.sendPort 传递给 Isolate。Isolate 中的任务通过该 SendPort 发送消息。在主线程中，我们使用 ReceivePort 监听 Isolate 发送的消息。

需要注意的是，Isolate 之间的通信是通过消息传递来完成的，而不是共享内存。这确保了 Isolate 之间的独立性和安全性。

在实际应用中，Isolate 可以用于执行一些计算密集型的任务，以充分利用多核处理器，同时不影响主线程的响应性。
