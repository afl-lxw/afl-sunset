# Vue

### 第一章 Vue介绍

#### 1.1 渐进式框架

Vue是一个渐进式框架.与其他重量级框架相比不同的是,Vue采用自底向上增量开发的设计.

Vue的核心代码只关注视图层.

```
声明式渲染->组件系统->客户端路由->大规模状态管理->构建工具
```

"模板引擎"->"单页应用"->"复杂单页应用/app"->"持续化集成"

在我们使用时,Vue不像其他框架一样有很强的侵入性.只需随着功能上的增加而增加模块。

>了不起的Vue：  https://github.com/vuejs/awesome-vue

#### 1.2 Vue的两个核心

**响应的数据绑定**

当数据发生改变->视图自动更新

利用`Object.definedProperty`对象中的setter/getter来代理数据 ie8不兼容

体验数据绑定

```html
<div id="demo">
    {{message}}
</div>

<script type="text/javascript">
    let data = {
        message:'hello Vue'
    }
    var vm = new Vue({
        el:'#demo',//选项对象
        data:data
    })
    //将参数渲染到视图中。我们需要实例化一个Vue并传入选项对象。el为挂载点。
</script>
```

**组合的视图组件**

将页面划分成功能块,类似积木堆叠,便于快速构建页面

+ ui页面映射为组件树
+ 划分组件可维护,可重用，可测试

>element.eleme.io 组件库快速搭建Vue页面 饿了么组件

#### 1.3 虚拟DOM

运行js的速度是很快的,大量的DOM操作会很慢,时常在更新数据的时候我们只是拼写了一点的HTML代码,使用innerHTML进行操作,但是这样的更新数据会重新渲染页面,造成了在没有改变数据的地方也重新渲染了DOM节点,这就造成了很大程度上的资源浪费.

Vue利用在内存中生成与真实DOM相对应的数据结构,这个在内存中生成的结构称之为虚拟DOM.

![img/progress.png](/img/progress.png)

当数据发生改变时,能够智能的计算出重新渲染组件的最小代价并应用到DOM操作上.

![img/DOM.png](/img/DOM.png)

document本身就是浏览器将标签抽取出来作为对象.
Vue则是通过rander方法将模版抽取成为虚拟DOM,在虚拟DOM改变时,对比改变前和改变后的结构,以最小的代价重新渲染真实DOM.虚拟DOM在js中的表现就是树状的对象结构。


>我们将会在rander函数中进一步体验

#### 1.4 MVVM模式

MVVM(Model-View-ViewModel),是一种软件设计的典范,也可以称之为MVC模式,即为Model-View-Controller的缩写，：

+ Model：数据模型（数据）
+ View：视图层，负责展示
+ VM ViewModel : 视图模型

Model通过VM层将数据渲染到DOM,由View展示给用户.同时用户的数据交互也可以映射到VM层,改变Model.

**双向数据绑定**

```html
<input type="text" name="name" v-model="message">
<!-- 视图层 -->
<div id="demo">
    {{message}}
</div>
<script type="text/javascript">
    //model
    let data = {
        message:'你好'
    }

    //view-model
    var vm = new Vue({
        el:"#demo",//挂载元素
        data:data
    })
</script>
```

### 第二章 Vue基础

#### 2.1 Vue实例

每一个应用都是通过Vue这个构造函数创造根实例启动的,想要启动一个项目,首先要得到Vue的实例.

`new Vue(选项对象)`

需要传入的选项对象,对象包含挂载元素,数据,模版,方法等.

+ el 挂载元素选择器  string|HTMLElement 
+ data 代理数据      Object|Function
+ methods 定义方法   Object

当然还有很多属性,我们先从这三个属性下手

>https://cn.vuejs.org/v2/api/

```html
<!-- html以模版形式渲染 -->
<div id="demo">
    <span v-on:click="clickHandle">{{message}}</span>
</div>
<script type="text/javascript">
//数据
    let obj = {
        message:'hello'
    }
//使用Vue实例传入数据
    var vm = new Vue({
        el:"demo",
        data:obj,
        methods:{
            //通常是事件处理函数或者声明周期函数,便于统一管理.
            clickHandle(){
                alert('click')
            }
        }
    })
    console.log(vm.$data)
</script>
```

**Vue实例支持属性和方法**

暴露自身的属性和方法,用$作为开头,比如$el,$data等

console.log(Vue.$data)

我们也可以直接对data中的数据进行取值操作


#### 2.2 声明式渲染

**声明式**

只需要声明在哪儿做什么，而无须关心如何实现。

**命令式**

需要以具体的代码规定在哪儿做什么

+ 例子：求数组中的每一项的倍数
    + 命令式 使用for循环拿出一项，然后求知完成后，再放入另一数组中

    + 声明式 使用map方法，关注如何求值


```html
<script type="text/javascript">
    var arr = [1,2,3,4,5]
    var newArr = []
    for(var i = 0;i<arr.length;i++){
        newArr.push(arr[i]*2)
    }
</script>
<script type="text/javascript">
    var arr = [1,2,3,4,5]
    arr.map(function(v){
        return v*2
    })
</script>
```

**Vue声明式渲染**

初始化根实例,Vue自动将数据绑定在DOM模板上. 

#### 2.3 指令和模版

##### 2.3.1 指令

指令是一种特殊的自定义行间属性

指令的职责就是当其表达式的值改变时相应的将某些行为应用到DOM

在Vue中,指令以v-开头，我们刚刚使用的v-on即为指令的一种.

**v-bind**

能帮助我们动态绑定数据,简写为`:`

```html
<div id="demo">
    <span v-bind:cutomId='id'>{{message}}</span>
</div>
<script type="text/javascript">
//数据
    let obj = {
        message:'hello',
        id:123,
    }
//使用Vue实例传入数据
    new Vue({
        el:"demo",
        data:obj,
    })
</script>
```

当然我们还可以绑定类和样式等属性

```html
<style type="text/css">
    .red{
        background: red;
    }
</style>
<div id="demo">
    <span v-bind:cutomId='id' :class="{red:addClass}">{{message}}</span>
</div>
<script type="text/javascript">
//数据
    let obj = {
        addClass:true,
        message:'hello',
        id:123,
    }
//使用Vue实例传入数据
    new Vue({
        el:"demo",
        data:obj,
    })
</script>
```

Vue是数据驱动的,因而类和样式最好通过数据进行驱动.

**v-on**

绑定事件监听器，简写为`@`

**v-text**

更新元素的`textContent`

```html
<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>
```

**v-html**

可以解析数据中的html结构,更新元素的`innerHTML`。

```html
<div v-html="html"></div>
```

**v-for**

基于源数据多次渲染元素或者模板

```html
<div id="demo" v-for="item in items">
    {{item}}
</div>
<script type="text/javascript">
//数据
    let obj = {
        items:['lisi','wangwu','zhangsan']
    }
//使用Vue实例传入数据
    new Vue({
        el:"#demo",
        data:obj,
    })
</script>
```


当然，指令还有很多，我们会在遇到相应的场景时依次讲解

##### 2.3.2 模板

**HTML模板**

基于DOM的模板，模板都是可以解析的有效HTML，写法和HTML结构一致。

*插值*则是在模板中渲染的数据

+ 文本: 使用`-Mustache`语法，`{{value}}`；
+ 原生的HTML：双大括号输出的是文本，不解析html，如果想要解析HTML，则使用`v-html`指令；
+ 属性：使用`v-bind`绑定自定义属性；
+ 表达式：可以在双花括号中写一些简单的表达式，但是不能写为语句的格式(模板中的逻辑处理可以单独抽离为计算属性)；


**字符串模板**

template是选项对象的属性，*模板会替换挂载的元素*，挂载元素的内容都会被忽略。

```html

<div id="demo">
    hello
</div>
<script type="text/javascript">
//数据
    let obj = {
        items:['lisi','wangwu','zhangsan']
    }
    var template = '<div>{{items[1]}}</div>'
//使用Vue实例传入数据
    new Vue({
        el:"#demo",
        data:obj,
        template:template
    })
</script>
```

根节点只有一个,不能拥有并列的属性.
当我们书写的模版中有兄弟节点时,会抛出异常.

我们也可以将模版定义在一对`script`标签中,设置`type='x-template'`,我们称之为片段.

```html
<div id="demo"></div>
    <script type="x-template" id="tmp">
        <div>{{items[1]}}</div>
    </script>
    <script type="text/javascript">
         let obj = {
            items:['lisi','wangwu','zhangsan']
        }
//使用Vue实例传入数据
        new Vue({
            el:"demo",
            data:obj,
            template:'#tmp'
        })
    </script>
```

局限性是不能跨文件使用.但是在单个页面上我们可以进行代码的复用.

**模板-render函数**

我们的Vue模版中,其实DOM不是直接渲染出来的,而是先提取差值,然后再进行渲染.

我们可以凭借render完成手动编译.

render函数可默认接受参数:

+ creatElement(标签名,[数据对象],子元素)

数据对象属性
    
+ class:{} 绑定class,和`v-bind:class`一样的API
+ style:{} 绑定样式,和`v-bind:style` 一样的API
+ attrs:{} 添加行间属性
+ on:{} 绑定事件
+ domProps:{} DOM对象的属性,注意,不是html自带属性,而是DOM对象属性
    

```html

<style type="text/css">
    .red{
        background: red;
    }
</style>
<div id="demo">

</div>
<script type="text/javascript">
//数据
    let obj = {
        message:'hello',
        id:123,
    }
//使用Vue实例传入数据
    new Vue({
        el:"demo",
        data:obj,
        render(creatElement){
            return creatElement(
                "ul",//父元素
                {
                    class:{
                        red:true
                    },
                    style:{
                        fontSize:'50px'
                    },
                    attr:{
                        abc:"bool"
                    },
                    domDrops:{
                        innerHTML:"<li>我是innerHTML</li>"//自动渲染到标签内部,下面的标签无效,需谨慎使用
                    }
                },
                [
                    creatElement('li',1),
                    creatElement('li',2),
                    creatElement('li',3),
                ],//子元素
                )
        }
    })
</script>
```

### 第三章 Vue实例 TodoList

#### 3.1 增删便签任务

**v-for**

使用v-for进行列表的渲染.把既定的数据渲染到前台.

todo.html

```html
<ul class="todo-list">
    <li class="todo" v-for="item in list">
        <div class="view">
            <input type="checkbox" class="toggle">
            <label>{{item.title}}</label>
            <button class="destroy"></button>
        </div>
        <input type="text" class="edit">
    </li>
</ul>
```

app.js

```js
var list = [
        {
            title:'起床',
        },
        {
            title:'吃饭',
        }
    ]
var Vue = new Vue({
    el:'.main',
    data:{
        list:list
    }
})
```

**在input框中手动添加数据**

写入数据触发事件,在数组中添加数据

todo.html

```html
<h3 class="big-title">添加任务：</h3>
<input 
placeholder="例如：学习" 
type="text" 
class="task-input"
@keyup="addTodo"
>
```

app.js

```js
var list = [
    ]
var Vue = new Vue({
    el:'.main',
    data:{
        list:list
    },
    methods:{
        addTodo(ev){ //添加任务
            if(ev.keyCode === 13){
                //this 指向Vue根实例
                this.list.push({
                    title:ev.target.value
                })
            }
        }
    }
})
```

>如果想要在函数调用时传递参数,形参可传$event,函数调用可以接收到

```
@keyup="addTodo(123,$event)"
```

*事件修饰符*:事件处理函数只有纯粹的逻辑判断,不处理DOM事件的细节,例如阻止冒泡,取消默认行为,判断按键,我们可以在事件名称后面跟上`.修饰符`,来帮助我们处理事件.

+ 修饰符
    * .stop
    * .prevent
    * .once
    * .self
    * .capture

+ 按键修饰符
    * .enter
    * .tab
    * .delete
    * .esc 等
    * .键值

通过实践修饰符和数据绑定,不使用DOM而是用数据驱动程序

```html
<input 
placeholder="例如：起床" 
type="text" 
class="task-input"
v-model='todo'
@keyup.enter="addTodo"
>
```

```js
var list = []
var Vue = new Vue({
    el: '.main',
    data: {
        list: list,
        todo:''
    },
    methods: {
        addTodo() { 
            this.list.push({
                title:this.todo 
            })
            this.todo = ''
        }
    }
})
```

**修改显示提示(条件渲染)**

使用`v-show`来进行条件渲染,切换css样式,但是元素依然存在

```html
<span class="no-task-tip" v-show:"!list.length" >还没有添加任何任务</span>
```

```html
 <ul class="task-count" v-show:"!list.length">
    <li>1个任务未完成</li>
    <li class="action">
        <a href="#all" class="active">所有任务</a>
        <a href="#unfinished">未完成的任务</a>
        <a href="#finished">完成的任务</a>
    </li>
</ul>
```

**修改勾选效果**

模版已经设置好了勾选划线的类,为'completed',默认情况设置input为不选中状态,修改被添加的数据:

```js
var Vue = new Vue({
    el: '.main',
    data: {
        list: list,
        todo:''
    },
    methods: {
        addTodo() { 
            this.list.push({
                title:this.todo,
                isChecked:false
            })
            this.todo = ''
        }
    }
})
```

我们可以用item下的isChecked数据驱动选中属性

```html
 <li class="todo" :class="{completed:item.isChecked}" v-for="item in list">
    <div class="view">
        <input type="checkbox" class="toggle" v-model="item.isChecked">
        <label>{{item.title}}</label>
        <button class="destroy"></button>
    </div>
    <input type="text" class="edit">
</li>
```

**删除数据**

将被删除元素传入,删除该元素

```html
<button class="destroy" @click="deleteTodo(item)"></button>
```

```js
deleteTodo(item){
    var index = this.list.indexOf(item)
    this.list.splice(index,1)
}
```

#### 3.2 编辑便签任务

**数据驱动显示输入框**

完成双击编辑的绑定,模版规定好了显示input,隐藏div的类,为editing

```html
<li class="todo" :class="{completed:item.isChecked,editing:editor === item}" v-for="item in list">
    <div class="view">
        <input type="checkbox" class="toggle" v-model="item.isChecked">
        <label @dblclick="editorTodo(item)">{{item.title}}</label>
        <button class="destroy" @click="deleteTodo(item)"></button>
    </div>
    <input type="text" class="edit" v-model='item.title'>
</li>
```

```js
var Vue = new Vue({
    el:'.main',
    data:{
        list:list,
        todo:'',
        editor:''
    },
    methods:{
        addTodo(){
            this.list.push({
                title:this.todo,
                isChecked:false
            }),
            this.todo = ''
        },
        deleteTodo(item){
            var index = this.list.indexOf(item)
            this.list.splice(index,1)
        },
        editorTodo(item){
            this.editor = item; //双击时将要编辑的内容赋予editor属性,从而使editing类被绑定
        }
    }
})
```

**自定义指令获取焦点**

我们的input框虽然能够取值当前编辑的item的内容，但是双击时并不能自动获取焦点，我们采用自定义指令来获取焦点。

自定义指令directive书写在选项对象内部，也可以通过实例注册在全局中，支持多种钩子函数：

```js
//全局
Vue.directive('focus',{
    inserted:function(){}
})

//实例
new Vue({
    directive:{
        focus:function(){}
    }
})
```


+ bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
+ inserted: 被绑定元素插入父节点时调用。
+ update: 所在组件的 VNode 更新时调用
+ componentUpdated: 所在组件的 VNode 及其孩子的 VNode 全部更新时调用。
+ unbind: 只调用一次， 指令与元素解绑时调用。

我们为实例注册一个自定义指令，完成当我们的input框内容发生改变时自动获取焦点

```html
<input 
    v-focus="editor === item" 
    type="text" 
    class="edit" 
    v-model='item.title'
>
```

```js
var Vue = new Vue({
    el:'.main',
    data:{
        list:list,
        todo:'',
        editor:''
    },
    methods:{
       //...
    },
    directives:{
        focus:function(el,binding){
            if (binding.value) {
                el.focus()
            }
        }
    }
})
```

**确认修改**

定义按下enter键或者input失去焦点时,保存修改状态

```html
<input 
    v-focus="editor === item" 
    type="text" 
    class="edit" 
    v-model='item.title'
    @blur="editorTodoEd"
    @keyup.enter="editorTodoEd"
>
```

我们只需要清空editor中的内容,使原来显示input的代码失效即可,因为我们的内容已经通过双向数据绑定了

```js
method:{
    editorTodoEd(){
        this.editor = ''
    }
}
```

**编辑后不修改**

点击esc取消修改,我们需要在编辑时提前记录item的title属性

```html
<input 
    v-focus="editor === item" 
    type="text" 
    class="edit" 
    v-model='item.title'
    @blur="editorTodoEd(item)"
    @keyup.enter="editorTodoEd(item)"
    @keyup.esc = "cancleTodo(item)"
>
```

```js
data:{
    list:list,
    todo:'',
    editor:'',
    beforeEditor:''
}

method:{
    editorTodo(item){
        this.beforeEditor = item.title //编辑前保存title
        this.editor = item;
    },
    editorTodoEd(){
        this.editor = ''
    },
    cancleTodo(item){
        item.title = this.beforeEditor;
        this.beforeEditor = '';
        this.editor = ''
    }
}
```

**未完成任务**

如果item的isChecked状态为false的话,代表任务没有完成,在这里需要筛选list,我们可以采用两种方式完成长度计算

函数式:

```html
{{noCheckedLength()}}
```

```js
method:{
    noCheckedLength(){
        return this.list.filter(function(item){
                return !item.isChecked
            }).length
    }
}
```

计算属性:

计算属性被写在选项对象中,用法跟普通data属性一致,只是计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。

```
computed:{}
```

用法:

```html
{{noCheckedLength}}
```

```js
new Vue({
    //...
    computed:{
        noCheckedLength:function(){
            return this.list.filter(function(item){
                return !item.isChecked
            }).length
        }
    }
    //...
})
```

#### 3.3 使用LocalStorage存储数据

为了让我们的数据能够在关闭页面后仍然存在，我们使用LocalStorage存储数据

```js
var store = {
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key)) || []
    }    
}
```

修改代码

```js
var list = store.fetch('bool')
```

因为我们只是取值，并未存值，所以本地并没有localStorage的值，而如果我们想存储数据的话，每一次list的改变都要被记录，所以我们将使用watch监听数据改变。

**watch深度监听**

watch是一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。

```js
new Vue({
    //...
    watch:{
        list:function(){
            store.save('bool',this.list)
        }
    }
    //...
})
```

但是默认的监听为浅监听，我们只能监听到list数组的元素变化，对于list内部的item中isChecked状态变化并不能监听，这时我们要使用深度监听

```js
new Vue({
    //...
    watch:{
        list:{
            handler:function(){
                store.save('bool',this.list)
            }
        },
        deep:true
    }
    //...
})
```

#### Hash 分配数据

切分视图为全部，已完成，未完成需要用到hash过滤

监听hash的方法

```js
window.addEventListenter('hashchange',function(){
    var hash = location.hash.slice(1)
})
```

因为我们进入页面时首先要获取当前的hash，所以我们要先执行一次hash获取

```js
function watchHashChange(){
    var hash = location.hash.slice(1)
}
window.addEventListenter('hashchange',watchHashChange)
```

接下来我们要根据hash对数据进行切分

定义三个a标签的hash值为

```html
<a href="#all" class="active">All</a>
<a href="#unfinished">ToDo</a>
<a href="#finished">Completed</a>
```

切分数据,并监听

数据中添加属性值,通过属性值的变化对数据进行筛选

```js
var filter = {
    all:function(list){
        return list;
    },
    finished:function(list){
        return list.filter(function(item){
            return item.isChecked;
        })
    },
    unfinished:function(){
        return list.filter(function(item){
            return !item.isChecked;
        })
    }
}

var Vue = new Vue({
    //...
    data:{
        //...
        visibility:'all'
    },
    computed:{
        //...
        filteredList:function(){
            return filter[this.visibility] ? filter[this.visibility](list) : list;
        }
    }
})


function watchHashChange(){
    var hash = location.hash.slice(1);
    Vue.visibility = hash
}
window.addEventListener('hashchange',watchHashChange)
```

**修改a标签的选中状态**

a标签的选中状态也可以根据hash数据来进行驱动

```html
<a href="#all" :class="{active:visibility === 'all'}">All</a>
<a href="#unfinished" :class="{active:visibility === 'unfinished'}">ToDo</a>
<a href="#finished" :class="{active:visibility === 'finished'}">Completed</a>
```


### 第四章 组件系统

#### 4.1 什么是组件
 
Vue中的组件其实就是页面组成的一部分,是一个具有独立的逻辑和功能或者界面,同时又能根据规定的就扣规则进行相互融合,变成一个完整的应用.

页面就是由一个个类似这样的部分组成,比如导航,列表,弹窗,下拉菜单等.页面只不过是这些组件的容器,组件自由组合形成功能完整的页面,当不需要某个组件,或者想要替换某个组件时,可以随时进行替换和删除,并不影响整个应用的运行.

组件的优点:

+ 提高开发效率
+ 方便重复使用
+ 简化调试步骤
+ 提升整个项目的可维护性
+ 便于协同开发

#### 4.2 Vue中的组件

Vue中的组件是一个自定义的标签,Vue的编译器为它添加特殊的功能,Vue也可以扩展原生的Html元素,封装可重用的代码  

我们对于原生的html,可以做到页面内的复制,但是很难做到页面间的引用.我们封装组件需要封装其行为,样式和结构.

在Vue中封装代码,替换自定义的标签

**注册组件**

+ 全局注册
    
    可以在任何模版中使用  
    语法: Vue.component(组件名,选项对象)  
    组件名的命名规范: 使用驼峰或者连接符形式  
    在html中使用组件: 注册`Vue.component('my-component',{})`,使用`<my-component></my-component>`作为自定义标签  

+ 局部注册

    在组件实例中通过选项对象注册,只在所注册的足用语中使用  
    ```
    {
        component:{
            组件名:选项对象
        }
    }
    ```

简单尝试使用组件封装下拉菜单

```js
Vue.component('my-component',{
        template://...
    })
```

#### 4.3 受限制的DOM元素

**DOM模版解析**  
Vue是在浏览器解析和标准化之后才获取模版内容,所以有些元素限制了能被它包裹的元素  
例如,如果我们的自定义标签放入了`ul`或者`select`当中,可能会出现错误,因为这两种标签的子元素是固定的,不符合W3C标准.  

结局的方法是使用特殊属性is来扩展html标签功能

```html
<table>
    <tr is='my-component'></tr>
</table>
```

#### 4.4 组件之间的通信

组件可以嵌套书写,父组件要给子组件传递数据,子组件需要将其内部发生的事情告知父组件.  
组件之间的作用域是孤立的,在子组件上直接使用父组件的数据  
可以在组建上使用自定义属性绑定数据,在组件中需要显式的用props声明自定义属性名

对于我们的下拉框,使用props传递数据:

```html
<my-component btn-value="查询"></my-component>
```

```js
Vue.component('my-component',{
        props:['btnValue'],//驼峰命名
        template:`
        <!-- ... -->
            <input type="button" :value="btnValue">
        <!-- ... -->
        `
    })
```

>props可以设定验证规则,用以过滤我们的数据

#### 4.5 代理数据设置

对于当前的下拉菜单,我们可以使用数据驱动列表的显示与隐藏.

自定义组件的选项对象中的data属性不能够写成对象形式,因为我们的模版都会用到代理数据,如果data定义成为一个公共对象,那么相当于我们所有的模版都共用一个代理数据,会导致data的值发生变化时,所有的模版都会发生相应的变化.

```js
var obj = {
    selectShow:true
}

Vue.component('my-component',{
        data:function(){
            return obj;
        },
        props:['btnValue'],
        template:`
        <input type="text" class="keyWord" @click="!selectShow">
        <input type="button" :value="btnValue">
        <ul class="list" v-show="selectShow">
            <li>html</li>
        </ul>
        `
    })
```

如上述修改,我们的所有组件同时发生变化.

只需要将外部obj替换成为内部data函数的返回值即可

```
data:function(){
    return {selectShow:true}
}
```

**子模版设置**

```js
Vue.component(`my-component`,{
    data:function(){
        return {selectShow:true}
    },
    props:['btnValue'],
    template:`
        <input type="text" class="keyWord" @click="!selectShow">
        <input type="button" :value="btnValue">
        <my-ul ng-show="selectShow"></my-ul>   
    `
    })
Vue.component('my-ul',{
    template:`
        <ul>
            <li></li>
            <li></li>
        </ul>
    `
    })

```

**动态绑定**

我们可以用v-bind逐级向下传递数据
```html
<div id="demo">
    <my-component btn-value="搜索" :list="list1"></my-component>
</div>
```

```js
Vue.component(`my-component`,{
    data:function(){
        return {selectShow:true}
    },
    props:['btnValue','list'],
    template:`
        <!-- ... -->
        <input type="text" class="keyWord" @click="!selectShow">
        <input type="button" :value="btnValue">
        <my-ul ng-show="selectShow" :list="list"></my-ul>   
    `
    })
Vue.component('my-ul',{
    props:['list'],
    template:`
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
    `
    })
var vm = new Vue({
    el:'#demo',
    data:{
        list1:['北京','上海','广州']
    }
    })
```

**向上传递数据**

在子组建中的li被点击之后,将其值传递到父组件,我们需要用到自定义事件

设置父组件的val,当我点击子组件的li时,通过自定义事件将值传递到父组件当中

```js
Vue.component(`my-component`,{
    data:function(){
        return  {
                    selectShow:true,
                    val:''
                }
    },
    props:['btnValue','list'],
    template:`
        <!-- ... -->
        <input type="text" class="keyWord" @click="!selectShow" :value="val">
        <my-ul ng-show="selectShow" :list="list" @receive="changeHandler"></my-ul>   
    `,
    methods:{
        changeHandler(item){
            this.val = item
        }
    }
    })
Vue.component('my-ul',{
    props:['list'],
    template:`
        <ul>
            <li v-for="item in list" @click="clickHandle(item)">{{item}}</li>
        </ul>
    `,
    methods:{
        clickHandle(item){
            this.$emit('receive',item)
        }
    }
    })
```

当前的子模板上存在$emit帮助我们定义自定义事件,我们需要在父模版上通过v-on绑定

#### 4.6 单向数据流

数据从父组件流向子组件,只能单向绑定,在子组件内部不应该修改父组件传递过来的数据,

```html
<div id="demo">
    <my-component :count="count"></my-component>
</div>
<script type="text/javascript">
    Vue.component('my-component',{
        props:['count'],
        template:`
            <div>
                <h2>自定义组件</h2>
                <input type="button" value='改变count值' @click="count = count+1" />
                {{count}}
            </div>
        `
    })
    var vm = new Vue({
        el:'#demo',
        data:{
            count:0
        }
    })
</script>
```

我们可以使用data或者计算属性的初始值来计算

```js
 Vue.component('my-component',{
        data:function(){
                return:{increment:this.count}
            },
        props:['count'],
        template:`
            <div>
                <h2>自定义组件</h2>
                <input type="button" value='改变count值' @click="increment = increment+1" />
                {{increment}}
            </div>
        `
    })
```

#### 4.7 使用slot分发

假如父组件需要在子组件内放一些DOM，那么这些DOM是显示、不显示、在哪个地方显示、如何显示，就是slot分发负责的.

默认情况下,被放置的内容是不显示的.

```html
<body>
    <div id="demo">
        <child>
            <span>我是父组件放入的内容</span>
        </child>
    </div>
</body>
<script src="vue.js"></script>
<script type="text/javascript">
    Vue.component('child',{
        template:`
            <button>明确范围</button>
        `
    })
    var vm = new Vue({
        el:'#demo',
    })
</script>
```

**单个slot**

如果想只使用父组件放置的内容,可以将slot标签放入子组件的任何位置,用来指代原元素

```html
<body>
    <div id="demo">
        <child>
            <span>我是父组件放入的内容</span>
        </child>
    </div>
</body>
<script src="vue.js"></script>
<script type="text/javascript">
    Vue.component('child',{
        template:`
            <button><slot></slot>明确范围</button>
        `
    })
    var vm = new Vue({
        el:'#demo',
    })
</script>
```

>即使有多个标签,也会被一同插入

**具名slot**

父组件在要分发的标签里添加 `slot="name名"`属性,子组件在对应分发的位置的slot标签里，添加`name="name名"`属性，
然后就会将对应的标签放在对应的位置了。

```html
<body>
    <div id="demo">
        <child>
            <span solt='father1'>内容1</span>
            <span solt='father2'>内容2</span>
        </child>
    </div>
</body>
<script src="vue.js"></script>
<script type="text/javascript">
    Vue.component('child',{
        template:`
            <button><slot name="father1"></slot>明确范围</button>
            <slot name="father2"></slot>
        `
    })
    var vm = new Vue({
        el:'#demo',
    })
</script>
```

**分发内容的作用域**

被分发的内容的作用域，根据其所在模板决定，例如，在下面的例子中，被分发的标签在父组件的模板中,由于他不在子组件的template属性中，因此不属于子组件，则受父组件所控制。

```html
<body>
    <div id="demo">
        <child>
            <span slot='father1' @click="clickHandle">内容1</span>
            <span slot='father2'>内容2</span>
        </child>
    </div>
</body>
<script src="vue.js"></script>
<script type="text/javascript">
    Vue.component('child',{
        template:`
            <button><slot name="father2"></slot>明确范围<slot name="father1"></slot></button>
        `
    })
    var vm = new Vue({
        el:'#demo',
        methods:{
            clickHandle:function(){
                alert('父元素作用域')
            }
        }
    })
</script>
```

>只有点击内容1涉及到的范围才会弹窗,点击其他区域没有影响.

**无分发内容**

无分发内容，则原标签内的内容不会被替换

```html
<body>
    <div id="demo">
        <child>
            <span slot='father1'>父内容1</span>
        </child>
    </div>
</body>
<script src="vue.js"></script>
<script type="text/javascript">
    Vue.component('child',{
        template:`
            <div>
                <slot name='father1'>123</slot>
                <slot name="father2">子内容2</slot>
                <p>子内容3</p>
            </div>
        `
    })
    var vm = new Vue({
        el:'#demo',
    })
</script>
```

### 第五章 CLI命令行工具

#### 5.1 安装vue-cli构建应用

Vue给我们提供了一个官方命令行工具,可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目.

`cnpm install -g vue-cli`

Usage:  
`vue init <template-name> <project-name>`  
其中,template-name指代模版名称,vue的脚手架工具能够帮助我们快速搭建使用如下模版的项目

+ webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
+ webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.
+ browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
+ browserify-simple - A simple Browserify + vueify setup for quick prototyping.
+ pwa - PWA template for vue-cli based on the webpack template
+ simple - The simplest possible Vue setup in a single HTML file

我们一般使用webpack模版构建应用

`vue init webpack web04`

在构建的过程中会显示构建选项

```
Project name web04
Project description A Vue.js project
Author whits <496173602@qq.com>
Vue build (Use arrow keys)
>Runtime + Compiler: recommended for most users
 Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required
.....
```

其中,选择Runtime,并且单元测试工具选择no,有兴趣可以开启代码检测工具.

目录分析：

```
build -构建脚本目录
config -构建配置目录
src -源码目录
static -静态资源目录
```

查看webpack的配置，发现入口文件为`main.js`,而`main.js`则引入了App.vue

```js
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //使用路由器
  template: '<App/>', //引入模版
  components: { App } //引入组件
})
```

我们可以使用render语法将整个`.vue`文件引入,而不需要分别引入模版和组件.

```js
new Vue({
  el: '#app',
  router,
  render:createElement => createElement(App)
})
```

App.vue 亦引入了子组件.

>请不要修改主入口main,修改子模版App.vue,或者修改App.vue的子模版

Vue文件的基本构成由template,script和style组成.

### 第六章 vue-router

Vue官方以插件的形式支持路由,支持惰性加载.

#### 6.1 路由的基本用法

安装vue-router

`cnpm install vue-router --save-dev`

修改src下的main.js,引入我们自己写的js文件

```js
import Router from './Router'
```

新建Router,引入vue和vue-router,并使用vue-router

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
```

定义路由:

```js
const first = {template:'<div>我是first</div>'}
const second = {template:'<div>我是second</div>'}
const home = {template:'<div>我是主页</div>'}
```

新建路由实例

```js
const router = new VueRouter({
    mode:'history',//使用历史模式而不使用hash值来描述路径
    base:__dirname,//设置当前目录为基础路径
    routes:[        // 定义路径和路径的模版
        {path:'/',component:home},
        {path:'/first',component:first},
        {path:'/second',component:second}
    ]
})
```

创建vue实例并导出

```js
new Vue({
    router,
    template:`<div id='r'>
                <h1>导航</h1>
                <ul>
                    <li><router-link to='/'>/</router-link></li>
                    <li><router-link to='/first'>first</router-link></li>
                    <li><router-link to='/second'>second</router-link></li></router-link>
                </ul>
                <router-view class='asd'></router-view>
            </div>`
}).$mount('#app')
```

其中:

+ `router-link`组件支持用户在具有路由功能的应用中（点击）导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的a 标签，可以通过配置 tag 属性生成别的标签.`router-link` 比起写死的`a`标签会好一些
    - 无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致
    - 在 HTML5 history 模式下，router-link 会拦截点击事件，让浏览器不再重新加载页面。
    - 当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写（基路径）了。

+ `vue-router`组件可以渲染路径匹配到的视图组件,并且可以套嵌书写
+ $mount()可以帮我们将vue实例挂载到相应的应用上,等同于el

#### 6.2 子路由

在根路由的基础上,我们可以拓展子路由,使用vue-router的嵌套我们能够快速的实现

新增路由模版:

```js
const first = {template:'<div>我是first</div>'}
const second = {template:'<div>我是second</div>'}
const firstChild = {template:'<div>我是firstChild</div>'}
const secondChild = {template:'<div>我是secondChild</div>'}
const home = {template:'<div>我是主页</div>'}
```

新增父路由模版:

```js
const father = {
        template:`
            <div>
                <h2>组件</h2>
                <ol>
                    <li><router-link to='/first/firstChild'>firstChild</router-link></li>
                    <li><router-link to='/first/secondChild'>secondChild</router-link></li>
                </ol>
                <router-view></router-view>
            </div>
        `
}
```

>因为需要套嵌子路由模版,所以需要再次写入router-view

配置子路由

```js
routes:[
        {path:'/',component:home},
        {path:'/first',component:father,
            children:[
                {path:'/',component:first},
                {path:'firstChild',component:firstChild},
                {path:'secondChild',component:secondChild}
            ]
        },
        {path:'/second',component:second}
    ]
```

>在路由中使用绝对路径,基于base,在子路由中使用相对路径,相对当前父路由

#### 6.3 路由传参

**name属性**

我们可以通过name属性在模版之间传递数据.

修改路由:

```js
routes:[
        {path:'/',name:'Home',component:home},
        {path:'/first',component:father,
            children:[
                {path:'/',name:'Home-first',component:first},
                {path:'firstChild',name:'Home-first-child',component:firstChild},
                {path:'secondChild',name:'Home-second-child',component:secondChild}
            ]
        },
        {path:'/second',name:'Home-second',component:second}
    ]
```

在相应的模版中可以使用`{{$route.name}}`取得传递的参数

**占位符传参**

类似我们以前所学的框架,当get参数变化时,我们也可以通过占位符传递参数

修改路由

```js
routes:[
        {path:'/',component:home},
        {path:'/first',component:father,
            children:[
                {path:'/',component:first},
                {path:'firstChild',component:firstChild},
                {path:'firstChild/:id',component:firstChild},
                {path:'secondChild',component:secondChild}
            ]
        },
        {path:'/second',component:second}
    ]
```

如果我们占位符指定的参数为id,那么我们可以使用`{{$route.params}}`在相应模板取得参数

+ 对于params参数传递，我们需要在router-link当中，以name形式获取要传递的路由，以parms传递参数

```
<li><router-link :to="{name:'Home-second',params:{name:'lisi',age:19}}">second</router-link></li>
```

+ 对于query传参，我们需要以path形式和name形式均可获取要传递参数的路由

```
<li><router-link :to="{path:'/second',query:{name:'lisi',age:19}}">second</router-link></li>
```

#### 6.3 模版组

我们在路由中还可以定义多组模版,便于我们构建页面.

修改子模版

```js
const first = {template:'<div>我是first</div>'}
const left = {template:'<div>我是左边</div>'}
const right = {template:'<div>我是右边</div>'}
const home = {template:'<div>我是主页</div>'}
```

修改路由

```js
const router = new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        {path:'/',component:home},
        {path:'/first',components:{
            default:first,
            left:left,
            right:right
        }},
    ]
})
```

修改父模版

```js
new Vue({
    el:'#app',
    router,
    template:`<div id='r'>
                <h1>导航</h1>
                <ol>
                    <li><router-link to='/'>/</router-link></li>
                    <li><router-link to='/first'>first</router-link></li>
                </ol>
                <router-view class='asd'></router-view>
                <router-view name="left" style="width:49%;height:300px;background:lightblue;float:left"></router-view>
                <router-view name="right" style="width:49%;height:300px;background:lightyellow;float:left"></router-view>
            </div>`
})
```

#### 6.4 重定向

在路由中设置redirect,可以帮助我们重定向路由.

```js
const router = new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        {path:'/',component:home},
        {path:'/first',components:{
            default:first,
            left:left,
            right:right
        }},
        {path:'/second',redirect:'/first'},
    ]
})
```

```js
new Vue({
    el:'#app',
    router,
    template:`<div id='r'>
                <h1>导航</h1>
                <ol>
                    <li><router-link to='/'>/</router-link></li>
                    <li><router-link to='/first'>first</router-link></li>
                    <li><router-link to='/second'>second</router-link></li>
                </ol>
                <router-view class='asd'></router-view>
                <router-view name="left" style="width:49%;height:300px;background:lightblue;float:left"></router-view>
                <router-view name="right" style="width:49%;height:300px;background:lightyellow;float:left"></router-view>
            </div>`
})
```

>直接跳转首页,name值不会传递当前页面

redirect也可以定义为函数的返回值.

**别名**

在我们访问某路由时,可以访问该路由的别名从而访问该路由,别名写在路由中,定义`alias:''`

#### 6.5 路由中的过渡动画

Vue中存在css动画和过渡动画,帮助我们在数据迭代时完成动画效果.

在学习路由中的过渡动画之前,我们首先完成一般的动画效果:

**动画**

Vue的动画和angular一样,在show/hide时我们可以对动画的进入,完成和移除时设置相关的效果.

+ xxx-enter
+ xxx-enter-active
+ xxx-leave
+ xxx-leave-active

重新书写一个vue文件,并在入口文件载入.

main.js

```js
import Vue from 'vue'
import transition from './transition.vue'

new Vue({
    el:'#demo',
    render:x => x(transition)
})
```

修改transition.vue文件,书写模版,需要定义动画的标签用transition包裹,并以name命名.

```html
<template>
    <div>
        <button @click="show=!show"> show/hide </button>
        <transition name='fade'>
            <p v-if="show">hello world</p>
        </transition>
    </div>
</template>
```

以typescript的方式导出模版

```html
<script>
export default {
    name:'demo',
    data:function(){
        return {show:true}
    }
}
</script>
```

书写动画

```html
<style scoped>
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: .5s;
    }
    .fade-leave-active{
        opacity: 0;
        transition: .5s;
    }
</style>
```

注意不要忘记修改index.html,增加demo的挂载元素

**路由过渡动画**

将想要实现过渡动画的router-view部分使用transition包裹,在index.html定义动画效果即可

#### 6.6 通过watch监控动画

我们可以在选项对象中定义watch用以监听路径变化,从而完成动画效果

```javascript
watch:{
        "$route"(to,from){
            if (from.path == '/first') {
                this.anim = 'fade'
            }else{
                this.anim = ''
            }
        }
     }
```

to和from指代路由跳转的目的和来源

#### 6.7 引入vue文件

直接以模块的形式引入该文件，即可在代码中直接使用。


### 第七章 Vuex

#### 7.1 vuex简介

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

实际上，当我们的组件越来越多时，共享数据的修改和在组件中的传递就很有可能出现错误。通常情况下我们可能会不断地去验证每一个使用的数据，vue给我们提供了一个类似于数据库的组件vuex，帮助我们管理公共的数据，并提供相应的接口对数据进行操作。

#### 7.2 使用vuex

安装vuex 

```
cnpm install vuex --save-dev
```

新建store.js文件，作为我们的存储数据的仓库

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
```

在当前文件创建数据仓库，存储我们的数据，其中state表示存储的数据,导出当前的仓库

```javascript
const state = {
    count:4,
}

export default new Vuex.Store({
    state,
});
```

在main.js中引入仓库

```javascript
import Vue from "vue";
import stroe from './store'
```

书写vuex.vue，用以展示我们的数据

```html
<template>
    <div id='demo'>
        <h3>hello vuex</h3>
        <p>{{$store.state.count}}</p>
    </div>
</template>
```

在main.js中加载vuex.vue并且运行脚手架，发现数据会正常渲染。

```javascript
import Vue from 'vue'
import store from './store'
import vuex from './vuex.vue'

new Vue({
    el:'#demo',
    store,
    render:x=>x(vuex)
})
```

以上即为使用vuex存储并读取数据的过程，我们的数据会被vuex管理，在模板之间进行传递。

**操作数据**

我们想要在模板中添加一个按钮，用于对count的加减操作，这时候我们也需要通知数据中心，采取相应的方法修改公共数据。

定义数据增减的方法

```js
const state = {
    count:4,
}
const mutations = {
    jia(state){
        state.count++
    },
    jian(state){
        state.count--
    }
}
export default new Vuex.Store({
    state,
    mutations
});
```

通过commit调用相关指令

```html
<template>
    <div id='demo'>
        <h3>hello vuex</h3>
        <p>{{$store.state.count}}</p>
        <p>
            <button @click="$store.commit('jia')">+</button>
            <button @click="$store.commit('jian')">-</button>
        </p>
    </div>
</template>
```

我们操作的是数据仓库中的数据，这样操作不会对数据污染。

#### 7.3 state 状态对象

State为状态对象，负责存储整个应用的状态数据，一般需要在使用的时候在跟节点注入store对象，后期就可以使用this.$store.state直接获取状态


State提供了一些方法用于获取当前的数据取值

**通过计算数据**

```html
<template>
    <div id='demo'>
        <h3>hello vuex</h3>
        <p>{{$store.state.count}} - {{count}}</p>
        <p>
            <button @click="$store.commit('jia')">+</button>
            <button @click="$store.commit('jian')">-</button>
        </p>
    </div>
</template>
<script>
    export default {
        name:'vuex',
        computed:{
            count:function(){
                return this.$store.state.count + 1
            }
        }
    }
</script>
```

此时的this指向vue实例中载入的store

**通过mapState辅助函数引入**


```html
<template>
    <div id='demo'>
        <h3>hello vuex</h3>
        <p>{{$store.state.count}} - {{count}}</p>
        <p>
            <button @click="$store.commit('jia')">+</button>
            <button @click="$store.commit('jian')">-</button>
        </p>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        name:'vuex',
        computed:mapState({
            count:state => state.count
        })
        //  computed:mapState([
        //      'count'//不经计算的值可以直接取得
        //  ])
    }
</script>
```

mapState表示count取值与状态对象的对应关系.

#### 7.4 Mutations 触发状态

Mutations为触发状态，Mutations的中文意思是“变化”，利用它可以更改状态，本质就是用来处理数据的函数，其接收唯一参数值state。store.commit(mutationName)是用来触发一个mutation的方法。

commit中传递的是mutation的函数名,而mutation则可以传入整个state对象.同样,我们可以在commit的时候传入参数

```html
<template>
    <div id='demo'>
        <h3>hello vuex</h3>
        <p>{{$store.state.count}} - {{count}}</p>
        <p>
            <button @click="$store.commit('jia',{a:10})">+</button>
            <button @click="$store.commit('jian')">-</button>
        </p>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        name:'vuex',
        computed:mapState({
            count:state => state.count
        })
    }
</script>
```

```js
const state = {
    count:4,
}
const mutations = {
    jia(state,n){
        state.count += n.a
    },
    jian(state){
        state.count--
    }
}
export default new Vuex.Store({
    state,
    mutations
});
```

同样,触发状态也可以通过辅助函数MapMutations引入

```html
<template>
    <div id='demo'>
        <h3>hello vuex</h3>
        <p>{{$store.state.count}} - {{count}}</p>
        <p>
            <button @click="jia({a:10})">+</button>
            <button @click="jian">-</button>
        </p>
    </div>
</template>
<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        name:'vuex',
        computed:mapState([
            'count'
        ]),
        methods:mapMutations([
            'jia',
            'jian'
        ])
    }
</script>
```

#### 7.5 getters 获取者

有些状态需要做二次处理，就可以使用getters。通过this.$store.getters.valueName对派生出来的状态进行访问。或者直接使用辅助函数mapGetters将其映射到本地计算属性中去。

在上例中,如果我们要对count进行二次计算,显然不能多次书写computed选项属性,我们需要定义名为count的getter对该数据进行二次计算.

```javascript
const state = {
    count:4,
}
const mutations = {
    jia(state,n){
        state.count += n.a
    },
    jian(state){
        state.count--
    }
}
const getters = {
    count:function(state){
        return state.count + 100
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters
});
```


```html
<template>
    <div id='demo'>
        <h3>hello vuex</h3>
        <p>{{$store.state.count}} - {{count}}</p>
        <p>
            <button @click="jia({a:10})">+</button>
            <button @click="jian">-</button>
        </p>
    </div>
</template>
<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        name:'vuex',
        computed:{
            ...mapState([
                'count'
            ]),
            count(){
                return this.$store.getters.count
            }

        },
        methods:mapMutations([
            'jia',
            'jian'
        ])
    }
</script>
```

我们同样可以使用辅助函数获取getters的值,对state进行计算

```html
<script>
    import {mapState,mapMutations,mapGetters} from 'vuex'
    export default {
        name:'vuex',
        computed:{
            ...mapState([
                'count'
            ]),
            ...mapGetters([
                'count'
            ])
        },
        methods:mapMutations([
            'jia',
            'jian'
        ])
    }
</script>
```

#### 7.6 actions

构造异步状态的触发事件,而mutations则是同步触发状态.在vue中如果对大段数据进行操作,mutations可能导致页面假死,actions可以异步的执行触发状态,而不发生同步阻塞.

定义actions

```js
const actions = {
    jiaplus(context){
        context.commit('jia',{a:1})
        setTimeout(()=>{
            context.commit('jian')
        }, 3000)
        console.log('完成')
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
```

使用辅助函数在代码中引入,体验异步过程

```js
<template>
    <div id='demo'>
        <h3>hello vuex</h3>
        <p>{{count}}</p>
        <p>
            <button @click="jia({a:10})">+</button>
            <button @click="jian">-</button>
            <button @click="jiaplus">jiaplus+</button>
        </p>
    </div>
</template>
<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        name:'vuex',
        computed:{
            ...mapState([
                'count'
            ]),
        },
        methods:{
            ...mapMutations([
                'jia',
                'jian'
            ]),
            ...mapActions([
                'jiaplus'
            ]),
        },    
    };
</script>
<br/>
```

