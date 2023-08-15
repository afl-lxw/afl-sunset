# Map

下面是 Dart 中 Map 类的一些常用方法以及相应的解释和示例：

1. isEmpty:

- 作用：检查 Map 是否为空。
- 示例：

```dart
Map<String, int> scores = {};
print(scores.isEmpty); // true
```

2.isNotEmpty:

- 作用：检查 Map 是否不为空。
- 示例：

```dart
Map<String, int> scores = {'Alice': 100, 'Bob': 85};
print(scores.isNotEmpty); // true
```

3.length:

- 作用：获取 Map 中键值对的数量。
- 示例：

```dart
Map<String, int> scores = {'Alice': 100, 'Bob': 85};
print(scores.length); // 2
```

4.keys:

- 作用：获取 Map 中所有键的迭代器。
- 示例：

```dart
Map<String, int> scores = {'Alice': 100, 'Bob': 85};
print(scores.keys); // (Alice, Bob)
```

5.values:

- 作用：获取 Map 中所有值的迭代器。
- 示例：

```dart
Map<String, int> scores = {'Alice': 100, 'Bob': 85};
print(scores.values); // (100, 85)
```

6.containsKey(Object? key):

- 作用：检查 Map 中是否存在给定的键。
- 示例：

```dart
Map<String, int> scores = {'Alice': 100, 'Bob': 85};
print(scores.containsKey('Alice')); // true
```

7.containsValue(Object? value):

- 作用：检查 Map 中是否存在给定的值。
- 示例：

```dart
Map<String, int> scores = {'Alice': 100, 'Bob': 85};
print(scores.containsValue(85)); // true
```

8.putIfAbsent(K key, V Function() ifAbsent):

- 作用：当键不存在时，添加一个键值对。
- 示例：

```dart
Map<String, int> scores = {'Alice': 100};
scores.putIfAbsent('Bob', () => 85);
print(scores); // {Alice: 100, Bob: 85}
```

9.`addAll(Map<K, V> other)`:

- 作用：将另一个 Map 中的所有键值对添加到当前 Map。
- 示例：

```dart
Map<String, int> scores = {'Alice': 100};
Map<String, int> additionalScores = {'Bob': 85, 'Carol': 95};
scores.addAll(additionalScores);
print(scores); // {Alice: 100, Bob: 85, Carol: 95}
```

10.remove(Object? key):

- 作用：移除指定键的键值对。
- 示例：

```dart
Map<String, int> scores = {'Alice': 100, 'Bob': 85};
scores.remove('Alice');
print(scores); // {Bob: 85}
```

11.clear():

- 作用：清空 Map 中的所有键值对。
- 示例：

```dart
Map<String, int> scores = {'Alice': 100, 'Bob': 85};
scores.clear();
print(scores); // {}
```

12.forEach(void action(K key, V value)):

- 作用：对 Map 中的每个键值对执行指定操作。
- 示例：

```dart
Map<String, int> scores = {'Alice': 100, 'Bob': 85};
scores.forEach((key, value) {
  print('$key: $value');
});
```

13.`map<K2, V2>(MapEntry<K2, V2> f(K key, V value))`:

- 作用：将 Map 中的每个键值对转换为一个新的键值对。
- 示例：

```dart
Map<String, int> scores = {'Alice': 100, 'Bob': 85};
Map<String, String> scoreDescriptions = scores.map((key, value) {
  return MapEntry(key, value >= 90 ? 'Excellent' : 'Good');
});
print(scoreDescriptions); // {Alice: Excellent, Bob: Good}
```

这些是 Dart 中 Map 类的一些常用方法以及对应的解释和示例。使用这些方法，您可以方便地操作键值对集合。
