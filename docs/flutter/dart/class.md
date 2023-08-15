# Class

Constructor (构造函数):
构造函数用于创建对象，可以包含参数来初始化对象的属性。

```dart
class Person {
  String name;
  int age;
  
  Person(this.name, this.age); // 构造函数
}

void main() {
  var person = Person('Alice', 30);
  print(person.name); // 输出: Alice
}
```

Method (方法):
方法是类中用于执行特定任务的函数。

```dart
class Calculator {
  int add(int a, int b) {
    return a + b;
  }
}

void main() {
  var calc = Calculator();
  print(calc.add(5, 3)); // 输出: 8
}
```

Getter (获取器) 和 Setter (设置器):
Getter 用于获取对象的属性值，Setter 用于设置对象的属性值。

```dart
class Rectangle {
  double _width = 0;
double_height = 0;

  double get area => _width *_height;
  set width(double value) => _width = value;
}

void main() {
  var rect = Rectangle();
  rect.width = 5;
  print(rect.area); // 输出: 0 (因为 height 为默认值)
}
```

toString()：
返回表示对象的字符串。通常用于调试和输出。

```dart
class Person {
  String name;
  int age;

  @override
  String toString() {
    return '$name ($age years old)';
  }
}

void main() {
  var person = Person();
  person.name = 'Bob';
  person.age = 25;
  print(person); // 输出: Bob (25 years old)
}
```

hashCode:
返回对象的哈希码，通常用于集合类型中。

```dart
class Person {
  String name;
  int age;

  @override
  int get hashCode => name.hashCode ^ age.hashCode;
}

void main() {
  var person = Person();
  person.name = 'Alice';
  person.age = 30;
  print(person.hashCode); // 输出: 670610543
}
```

runtimeType:
返回对象的运行时类型。

```dart
class Person {}

void main() {
  var person = Person();
  print(person.runtimeType); // 输出: Person
}
```

== 和 hashCode:
用于比较两个对象是否相等。

```dart
class Point {
  int x, y;

  @override
  bool operator ==(Object other) {
    return other is Point && other.x == x && other.y == y;
  }

  @override
  int get hashCode => x.hashCode ^ y.hashCode;
}

void main() {
  var p1 = Point()..x = 1..y = 2;
  var p2 = Point()..x = 1..y = 2;
  print(p1 == p2); // 输出: true
}
```

noSuchMethod()：
当对象调用不存在的方法时会被调用。

```dart
class DynamicObject {
  @override
  dynamic noSuchMethod(Invocation invocation) {
    return 'Called ${invocation.memberName}';
  }
}

void main() {
  var obj = DynamicObject();
  print(obj.undefinedMethod()); // 输出: Called Symbol("undefinedMethod")
}
```

copyWith()：
在不更改原对象的情况下，创建一个拷贝并修改其中的某些属性。

```dart
class Person {
  String name;
  int age;

  Person({this.name, this.age});

  Person copyWith({String name, int age}) {
    return Person(name: name ?? this.name, age: age ?? this.age);
  }
}

void main() {
  var person1 = Person(name: 'Alice', age: 30);
  var person2 = person1.copyWith(name: 'Bob');
  print(person2.name); // 输出: Bob
}
```

compareTo()：
用于比较两个对象的顺序。

```dart
class Student implements Comparable<Student> {
  String name;
  int age;

  Student({this.name, this.age});

  @override
  int compareTo(Student other) {
    return age.compareTo(other.age);
  }
}

void main() {
  var student1 = Student(name: 'Alice', age: 25);
  var student2 = Student(name: 'Bob', age: 30);
  print(student1.compareTo(student2)); // 输出: -1
}
```

is和as操作符：
用于类型检查和类型转换。

```dart
class Animal {}
class Cat extends Animal {}

void main() {
  var animal = Cat();
  if (animal is Cat) {
    print('It is a cat');
  }

  Animal cat = Cat();
  Cat myCat = cat as Cat;
}
```

const构造函数：
用于创建编译时常量，需要在类的构造函数中使用 const 关键字。

```dart
class Circle {
  final double radius;

  const Circle(this.radius);
}

void main() {
  var circle = const Circle(5);
}
```

factory构造函数：
用于返回对象的实例，可以在内部使用逻辑来选择返回哪个子类的实例。

```dart
class Shape {
  factory Shape(String type) {
    if (type == 'circle') return Circle();
    if (type == 'square') return Square();
    throw ArgumentError('Unknown shape type: $type');
  }
}

class Circle implements Shape {}
class Square implements Shape {}

void main() {
  var circle = Shape('circle');
  var square = Shape('square');
}
```

super关键字：
在子类中调用父类的方法和构造函数。

```dart
class Parent {
  void doSomething() {
    print('Parent is doing something');
  }
}

class Child extends Parent {
  @override
  void doSomething() {
    super.doSomething(); // 调用父类方法
    print('Child is also doing something');
  }
}

void main() {
  var child = Child();
  child.doSomething();
}
```

assert()：
用于检查条件是否满足，通常用于调试目的。

```dart
void divide(int a, int b) {
  assert(b != 0, 'Cannot divide by zero');
  print(a / b);
}

void main() {
  divide(10, 2); // 输出: 5.0
  divide(10, 0); // 抛出异常: AssertionError: Cannot divide by zero
}
```

...（Spread操作符）：
可以将一个列表展开成一个参数序列。

```dart
void printNumbers(int a, int b, int c) {
  print('$a, $b, $c');
}

void main() {
  var numbers = [1, 2, 3];
  printNumbers(...numbers); // 输出: 1, 2, 3
}
```

Enum类：
用于创建枚举类型，通过枚举类型可以创建一组有限的命名值。

```dart
enum Color { red, green, blue }

void main() {
  var myColor = Color.blue;
  print(myColor); // 输出: Color.blue
}
```

常量构造函数：
用于创建不可变的实例，实例的属性在构造函数内必须是 final 的。

```dart
class Circle {
  final double radius;

  const Circle(this.radius);
}

void main() {
  var circle = const Circle(5);
}
```

cascade操作符（..）：
可以在同一个对象上执行一系列操作。

```dart
class Person {
  String name;
  int age;

  void setName(String n) {
    name = n;
  }

  void setAge(int a) {
    age = a;
  }
}

void main() {
  var person = Person()
    ..setName('Alice')
    ..setAge(30);

  print(person.name); // 输出: Alice
  print(person.age);  // 输出: 30
}
```

toJson() 和 fromJson()：
通常用于序列化和反序列化对象。

```dart
class Person {
  String name;
  int age;

  Map<String, dynamic> toJson() => {'name': name, 'age': age};
  Person.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        age = json['age'];
}

void main() {
  var person = Person()..name = 'Alice'..age = 30;

  var json = person.toJson();
  print(json); // 输出: {name: Alice, age: 30}

  var newPerson = Person.fromJson(json);
  print(newPerson.name); // 输出: Alice
}
```

以上是 Dart 中常用的 Class 方法的一些简要说明和示例。请注意，这只是一个概述，Dart 还有更多功能和方法，可以根据具体的需要去了解更多。
