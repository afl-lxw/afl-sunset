# Flutter开发之——动画

Flutter 中的动画类用于创建各种不同类型的动画效果，从简单的数值变化到复杂的过渡动画都可以通过这些类来实现。
以下是一些常用的 Flutter 动画类：

- Animation：动画的基础类，表示一个连续变化的数值。
- AnimationController：管理动画的控制器，用于控制动画的状态、速度、方向等。
- CurvedAnimation：用于创建一个自定义的动画曲线，可以使动画速度非线性变化，如加速或减速。
- Tween：定义了动画的起始值和结束值之间的映射关系，用于将 Animation 映射到指定范围内的数值。
- TweenSequence：用于定义一个动画序列，其中可以包含多个 Tween。
- AnimatedBuilder：用于构建自定义的动画小部件，它接收 Animation 对象并在每次动画状态变化时进行重建。
- AnimatedWidget：类似于 AnimatedBuilder，用于构建响应动画状态变化的小部件，但它是一个抽象类，需要继承和扩展。
- ImplicitlyAnimatedWidget：用于创建隐式动画，其属性变化时会自动创建动画效果，不需要手动控制 Animation。
- TweenAnimationBuilder：类似于 AnimatedBuilder，但它使用 Tween 来管理属性的变化。
- AnimationListener：监听 Animation 对象的状态变化，如开始、结束、正向、反向等。
- AnimatedContainer：一个自带动画效果的容器，用于在属性变化时平滑过渡。
- Hero：用于创建 Hero 动画，实现在页面之间的平滑过渡。
- PositionedTransition：在 Stack 中用于实现平移动画效果。
- RotationTransition：用于实现旋转动画效果。
- ScaleTransition：用于实现缩放动画效果。
- SizeTransition：用于实现大小变化的动画效果。
- SlideTransition：用于实现平移动画效果。
- AlignTransition：用于实现对齐方式变化的动画效果。
- FadeTransition：用于实现透明度变化的动画效果。
- AnimatedDefaultTextStyle：用于创建在文本样式变化时的动画效果。
- AnimatedList：创建动态列表，支持插入、删除和排序动画。
- AnimatedOpacity：在透明度变化时创建动画效果。
- AnimatedPositioned：在位置变化时创建动画效果。
- AnimatedSwitcher：在切换子部件时创建动画效果。
- AnimatedTheme：在主题变化时创建动画效果。
- AnimatedCrossFade：在两个子部件之间创建交叉淡入淡出的动画效果。

这些是一些常用的 Flutter 动画类，通过它们可以实现各种不同的动画效果，从简单的变化到复杂的过渡效果都可以轻松地实现。根据需要选择合适的动画类来创建所需的动画效果。
