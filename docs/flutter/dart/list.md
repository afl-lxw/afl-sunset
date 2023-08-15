# List

Dart 中的 List 类提供了许多用于操作列表数据的方法。下面是 List 类的一些常用方法及其说明：

- `add(E element)`: 添加元素到列表的末尾。
- `addAll(Iterable<E> iterable)`: 添加一个可迭代对象中的所有元素到列表的末尾。
- `insert(int index, E element)`: 在指定索引位置插入元素。
- `insertAll(int index, Iterable<E> iterable)`: 在指定索引位置插入一个可迭代对象中的所有元素。
- remove(Object? value): 移除列表中第一个匹配给定值的元素。
- removeAt(int index): 移除指定索引位置的元素。
- removeLast(): 移除列表中的最后一个元素。
- removeWhere(bool test(E element)): 根据条件移除符合条件的元素。
- retainWhere(bool test(E element)): 保留符合条件的元素，移除其他元素。
- clear(): 清空列表中的所有元素。
- sort([int compare(E a, E b)]): 对列表中的元素进行排序。
- shuffle([Random? random]): 随机打乱列表中的元素。
- sublist(int start, [int? end]): 获取列表的子列表。
- getRange(int start, int end): 获取从 start 到 end（不包括）的范围内的元素。
- asMap(): 返回一个包含索引和元素对应关系的 Map。
- forEach(void action(E element)): 对列表中的每个元素执行指定的操作。
- `map<T>(T f(E element))`: 根据给定函数对列表中的每个元素进行转换，并返回一个新列表。
- where(bool test(E element)): 返回满足条件的元素组成的新列表。
- any(bool test(E element)): 判断是否存在满足条件的元素。
- every(bool test(E element)): 判断是否所有元素都满足条件。
- reduce(E combine(E value, E element)): 从第一个元素开始，依次使用给定函数累积元素。
- `fold<T>(T initialValue, T combine(T previousValue, E element))`: 类似于 reduce，但允许指定初始值。
- firstWhere(bool test(E element), {E orElse()?}): 返回第一个满足条件的元素，如果没有找到，则返回 orElse 函数返回的值。
- lastWhere(bool test(E element), {E orElse()?}): 返回最后一个满足条件的元素，如果没有找到，则返回 orElse 函数返回的值。
- singleWhere(bool test(E element), {E orElse()?}): 返回唯一一个满足条件的元素，如果没有或多于一个满足条件，则返回 orElse 函数返回的值。
- indexOf(Object? element, [int start = 0]): 返回指定元素的第一个索引。
- lastIndexOf(Object? element, [int? start]): 返回指定元素的最后一个索引。
- `sort<E extends Comparable<E>>([int compare(E a, E b)?])`: 对可比较元素的列表进行排序。
- `sort<E>(int compare(E a, E b))`: 对元素类型为 E 的列表进行排序。
- join([String separator = '']): 将列表中的元素连接成字符串。
- toList(): 将可迭代对象转换为列表。

这些方法是 List 类中常用的一些方法，可以根据需要使用不同的方法来操作和处理列表数据。注意，每个方法都有特定的参数和用法，根据实际需求选择适合的方法。

```dart
void main() {
  List<String> fruits = ['apple', 'banana', 'orange', 'kiwi', 'apple'];

  // add()
  fruits.add('grape');
  print(fruits); // [apple, banana, orange, kiwi, apple, grape]

  // addAll()
  List<String> moreFruits = ['pear', 'peach'];
  fruits.addAll(moreFruits);
  print(fruits); // [apple, banana, orange, kiwi, apple, grape, pear, peach]

  // insert()
  fruits.insert(1, 'cherry');
  print(fruits); // [apple, cherry, banana, orange, kiwi, apple, grape, pear, peach]

  // insertAll()
  List<String> moreBerries = ['blueberry', 'strawberry'];
  fruits.insertAll(3, moreBerries);
  print(fruits); // [apple, cherry, banana, blueberry, strawberry, orange, kiwi, apple, grape, pear, peach]

  // remove()
  fruits.remove('kiwi');
  print(fruits); // [apple, cherry, banana, blueberry, strawberry, orange, apple, grape, pear, peach]

  // removeAt()
  fruits.removeAt(2);
  print(fruits); // [apple, cherry, blueberry, strawberry, orange, apple, grape, pear, peach]

  // removeLast()
  fruits.removeLast();
  print(fruits); // [apple, cherry, blueberry, strawberry, orange, apple, grape, pear]

  // removeWhere()
  fruits.removeWhere((fruit) => fruit.startsWith('a'));
  print(fruits); // [cherry, blueberry, strawberry, orange, grape, pear]

  // retainWhere()
  fruits.retainWhere((fruit) => fruit.contains('b'));
  print(fruits); // [blueberry, strawberry]

  // clear()
  fruits.clear();
  print(fruits); // []

  // asMap()
  List<String> colors = ['red', 'green', 'blue'];
  Map<int, String> colorMap = colors.asMap();
  print(colorMap); // {0: red, 1: green, 2: blue}

  // forEach()
  List<int> numbers = [1, 2, 3];
  numbers.forEach((number) => print(number)); // 1, 2, 3

  // map()
  List<int> doubledNumbers = numbers.map((number) => number * 2).toList();
  print(doubledNumbers); // [2, 4, 6]

  // where()
  List<int> evenNumbers = numbers.where((number) => number % 2 == 0).toList();
  print(evenNumbers); // [2]

  // any() and every()
  bool hasEven = numbers.any((number) => number % 2 == 0);
  bool allPositive = numbers.every((number) => number > 0);
  print(hasEven); // true
  print(allPositive); // true

  // reduce()
  int sum = numbers.reduce((value, element) => value + element);
  print(sum); // 6

  // sublist()
  List<int> sublist = numbers.sublist(1, 3);
  print(sublist); // [2, 3]

   // getRange()
  List<String> selectedFruits = fruits.getRange(1, 3).toList();
  print(selectedFruits); // [banana, orange]

  // indexOf()
  int index = fruits.indexOf('orange');
  print(index); // 2

  // lastIndexOf()
  int lastIndex = fruits.lastIndexOf('apple');
  print(lastIndex); // 4

  // sort()
  fruits.sort();
  print(fruits); // [apple, apple, banana, kiwi, orange]

  // shuffle()
  fruits.shuffle();
  print(fruits); // [banana, orange, kiwi, apple, apple]

  // join()
  String fruitString = fruits.join(', ');
  print(fruitString); // banana, orange, kiwi, apple, apple

  // toList()
  String fruitString = 'banana, orange, kiwi, apple, apple';
  List<String> parsedFruits = fruitString.split(', ');
  print(parsedFruits); // [banana, orange, kiwi, apple, apple]
}
```
