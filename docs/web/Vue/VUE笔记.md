# Vue.js

[TOC]

## 基础介绍

## vue.js

![](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC1%E8%8A%82%20Vue%EF%BC%88%E4%B8%80%EF%BC%89/vue01%EF%BC%882019-12-30%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/logo.png)

`vue.js` 是一套用于构建用户界面的渐进式框架

### 渐进式

![](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC1%E8%8A%82%20Vue%EF%BC%88%E4%B8%80%EF%BC%89/vue01%EF%BC%882019-12-30%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/progressive.jpeg)

### Vue 核心

- 声明式渲染
- 组件



## 引入

我们还是先通过 \<script\> 的方式来引入 <u>vue</u>

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```



## 组件

`vue` 的核心功能之一就是组件

![components](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC1%E8%8A%82%20Vue%EF%BC%88%E4%B8%80%EF%BC%89/vue01%EF%BC%882019-12-30%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/components.png)

### 组件基本分类

- 根组件
- 可复用的功能组件

### 根组件的创建

通过 `vue` 提供的构造函数可以实例化出来一个跟组件实例对象

```js
let app = new Vue(创建组件所需要的一些配置选项);
```

### 可复用的功能组件

通过 `Vue` 提供的静态方法 `component` 窗口可复用的功能组件

```js
let component1 = Vue.component(创建组件所需要的一些配置选项)
```

> 组件配置选项：https://cn.vuejs.org/v2/api/



## 组件内容渲染

渲染一个组件的内容可以通过两种方式来进行

- template 选项
- render 选项（函数）

### template

type : string

组件的模板结构（HTML），模板内容会被 `vue` 进行渲染，生成最终的 `HTML` 内容，并替换占位（挂载）元素

### el

type : string | Element

提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例，

- 该选择只对 `new` 创建的实例有效
- 如果提供 `el` ，但是没有提供 `template` ，则 `el` 的内容讲作为 `template`

### render

type : (createElement: () => VNode) => VNode

发挥 `JavaScript` 最大的编程能力，直接创建 `VNode` （虚拟dom对象），优先级高于 `el` 和 `template`

- 有更强大的编程能力
- 有更高的性能

> https://cn.vuejs.org/v2/guide/render-function.html

### 使用 $mount 方法延迟 `Vue` 实例的挂载

当 `Vue` 实例没有 `el` 选项的时候，它会处于一种 <u>未挂载</u> 的状态，我们可以通过组件 `Vue` 实例对象的 `$mount` 方法来手动挂载，通过该方式，我们也可以达到延迟 `Vue` 实例的挂载的目的



## 组件中的数据（状态）

### data

组件内部使用的数据，`data` 是一个对象，`data` 中的值可以中模板中直接访问

- `Vue` 实例组件（根组件）的 `data` 是一个对象
- 可复用功能组件的 `data` 必须是一个函数，且该函数必须返回一个对象（因为复用性，避免多个组件实例引用同一个对象。换句话说，组件中使用的数据必须是一个对象，但是可复用组件的这个数据对象必须通过函数返回

### data 的访问

`data` 数据可以直接通过组件实例对象访问，也可以通过实例对象下的 `$data` 属性进行访问

> 组件实例对象下有很多的以 `$` 开头的属性，这些都是实例对象内置的一些属性和方法，`vue` 为了区分数据与内置属性方法，内置的属性和方法默认都是以 `$` 开始的，所以我们中数据中应该避免使用 `$` 开头的数据

## 模板语法

<u>vue</u> 使用了基于 <u>html</u> 的模板语法，使用声明式的方式把实例中的数据（`data`）与 <u>DOM</u> 进行绑定，`data` 中的数据在模板中可以直接使用

### Mustache（双大括号，大胡子） 语法

在 <u>vue</u> 中，我们是通过一对双大括号把实例中的数据渲染到模板内容中

###### 插值表达式

在 {{}} 中，我们可以放置表达式值

```js
{{表达式}}
```

```js
new Vue({
  el: '#app',
  data: {
    title: 'vue 框架'
  },
  template: `<div>{{title}}</div>`
});
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <div id="app">
      {{title}}
  	</div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>
        let app = new Vue({
            el: '#app',
            data: {
              title: 'vue 框架'
            }
        });
    </script>
</body>
</html>
```

### 数据到视图的更新

<u>vue</u> 会把  `data` 中的数据挂载到实例属性下，同时对它们进行主动的监听拦截，当数据发生变化的时候，重新渲染模板。我们可以通过实例对象对数据进行修改

```js
app.title = 'whisper';
// or
app.$data.title = 'whisper';
```

### 检测变化的注意事项

在 <u>vue3</u> 之前，数据的监听是通过 `Object.defineProperty` 方法来实现的，但是该方法只能监听拦截单个数据，对于对象新增属性无法监听拦截。所以，对于数据对象中新增的属性，我们需要调用 <u>vue</u> 提供的方法来进行处理

### 扩展

通过 `Object.defineProperty` 监听拦截中存在一些问题

- 属性新增属性
- 数组方法：push、pop、shift、unshift、splice、sort、reverse
- 数组新增值：[]
- 数组 length 属性

以上的操作中并不会触发监听拦截

> `vue` 对数组中的 `push`、`pop` 等方法进行重新包装，所以在 `vue` 中调用这些方法，可以对数组的修改进行监听拦截
>
> [https://cn.vuejs.org/v2/guide/list.html#%E5%8F%98%E5%BC%82%E6%96%B9%E6%B3%95-mutation-method](https://cn.vuejs.org/v2/guide/list.html#变异方法-mutation-method)

### 使用 Vue.set 方法添加新数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <div id="app">
        <p>title: {{title}}</p>
        <p>user.username: {{user.username}}</p>
        <p>user.gender: {{user.gender}}</p>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>
        let app = new Vue({
            el: '#app',
            data: {
                title: 'vue 框架',
                user: {
                    username: 'zMouse'
                }
            }
        });
    </script>
</body>
</html>
```

在模板中，我们使用了一个不存在的数据 `user.gender`

如果我们通过 `app.user.gender = '男' `的方式来新增，是不会被 <u>vue</u> 拦截监听处理的，我们需要使用

```js
Vue.set(app.user, 'gender', '男');
// 实例.$set 是 Vue.set 的别名
app.$set(app.user, 'gender', '男');
```

这样的方式，`set` 方法给 `app.user`  添加 `gender` 属性的同时，对它进行了 `defineProperty`





## **指令**

表达式的值除了可以出现内容中，也可以使用在其它位置，比如：属性。但是不能使用 `{{}}` 语法，而是需要 `指令`

在 `vue` 中，指令是一个带有 `v-` 前缀的属性，与普通属性不一样的地方在于，指令的值是引号括起来的 `表达式`，不同的指令有不同的作用，`vue` 内置了一些常用的指令，后期我们还可以自定义属于自己的指令

- 内容输出
- 循环
- 逻辑
- 属性绑定
- 事件
- 其它



## 内容输出

通过 `{{}}` 我们可以很方便的中模板中输出数据，但是这种方式会有一个问题，当页面加载渲染比较慢的时候，页面中会出现 `{{}}` ，`vue` 提供了几个指令来解决这个问题

> 指令中的表达式不需要使用 `{{}}`

### v-text

```html
<p v-text="title"></p>
```

> 弊端：`v-text` 会填充整个 `innerHTML`

### v-cloak

```html
<p v-cloak>{{title}}</p>
```

需要配合 <u>css</u> 进行处理

```css
<style>
[v-cloak] {
  display: none;
}
</style>
```

### v-html

为了防止 `xss` 攻击，默认情况下输出是不会作为 `html` 解析的，通过 `v-html` 可以让内容作为 `html` 进行解析

### v-once

只渲染元素和组件一次，后期的更新不再渲染

### v-pre

忽略这个元素和它子元素内容的编译



## 逻辑处理

### v-show

根据表达式的值（布尔值），切换元素的显示与隐藏（display 属性）

> 适用于状态切换比较频繁的情况

### v-if

根据表达式的值（布尔值），创建或销毁元素

> 适用于状态切换不频繁的情况

### v-else / v-else-if

与 `v-else` 配合



## 循环与列表

### v-for

根据数据循环渲染 `v-for` 指令所在的元素及其子元素

可以循环的数据：Array | Object | number | string | Iterable (2.6 新增)

```html
<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, key, index) in object"></div>
```

> <u>v-for</u> 中也可以使用 <u>of</u> 语法，在 <u>vue</u> 中两者没有什么区别

### :key

默认情况下，在渲染 `DOM` 过程中使用 <u>原地复用</u> ，这样一般情况下会比较高效，但是对于循环列表，特别是依赖某种状态的列表，会有一些问题，我们可以通过 `:key` 属性，来给每个循环节点添加一个标识



## 属性绑定

### v-bind

绑定数据（表达式）到指定的属性上，`<div v-bind:参数="值/表达式"></div>`，这里的参数就是指定的属性名称

```html
<div id="app">
  <div v-bind:id="'box1'"></div>
  <div v-bind:id="myId"></div>
</div>

<script>
	new Vue({
    el: '#app',
    data: {
      myId: 'Deity'
    }
  })
</script>
```

#### 缩写

有的一些常用指令会有对应的缩写，`v-bind` 对应的缩写为：`:`

```html
<div :id="myId"></div>
```



### 样式

针对样式属性，`v-bind` 值有一些特殊的写法

#### style

原生普通写法

```html
<div style="width: 100px; height: 100px; background: red"></div>
```

**v-bind 写法**

```html
<div :style="'width: 100px; height: 100px; background: red'"></div>
```

**对象写法**

```html
<div :style="style1"></div>

...
<script>
new Vue({
	el: '#app',
	data: {
		style1: {
      width: '100px',
      height: '100px',
      background: 'green'
    }
	}
});
</script>
```

**数组写法**

```html
<div :style="[style1, style2]"></div>

...
<script>
new Vue({
	el: '#app',
	data: {
		style1: {
      width: '100px',
      height: '100px',
      background: 'green'
    }
	},
  style2: {
    border: '1px solid black'
  }
});
</script>
```

#### class

**原生普通写法**

```html
<div class="box1 box2"></div>
```

**v-bind 写法**

```html
<div :class="'box1 box2'"></div>
```

**数组写法**

```html
<div :class="['box1', 'box2']"></div>
```

**对象写法**

```html
<div :class="{'box1': isActive, 'box2': isChecked}"></div>
```

使用对象写法，可以根据值（boolean）动态添加对应的 <u>class</u>



## 单向数据流

通过上面的知识点和案例，我们可以看到，当数据更新的时候，页面视图就会更新，但是页面视图中绑定的元素更新的时候，对应的数据是不会更新的

```html
<input type="text" :value="title" />
```

我们称为：单向数据流 <u>数据 -> 视图</u>

在 <u>vue</u> 中，还有一种双向数据流绑定的方式

### v-model

```html
<input type="text" v-model="title" />
```

数据 `title` 更新，视图中 `input` 的 `value` 就会更新。同时，当 <u>input</u> 中的 `value` 更新的时候，数据 `title` 也会更新，这就是我们说的 <u>数据双向绑定</u> [与 <u>React</u> 中的受控组件类似]



## 表单

针对一般元素，比如 <u>div</u>、<u>span</u>、<u>p</u>、<u>img</u> 等，采用的是单向绑定：<u>v-bind</u>，只需要把数据绑定到视图中就可以，但是对于表单这种交互性比较强的元素或组件，我们一般可能需求双向绑定，即：用户对视图元素的操作同时更新数据

<u>v-model</u> 在内部为不同的输入元素使用不同的属性和事件来处理数据

- `text` 和 `textarea`
- `checkbox` 和 `radio`
- `select`

### `text` 和 `textarea`

`text` 和 `textarea` 元素使用 `value` 属性和 `input` 事件

```html
<div id="app">
  <input type="text" v-model="v1" />
  <textarea v-model="v2" cols="30" rows="10"></textarea>
</div>
```

```js
let app = new Vue({
  el: '#app',
  data: {
    v1: 'aaa',
    v2: 'bbb'
  }
});
```

### `checkbox` 和 `radio`

`checkbox` 和 `radio` 使用 `checked` 属性和 `change` 事件

**单选框绑定一个值**

```html
<div id="app">
  <input type="radio" v-model="v3" value="男" /> 男
  <input type="radio" v-model="v3" value="女" /> 女
</div>
```

```js
let app = new Vue({
  el: '#app',
  data: {
    v3: '女',
  }
});
```

**多选框绑定到一个布尔值或数组**

```html
<div id="app">
  <input type="checkbox" v-model="v4" /> 同意
  <hr/>
  <input type="checkbox" v-model="v5" value="足球" /> 足球
  <input type="checkbox" v-model="v5" value="音乐" /> 音乐
</div>
```

```js
let app = new Vue({
  el: '#app',
  data: {
    v4: true,
    v5: ['足球', '音乐']
  }
});
```

### `select`

`select` 字段将 `value` 作为 `prop` 并将 `change` 作为事件

**单选绑定到值，多选绑定到数组**

```html
<div id="app">
  <select v-model="v3">
    <option value="男">男</option>
    <option value="女">女</option>
  </select>
  <select v-model="v5" multiple>
    <option value="足球">足球</option>
    <option value="音乐">音乐</option>
  </select>
</div>
```



## 指令修饰符

一个指令可以包含的内容包括：

- 指令名称
- 指令值
- 指令参数
- 指令修饰符

```html
<组件 指令:参数.修饰符1.修饰符2="值" />
```

### .lazy

取代 `input` 监听 `change` 事件

### .number

输入字符串转为有效的数字

### .trim

输入首尾空格过滤



## 自定义指令

我们还可以通过 `Vue` 提供的方法来自定义指令

### 

### 注册指令

`vue` 提供了两种指令注册方式

- 全局指令
- 局部指令



### 全局指令

```js
Vue.directive('指令名称', {指令配置});
```



### 局部指令

```js
new Vue({
  el: '#app',
  directives: {
    '指令名称': {指令配置}
  }
});
```

> 在使用指令的时候，需要使用 `v-指令名称` 的方式来调用



### 指令生命周期（钩子函数）

指令的运行方式很简单，它提供了一组指令生命周期钩子函数，我们只需要在不同的生命周期钩子函数中进行逻辑处理就可以了

- <u>bind</u> : 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
- <u>inserted</u> : 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
- <u>update</u> : 所在组件更新的时候调用
- componentUpdated : 所在组件更新完成后调用
- <u>unbind</u> : 只调用一次，指令与元素解绑时调用

不同的生命周期钩子函数在调用的时候同时会接收到传入的一些不同的参数

- <u>el</u> : 指令所绑定的元素，可以用来直接操作 DOM
- <u>binding</u> : 一个对象，包含以下属性：
  - <u>name</u> : 指令名，不包括 `v-` 前缀
  - <u>value</u> : 指令的绑定值（作为表达式解析后的结果）
  - <u>expression</u> : 指令绑定的表达式（字符串）
  - <u>arg</u> : 传给指令的参数，可选
  - <u>modifiers</u> : 传给指令的修饰符组成的对象，可选，每个修饰符对应一个布尔值
  - <u>oldValue</u> : 指令绑定的前一个值，仅在 <u>update</u> 和 <u>componentUpdated</u> 钩子中可用，无论值是否改变都可用

### 案例

#### 官网的例子

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <div id="app">
        <input type="text" v-focus>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>

        Vue.directive('focus', {
            inserted(el) {
                el.focus();
            }
        });
        
        let app = new Vue({
            el: '#app'
        });
    </script>
</body>
</html>

```

#### 扩展：自定义拖拽指令

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .box {
            position: absolute;
            left: 100px;
            top: 100px;
            width: 100px;
            height: 100px;
            background: red;
        }
    </style>
</head>
<body>

    <div id="app">
        <button @click="canDrag = !canDrag">Drag : {{canDrag}}</button>
        <div class="box" v-drag.limit="canDrag"></div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>

        Vue.directive('drag', {
            bind(el, {modifiers,value}) {
                let isDragStart = false;
                let disX = 0;
                let disY = 0;
                el.canDrag = value;
                el.addEventListener('mousedown', e => {
                    if (!el.canDrag) return;
                    disX = e.clientX - el.offsetLeft;
                    disY = e.clientY - el.offsetTop;
                    isDragStart = true;

                    e.preventDefault();
                });
                document.addEventListener('mousemove', e => {
                    if (isDragStart) {
                        let x = e.clientX - disX;
                        let y = e.clientY - disY;

                        if (modifiers.limit) {
                            if (x < 0) {
                                x = 0;
                            }
                            if (y < 0) {
                                y = 0;
                            }
                        }

                        el.style.left = x + 'px';
                        el.style.top = y + 'px';
                    }
                });
                document.addEventListener('mouseup', e => {
                    isDragStart = false;
                });
            },
            componentUpdated(el, {value}) {
                console.log('componentUpdated', value);
                el.canDrag = value;
            }
        });
        
        let app = new Vue({
            el: '#app',
            data: {
                canDrag: false
            }
        });
    </script>
</body>
</html>

```







## 事件

在 `vue` 中，事件通过指令 `v-on` 进行绑定，`v-on` 缩写 `@` 

```html
<组件 v-on:事件名称="表达式" />
<组件 @事件名称="表达式" />
```

### 组件的 `methods` 选项

在组件选项中，提供了一个 `methods` 选项，用来存放组件中使用的函数方法，且存放在 `methods` 中的函数方法可以通过组件实例（this）进行访问

### 通过内联方式绑定事件处理函数

```html
<组件 @事件名称="fn" />

<script>
new Vue({
  ...,
  methods: {
  	fn() {
  		//...	
		}
	}
})
</script>
```

- 事件绑定函数中的 `this` 指向组件实例
- 事件绑定函数中的第一个参数默认为 `event` 对象

```html
<组件 @事件名称="fn('Deity', $event)" />

<script>
new Vue({
  ...,
  methods: {
  	fn(name, ev) {
  		//...	
		}
	}
})
</script>
```

也可以在事件绑定中直接调用函数（并不会立即执行，也是通过事件触发执行的）

- 事件对象需要手动传入，名称为 `$event`

### 事件修饰符

在事件函数中，我们可以通过 `ev.preventDefault()`、`ev.stopPropagation()` 来阻止默认行为，阻止冒泡，但是中 <u>vue</u> 中提供一些更加方便的方式来处理这些问题，这就是事件修饰符

#### .stop

#### .prevent

#### .capture

#### .self

#### .once

#### .passive

### 按键修饰符

`vue` 还提供了许多按键修饰符

#### .keyCode

```html
<组件 @keyup.13="fn" />
```

#### .enter

#### .down

#### .exact

### 原生事件

自定义组件中可以自定义一些事件，可以通过 `.native` 修饰符来指定监听原生中的事件，而不是组件自定义事件



## computed

在实际的应用中，我们会有一些原始数据，同时在应用中又会有一些数据是根据某些原始数据派生出来的，针对这样的一种情况，`vue` 定义了一个专门用来处理这种派生数据的选项：`computed`

```html
<div id="app">
  <label><input type="radio" v-model="gender" value="" /> 所有</label>
  <label><input type="radio" v-model="gender" value="男" /> 男</label>
  <label><input type="radio" v-model="gender" value="女" /> 女</label>
  <hr>
  <ul>
    <li v-for="user of showUsers">
      {{user.username}}
    </li>
  </ul>
</div>
```

```js
let app = new Vue({
  el: '#app',
  data: {
    gender: '',
    users: [
      {id: 1, username: 'baogege', gender: '男'},
      {id: 2, username: 'mt', gender: '男'},
      {id: 3, username: 'haigege', gender: '男'},
      {id: 4, username: 'zMouse', gender: '男'},
      {id: 5, username: 'reci', gender: '女'},
      {id: 6, username: 'lisi', gender: '女'}
    ]
  },
  computed: {
    showUsers() {
      return this.gender === '' ? [...this.users] : this.users.filter(user=>user.gender===this.gender);
    }
  }
});
```

- 计算属性类似 `getter` 和 `setter` ，当访问某个计算属性的时候，就会调用 `computed` 中同名的函数，函数的返回值将作为该计算属性的值
- 计算属性的值依赖计算函数中依赖的其它响应式数据
- 计算属性的值可以缓存，如果依赖的其它响应式数据没有发生变化，但多次访问该计算属性，得到结果是最近一次变化产生的值（相对于调用方法得到结果在某些时候性能要好一些）

```html
<div id="app">
  <p>{{now}}</p>
  <button @click="showDate=true">showDate</button>
  <p v-if="showDate">{{now}}</p>
</div>
```

```js
let app = new Vue({
  el: '#app',
  data: {
		showDate: false
  }
  computed: {
    now() {
      return Date.now();
    }
  }
});
```

### 计算属性的 `getter` 与 `setter`

默认情况下，计算属性函数是一个 `getter` 函数，如果计算属性只有 <u>get</u> 需求，则可以简写

```js
computed: {
  now() {
    return Date.now();
  }
  // 等于
  now: {
    get() {
      return Date.now();
    }
  }
}
```

但是有的时候，这种派生数据既有 `get` 需求，也有 `set` 需求

```html
<div id="app">
  <label><input type="radio" v-model="gender" value="" /> 所有</label>
  <label><input type="radio" v-model="gender" value="男" /> 男</label>
  <label><input type="radio" v-model="gender" value="女" /> 女</label>
  <hr>
  <ul>
    <li v-for="user of showUsers">
      <input type="checkbox" v-model="user.checked" />
      {{user.username}}
    </li>
  </ul>
  <label><input type="checkbox" v-model="checkAll">全选</label>
</div>
```

```js
let app = new Vue({
  el: '#app',
  data: {
    gender: '',
    users: [
      {id: 1, username: 'baogege', gender: '男',checked:false},
      {id: 2, username: 'mt', gender: '男',checked:false},
      {id: 3, username: 'haigege', gender: '男',checked:false},
      {id: 4, username: 'zMouse', gender: '男',checked:false},
      {id: 5, username: 'reci', gender: '女',checked:false},
      {id: 6, username: 'lisi', gender: '女',checked:false}
    ]
  },
  computed: {
    showUsers() {
      return this.gender === '' ? [...this.users] : this.users.filter(user=>user.gender===this.gender);
    },
    checkAll: {
      get() {
        return this.users.every(user=>user.checked);
      },
      set(newValue) {
        this.users = this.users.map(user=>{
          return {
            ...user,
            checked: newValue
          }
        });
      }
    }
  }
});
```



## watch

有的时候，我们需要的派生数据是通过异步的方式处理的，这个时候，计算属性就不太好用了（不能处理异步）。

我们可以使用另外一个选项：`watch`

```html
<div id="app">
  <input type="text" v-model="keyWord">
  <hr>
  <ul>
    <li v-for="user of showUsers">
      {{user.username}}
    </li>
  </ul>
</div>
```

```js
let app = new Vue({
  el: '#app',
  data: {
    keyWord: '',
    users: [
      {id: 1, username: 'baogege', gender: '男',checked:false},
      {id: 2, username: 'mt', gender: '男',checked:false},
      {id: 3, username: 'haigege', gender: '男',checked:false},
      {id: 4, username: 'zMouse', gender: '男',checked:false},
      {id: 5, username: 'reci', gender: '女',checked:false},
      {id: 6, username: 'lisi', gender: '女',checked:false}
    ],
    showUsers: []
  },
  watch: {
    keyWord(newVal, oldVal) {
      // 模拟网络请求
      setTimeout(_=>{
        this.showUsers = this.users.filter(user=>user.username.includes(newVal));
      }, 1000);
    }
  }
});

```

### 多层监听

对于多层数据的监听，可以使用字符串+点语法

```js
watch: {
  'a.b.c': function() {
    //...
  }
}

```

### 深度监听

默认情况下，`watch` 只对当前指定的值进行一层监听，如果需要对对象进行深度监听

```js
watch: {
  a: {
    handler() {
      console.log('a deep');
    },
    deep: true
  }
}

```



## 过滤器

过滤器是一个使用在 `双大括号插值` 和 `v-bind` 中，用于过滤输出内容的函数

假设有一个用于把内容转为大写的过滤器函数 `toUpperCase`

```html
{{content|toUpperCase}}
```

- `|` : 管道符，表示数据从左至右通过管道符进行传递
- 过滤器可以有多个，执行顺序从左至右，过滤器函数第一个参数的值就是其管道符前一个的结果

### 注册过滤器

#### 全局过滤器

```js
Vue.filter('过滤器名称', 过滤器函数);
```

#### 局部过滤器

```js
Vue.component('组件', {
  ...,
  filters: {
  	'过滤器名称': 过滤器函数	
	}
})
```

### 实例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app">
        {{title|toUpperCase|slice(3)}}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                title: 'Deity'
            },
            filters: {
                toUpperCase: function(val) {
                    return val.toUpperCase();
                },
                slice(val, n) {
                    return val.slice(n);
                }
            }
        })
    </script>
</body>
</html>
```



## 组件的注册

在 `vue` 中，我们可以通过 `new Vue` 来创建一个组件，不过通常它是作为整个应用的顶层根组件存在的，我们还可以通过另外的方式来注册一个更为通用的组件

### Vue.component()

```js
Vue.component('组件名称', {组件选项})
```

- 组件名称遵循自定义组件命名规范：全小写、连字符（虽然驼峰式一般也没问题）
- 组件选项与 `new Vue` 选项配置基本一致（也有一些细节的不同）

#### 全局组件与局部组件

通过 `Vue.component` 注册的组件，我们称为全局组件，因为它可以在任意范围内使用，我们还可以定义局部组件

```js
new Vue({
  ...,
  components: {
  	'组件名称': {组件选项}	
	}
})
```

在一个组件内部通过 `components` 选项注册的组件是局部组件，只能在当前 `components` 选项所在的组件内部使用

> 注意：局部注册的组件只能中当前注册的组件中使用，不能在它的子组件中使用

### data

在非 `new Vue` 的组件中，`data` 必须为函数，函数返回值必须是一个对象，作为组件的最终 `data`

### props

组件中内部私有数据存储中组件 `data` 中，通过外部传入的数据，则通过 `props<` 选项接收

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <div id="app">
        <kkb-circle :r="n1"></kkb-circle>
        <hr />
        <kkb-circle :r="n2"></kkb-circle>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>
        
        let app = new Vue({
            el: '#app',
            data: {
                n1: 10,
                n2: 100
            },
            components: {
                'kkb-circle': {
                    props: ['r'],
                    data() {
                        return {pi: 3.14}
                    },
                    template: `<div>r: {{r}} -> {{pi * r * r}}</div>`
                }
            }
        });
    </script>
</body>
</html>
```

- 如果传入的 `props` 值为一个表达式，则必须使用 `v-bind`
- 组件中的 `data` 和 `props` 数据都可以通过组件实例进行直接访问
- `data` 中的 `key` 与 `props` 中的 `key` 不能冲突

### 组件通信

> 注意：不要修改 `props` 传入的数据

父组件通过 `props` 传入数据到子组件内部，但是子组件内部不要修改外部传入的 `props`，`vue` 提供了一种事件机制通知父级更新，父级中使用子组件的时候监听对应的事件绑定对应的处理函数即可

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <p>父组件：{{quantity}}</p>
        <kkb-child :quantity="initQuantity" @increment="appIncrement"></kkb-child>
        <kkb-child :quantity="initQuantity" @increment="appIncrement"></kkb-child>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        const child = {
            props: ['quantity'],
            data() {
                return {
                    n: this.quantity
                };
            },
            template: `
                <div>
                    <p>子组件：{{n}}</p>
                    <button @click="increment">按钮</button>
                </div>
            `,
            methods: {
                increment() {
                    this.n++;
                    this.$emit('increment', this.n);
                }
            }
        };

        new Vue({
            el: '#app',
            data: {
                quantity: 0,
                initQuantity: 0
            },
            components: {
                'kkb-child': child
            },
            methods: {
                appIncrement(v) {
                    this.quantity++;
                }
            }
        });
    </script>
</body>
</html>
```

#### $emit()

`vue` 为每个组件对象提供了一个内置方法 `$emit` ，它等同于自定义事件中的 `new Event`,`trigger` 等

```js
this.$emit('自定义事件名称', 事件数据)
```

- 事件数据就是中触发事件的同时携带传递的数据 - `event`
- 父级在使用该组件的过程中，可以通过 `@事件名称` 来注册绑定事件函数
- 事件函数的第一个参数就是事件数据

### 组件双绑的实现

虽然并不推荐在组件内部修改 `props` ，但是，有的时候确实希望组件内部状态变化的时候改变 `props` ，我们可以通过子组件触发事件，父级监听事件来达到这个目的，不过过程会比较繁琐，`vue` 提供了一些操作来简化这个过程

#### v-model

`v-model` 是 `vue` 提供的一个用于实现数据双向绑定的指令，用来简化 `props 到 data`，`data 到 props` 的操作流程

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .kkb-radio {
            width: 20px;
            height: 20px;
            background-color: #cccccc;
        }
        .kkb-radio.checked {
            background-color: #92beee;
        }
        .plane {
            border: 1px solid #000000;
            width: 300px;
        }
        .plane .header {
            width: 100%;
            height: 30px;
            background: #cccccc;
        }
        .plane .content {
            height: 100px;
            width: 100%;
            display: none;
        }
        .plane.expanded .content {
            display: block;
        }
    </style>
</head>
<body>
    <div id="app">
        <!-- <kkb-radio :checked="val"></kkb-radio> -->
        <kkb-radio v-model="val"></kkb-radio>

        <br /><br /><br />

        <kkb-plane :expanded="val"></kkb-plane>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>

        const kkbRadio = {
            model: {
                prop: 'checked',
                event: 'check'
            },
            props: ['checked'],
            data() {
                return {
                    status: this.checked
                }
            },
            template: `
                <div class="kkb-radio" :class="{'checked': status}" @click="changeStatus"></div>
            `,
            methods: {
                changeStatus() {
                    this.status = !this.status;

                    this.$emit('check', this.status);
                }
            }
        };
        const kkbPlane = {
            props: ['expanded'],
            template: `
                <div class="plane" :class="{'expanded': expanded}">
                    <div class="header"></div>
                    <div class="content"></div>
                </div>
            `
        };
        

        let vm = new Vue({
            el: '#app',
            data: {
                val: true
            },
            components: {
                'kkb-radio': kkbRadio,
                'kkb-plane': kkbPlane
            },
            methods: {
                
            }
        });
    </script>
</body>
</html>
```

##### model 选项

`prop` 指定要绑定的属性，默认是 `value`

`event` 指定要绑定触发的事件，默认是 `input` 事件

#### .sync

通过 `v-model` 来进行双向绑定，会给状态维护带来一定的问题，因为修改比较隐蔽，同时只能处理一个 `prop` 的绑定，我们还可以通过另外一种方式来达到这个目的

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .kkb-radio {
            width: 50px;
            height: 50px;
            border: 5px solid #000000;
            background-color: #ffffff;
        }
        .kkb-radio.checked {
            border-color: green;
        }
        .kkb-radio.disabled {
            background-color: #cccccc;
        }
    </style>
</head>
<body>
    <div id="app">

        <p>val1: {{val1}}</p>
        <p>val2: {{val2}}</p>
        <hr>

        <kkb-radio :checked.sync="val1" :disabled.sync="val2"></kkb-radio>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>

        const kkbRadio = {
            props: ['checked', 'disabled'],
            data() {
                return {
                    status: this.checked,
                    dis: this.disabled
                }
            },
            template: `
                <div class="kkb-radio" :class="{'checked': status, 'disabled': dis}" @click="changeDis" @mouseover="setChecked" @mouseout="removeChecked"></div>
            `,
            methods: {
                setChecked() {
                    this.status = true;
                    this.$emit('update:checked', this.status);
                },
                removeChecked() {
                    this.status = false;
                    this.$emit('update:checked', this.status);
                },
                changeDis() {
                    this.dis = !this.dis;
                    this.$emit('update:disabled', this.dis);
                }
            }
        };

        let vm = new Vue({
            el: '#app',
            data: {
                val1: false,
                val2: false
            },
            components: {
                'kkb-radio': kkbRadio
            },
            methods: {
                
            }
        });
    </script>
</body>
</html>
```

##### update:[prop]

这里事件名称要使用 `update` 加上 `prop` 名称 的格式

### 插槽

默认情况下，组件模板解析后会替换整个组件内容，如果我们想在组件引用被包含的内容，可以通过 `vue` 提供的内置组件 `slot` 来获取

```css
.dialog {
    position: fixed;
    left: 50%;
    top: 30%;
    transform: translateX(-50%) translateY(-50%) ;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    background: #fff;
    width: 30%;
}
.dialog_header {
    padding: 20px 20px 0;
    text-align: left;
}
.dialog_title {
    font-size: 16px;
    font-weight: 700;
    color: #1f2d3d;
}
.dialog_content {
    padding: 30px 20px;
    color: #48576a;
    font-size: 14px;
    text-align: left;
}
.dialog_close_btn {
    position: absolute;
    right: 10px;
    top: 5px;
}
.dialog_close_btn:before {
    content: 'x';
    color: #999;
    font-size: 20px;
    cursor: pointer;
}
```

```html
<div id="app">
  <kkb-dialog title="标题">
    <p>这是内容</p>
  </kkb-dialog>
</div>

```

```js
const Dialog = {
  props: ['title'],
  template: `
    <div class="dialog">
    	<i class="dialog_close_btn"></i>
    	<div class="dialog_header">
    		<span class="dialog_title">{{title}}</span>
    	</div>
    	<div class="dialog_content">
    		<slot></slot>
    	</div>
    </div>
	`
};

new Vue({
  el: '#app',
  components: {
    'kkb-dialog': Dialog
  }
});

```

#### 具名插槽

```html
<div id="app">
  <kkb-dialog>
    <template v-slot:title>
      <h1>这是标题</h1>
    </template>

    <template v-slot:default>
      <p>这是内容</p>
    </template>
  </kkb-dialog>
</div>

```

```javascript
const Dialog = {
  props: ['title'],
  template: `
    <div class="dialog">
    	<i class="dialog_close_btn"></i>
    	<div class="dialog_header">
    		<slot name="title"></slot>
    	</div>
    	<div class="dialog_content">
    		<slot></slot>
    	</div>
    </div>
	`
};

new Vue({
  el: '#app',
  components: {
    'kkb-dialog': Dialog
  }
});

```

##### v-slot

使用内置组件 `template` 与 `v-slot` 指令进行配置，用来命名插槽，在组件模板中，通过 `<slot name="插槽名字">` 来使用

#### 作用域插槽

组件内部与组件包含的内容属于不同的作用域（被包含的内容是组件父级下的作用域）

```html
<div id="app">
  <kkb-dialog>
    <template v-slot:title>
      <h1>用户列表 - {{title}}</h1>
    </template>

    <template v-slot:default="data">
      <p>用户的姓名: {{data.user.username}}</p>
    </template>
  </kkb-dialog>
</div>

```

```javascript
const Dialog = {
  props: ['title'],
  data() {
    return {
      users: [
        {id: 1, username: 'baogege', gender: '男',checked:false},
        {id: 2, username: 'mt', gender: '男',checked:false},
        {id: 3, username: 'haigege', gender: '男',checked:false},
        {id: 4, username: 'zMouse', gender: '男',checked:false},
        {id: 5, username: 'reci', gender: '女',checked:false},
        {id: 6, username: 'lisi', gender: '女',checked:false}
      ]
    }
  },
  template: `
    <div class="dialog">
    	<i class="dialog_close_btn"></i>
    	<div class="dialog_header">
    		<slot name="title"></slot>
    	</div>
    	<div class="dialog_content">
    		<slot v-for="user of users" :user="user"></slot>
    	</div>
    </div>
	`
};

new Vue({
  el: '#app',
  data: {
    title: 'whisper'
  },
  components: {
    'kkb-dialog': Dialog
  }
});

```

### props 验证

组件的 `props` 就是组件的参数，为了确保传入的数据在可控的合理范围内，我们需要对传入的 `props` 的值类型进行必要的验证

```javascript
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})

```

### 非 prop 特性

一个非 `prop` 特性是指传向一个组件，但是该组件并没有相应 `prop` 定义的特性，这些 `props` 会被自动添加到组件的根元素上

### 替换/合并已有的特性

默认情况下，非`prop` 特性的属性会覆盖组件根元素上同名的内容，但是针对 `style` 和 `class` 有特殊的处理，它们会合并（同名样式还是会覆盖）

### 禁用特性继承

如果你不希望组件的根元素继承特性，你可以在组件的选项中设置 `inheritAttrs: false`，我们可以通过组件的 `this.$attrs` 来获取这些属性

> 注意 `inheritAttrs: false` 选项**不会**影响 `style` 和 `class` 的绑定





## vue-cli

https://cli.vuejs.org/zh/

<u>vue-cli</u> 是 <u>vue</u> 提供的一个用于自动化构建和开发项目的工具，也称为：<u>脚手架</u>，它是一系列工具的集合，它主要有：

- 根据配置选项自动构建项目，并安装所需要的依赖
- 启动一个本地开发服务器，通过这个服务器可以基于服务器环境访问本地项目，同时提供了跨域代理服务
- 项目的自动编译、打包
- 项目测试（单元测试、e2e测试）

### 安装

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

安装成功以后，会提供一个 `vue` 的命令

**查看版本**

```bash
vue --version
# OR
vue -V
```

**帮助**

```bash
vue --help
# OR
vue -h
```

### 创建项目

<u>vue-cli</u> 提供了两种方式来创建项目

- 命令行 - cli
- 图形界面（基于浏览器） - ui

#### 命令行方式创建项目 

```bash
vue create 项目名称
```

#### 基于浏览器图形界面方式创建项目

```bash
vue ui
```

### 运行

项目创建成功以后，进入项目根目录，打开 <u>package.json</u> 文件，我们可以看到

```json
{
  ...,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
	...
}
```

[https://cli.vuejs.org/zh/guide/cli-service.html#%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4](https://cli.vuejs.org/zh/guide/cli-service.html#使用命令)



### 项目目录结构文件说明



**src**

先来说一个最重要的目录 <u>src</u> ，这个就是存放的就是我们项目源码的目录，我们开发过程中大部分的时间就在这个目录中

- main.js

项目的入口文件

- App.vue

首先，这是 <u>vue</u> 提供的一种单文件组件的文件模式（后续会讲），一个 <u>.vue</u> 文件就是一个独立的组件，这里的 <u>App.vue</u> 是应用的根组件

- components 目录

存放组件的目录

- assets 目录

存放静态资源的目录，比如：图片，css 等。这里的文件与外层 <u>public</u> 目录存放的静态资源的最大区别是：<u>assets</u> 存放的资源是通过 <u>import</u> 等方式作为模块导入，最后打包处理的。而 <u>public</u> 中的资源并不通过模块方式导入，一般都是通过 <u>script</u> 、<u>link</u> 、<u>img</u> 等方式从浏览器引入的资源，比如无法通过模块化处理的 js 文件（这样的需求情况并不多）

**public**

一些并非通过模块方式引入的资源文件存放的位置，一般都是通过 script 、link 、img 等方式从浏览器引入的资源，比如无法通过模块化处理的 js 文件（这样的需求情况并不多）





## 单文件组件

<u>vue</u> 的单文件组件是官方提供的一种用来组织组件代码的形式，该文件以 `.vue` 为后缀，该文件会被 <u>vue-cli</u> 内置的 <u>webpack</u> 解析生成对应的 <u>javascript</u>、<u>html</u>、<u>css</u> 文件

https://vue-loader-v14.vuejs.org/zh-cn/start/spec.html

### 组成

```vue
<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
```

单文件组件把一个组件所包含的 <u>结构</u>、<u>样式</u>、<u>行为</u> 分别通过 <u>template</u>、<u>style</u>、<u>script</u> 进行分离包含，然后统一组织在一个文件中

一个单文件组件最少必须包含 <u>template</u>，可以不需要 <u>script</u> 和 <u>style</u>

### <u>lang</u> 属性

无论是 <u>template</u>、<u>script</u> 还是 <u>style</u>，都可以通过 <u>lang</u> 属性来指定它们所使用的语言

```vue
<template lang="jade">
  div.example
		p {{ msg }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      msg: 'Hello world'
    }
  }
})
</script>

<style lang="stylus">
.example
  color red
</style>
```

### <u>src</u> 属性

我们还可以通过 <u>src</u> 属性把文件分离到单独的文件中

```vue
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

> 这里的 <u>src</u> 同样遵循模块化的导入规则，`./` 开头的表示相对路径，`/` 开头表示 <u>NPM</u> 包中的资源

### 有作用域的 CSS

当 `style` 标签有 `scoped` 属性时，它的 <u>CSS</u> 只作用于当前组件中的元素。这类似于 <u>Shadow DOM</u> 中的样式封装

```vue
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```

解析后：

```vue
<style>
.example[data-v-f3f3eg9] {
  color: red;
}
</style>

<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>
```

#### 混用本地和全局样式

```vue
<style>
/* 全局样式 */
</style>

<style scoped>
/* 本地样式 */
</style>
```

### 资源路径处理

在项目开发中，我们经常会碰到要引入外部资源的需求，<u>vue</u> 单文件系统中，对资源引入路径有一定的特殊处理

- 绝对路径前缀
- 相对路径前缀
- 特殊前缀

#### 绝对路径前缀

就是以 `/`、`https://Deity.com/` 等这样的绝对路径开头的，不做任何处理，直到被浏览器解析

#### 相对路径前缀

就是以 `./`、`../` 这样的相对路径开头的，将会被看作相对的模块依赖，并按照你的本地文件系统上的目录结构进行解析，如：`<img src="../a.png">` 解析后：`<img src="require('../a.png')">`，类似的还包括 `background: url(...)` 和 `@import`

#### 特殊前缀

- 如果路径以 `~` 开头，其后的部分将会被看作模块依赖。这意味着你可以用该特性来引用一个 node（NPM 包） 依赖中的资源，如：`<img src="~some-npm-package/a.png">`
- 如果路径以 `@` 开头，也会被看作模块依赖。如果你的 webpack 配置中给 `@` 配置了 alias，这就很有用了。所有 `vue-cli` 创建的项目都默认配置了将 `@` 指向 `/src`



![Vue 生命周期](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC3%E8%8A%82%20Vue%EF%BC%88%E4%B8%89%EF%BC%89/2020-02-26%EF%BC%88vue03%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/lifecycle.png)

## 组件生命周期

组件生命周期指的是组件从创建到销毁的过程，在这个过程中的一些不同的阶段，`vue` 会调用指定的一些组件方法

基本生命周期函数有下面几个阶段：

- 创建阶段
- 挂载阶段
- 更新阶段
- 卸载阶段

每一个阶段都对应着 <u>之前</u> 和 <u>之后</u> 两个函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <div id="app">
        <h1>{{title}}</h1>
        <button @click="show=!show">隐藏</button>
        <hr>
        <template v-if="hasError">
            <h4>有错误发生了</h4>
        </template>
        <template v-else>
            <kkb-component v-if="show" :t="title"></kkb-component>
        </template>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>

        const kkbComponent = {
            props: ['t'],
            template: `
                <div>
                    <h1>kkbComponent - {{t.a.b}}</h1>
                </div>
            `,
            beforeCreate() {
                console.log('kkbComponent:beforeCreate');
                console.log('data', this.$data);
                console.log('el', this.$el);
                console.log('='.repeat(100));
            },
            created() {
                console.log('kkbComponent:created');
                console.log('data', this.$data);
                console.log('el', this.$el);
                console.log('='.repeat(100));
            },
            beforeMount() {
                console.log('kkbComponent:beforeMount');
                console.log('data', this.$data);
                console.log('el', this.$el);
                console.log('='.repeat(100));
            },
            mounted() {
                console.log('kkbComponent:mounted');
                console.log('data', this.$data);
                console.log('el', this.$el);
                console.log('='.repeat(100));
            },
            beforeUpdate() {
                console.log('kkbComponent:beforeUpdate');
                console.log('props', this.$props);
                console.log('='.repeat(100));
            },
            updated() {
                console.log('kkbComponent:updated');
                console.log('='.repeat(100));
            },
            beforeDestroy() {
                console.log('kkbComponent:beforeDestroy');
                console.log('this', this);
                console.log('='.repeat(100));
            },
            destroyed() {
                console.log('kkbComponent:destroyed');
                console.log('this', this);
                console.log('='.repeat(100));
            }
        }
        
        let app = new Vue({
            el: '#app',
            data: {
                title: 'whisper',
                show: true,
                hasError: false
            },
            components: {
                'kkb-component': kkbComponent
            },

            beforeCreate() {
                console.log('beforeCreate');
                console.log('data', this.$data);
                console.log('el', this.$el);
                console.log('='.repeat(100));
            },
            created() {
                console.log('created');
                console.log('data', this.$data);
                console.log('el', this.$el);
                console.log('='.repeat(100));
            },
            beforeMount() {
                console.log('beforeMount');
                console.log('data', this.$data);
                console.log('el', this.$el);
                console.log('='.repeat(100));
            },
            mounted() {
                console.log('mounted');
                console.log('data', this.$data);
                console.log('el', this.$el);
                console.log('='.repeat(100));
            },
            beforeUpdate() {
                console.log('beforeUpdate');
                console.log('props', this.$props);
                console.log('='.repeat(100));
            },
            updated() {
                console.log('updated');
                console.log('='.repeat(100));
            },
            beforeDestroy() {
                console.log('beforeDestroy');
                console.log('this', this);
                console.log('='.repeat(100));
            },
            destroyed() {
                console.log('destroyed');
                console.log('this', this);
                console.log('='.repeat(100));
            },
            errorCaptured(err, vm, info) {
                console.log('errorCaptured');
                console.log(err, vm, info);
                console.log('='.repeat(100));
                this.hasError = true;
                return false;
            }
        });
    </script>
</body>
</html>
```

### 创建阶段

#### beforeCreate()

初始化阶段，应用不多

#### created()

在实例创建完成后被立即调用，该阶段完成了对 `data` 中的数据的 `observer`，该阶段可以处理一些异步任务

### 挂载阶段

#### beforeMount()

在挂载开始之前被调用，应用不多

#### mounted()

该阶段执行完了模板解析，以及挂载。同时组件根组件元素被赋给了 `$el` 属性，该阶段可以通过 <u>DOM</u> 操作来对组件内部元素进行处理了

### 更新阶段

#### beforeUpdate()

数据更新时调用，但是还没有对视图进行重新渲染，这个时候，可以获取视图更新之前的状态

#### updated()

由于数据的变更导致的视图重新渲染，可以通过 <u>DOM</u> 操作来获取视图的最新状态

### 卸载阶段

#### beforeDestroy()

实例销毁之前调用，移除一些不必要的冗余数据，比如定时器

#### destroyed()

Vue 实例销毁后调用

#### errorCaptured()

当捕获一个来自子孙组件的错误时被调用，此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 `false` 以阻止该错误继续向上传播。

## ref 与 $refs

如果我们希望获取组件节点，进行 <u>DOM</u> 相关操作，可以通过 `ref` 和 `$refs` 来完成

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <div id="app">
        <h1>{{title}}</h1>
        <button @click="getBoxHeight">获取 box 的高度</button>
        <button @click="getKKBComponent">获取自定义组件实例及内部方法</button>
        <hr>
        <div ref="box">
            这是内容<br>这是内容<br>这是内容<br>这是内容<br>这是内容<br>
        </div>
        <hr>
        <kkb-component ref="kkb" :t="title"></kkb-component>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>

        const kkbComponent = {
            props: ['t'],
            data() {
                return {
                    isShow: true
                }
            },
            template: `
                <div v-if="isShow">
                    <h1>kkbComponent - {{t}}</h1>
                </div>
            `,
            methods: {
                hide() {
                    this.isShow = false;
                }
            }
        }
        
        let app = new Vue({
            el: '#app',
            data: {
                title: 'whisper'
            },
            components: {
                'kkb-component': kkbComponent
            },
            mounted() {
                console.log(this.$refs.kkb);
            },
            methods: {
                getBoxHeight() {
                    console.log( this.$refs.box.clientHeight );
                },
                getKKBComponent() {
                    this.$refs.kkb.hide();
                }
            }
        });
    </script>
</body>
</html>
```

### ref

给元素或组件添加 `ref` 属性，则该元素或组件实例对象将被添加到当前组件实例对象的 `$refs` 属性下面

### $refs

该属性的是一个对象，存储了通过 `ref` 绑定的元素对象或者组件实例对象



## nextTick

当数据更新的时候，视图并不会立即渲染，这个时候我们期望获取到视图更新后的数据，可以通过 `nextTick` 来进行操作

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <div id="app">
        <h1>{{title}}</h1>
        <button @click="setBoxContent">设置新的内容</button>
        <hr>
        <div ref="box" style="background: red" v-html="content"></div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>
        
        let app = new Vue({
            el: '#app',
            data: {
                title: 'whisper',
                n: 1
            },
            computed: {
                content() {
                    return new Array(this.n).fill(this.title).join('<br>');
                }
            },
            methods: {
                setBoxContent() {
                    this.n++;
                    this.$nextTick(_=>{
                        console.log( this.$refs.box.clientHeight );
                    })
                }
            }
        });
    </script>
</body>
</html>
```

`nextTick` 方法将在更新队列循环结束之后立即调用



## 动态组件

有的时候，我们需要在多个不同的组件之间进行切换。虽然我们可以通过 <u>v-if</u> 来处理，但是会比较麻烦，`vue` 提供了一个更方便的方式来处理这种情况

### component 组件

`component` 是 `vue` 内置的一个组件，它提供一个 `is` 属性用来动态渲染不同的组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .current {
            background: yellow;
        }
    </style>
</head>
<body>

    <div id="app">
        <button @click="goto('InBox')" :class="{'current': currentComponent==='InBox'}">收邮件</button>
        <button @click="goto('PostMail')" :class="{'current': currentComponent==='PostMail'}">发邮件</button>
        <button @click="goto('RecycleBin')" :class="{'current': currentComponent==='RecycleBin'}">垃圾箱</button>
        <hr>
        <component :is="currentComponent"></component>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>

        const InBox = {
            data() {
                return {
                    items: [
                        '111111',
                        '22222222222',
                        'aaaaaaaa',
                        '3333333'
                    ]
                }
            },
            template: `
                <div>
                    <ul>
                        <li v-for="item of items">
                            <input type="checkbox" />
                            {{item}}
                        </li>
                    </ul>
                </div>
            `,
            created() {
                console.log('InBox:created');
            },
            destroyed() {
                console.log('InBox:destroyed');
            }
        }
        const PostMail = {
            template: `
                <div>PostMail</div>
            `,
            created() {
                console.log('PostMail:created');
            },
            destroyed() {
                console.log('PostMail:destroyed');
            }
        }
        const RecycleBin = {
            template: `
                <div>RecycleBin</div>
            `,
            created() {
                console.log('RecycleBin:created');
            },
            destroyed() {
                console.log('RecycleBin:destroyed');
            }
        }
        
        let app = new Vue({
            el: '#app',
            data: {
                currentComponent: 'InBox'
            },
            components: {
                InBox,
                PostMail,
                RecycleBin
            },
            methods: {
                goto(target) {
                    this.currentComponent = target;
                }
            }
        });
    </script>
</body>
</html>
```

我们会发现，当组件切换的时候，都会触发组件的销毁和重建。首先，性能不好。其次，会丢失组件状态

### keep-alive 组件

当在这些组件之间切换的时候，有时会想保持这些组件的状态，以避免反复重渲染导致的性能问题。`keep-alive` 是一个内置容器组件， 使用 `>keep-alive` 以后，内部包含的组件将增加 `激活` 和 `失活/冻结` 的状态

```html
<keep-alive>
  <component :is="currentComponent"></component>
</keep-alive>
```

### 生命周期

使用了 `keep-alive` 的组件会触发 `activated`、`deactivated` 两个生命周期函数

#### activated

`keep-alive` 组件激活时调用

#### `deactivated`

`keep-alive` 组件停用时调用





## 插件

插件通常是用来给 `vue` 提供扩展功能的一种方式

- 给 `Vue` 添加属性和方法
- 给 `Vue 实例` 添加属性和方法
- 添加全局资源：指令、过滤器、组件等
- 添加配置选项

### 安装插件

通过全局方法 `Vue.use()` 使用插件。它需要在调用 `new Vue()` 启动应用之前完成

```js
Vue.use(插件);
```

如果插件是一个对象，必须提供 `install` 方法。如果插件是一个函数，它会被作为 `install` 方法。`install` 方法调用时，会将 <u>Vue</u> 作为参数传入

```js
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```

### 实例

**axios**

https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js

```js
function http(_Vue, options) {
  _Vue.prototype.$http = axios;
}

Vue.use(http);

// or

function http(_Vue, options) {
  _Vue.prototype.$http = adaptor.http;
}

Vue.use(http, {adaptor: axios});

new Vue({
  el: '#app',
  data: {
  },
  async created() {
    // let rs = await axios({
    //     method: 'post',
    //     url: 'https://api.apiopen.top/musicRankings'
    // });
    // console.log(rs);

    let rs = await this.$http({
      method: 'post',
      url: 'https://api.apiopen.top/musicRankings'
    });
    console.log(rs);
  }
});
```

> 修改 `prototype` 会修改整个 `Vue` 原型链

另外一种方式

```js
function http(_Vue) {
  _Vue.mixin({
    beforeCreate() {
      if ( this.$options.adaptor ) {
        this.$http = this.$options.adaptor;
      }
      if ( this.$options.parent && this.$options.parent.$http ) {
        this.$http = this.$options.parent.$http;
      }
    }
  });
}

Vue.use(http);

new Vue({
  el: '#app',
  adaptor: axios,
  components: {
    'my-component': myComponent
  }
})
```



## 动画

在 `vue` 中给组件或元素添加动画的方式可以分为多种，但总体无非还是通过 `css` 和 `JavaScript` 来进行处理

### CSS

通过 `css` 添加动画的方式特别的简单，只需要利用 `css` 中的 `transition` 就可以做到

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .js_animation_box {
            width: 100px;
            height: 100px;
            background: red;
            transition: .5s all;
        }
        .js_animation_box.end {
            width: 200px;
            height: 200px;
            background: green;
        }
    </style>
</head>
<body>
    <button id="js_animation_btn">原生动画</button>
    <div id="js_animation_box" class="js_animation_box"></div>
    <script>
        // 原生 + css
        let jsAnimationBtn = document.querySelector('#js_animation_btn');
        let jsAnimationBox = document.querySelector('#js_animation_box');

        jsAnimationBtn.onclick = function() {
            jsAnimationBox.classList.add('end');
        }
    </script>
</body>
</html>
```

### JavaScript

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .js_animation_box {
            width: 100px;
            height: 100px;
            background: red;
        }
    </style>
</head>
<body>
    <button id="js_animation_btn">原生动画</button>
    <div id="js_animation_box" class="js_animation_box"></div>
  	<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
    <script>
				// jq
        $('#js_animation_btn').on('click', function() {
            $('#js_animation_box').animate({
                width: 200,
                height: 200
            }, .5);
        });
    </script>
</body>
</html>
```

### vue 中的动画处理

在 `vue` 中基本和上面的处理方式是一样的

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .js_animation_box {
            width: 100px;
            height: 100px;
            background: red;
            transition: .5s all;
        }
        .js_animation_box.end {
            width: 200px;
            height: 200px;
            background: green;
        }
    </style>
</head>
<body>
    <div id="app">
        <button @click="isEnd = !isEnd">vue动画</button>
        <div :class="['js_animation_box', isEnd ? 'end' : '']"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        let app = new Vue({
            el: '#app',
            data: {
                isEnd: false
            }
        });
    </script>
</body>
</html>
```

#### 动画生命周期

`vue` 为元素和组件的几个特殊的情况提供了对应的处理方式

- 条件渲染 (使用 `v-if`)
- 条件展示 (使用 `v-show`)
- 动态组件
- 组件根节点

##### transition 组件

通过 `transition` 组件包裹的元素或组件，会在上面定义的几个场景中触发过渡，并添加指定的 `class` 样式

##### 过渡类名

- `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除
- `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数
- `v-enter-to`: **2.1.8版及以上** 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除
- `v-leave`: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除
- `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数
- `v-leave-to`: **2.1.8版及以上** 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除

![Transition Diagram](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC3%E8%8A%82%20Vue%EF%BC%88%E4%B8%89%EF%BC%89/2020-02-26%EF%BC%88vue03%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/transition.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .js_animation_box {
            width: 100px;
            height: 100px;
            background: red;
        }

        .slide-fade-enter-active, .slide-fade-leave-active {
            transition: all 5s ease;
        }
        .slide-fade-enter {
            width: 0;
            height: 0;
        }
        .slide-fade-enter-to {
            width: 100px;
            height: 100px;
        }
        .slide-fade-leave {
          	/*可以和slide-fade-enter-to合并*/
            width: 100px;
            height: 100px;
        }
        .slide-fade-leave-to {
          	/*可以和slide-fade-enter合并*/
            width: 0;
            height: 0;
        }
    </style>
</head>
<body>
    <div id="app">
        <button @click="isShow = !isShow">vue动画</button>
        <transition name="slide-fade">
            <div v-if="isShow" class="js_animation_box"></div>
        </transition>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        let app = new Vue({
            el: '#app',
            data: {
                isShow: false
            }
        });
    </script>
</body>
</html>
```



# vue-router

## 路由

当应用变得复杂以后，我们就需要通过一种便捷、高效的方式来管理应用，最常见的就是通过路由

路由：把 <u>url</u> 与 应用中的对应的组件进行关联，通过不同的 <u>url</u> 访问不同的组件

### <u>vue-router</u> 的安装

```bash
npm i vue-router
// OR
yarn add vue-router
```

### Vue.use()

通过前面提到的 <u>Vue.use</u> 方法，把 <u>vue-router</u> 安装到指定的 <u>Vue</u> 实例中

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
```

### 创建路由对象

通过 <u>vue-router</u> 提供的 <u>Router</u> 构造函数（类）创建路由对象，路由对象包含了当前使用的模式（<u>hash</u>、<u>history</u>）、路由信息（<u>url</u> 与 组件的对应关系）等信息

```javascript
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

const myRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
});

...,
  
new Vue({
  ...,
  router: myRouter
});
```

### <u>router-view</u> 组件

配置了路由信息以后，我们还需要中页面（组件）中指定路由对应的组件出现的位置，当当前访问的 <u>url</u> 与某个路由信息匹配的时候，该组件就会出现在 <u>router-view</u> 组件所在的位置

```vue
// App.vue
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <hr>
    <router-view/>
  </div>
</template>
```



## 异步请求

在实际的应用开发中，与后端交互，进行异步请求是很常见的需求

### axios

```bash
npm i axios
```

### 请求

```vue
// home.vue
<template>
  <div class="home">
    Home
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'home',
  data() {
    return {
      items: []
    }
  },
  created() {
    axios({
      url: 'http://localhost:7777/items'
    }).then(res => {
      this.items = res.data;
    });
  }
}
</script>

```

## 跨域

<u>vue-cli</u> 提供了一个内置基于 <u>node</u> 的 <u>webserver</u> ，我们可以使用它提供的 <u>proxy</u> 服务来进行跨域请求代理

### vue.config.js

在项目的根目录下创建一个 <u>vue.config.js</u> 的文件，通过 `npm run serve` 启动服务的时候，会读取该文件

### 跨域请求代理配置

```javascript
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7777',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```

> 修改配置文件，需要重启服务：`npm run serve`

```vue
// home.vue
<script>
...
created() {
  axios({
  	url: '/api/items'
  }).then(res => {
  	this.items = res.data;
	});
}
...
</script>
```



## vue-devTools

为了更方便的在开发过程中对 Vue 程序进行调试，除了传统的浏览器自带的 debug 工具以外，我们还可以通过一些专门为 Vue 提供的扩展插件来进行调试

参考：https://github.com/vuejs/vue-devtools

Vue.js-devtools，[点击下载](./assets/Vue.js-devtools_v3.1.6.crx)

##### 安装步骤

1、首先进入浏览器设置，点击 `扩展程序`

![img](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC6%E8%8A%82%20Vue%EF%BC%88%E5%85%AD%EF%BC%89/2020-03-04%EF%BC%88vue06-VueRouter%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/vue-devTools-1.png)

2、开启 `开发者模式`，点击 `加载已解压的扩展程序` 或者 直接拖拽已解压的扩展程序

​	注：已解压的扩展程序就是上面下载的 Vue.js-devtools_v3.1.6.crx

![img](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC6%E8%8A%82%20Vue%EF%BC%88%E5%85%AD%EF%BC%89/2020-03-04%EF%BC%88vue06-VueRouter%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/vue-devTools-2.png)

3、安装成功以后就可以看到：

![img](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC6%E8%8A%82%20Vue%EF%BC%88%E5%85%AD%EF%BC%89/2020-03-04%EF%BC%88vue06-VueRouter%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/vue-devTools-3.png)

点击红框处开启

4、通过 `npm run serve` 启动应用以后，即可看到浏览器右上角的 Vue 插件图片，图 `红框一` 处，表示 `Vue.js devtools` 已启动，点击图 `红框二` 的 vue 一项

![img](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC6%E8%8A%82%20Vue%EF%BC%88%E5%85%AD%EF%BC%89/2020-03-04%EF%BC%88vue06-VueRouter%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/vue-devTools-3.png)





## 动态路由

有的时候，我们需要把满足某种规则的路由全部匹配到同一个组件，比如不同的商品的 <u>url</u>

```
/item/1
/item/2
/item/3
...
```

我们不可能为每一个商品都定义一个独立的组件，而是把它们都映射到同一个组件，同时 <u>url</u> 后面的部分为动态变化的部分，我们会在设计路由的时候进行特殊的处理

```javascript
...
{
  path: '/item/:itemId',
  name: 'item',
  component: Item
}
...
```

其中 `:itemId` 表示匹配的 <u>url</u> 中动态部分内容，如上面的 1,2,3 等，同时该值将被赋值给路由的变量 <u>itemId</u>

```vue
// home.vue
<template>
  <div class="home">
    <h2>商品列表</h2>
    <ul class="item-list">
      <li class="head">
          <span>名称</span>
          <span>价格</span>
          <span>操作</span>
      </li>
      <li v-for="item of items" :key="item.id">
          <span>
            <router-link :to='{name: "item", params:{itemId: item.id}}'>{{item.name}}</router-link>
          </span>
          <span>{{item.price|RMB}}</span>
          <span>
            <button>添加到购物车</button>
          </span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import {RMB} from '@/filters/RMB';
export default {
  name: 'home',
  data() {
    return {
      items: []
    }
  },
  filters: {
    RMB
  },
  created() {
    axios({
      url: '/api/items'
    }).then(res => {
      this.items = res.data;
    });
  }
}
</script>
<style>
ul {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

.item-list li {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px dotted #333;
}
.item-list li.head {
    font-weight: bold;
}
.item-list li span {
    min-width: 200px;
}
</style>
```

### 路由对象

<u>vue-router</u> 会在组件中添加（注入）两个属性

- $router
- $route

#### $router 对象

该对象其实就是 <u>new VueRouter(...)</u> 得到的路由对象，通过该对象我们可以访问全局路由信息，调用路由下的方法，比如：`go`、`back`、`push` 等

#### $route 对象

通过该对象可以访问与当前路由匹配的信息

##### $route.params

获取动态路由有关的信息

```vue
// item.vue
<template>
    <div>
        <template v-if="item">
            <h2>商品详情 - {{item.name}}</h2>
            <dt>ID</dt>
            <dd>{{item.id}}</dd>
            <dt>名称</dt>
            <dd>{{item.name}}</dd>
            <dt>价格</dt>
            <dd>{{item.price|RMB}}</dd>
        </template>
        <template v-else>
            <h2>没有该商品信息</h2>
        </template>
    </div>
</template>
<script>
import axios from 'axios';
import {RMB} from '@/filters/RMB';
export default {
    name: 'item',
    data() {
        return {
            item: null
        }
    },
    filters: {
        RMB
    },
    created() {
        let itemId = Number(this.$route.params.itemId);
        if (itemId) {
            axios({
                url: `/api/item/${itemId}`
            }).then(res => {
                this.item = res.data;
            }).catch(err=>{});
        }
    }
}
</script>
```

## queryString

有的时候，我们可能也会用到 <u>queryString</u>

```vue
<select v-model="sort">
  <option value="desc">从高到低</option>
  <option value="asc">从低到高</option>
</select>
```

### $route.query

我们可以通过路由对象 <u>$route</u> 的 <u>query</u> 属性来获取 <u>queryString</u>

```vue
...
computed: {
	sort: {
		get() {
      return this.$route.query.sort || 'desc';
    }
	}
}
...
```

### 编程式导航

有的时候，我们可能需要用到编程的方式来导航（跳转），而不是点击链接。如：当 `sort` 发生改变的时候跳转

```vue
...
computed: {
	sort: {
		get() {
      return this.$route.query.sort || 'desc';
    },
		set(newVal) {
			this.$router.push({
        name: 'home',
        query: {
          sort: newVal
        }
      });
		}
	}
}
...
```



## 路由组件的复用

为了提高性能，增强路由组件的复用，当路由切换使用的是同一个组件的时候，则会复用该路由组件，而不是销毁重建，这个时候，我们就需要通过 <u>watch</u> 或者 路由相关的生命周期函数来处理切换路由导致的变化

### watch

如果切换的路由复用了组件，这个时候，我们可以使用 <u>watch</u> 监听 <u>$route</u>

```vue
watch: {
  $route(to, from) {
      console.log('$route');
  }
}
```

- to : 改变之后的 <u>$route</u> 对象
- from : 改变之前的 <u>$route</u> 对象

但是我们可以使用 <u>vue-router</u> 提供路由守卫 （路由有关的生命周期函数）来处理路由有关的业务逻辑



## 路由守卫

当导航发生改变的时候，<u>vue-router</u> 会在多个不同的地方调用指定的函数，也就是与路由有关的生命周期函数，也称为：路由守卫

- 组件内守卫
- 路由独享守卫
- 全局守卫

### 组件内守卫

定义在组件内的与路由有关的生命周期函数（守卫）

- beforeRouteEnter
- beforeRouteUpdate
- beforeRouteLeave

#### beforeRouteEnter

当路由解析完成，并中指定的组件渲染之前（组件 `beforeCreate`  之前），不能这里通过 `this` 访问组件实例，需要通过 `next` 回调来进行调用

```javascript
beforeRouteEnter (to, from, next) {
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  	next(vm => {
      // vm...
    })
}
```

#### beforeRouteUpdate

在当前路由改变，但是该组件被复用时调用

```javascript
beforeRouteUpdate (to, from, next) {
    // 可以访问组件实例 `this`
},
```

#### beforeRouteLeave

导航离开该组件的对应路由时调用

```javascript
beforeRouteLeave (to, from, next) {
    // 可以访问组件实例 `this`
}
```

### 路由守卫参数

#### to

即将要进入的目标 路由对象（$route）

#### from

当前导航正要离开的路由对象（$route）

#### next

路由确认回调函数，类似 <u>Promise</u> 中的 <u>resolve</u> 函数，一定要确保调用 <u>next</u> 函数，但是后续的导航行为将依赖 <u>next</u> 方法的调用参数

- **`next()`** : 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 **confirmed** (确认的)
- **`next(false)`** : 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 `from` 路由对应的地址
- **`next('/') 或者 next({ path: '/' })`** : 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航

### 路由独享的守卫

可以在路由配置上直接定义 `beforeEnter` 守卫，相对来说，应用不多

```javascript
const router = new VueRouter(
  { 
    routes: [ 
      { 
        path: '/foo', 
        component: Foo, 
        beforeEnter: (to, from, next) => { 
          // ... 
      	}
    	} 
    ] 
  }
)
```

### 全局守卫

全局守卫是注册在 <u>router</u> 对象（new VueRouter({...})）上的

- beforeEach
- beforeResolve
- afterEach

#### beforeEach

当一个导航触发时，全局前置守卫按照创建顺序调用

```javascript
router.beforeEach((to, from, next) => {
  // ...
})
```

#### beforeResolve

在所有组件内守卫和异步路由组件被解析之后被调用

```javascript
router.beforeResolve((to, from, next) => {
  // ...
})
```

#### afterEach

导航被确认后调用

```javascript
router.afterEach((to, from) => {
  // ...
})
```

> 因为导航已经被确认，所以没有 `next`



## 嵌套路由

一些比较复杂的应用会有多层嵌套的路由和组件组成

在应用增加一个用户个人中心，用户中心又是由多个页面组成，如：

![image-20190813144811522](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC6%E8%8A%82%20Vue%EF%BC%88%E5%85%AD%EF%BC%89/2020-03-04%EF%BC%88vue06-VueRouter%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/vue-router-usercenter.png)

### 添加路由与子路由

```javascript
...
import User from './views/User.vue'
import Profile from './views/User/Profile'
import Cart from './views/User/Cart.vue'
...

...
{
  path: '/user',
  component: User,
  children: [
		{
			path: '',
			name: 'user',
			component: Profile
		},
    {
      path: 'cart',
      name: 'user-cart',
      component: Cart
    }
  ]
}
...
```

#### <u>children</u> 属性

一个路由中的 `children` 表示嵌套的子路由

- 子路由的 `path` 如果以 `/` 开头表示根路径，不再基于父级路径，否则基于父级 `path` 
- 如果一个子路由的 `path` 为空，表示为默认子路由
- 如果一个路由有默认子路由，则父级 `name` 属性需要设置给这个默认子路由

### 子路由视图

有了子路由以后，还需要在视图组件中设置 `router-view` 

```vue
// User.vue
<template>
    <div>
        <h3>用户中心</h3>
        <ul class="left">
            <router-link exact tag="li" :to="{name: 'user'}">基本信息</router-link>
            <router-link tag="li" :to="{name: 'user-cart'}">我的购物车</router-link>
        </ul>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.left {
    float: left;
    width: 200px;
}
.left li {
    line-height: 30px;
    cursor: pointer;
}
</style>
```

## 重定向

有的时候，我们会根据某种需求对用户请求的页面进行重新定位

### 案例

现有一小说网站，提供了 <u>男生频道</u> 和 <u>女生频道</u> 的两个入口，用户首次进入页面的时候，会出现选择，并记住用户的选择，以后该用户进入网站直接根据记录的选择进入对应的频道

#### 组件

```vue
// BookChoose.vue
<template>
    <div>
        <router-link :to="{name: 'book-boy'}">男生</router-link>
        <span> | </span>
        <router-link :to="{name: 'book-girl'}">女生</router-link>
    </div>
</template>
```

```vue
// BookBoy.vue
<template>
    <div>
        BookBoy
    </div>
</template>

<script>
export default {
    name: 'BookBoy',
    created() {
        localStorage.setItem('book-type', 'book-boy');
    }
}
</script>
```

```vue
// BookGirl.vue
<template>
    <div>
        BookGirl
    </div>
</template>

<script>
export default {
    name: 'BookGirl',
    created() {
        localStorage.setItem('book-type', 'book-girl');
    }
}
</script>
```

#### 路由配置

```javascript
{
  path: '/book',
  name: 'book',
  // redirect: { name: 'book-choose' }
  redirect: to => {
    let type = localStorage.getItem('book-type')
    return { name: type || 'book-choose' }
  }
},
{
  path: '/book-choose',
  name: 'book-choose',
  component: BookChoose
},
{
  path: '/book-boy',
  name: 'book-boy',
  component: BookBoy
},
{
  path: '/book-girl',
  name: 'book-girl',
  component: BookGirl
}
```



## 别名

重定向，是从一个路由切换到另外一个路由，而别名是不同的路由显示同一个页面，比如：`/user` 是用户中心的路由，`/member` ，我们也可以给这个页面定义另外一个路由，虽然在某些时候，重定向与别名有类似的效果，但是，别名不存在跳转，浏览器地址栏上显示的 <u>URL</u> 并不会切换

```javascript
{ 
  path: '/user',
  alias: '/member'
  component: User, 
}
```



## 404

```javascript
{
  path: '*',
  component: NotFound
}
```

> 写在最后

## 路由组件传参

我们通常把路由直接映射（绑定）的组件称为 <u>路由组件</u>，也只有路由组件才能直接调用路由有关对象：`$router`、`$route`

当我们一个组件即希望作为路由组件使用，又可能作为功能组件（某个页面中的一部分）去使用，这个时候路由组件传参的方式来做到这点

### 案例

我们对 <u>item.vue</u> 组件进行改造，当我们在 <u>home.vue</u> 的商品列表上移入移出，出现商品信息提示层

![image-20190814151230581](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC6%E8%8A%82%20Vue%EF%BC%88%E5%85%AD%EF%BC%89/2020-03-04%EF%BC%88vue06-VueRouter%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/item-tip-layer.png)

```vue
// Home.vue
<template>
	...
  <li v-for="item of items" :key="item.id">
    <span>
      <router-link @mouseover.native="mouseover(item.id, $event)" @mouseout.native="mouseout(item.id, $event)" :to='{name: "item", params:{itemId: item.id}}'>{{item.name}}</router-link>
    </span>
    <span>{{item.price|RMB}}</span>
    <span>
      <button>添加到购物车</button>
    </span>
  </li>
	...
	<div class="tip" :style="{left: tip.left, top: tip.top}" v-show="tip.isShow">
    <Item :itemId="tip.itemId"></Item>
  </div>
	...
</template>
<script>
...
export default {
  ...,
  data() {
    return {
      items: [],
      tip: {
        itemId: 0,
        isShow: false,
        left: 0,
        top: 0
      }
    }
  },
  ...
  methods: {
    ...,
    mouseover(itemId, e) {
      let pos = e.target.getBoundingClientRect();
      this.tip.itemId = itemId;
      this.tip.left = pos.left + pos.width + 10 + 'px';
      this.tip.top = pos.top + 'px';
      this.tip.isShow = true;
    },
    mouseout(itemId, e) {
      this.tip.isShow = false;
    }
  }
}
</script>
<style>
...
.tip {
  position: fixed;
  left: 0;
  top: 0;
  border: 1px solid #000;
  background: #fff;
  padding: 10px;
}
</style>
```

因为原来的 <u>Item.vue</u> 组件时通过 `this.$route.params.itemId` 来接收 `itemId` 的，但是作为功能组件 `itemId` 需要通过 <u>prop</u>  来传入了，这个时候，我们需要对 <u>Item.vue</u> 组件进行改造

```vue
<template>
    <div>
        <template v-if="item">
            <h2>商品详情 - {{item.name}}</h2>
            <dt>ID</dt>
            <dd>{{item.id}}</dd>
            <dt>名称</dt>
            <dd>{{item.name}}</dd>
            <dt>价格</dt>
            <dd>{{item.price|RMB}}</dd>
        </template>
        <template v-else>
            <h2>没有该商品信息</h2>
        </template>
    </div>
</template>
<script>
import axios from 'axios';
import {RMB} from '@/filters/RMB';
export default {
    name: 'item',
    props: ['itemId'],
    data() {
        return {
            item: null
        }
    },
    filters: {
        RMB
    },
    watch: {
        itemId() {
            this.getItem();
        }
    },
    created() {
        // let itemId = Number(this.$route.params.itemId);
        this.getItem();
    },
    methods: {
        getItem() {
            if (this.itemId) {
                axios({
                    url: `/api/item/${this.itemId}`
                }).then(res => {
                    this.item = res.data;
                }).catch(err=>{});
            }
        }
    }
}
</script>
```

但是这个时候，我们的 <u>Item.vue</u>  可以接收来自 <u>props</u> 的参数，却不可以处理来自路由的 <u>params</u> 参数了。为了能给让 <u>Item.vue</u> 组件既能接收 <u>props</u> 传递的参数，也能接收 <u>route.params</u> 传递的参数，需要对 路由 也进行一些改造

```javascript
{
  path: '/item/:itemId',
  name: 'item',
  component: Item,
  props: true
}
```

#### 默认处理

当 `props` 设置 为 `true`，那么 `route.params` 中的数据自动就会被设置为组件属性与组件原有 <u>props</u> 进行合并

#### 对象模式的 

我们也可以有选择的返回 <u>props</u>

```javascript
{
  path: '/item/:itemId',
  name: 'item',
  component: Item,
  props: {a: 1, b: 2}
}
```

#### 回调函数模式

也可以使用回调函数模式

```javascript
{
  path: '/item/:itemId',
  name: 'item',
  component: Item,
  props: r => ({ itemId: Number(r.params.itemId) })
}
```



## 数据获取

有的时候，进入某个路由以后，我们需要从服务端获取数据，比如 `/item/:itemId` ，通常，我们有两种方式来实现

- **导航完成之后获取**：先完成导航，然后在接下来的组件生命周期钩子中获取数据，在数据获取期间显示加载中之类的 loading 提示
- **导航完成之前获取：** 导航完成之前，在路由进入的守卫中获取数据，在数据获取成功以后执行导航。

这两种方式都没有任何问题（对错、好坏），自行选择



### 导航完成之后获取

```vue
<template>
    <div>
        <template v-if="loading">
            Loading......
        </template>

        <template v-if="hasError">
            <h2>没有该商品信息</h2>
        </template>

        <template v-if="item">
            <h2>商品详情 - {{item.name}}</h2>
            <dt>ID</dt>
            <dd>{{item.id}}</dd>
            <dt>名称</dt>
            <dd>{{item.name}}</dd>
            <dt>价格</dt>
            <dd>{{item.price|RMB}}</dd>
        </template>
    </div>
</template>
<script>
import axios from 'axios';
import {RMB} from '@/filters/RMB';
export default {
    name: 'item',
    props: ['itemId'],
    data() {
        return {
            loading: false,
            hasError: false,
            item: null
        }
    },
    filters: {
        RMB
    },
    watch: {
        itemId() {
            this.getItem();
        }
    },
    created() {
        this.getItem();
    },
    methods: {
        getItem() {
            this.loading = true;
            if (this.itemId) {
                axios({
                    url: `/api/item/${this.itemId}`
                }).then(res => {
                    this.item = res.data;
                }).catch(err=>this.hasError=true).then(_=>{
                    this.loading = false;
                });
            }
        }
    }
}
</script>
```

### 导航完成之前获取

```vue
// item.vue

<script>
export default {
  ...,
  beforeRouteEnter( to, from, next ) {
    console.log('开始');
    return axios({
      url: `/api/item/${to.params.itemId}`
    }).then(res => {
      // 注意 beforeRouteEnter 还不能获取组件实例
      next(vm => {
        vm.item = res.data;
      });
    }).catch(err=>{
      next(vm => {
        vm.hasError = true;
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    return axios({
      url: `/api/item/${to.params.itemId}`
    }).then(res => {
      // 注意 beforeRouteEnter 还不能获取组件实例
      this.item = res.data;
    }).catch(err=>{
      this.hasError = true;
    });
  }
}
</script>
```

### 扩展 - nprogress

http://ricostacruz.com/nprogress/

#### 安装

```bash
npm i nprogress
// OR
yarn add nprogress
```

配合 <u>router</u> 全局守卫

```javascript
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = new Router({
  //...
});    
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  NProgress.done()
})

export default router
```

## 路由动效

利用 `transition` 组件，我们还可以给路由导航加上动效

```vue
// App.vue
<template>
...
<transition name="fade">
  <router-view/>
</transition>
...
</template>
<style>
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave-active {
  transition: none;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
```

## 滚动行为

前端路由并没有重载整个浏览器，只是通过 DOM 进行了局部更新。所以，有的时候，浏览器的一只状态会被保持，比如 滚动条，当我们在一个页面中滚动滚动条，然后跳转到另外一个页面，滚动条会保持在上一个页面中，我们其实更希望滚动条能回到页面顶部，就像重载了整个页面一样

```javascript
const router = new VueRouter({
  routes: [...],
  scrollBehavior: () => ({ y: 0 })
});
```

### 后退/前进

正对 后退/前进 行为，会提供一个 `savedPosition` 参数，通过该参数返回历史记录中的滚动值

```javascript
scrollBehavior (to, from, savedPosition) {
  // console.log(savedPosition)
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
```

## 路由元信息

定义路由的时候可以配置 `meta` 字段

### 通过 `meta` 定义要验证的路由

```javascript
const router = new Router({
  routes: [
    {
      path: '/user',
      component: User,
      children: [
        {
          path: '',
          name: 'user',
          component: Profile,
          meta: { requiresAuth: true }
        },
        {
          path: 'cart',
          name: 'user-cart',
          component: Cart,
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})

const isLogin = true;

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (to.meta.requiresAuth && !isLogin) {
      next({
        name: 'login',
      })
  } else {
    next()
  }
  
})
```

**或者**

```javascript
const router = new Router({
  routes: [
    {
      path: '/user',
      component: User,
      meta: { requiresAuth: true }
      children: [
        {
          path: '',
          name: 'user',
          component: Profile
        },
        {
          path: 'cart',
          name: 'user-cart',
          component: Cart
        }
      ]
    }
  ]
})

const isLogin = true;

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (to.matched.some(record => record.meta.requiresAuth) && !isLogin) {
      next({
        name: 'login',
      })
  } else {
    next()
  }
  
})
```

## 路由懒加载

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了

```javascript
import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Item from './views/Item.vue'
// import User from './views/User.vue'
// import Profile from './views/User/Profile'
// import Cart from './views/User/Cart'
// import BookChoose from './views/Book/BookChoose'
// import BookBoy from './views/Book/BookBoy'
// import BookGirl from './views/Book/BookGirl'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/item/:itemId',
      name: 'item',
      component: () => import('./views/Item.vue'),
      props: r => ({ itemId: Number(r.params.itemId) })
    },
    {
      path: '/user',
      component: () => import(/* webpackChunkName: "user" */ './views/User.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'user',
          component: () => import(/* webpackChunkName: "user" */ './views/User/Profile.vue')
        },
        {
          path: 'cart',
          name: 'user-cart',
          component: () => import(/* webpackChunkName: "user" */ './views/User/Cart.vue')
        }
      ]
    },
    {
      path: '/book',
      name: 'book',
      // redirect: { name: 'book-choose' }
      redirect: to => {
        let type = localStorage.getItem('book-type')
        return { name: type || 'book-choose' }
      }
    },
    {
      path: '/book-choose',
      name: 'book-choose',
      component: () => import(/* webpackChunkName: "book" */ './views/Book/BookChoose.vue')
    },
    {
      path: '/book-boy',
      name: 'book-boy',
      component: () => import(/* webpackChunkName: "book" */ './views/Book/BookBoy.vue')
    },
    {
      path: '/book-girl',
      name: 'book-girl',
      component: () => import(/* webpackChunkName: "book" */ './views/Book/BookGirl.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (to.matched.some(record => record.meta.requiresAuth) && !isLogin) {
      next({
        name: 'login',
      })
  } else {
    next()
  }

  next()
})

router.afterEach((to, from, next) => {
  NProgress.done()
})

export default router

```





# vuex



## 1、为什么要用 vuex ？

组件通信的类型

- 父子通信
- 跨级通信
- 兄弟通信
- 路由视图级别通信





## 2、通信解决方案

- props/$emit（父子通信）
- $refs/ref（父子通信）
- $children/$parent（父子通信）
- $attrs/$listeners（父子通信、跨级通信）
- provide/inject（父子通信、跨级通信）
- eventBus（父子通信、跨级通信、兄弟通信）
- vuex（父子通信、跨级通信、兄弟通信、路由视图级别通信）
- localStorage/sessionStorage等基于浏览器客户端的存储（父子通信、跨级通信、兄弟通信、路由视图级别通信）



## 3、vuex 是什么？

Vuex 是一个专为 Vue.js 应用程序开发的 **状态管理模式**，类似 <u>redux</u>

![flow](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC8%E8%8A%82%20Vue%EF%BC%88%E5%85%AB%EF%BC%89/2020-03-09%EF%BC%88vue08-Vuex%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/flow.png)

这种状态管理模式包含：

- **State** : 状态数据源
- **View** : 使用状态数据源的视图
- **Actions** : 修改更新数据源的操作

这种模式遵循的是 <u>单向数据流</u> 模式



## 4、vuex 的工作流

![vuex](F:/JAVAScript---%E7%BD%91%E7%9B%98%E8%B5%84%E6%96%99/%E5%BC%80%E8%AF%BE%E5%90%A7%E7%AC%AC%E4%BA%94%E6%9C%9F/%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/Web%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E5%B7%A5%E7%A8%8B%E5%B8%88005%E6%9C%9F%E8%AF%BE%E4%BB%B6/15.%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%20Vue/%E7%AC%AC8%E8%8A%82%20Vue%EF%BC%88%E5%85%AB%EF%BC%89/2020-03-09%EF%BC%88vue08-Vuex%EF%BC%89/%E8%AF%BE%E4%BB%B6/assets/vuex.png)

- **State** : 存储应用状态数据（React 中的 State）
- **Vue Component** : 消费 <u>State</u>
- **Actions** : 提交修改 <u>State</u> 的动作（包括异步行为）（React 中的 action）
- **Mutations** : 唯一更改 <u>State</u> 的位置（React 中的 Reducer）



## 5、安装 vuex

```bash
npm i vuex
// or
yarn add vuex
```



## 6、引入 vuex

**通过 \<script\> 引入**

```html
<script src="vue.js"></script>
<script src="vuex.js"></script>
```

通过 \<script\> 方式引入，<u>vuex</u> 会自动安装（也就是主动调用 `Vue.use(Vuex)`）

**通过 `import` 引入**

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
```

通过 `import` 方式引入，需要手动安装（手动调用 `Vue.use(Vuex)`）



## 7、从 Store 开始

**`Store`  ** 就是仓库，我们前面提到的 `state` 就存储在 `store` 中，同时提交动作、修改状态的方法也都由 `store` 提供和管理

### 7-1、创建一个 Store

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {}
})
```

> 必须在 `Vue.use(Vuex)` 之后创建 `store`



## 8、核心概念

- state
- getters
- mutations
- actions

### 8-1、state

#### 8-1-1、state 的创建

存储应用状态数据的对象，`state` 的值可以是一个对象，也可以是一个返回对象的函数，类似 <u>vue</u> 中组件的 `data` ，使用函数的方式返回对象可以避免对象引用导致的副作用问题

```javascript
// let state = {
//   a: 1
// }
let state = _=>({a:1})

const store = new Vuex.Store({
  	state
})
const store2 = new Vuex.Store({
    state
})

console.log(store.state == store2.state)
store.state.a = 100;
console.log(store.state.a, store2.state.a);
```

- 通过 `store.state` 访问状态数据
- `state` 数据与组件 `data` 一样是被追踪的

#### 8-1-2、在组件中使用 store

```javascript
// stores/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
    state
})

export default store;
```

```javascript
// stores/state.js
export default () => ({
    title: '开课吧',
    content: 'javascript 高级工程师'
})
```

```vue
<template>
  <div class="home">
    <h2>{{title}}</h2>
    <div>{{content}}</div>
  </div>
</template>

<script>
import store from '@/stores'
export default {
  name: 'home',
  data() {
    return {
      title: store.state.title,
      content: store.state.content
    }
  }
}
</script>
```

> 问题：
>
> `state` 的更新并不会更新视图

**解决**

使用 <u>computed</u>

```vue
<template>
  <div class="home">
    <h2>{{title}}</h2>
    <div>{{content}}</div>
  </div>
</template>

<script>
import store from '@/stores'
export default {
  name: 'home',
  computed: {
    title() {
      return store.state.title
    },
    content() {
      return store.state.content
    }
  }
}
</script>
```

#### 8-1-3、store 配置

如果每个组件在使用 `store` 的时候都 `import` 会比较繁琐，这个时候，我们通过 <u>vuex</u> 提供的 `store` 选项把 `store` 对象注入到 <u>vue</u> 的原型上

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/stores'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

配置注入后，我们就可以在组件实例中使用 `this.$store` 来访问 `store` 对象了

```vue
<template>
  <div class="home">
    <h2>{{title}}</h2>
    <div>{{content}}</div>
  </div>
</template>

<script>
// import store from '@/stores' // 可以去掉了
export default {
  name: 'home',
  computed: {
    title() {
      return this.$store.state.title
    },
    content() {
      return this.$store.state.content
    }
  }
}
</script>
```

#### 8-1-4、使用辅助函数 `mapState`

当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 `mapState` 辅助函数帮助我们生成计算属性，让你少按几次键，通常我们把 `store` 的 `state` 通过 `mapState` 函数映射到组件的 `computed` 上

```vue
<template>
  <div class="home">
    <h2>{{title}}</h2>
    <div>{{content}}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'home',
  computed: mapState([
    'title','content'
  ])
}
</script>
```

通过对象方式进行映射

> 场景：当组件中已有与 `store` 同名的数据名称

```vue
<template>
  <div class="home">
    <h1>{{title}}</h1>
    <h2>{{subTitle}}</h2>
    <div>{{content}}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'home',
  data() {
    return {title: 'Vuex'}
  },
  computed: mapState({
      subTitle: 'title',
      content: ({content}) => content.length <= 12 ? content : content.substring(0, 12) + '......'
  })
}
</script>
```

#### 8-1-5、使用扩展运算符组合

通过对象扩展运算符，可以把 `mapState` 返回的 `state` 属性与组件已有计算属性进行融合

```vue
<script>
import {mapState} from 'vuex'

export default {
  computed: {
      computed() {/.../},
      ...mapState({
          // ...
      })
  }
}
</script>
```



### 9、getters

有时候我们需要从 store 中的 state 中派生出一些状态，类似组件的 `data` 与 `computed`，`store` 也提供了一个 `getters` 对象来处理派生数据

#### 9-1、getters 函数

与组件属性一样，我们是通过定义一个函数的形式来返回派生数据的，` getters` 函数接受两个参数

- 第一个参数：`state` 对象
- 第二个参数：`getters` 对象

#### 9-2、通过属性访问

同样的，与组件计算属性一样，默认是通过属性的方式去访问 `getters` 中的数据的，这种方式与组件的计算属性一样，也是会缓存结果的

#### 9-3、通过方法访问

我们还可以通过闭包函数的形式返回一个函数，来实现给 `getters` 函数传参，需要注意的是这种方式不支持结果缓存

#### 9-4、使用辅助函数 `mapGetters`

与 `mapState` 函数类似，通常映射到组件的 `computed` 上



### 10、mutations

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation（类似 redux 中的 action + reducer），Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)**

> `mutation` 中的函数不要直接调用

#### 10-1、提交

```javascript
store.commit(type, payload)
// or
store.commit({
    type: ...,
    payload: ...
})

```

**type**

要提交的 `mutation` 回调函数名称，type 为固定的 key

**payload**

载荷：提交的额外数据，任意格式

#### 10-2、mutation 函数

`mutation` 中的函数被 `commit` 执行的时候，接收两个参数

- 第一个参数：`state` 对象
- 第二个参数： `commit` 提交的 `payload`

在 `mutation` 函数中，我们就可以通过 `state` 对象进行状态数据的修改

#### 10-3、使用辅助函数 `mapMutations`

`mapMutations` 函数的使用与 `mapState` 和 `mapGetters` 类似，但是其一般是把组件的 `methods` 映射为 `store` 的 `mutations` 的 `commit` 调用

#### 10-4、mutation 函数必须是同步的

`commit` 方法没有返回值



### 11、actions

`action` 中的函数与 `mutation` 中的函数类似，但是它主要用来进行异步任务的处理，然后通过提交 `mutation` 来修改 `state`

> 注意：`action` 中的函数不要直接修改 `state`

#### 11-1、提交

```javascript
store.dispatch(type, payload)
// or
store.dispatch({
    type: ...,
    payload: ...
})

```

`action` 任务需要通过 `dispatch` 方法来提交（派发），与 `commit` 类似

`dispatch` 方法有返回值，且一定返回一个 `promise` 对象

#### 11-2、action 函数

`action` 中的函数执行的过程中也接受两个参数

- 第一个参数：`store` 对象
- 第二个参数： `dispatch` 提交的 `payload`

#### 11-3、使用辅助函数 `mapActions`

与 `mapMutations` 函数类似，把组件的 `methods` 映射为 `store` 的 `actions` 的 `dispatch` 调用



## Module

这个更多的是基于一种代码组织结构上的辅助

https://vuex.vuejs.org/zh/guide/modules.html

https://vuex.vuejs.org/zh/guide/structure.html





















