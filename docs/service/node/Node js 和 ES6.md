# NodeJS





## 浏览器概述

```css
1、人机交互（UI）
2、网络请求部分（Socket）
3、JavaScript引擎（解析执行JavaScript）
4、渲染引擎（渲染HTML，CSS）又叫排版引擎或浏览器内核
5、数据库存储（cookie、HTML5的本地存储Localstorage、SessionStorage）
```



### 渲染引擎

```css
主流的渲染引擎有
Chrome浏览器：Blink引擎 (WebKit的一个分支) .
Safari浏览器：WebKit引擎，（windows版本2008年3月18日推 出正式版，但苹果已于2012年7月25日停止开发Windows版的Safari.）

FireFox浏览器: Gecko引擎
Opera浏览器: Blink引擎(早期版使用Presto引擎，后改为Blink引擎)
Internet Explorer浏览器: Trident引擎 。（最后一个版本 IE 11）
Microsoft Edge浏览器: EdgeHTML引擎(Trident的一个分支) 
```



### 工作原理

```css
1.解析HTML构建Dom树(Document object Model,文档对象模型)，DOM 是W3C组织推荐的处理可扩展置标语言的标准编程接口

渲染引擎会将页面所有CSS解析生成CSS规则树

渲染树=DOM树+CSS规则树

2.构建渲染树，渲染树并不等同于Dom树，因为像head标签或display: none这样的元素就没有必要放到渲染树
中了，但是它们在Dom树。（渲染树剔除一些没有必要显示的元素）

3.对渲染树进行布局，定位坐标和大小、确定是否换行、确定position、 overflow- z- index等等， 这个过程叫"layout"（先布局） 或"reflow"（后进行重新调整）

"注意：尽量避免频繁使用layout和reflow，会影响性能"

4.绘制渲染树，调用操作系统底层API进行绘图操作。


解析DOM树---->构建渲染树---->渲染树布局---->绘制渲染树
```





### 浏览器访问网站过程

```css
1、浏览器中输入网址
2、浏览器对URL网址请求报文封装
3、浏览器发起DNS解析请求，将域名转为IP地址
4、浏览器将请求报文发送到服务器
5、服务器接收请求报文，并解析
6、服务器处理用户请求，并将处理结果封装成HTTP响应报文。
7、服务器将HTTP响应报文发送给浏览器
8、浏览器接收到服务器响应的HPPT报文，并解析
9、浏览器解析HTML页面并渲染，在解析HTML页面时遇到新的资源需要再次发起请求
10、最终浏览器渲染出完整页面
```





## Node概述 

```css
1. node.js 是一个开发平台，就像Java开发平台、.Net开发平台、PHP开发平台、Apple开发平台一样。

何为开发平台?有对应的编程语言、有语言运行时、有能实现特定功能的API (SDK: Software Development Kit)

2.该平台使用的编程语言是JavaScript 语言。

3. node.js 平台是基于Chrome V8 JavaScript 引擎构建。

4.基于node.js 可以开发控制台程序(命令行程序、CLI程序)、桌面应用程序(GUI) (借助node-webkit、 electron等框架实现)、Web 应用程序(网站)


PHP 开发技术栈: LAMP - Linux Apache MySQL PHP

node.js全栈开发技术栈: MEAN-MongoDB Express Angular Node.js

```



### 特点

```css
1、Node是一个构建于Chrome V8引擎（只有堆和调用栈）之上的一个Javascript 运行环境
	Node是-个运行环境，作用是让js拥有开发服务端的功能

"Chrome V8引擎（只有堆和调用栈）所以说：没有浏览器提供的一些API，例如：DOM、BOM等"

2、Node使用事件驱动(当事件被触发时，执行传递过去的回调函数)、非阻塞IO模型(异步读写，当执行I/0操作时，不会阻塞线单线程)使得它非常的轻量级和高效。
	Node中绝大多数API都是异步(类似于ajax) ，目的是提高性能

3、js为单线程（一个调用栈便是一个单线程），node提供多线程处理

4、Node中的NPM是世界上最大的开源库生态系统(类似于github)

5、Node本身就是个web容器（服务器），所以无需要 Apache、IIS等。
```



### node.js 中的单线程-非阻塞IO

```css
补充知识：


代码演示，例如：
console.log("1")

function fun(){
    setTimeout(function(){
        console.log("2")
    },500)
}

function funny(){
    setTimeout(function(){
        console.log("3")
    },200)
}

fun()
funny()
console.log("4")

/*
	结果为：1 4 3 2

为什么不是1,2,3,4呢，按理说不是应该顺序执行吗？
这便是node是单线程工作，非阻塞IO模型（异步读写，不会阻塞线单线程）
*/

/*
	执行流程：1、首先调用栈先调用入口mian()函数，先将console.log("1")入栈，打印完毕后弹出栈中
			2、此时栈中剩余main()函数，再将fun()入栈，再出栈放入到node.js底层开启异步中放入队列中进行等待
			3、再将funny()入栈，再出栈也放入到WEB APIS中进行等待
			4、将console.log("4")入栈，打印完毕后弹出栈中
			5、此时main()函数也出栈，此时栈空
			6、再去callback queue中找，依次调用异步成功后的callback()，上面fun()和funny()函数因设置时间不同，所以先将funny()放入第一个callback()，后放入fun()第二个callback()
*/

JavaScript 是单线程工作，这意味着两段脚本不能同时运行，而是必须一个接一个地运行。我们人类是多线程工作。你可以使用多个手指打字，可以一边开车一边与人交谈。唯一会妨碍我们的是打喷嚏，因为当我们打喷嚏的时候，所有当前进行的活动都必须暂停（只是举例，不包括心跳啥的）。JavaScript由于单线程限制，防止阻塞，只能通过异步函数的调用方式，把需要延迟处理的事件放入事件循环队列。到目前为止，回调(callback)是编写和处理JavaScript程序异步逻辑的最常用方式。



可以自己进行编写代码，来去参考浏览器（与node.js运行原理相同）演示动画地址：http://latentflip.com/loupe
```



### REPL介绍

```css
1. REPL 全称: Read- Eval-Print-Loop (交互式解释器)
    R读取-读取用户输入，解析输入了Javascript数据结构并存储在内存中。
    E执行-执行输入的数据结构
    P打印-输出结果
    L循环-循环操作以上步骤直到用户两次按下ctrl-c 按钮退出。

2.在REPL中编写程序(类似于浏览器开发人员工具中的控制台功能)
	直接在控制台输入、node 命令进入REPL环境

3.按两次Control + C退出REPL界面或者输入、.exit~ 退出REPL界面
	按住control 键不要放开，然后按两下c键
```





## ES6 语法

```css
ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。
它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。

提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指“下一代 JavaScript 语言”。
```





### let

```javascript
let特点：

1、没有变量提升

例如：
console.log(age);
let age=38;
/*直接报错，age变量undefined*/

-----------------------------------------------------------------------------------------
2、有块级作用域

例如：
for(let i=0;i<10;i++){
    //块级作用域
}
console.log(i)
/*直接报错，i变量undefined*/


ES6 允许块级作用域的任意嵌套，例如：
{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}
}}}};
/*内层作用域可以定义外层作用域的同名变量。*/


-----------------------------------------------------------------------------------------
3、不能重复声明
let num=10;
let num=20;
console.log(num)
/*直接报错，不可重新声明变量*/

----------------------------------------------------------------------------------------=
4、可以重新赋值
let num=10;
num=20;
console.log(num)
/*结果为：20*/

-----------------------------------------------------------------------------------------
5、暂时性死区

只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}

上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。
这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
=========================================================================================

var特点：
1、有变量提升
2、没有块级作用域，是函数作用域
3、可以重复声明
4、可以重新赋值
```





### const

```javascript
const 关键字声明的常量（一旦声明就无法更改）

1、没有变量提升
2、有块级作用域
3、不能重复声明
4、不能重新赋值（声明必须要有初始值）
5、同样存在暂时性死区


const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only

上面代码中，常量foo储存的是一个地址，这个地址指向一个对象。
不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。
```





### 对象解构赋值

```javascript
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

对象可以不按顺序赋值，只要找到对应的属性便可以

1、ES6写法

let obj={
    name:"jine",
    age:22，
    mvp:"hha"
}

let {name:name1,age:age1}=obj

-----------------------------------------------------------------------------------------
变量名可与对象属性名一致
let {name:name,age:age}=obj

-----------------------------------------------------------------------------------------
如果声明的变量名和对象属性名一致，可以简写，例如：
let{name,age}=obj

-----------------------------------------------------------------------------------------
若出现变量名没有和对象属性名一致，只会声明一个空变量，例如：
let{name,age,other}=obj
console.log(name,age,other)
/*
	结果： jine 22  undefined
*/

-----------------------------------------------------------------------------------------
若出现变量名和对象属性名有的相同，有的不同，可以一下写法，例如：
let{name,age,mvp:other}=obj
console.log(name,age,other)
/*
	结果： jine 22  haha
*/

-----------------------------------------------------------------------------------------
若对象属性值已有，在声明相同的变量来进行赋值并不会覆盖（如下age）
若声明的变量没有对应的对象属性，可以给这个变量初始化值，便不会出现undefined（如下height），例如：
let{name,age=18,other,height=175}=obj
console.log(name,age,height)
/*
	结果为：jine 22 175
*/


-----------------------------------------------------
let{name,...obj2}=obj
console.log(obj2)
/*
	结果为：22  haha
	
	这写法是不包含obj中name属性，其他成员全部赋值给obj
*/

=========================================================================================
2、ES5写法

var obj={
    name:"jine",
    age:22
}

var name1=obj.name
var age1=obj.age
```







### 数组解构赋值

```javascript
数组顺序进行依次赋值

1、ES6写法

let arr=[10,20,30]
let [num1,num2,num3]=arr
console.log(num1,num2,num3)
/*结果：10 20 30*/

let [num1,num2,num3,num4]=arr
console.log(num1,num2,num3,num4)
/*结果：10 20 30 undefined*/

let [num1,num2,num3,num4=40]=arr
console.log(num1,num2,num3,num4)
/*结果：10 20 30 40*/

let [num1=100,num2,num3,num4=40]=arr
console.log(num1,num2,num3,num4)
/*结果：10 20 30 40*/


=========================================================================================
2、ES5写法

var arr=[1,2,3]
var a=arr[0]
var b=arr[1]
var c=arr[2]
```





### 解构赋值结合函数声明

```javascript
function test1({name,age}){
	console.log(name,age)
}

test1({
    name:"jine",
    age:20,
})
```





### 箭头函数

```javascript
匿名函数的简写，但是这样写法的this指向和以前写法的this指向不一样

简写规则:
a.function改成=>     => 可以读成goesto
b.如果只有一个形参，那就可以省略形参小括号.
C.如果不是一个形参,0个或者多个形参，那就不能省略这个形参小括号了
d.如果函数体只有一句话， 那就可以省略函数体的大括号
e.如果函数体只有一句话,并且这一句话是return返回值,那return也要省略
f.如果函数体不是一句话，那就不能省略这个大括号.

-----------------------------------------------------------------------------------------
由规则b，d，例如：
let fun=function(name){
    console.log("name:"+name)
}
/*ES5写法*/

let fun=name=>console.log("name:"+name)
/*ES6箭头函数*/

fun("jine")

-----------------------------------------------------------------------------------------
由规则c,d，例如：
let fun=function(name,age){
    console.log(name,age)
}
/*ES5写法*/

let fun=(name,age)=>console.log(name,age)
/*ES6箭头函数*/

fun("jine",22)

-----------------------------------------------------------------------------------------
由规则a,d,e，例如:
let fun=function(name){return name}
/*ES5写法*/

let fun=name=>name
/*ES6箭头函数*/

console.log(fun("jine"))

-----------------------------------------------------------------------------------------
由规则c，f，例如：
let fun=function(name,age){
    console.log(name)
    console.log(age)
}
/*ES5写法*/

let fun=(name,age)=>{
    console.log(name)
    console.log(age)
}
/*ES6写法*/

fun("jine",22)

-----------------------------------------------------------------------------------------

"需要注意的是：
let fun=name=>
console.log(name)

"这样也是可以的，虽然换行了，但是因为有箭头，所以不是结束，所以还会输出name"
```



### 箭头函数 this

```javascript
箭头函数的this是由上下文环境决定

不要用new 关键字去调用箭头函数


例如：

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>箭头函数this</title>
</head>
<body>
    <button id="btn">点我呀~</button>
    <script>
        //function函数写法
        // document.getElementById('btn').onclick=function(){
        //     console.log(this)
                /*btn元素节点*/
        //     console.log(this.textContent)
                /*btn中的文本内容*/
        // }

        // //箭头函数写法
        document.getElementById('btn').onclick=()=>{
            console.log(this)
            /*Window*/
            console.log(this.textContent)
            /*undefined*/
        }
    </script>
</body>

</html>
```



### 对象成员的简写

```javascript
let name="jine"
let age=20

let obj={
	name, //相当于name:name
    age,
    printf(){ //相对于 printf:function(){}
        console.loe(name,age)
    }
}
obj.printf()


-----------------------------------------------------------------------------------------
以下写法会报错，例如：
let obj={
    name,
    age,
    score,
    printf(){
        console.log(name,age,score)
    }
}

obj.printf()
/*因为全局作用域没有声明score，所以会报错*/

-----------------------------------------------------------------------------------------
let obj={
    name:1,
    age,
    score:age+58,
    printf(){
        console.log(this.name,age,this.score)
    }
}

obj.printf()
/*结果：1  20  78*/
```







### 展开运算符





#### 对象展开

```javascript
let Person={
    name:"jine",
    age:22,
    printf(){
        console.log(this.name,this.age)
    }
}

let Fun={
    song:"歌唱",
    jump:"跳跳"
}


let Jine={
    ...Person, //将Person对象中所有的成员拿过来
    ...Fun,
    jump:"不跳了" //此时jump把前面Fun对象传入的jump覆盖
}

console.log(Jine)
/*
结果：
	{
      name: 'jine',
      age: 22,
      printf: [Function: printf],
      song: '歌唱',
      jump: '不跳了'
	}
*/
```





#### 数组展开

```javascript
可以做数组拼接
也可求max值等

let arr1=[1,2,3]

let arr2=[4,5,6]

let arr3=[...arr1,...arr2]
console.log(arr3)
/* [1,2,3,4,5,6] */

let max1=Math.max(arr3)
console.log(max1)
/* NaN */

let max2=Math.max(...arr3)
console.log(max2)
/* 6 */
```



### 数组应用



#### 数组降维

```javascript
let arr=[1,2,3,[4,5,6],7,8]

let arrNew=[]

arr.forEach(v=>{
    if(Array.isArray(v)){
        arrNew.push(...v)
    }else{
        arrNew.push(v)
    }
})

console.log(arrNew)
/*由二维降为了一维*/
```



#### 数组去重

```javascript
1、排序后判断法

let arr=[10,20,30,30,20,40,50,10,20]
let arrNew=[]
arr.sort((a,b)=>{
    return a-b
})

// [10, 10, 20, 20, 20,30, 30, 40, 50]
console.log(arr)

arr.forEach((item,index)=>{
    //若下一个和上一个不相等
    if(item!=arr[index+1]){
        arrNew.push(item)
    }
})

// [ 10, 20, 30, 40, 50 ]
console.log(arrNew)

=========================================================================================

2、使用对象法，数组去重

let arr=[10,20,30,30,20,40,50,10,20]
let arrNew=[]

let obj={}
arr.forEach(item=>{

    /**
     * 利用对象重复赋值的方法
     * 若要加入obj对象的item属性不是undefined，便加到对象中
     * 若有重复的item属性便不会加到对象中，也就不会执行if中的arrNew.push()
     */
    if(obj[item]==undefined){
        arrNew.push(item)
        obj[item]='value'
    }
})
console.log(arrNew)
/* [ 10, 20, 30, 40, 50 ] */
```



#### 数组升维

```javascript
//需求:将下列数组arr,根据类别type升为二维数组
let arr =[
{type:'电子产品',name:'iPhone',price: 8888},
{type:'家具',name:'桌子',price: 100},
{type:'食品',name:'瓜子',price: 10},
{type:'家具',name:'椅子',price: 380},
{type:'电子产品',name:'小米手机',price: 1380}, 
{type :'食品',name:'辣条',price: 5},
{type: '食品',name:'咖啡',price: 50}
];

let obj=[]
let arrNew=[]

arr.forEach(v=>{
    //把第一次type和第一次的值加入arrNew
    if(obj[v.type]==undefined){
        obj[v.type]='value'
        arrNew.push({
            type:v.type,
            data:[v]
        })
    }
    //第二的值加入arrNew中对应的type中
    else{
        arrNew.forEach((v2,j)=>{
            if(v.type==v2.type){
                arrNew[j].data.push(v)
            }
        })
    }
})
console.log(arrNew)

```

```

```



### 数据类型 Set

```javascript
作用：和数组类似，和数组不同的是不能存放重复的元素
应用场景：数组去重


Set测试，例如：

let set1=new Set([10,20,30,10,20,40])
console.log(set1)
/*
结果是一个Set对象：
    Set { 10, 20, 30, 40 }
*/

-----------------------------------------------------------------------------------------
数组去重，例如：

let arr=[1,2,3,1,2,4,5]
let set2=new Set(arr)
console.log(set2)
/*
    结果：Set { 1, 2, 3, 4, 5 }
*/

let newArr=[...set2]
console.log(newArr)
/*
    去重结果：[ 1, 2, 3, 4, 5 ]
*/
```





### 模板字符串

```javascript
语法： ``（使用反引号标识）
作用：类似于python的多行字符串（ES5是没有多行字符串）
特点：1、可以在模板字符串中调用变量或函数。2、模板字符串中的所有的空格和缩进也都会保留。

可以在模板字符串中调用变量，例如：

let author="----jine"
let strs=
`
我要开始输入啦，
这是第二段的字符串输入，
这便是多行字符串的输入.  Noproblem~
                     ${author}
`
console.log(strs)
/*
结果：
	我要开始输入啦，
这是第二段的字符串输入，
这便是多行字符串的输入.  Noproblem~
                     ----jine
*/


-----------------------------------------------------------------------------------------
也可以在模板字符串中写调用函数，例如

let fun=()=>"我是一个小函数~"
console.log(`我也可以调用函数哟：${fun()}`)
```





### 数组的方法

```javascript
forEach() 可以替换以前用的for循环
作用：循环遍历，把遍历出来的每一项交给回调函数，无返回值

例如：
let arr=[1,2,3]
let ret=arr.forEach(function(item,index){
    //item 是遍历出来的每一项
    //index 是遍历出来每一项对应的索引
    console.log(index,item)
    return "返回值"
})
console.log(ret)
/*
结果：
	0 1
	1 2
	2 3
	undefined
*/


-----------------------------------------------------------------------------------------
map() 循环遍历，与forEach()类似，唯一不同的是map()有返回值

let arr=[1,2,3]
let ret=arr.map(function(item,index){
    console.log(index,item)
    return item*item
})
console.log(ret)
/*
结果：
	0 1
	1 2
	2 3
	[ 1, 4, 9 ]
*/

返回属性的值，例如：
let arr=[{name:"jine",age:18},{name:"ren",age:22},{other:"其他",age:23}]
let ret=arr.map((item,index)=>item.name)
console.log(ret)
/*
结果：[ 'jine', 'ren', undefined ]
返回所有name属性的值，第三个没有name实现，所以返回undefined
 */


-----------------------------------------------------------------------------------------
filter() 过滤器
作用：返回一个新的数组，新的数组中的元素是通过检查后符合条件的元素

过滤偶数，例如：
let arr=[1,2,3,4,5,6]
let ret=arr.filter((item,index)=>item%2==0)
console.log(ret)
/*[2,4,6]*/


过滤指定元素，例如：
let arr=[{name:"jine",age:18},{name:"ren",age:22},{other:"其他",age:23}]
let ret=arr.filter((item,index)=>item.name)
console.log(ret)
/*
结果：
    [ { name: 'jine', age: 18 }, { name: 'ren', age: 22 } ]
*/
```







## Node.JS 模块化

```javascript
1、require 导入模块

const http=require('http')


2、exports 导出模块

db={name:'jine',age:22}
module.exports=db
```



### 内置模块使用

```javascript
1、导包

const fs=require('fs');

2、调用unlink删除文件方法
fs.unlink('./tmp/hello.txt',(err)=>{
    if(err) throw err;
    console.log('已成功删除 /tmmp/hello')
})

```

```javascript
-----------------------------------------------------------------------------------------
文件读取操作，例如

const fs=require('fs')

fs.readFile('./etc/passwd.txt','utf-8',(err,data)=>{
    console.log(err);
    //err是一个错误对象，没有就返回一个null
    console.log(data);
})


-----------------------------------------------------------------------------------------
文件写操作（如果没有文件会创建一个，若有会覆盖掉），例如：
const fs=require('fs')
const data=`
 我是一段文本内容，啦啦啦啦啦啦啦啦啦啦啦~~~

`
fs.writeFile('./etc/content.txt',data,(err)=>{
    if(err==null){
        console.log("文件保存成功√")
    }else{
        console.log(err)
    }
})
```





#### 获取文件或目录的路径

```javascript
console.log(__dirname)
/*获取的是当前文件的所在目录的绝对路径 */
console.log(__filename)
/*获取的是当前文件的绝对路径*/ 
```





#### path 模块

```javascript
为了避免少些斜杠而导致路径不对，可以引入path模块

const path=require('path')
const filePath=path.join(__dirname,'test','file.txt')
console.log(filePath)
/*
c:\Users\Jine\Desktop\my_code_space\jine\Daily code practice\07、03\test\file.txt
*/
```





#### http 模块

```javascript
//使用内置模块http创建一个服务器

//1、导入http模块
const  http=require('http')

//2、创建一个服务器 (返回值代表当前服务器)
const server=http.createServer((request,response)=>{
    //3、设置返回给用户看的内容
    response.setHeader('Content-Type','text/html;charset=utf-8')
    /*setHeader 防止中文乱码，所以要设置响应头 */
    response.end("你好，世界~")
})

//4、开启服务器
server.listen(1024,()=>{
    console.log("服务器开启~")
})


/*开启服务器后，可以在本地浏览器中访问 127.0.0.1:1024 或  localhost:1024*/
```





#### 静态资源服务器

```javascript
//导入模块
const http=require("http")
const fs=require("fs")
const path=require('path')

//创建服务器
const server=http.createServer((request,response)=>{
    //设置返回用户内容

    //获取用户请求哪一个资源
    let userRq=request.url
    
    //获取用户读取的资源对应的路径
    const filePath=path.join(__dirname,'web',userRq)

    //读取用户请求的资源文件
    fs.readFile(filePath,(err,data)=>{
        if(err==null){
            response.end(data)
        }else{
            response.end("404 not found")
        }
    })

    
})

server.listen(8888,()=>{
    console.log("服务器开启成功√")
})
```





#### URL 模块 (get)

```javascript
"get 应用（数据存在url中，相对较小，req.url可以拿到）"
"get 安全性低，一般用于请求数据/获取数据

例如：

//导入模块
const http=require('http')
const url=require('url')

//创建服务器
const server=http.createServer((request,response)=>{
    /*通过request.url拿到前端传递过来的参数
     * 导入url模块，处理接受到的字符串
     * 调用parse方法，（参数1：要处理的url，参数2：如果写true便返回一个对象）
     * 返回的对象中有query属性，其也是一个对象，这个属性里面有get传递过来的参数
     */
    let URL=url.parse(request.url,true)
    // console.log(URL.query)
    response.end(JSON.stringify(URL.query))
    /*若拿到了get信息对应的数据，便可返回字符串给前端 */
})

//启动服务器
server.listen(8888,()=>{
    console.log("服务器已开启√")
})

```





#### querystring 模块（post）

```javascript
"post 应用（数据存在请求体中，相对而言较大，传递到node.js会分小块传送）"
"post 一般用于提交数据"
"测试post接口软件 https://www.postman.com/downloads/"

node.js如何接收:
他也是一小块一小块的接收.
1.首先有一个容器
2.给req对象一个data事件(这个事件会执行很多次)这个事件里面就把这些小块的数据拼接起来
3.给req对象一个end事件(这个事件只会执行一次)表示数据传递完了
4.处理传递过来的数据转为对象 queryString.parse();


例如：

//导入模块
const http=require('http')
const querystring=require('querystring')
//创建服务器
const server=http.createServer((request,response)=>{
    //容器
    let postData=""

    //给request对象一个data事件

    //事件处理程序，chunk参数是这次传递过来的一小块内容
    request.on('data',(chunk)=>{
        //将每此传过来小块的内容放到容器中
        postData+=chunk
    })

    //数据传递完毕执行
    request.on('end',()=>{
        //打印容器
        console.log(postData)

        //解析容器中的数据,转为对象
        let postObj=querystring.parse(postData)
        console.log(postObj)
    })

    //可以根据post传来的参数，去数据库中判断是否正确
    //最后返回前端页面
    response.end("over")
})

//启动服务器
server.listen(8888,()=>{
    console.log("服务器已开启√")
})

```







### 第三方模块



#### 爬虫模块

```css
1、新建文件夹，文件夹名字非中文，且不要和模块名一样
2、在cmd打开这个文件夹，然后输入 npm init -y （初始化）
3、去npm官网，搜索crawler
4、在cmd中运行 npm i crawler（下载爬虫模块）
5、使用爬虫，如下代码


爬取元素内容，例如：
var Crawler = require("crawler");
 
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
        }
        done();
    }
});
 
// Queue just one URL, with default callback
c.queue('http://www.baidu.com');

-----------------------------------------------------------------------------------------
爬取图片或视频，例如：
var Crawler = require("crawler");
var fs = require('fs');
 
var c = new Crawler({
    encoding:null,
    jQuery:false,// set false to suppress warning message.
    callback:function(err, res, done){
        if(err){
            console.error(err.stack);
        }else{
            fs.createWriteStream(res.options.filename).write(res.body);
        }
        
        done();
    }
});
 
c.queue({
    uri:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E7%BE%8E%E5%A5%B3&step_word=&hs=0&pn=7&spn=0&di=35090&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3186997546%2C1762170182&os=86097226%2C93959096&simid=3448572432%2C288122016&adpicid=0&lpn=0&ln=3390&fr=&fmq=1593780721779_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=girl&bdtype=0&oriquery=&objurl=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201309%2F03%2F20130903141830_Q4Wuc.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3F4_z%26e3B17tpwg2_z%26e3Bv54AzdH3Frj5rsjAzdH3F4ks52AzdH3F8bnmndnllAzdH3F1jpwtsAzdH3F&gsm=7&rpstart=0&rpnum=0&islist=&querylist=&force=undefined",
    filename:"./mv.jpg",
    headers:{'User-Agent':'requests'}
    /*让服务器伪装成客户端，这样可以破解防爬虫 */
});
```





#### 自动重启工具（nodemon）

```css
在编写调试Node.js项目，修改代码后，需要频繁的手动close掉，然后再重新启动，非常繁琐。现在，我们可以使用nodemon这个工具，它的作用是监听代码文件的变动，当代码改变之后，自动重启。

例如：

nodemon app.js
```



#### package.json  和 package-lock.json

```css
package.json
默认项目初始化json文件，用来描述项目的信息



1.使用npm5之前的版本，是不会生成package-lock json这个文件的。

2. npm5以后，包括npm5这个版本，才会生成package-lockjson文件

3.当使用npm安装包的时候，npm都会生成或者更新package-lock.json文件。

npm5以后的版本，在安装包的时候，不需要加--save (-S) 参数， 也会自动在package.json中保存依赖项（依赖包）。

当安装包的时候，会自动创建或者更新package-lock json文件。

package-lock.json文件内保存了node_ _modules中所有包的信息，包含这些包的名称、版本号、下载地址。

带来好处是，如果重新npm install的时候，就无需逐个分析包的依赖项，因此会大大加快安装速度。

从package-lock.json文件名来看，lock代表的是“锁定”的意思。

它用来锁定当前开发使用的版本号,防止npm instal的时候自动更新到了更新版本。

因为新版本有可能会更新老的api,导致之前的代码出错。

原来的package.json文件只能锁定大版本，也就是版本号的第一位,并不能锁定后面的小版本，你每次npm install
都是拉取的该大版本下的最新的版本，为了稳定性考虑我们几乎是不敢随意升级依赖包的，这将导致多出来很多工
作量，测试/适配等，所以package-lock.jison文件出来了,当你每次安装一个依赖的时候就锁定在你安装的这个版本
```





#### express 模块

```javascript
1、安装前，先清空缓存，否则会报错。 （npm cache clean -f）
2、安装（npm i express）

使用如下，例如:

//导入模块
const express = require('express')

//调用express()方法创建服务器
const app = express()
 
//设置返回用户看的内容
app.get('/', function (req, res) {

//若用内置模块http创建的服务器，返回内容用res.end() 响应
//此express模块创建的服务器，用res.send() 响应
//使用express模块返回中文时不用给响应头中加中文转义，默认会转义
  res.send(`<h1>Hello World~</h1>
            <p>你好呀</p>
  `)
})

//开启服务器
app.listen(8888,()=>{
    console.log("服务器开启成功√")
})
```





#### 创建静态资源服务器

```javascript
访问express中文网的静态文件的创建（https://www.expressjs.com.cn/starter/static-files.html）

例如：

//导入模块
const express = require('express')

//调用express()方法创建服务器
const app = express()
 

//通过如下代码，便可将web目录下的图片、css文件、JavaScript文件对外开放访问
app.use(express.static('web'))

//开启服务器
app.listen(8888,()=>{
    console.log("服务器开启成功√")
})
```





#### 实现简单的get 接口

```javascript
/**
 * 接口：得到一条随机笑话
 * 接口地址：/joke
 * 请求方式：get 
 * 参数：无
 * 返回：一条笑话
 */

 //导包
 const express = require('express')


 //创建服务器
 const app = express()

 //写接口
 app.get('/joke',(req,res)=>{
    //实际开发是从数据库或其他数据源获取
    let arr=['世界是你的','程序员会找到女朋友','你的代码永不报错']
    let index=Math.floor(Math.random()*3); //0,1,2

    //返回笑话
    res.send(`<h1>${arr[index]}</h1>`)
 })

 //开启服务器
 app.listen(8888,()=>{
     console.log("服务器已开启√")
 })
```



#### 实现带有参数的get接口

```javascript
/**
 * 接口：查询英雄对应的外号
 * 接口地址：/name
 * 请求方式：get 
 * 参数：heroName
 * 返回：英雄外号
 */

 //导包
 const express = require('express')


 //创建服务器
 const app = express()

 //写接口
 app.get('/name',(req,res)=>{
    //要接受前端，传递过来的参数
    let hero=''
    //req.query返回的是一个对象
    //herName便是get请求的参数
    switch(req.query.heroName){
        case '提莫':
            hero='迅捷斥候'
            break;
        case '李青':
            hero="盲僧"
            break;
        case '阿狸':
            hero="九尾妖狐"
            break;
        case '猴子':
            hero="齐天大圣"
            break; 
        default:
            hero="该英雄查询不到"; 
            break;  
    }
    res.send(`<h1 style=color:red;>${hero}</h1>`)    
 })

 //开启服务器
 app.listen(8888,()=>{
     console.log("服务器已开启√")
 })
```



#### 实现返回json数据的接口

```javascript
/**
 * 接口：返回一个食物
 * 接口地址：/food
 * 请求方式：get
 * 请求参数：无
 * 返回值：json
 */

//导包
const express = require('express')


//创建服务器
const app = express()

//写接口
app.get('/food',(req,res)=>{
    //1、express模块写法：直接写成对象，这样会自动返回json格式
   res.send({
       foodName:'宫保鸡丁',
       price:22,
       description:'肉大，菜香，多吃不腻'
   })

//    //2、原生内置模块写法：使用内置模块setHeader设置
//    res.setHeader('Conten-Type','application/json');
//    res.send(`
//     foodName:'宫保鸡丁',
//     price:22,
//     description:'肉大，菜香，多吃不腻'
//     `)
})

//开启服务器
app.listen(8888,()=>{
    console.log("服务器已开启√")
})
```





#### 实现简单的post 接口

```javascript
/**
 * 接口：返回默认字符串
 * 接口地址：/str
 * 请求方式：post
 * 参数：无
 * 返回：这是一个post接口
 */

 //导包
 const express = require('express')


 //创建服务器
 const app = express()

 //写接口
 app.post('/str',(req,res)=>{
   
    res.send(`<h1>这是一个post接口</h1>`)
 })

 //开启服务器
 app.listen(8888,()=>{
     console.log("服务器已开启√")
 })
```





#### 实现带有参数的post接口

```javascript
导入第三方模块（npm i body-parser）


/**
 * 接口：用户登录
 * 接口地址：/login
 * 请求方式：post
 * 参数：username password
 * 返回：登录成功/登录失败
 */

//需要使用第三方模块body-parser获取post传递的过来的参数
//安装模块（npm i body-parser）

 //导包
 const express = require('express')
 const bodyParser=require('body-parser')


 //创建服务器
 const app = express()

 //parse application/ x-www-form-urlencoded
 //将post请求体中的格式转换为urlencoded格式
 app.use(bodyParser.urlencoded({extended:false}))

 //写接口
 app.post('/login',(req,res)=>{
    //实际开发根据数据库中的数据进行判断
    //req.body 返回的是post对象，username和password是自定义的参数
    if(req.body.username=='admin' && req.body.password=='88888888'){
        res.send({
            code:200,
            msg:"登录成功"
        })
    }else{
        res.send({
            code:400,
            msg:'账户密码不正确'
        })
    }
    
 })

 //开启服务器
 app.listen(8888,()=>{
     console.log("服务器已开启√")
 })
```





#### 实现post方式传文本参数的接口

```javascript
导入第三方模块（npm i multer）

/**
 * 接口：用户登录
 * 接口地址：/register
 * 请求方式：post
 * 参数：username password usericon（用户头像/图片文件）
 * 返回：注册成功/注册失败
 */

//需要使用第三方模块multer接受post传递过来的文本参数
//安装模块（npm i multerr）

 //导包
 const express = require('express')
 const multer=require('multer')
 
 //用包：创建一个uploads文件夹，接受传递来的文本
 let upload=multer({dest:'uploads/'})


 //创建服务器
 const app = express()


 //写接口
 app.post('/register',upload.single('usericon'),(req,res,next)=>{
    // req.file is the usericon file 
    //传过来的文件参数名用usericon
    // req. body will hold the text fields, if there were any
    //一起传过来的文件保存在req.body中

    //记录了传递过来的文件的一些信息
    console.log(req.file)
    
    //记录了传递过来的post对象和其中的参数
    console.log(req.body)

    
 })

 //开启服务器
 app.listen(8888,()=>{
     console.log("服务器已开启√")
 })
```





#### 注册路由

```javascript
后端路由
注册路由：说白了就是写接口（API）

将多个接口放入一个文件中，只开启一次服务器

例如：

//后端路由
//注册路由：说白了就是写接口（API）


//导包
const express = require('express')

//创建服务器
const app = express()

//注册路由

//1、注册接口
app.post('/register',(req,res)=>{
    //逻辑...
    res.send("注册成功")
})

//2、登录接口
app.post('/login',(req,res)=>{
    //逻辑...
    res.send("登录成功")
})

//3、获取所有英雄接口
app.get('/getAllHero',(req,res)=>{
    //逻辑...
    res.send("获取成功")
})
```



### 自定义模块

```javascript
自定义模块（文件名为：'自定义模块.js'），如下：

let db={
    name:'jine',
    age:'22',
    fun(){
        console.log("我是一个方法")
    },
    funny(){
        console.log('我也是一个方法~~')
    }
}

//导出，提供接口
module.exports=db

-----------------------------------------------------
这样便可以使用我们自定义的模块如下：

//导包
const myMoudle=require('./自定义模块.js')

console.log(myMoudle.name)
console.log(myMoudle.age)
myMoudle.fun()
myMoudle.funny()
```







## 其他补充



### 服务器重定向

```javascript
服务器主动修改浏览器地址栏

//导包
const express=require("express")

//创建服务器
const app=express()

//如果访问本服务器中找不到输入的这个页面，就会自动重定向跳转到指定页面
app.use((req,res)=>{
    //设置302响应头
    //结束响应
    res.writeHead(302,{
        Location:'https://blog.3xnb.com'
    });
    res.end("ok")
})


//启动服务器
app.listen(8888,()=>{
    console.log("服务器已开启√")
})
```





### 中间件

```javascript
服务器开启之后和路由器响应之前执行的一个函数
这个函数可以操作req，res
next() 执行下一个中间件

例如：

//导包
const express=require("express")
const bodyParser=require("body-parser")


//创建服务器
const app=express()


//中间件
//服务器开启之后和路由器响应之前执行的一个函数
//这个函数可以操作req，res
//next() 执行下一个中间件
app.use((req,res,next)=>{
    console.log("LOGGED")
    
    next()
})

//API
app.get('/hello',(req,res)=>{
    res.end("Hello World~")
})



//启动服务器
app.listen(8888,()=>{
    console.log("服务器已开启√")
})
```





### 跨域

```javascript
报错类型：'Access-Contril-Allow-Origin'

-----------------------------------------------------------------------------------------
什么是跨域？

浏览器使用ajax时，如果请求的接口地址和当前打开页面的地址不同源称之为跨域

同源：协议，地址，端口都相同（反之有一个不满足就为不同源）

-----------------------------------------------------------------------------------------
出于安全考虑，浏览器不允许，页面向不同源的接口请求数据，因为如果接口和网页不同源，浏览器默认认为是俩个不同的服务器。
```



#### 解决跨域

```javascript
跨域是前端工作中不可避免的问题:我们经常会出现请求不同源接口的情况，为了能够获取数据，解决跨域的问题方案也有很多，但是常用的就两种

■第一种: CORS（后端操作）
目前的主流方案，也是最简单的方案,直接让后端设置响应头,允许资源共享就ok.


跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器  让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。

例如：

app.get('/login',(req,res)=>{
    //设置响应头，允许资源被访问/共享
    res.setHeader('Access-Control-Allow-Origin','*')
    /*表示所有请求路径都可以请求这个接口*/
})


解决跨域问题，设置响应头的代码，可以在中间件中写，这样可以在所有接口中都会应用到（只在中间件写一次就可以了，不用再多个接口中去写，因为中间件是在服务器开启之后和路由响应之前执行的一个函数）

例如:

app.use((req,res,next)=>{
     //在中间件中设置响应头，允许资源被所有接口访问/共享
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
})

-----------------------------------------------------------------------------------------
    
或者还可以安装第三方模块（npm i cors）

例如：

//导入包
const cors=require('cors')
//使用
app.use(cors());
/*直接使用这个模块，便可省略在中间件中写的解决跨域问题的代码*/
```

```javascript
■第二种:JSONP（前后端配合）
曾经的跨域杀手，专治各种跨域问题。现在慢慢的淡出历史舞台
PS:面试官特别喜欢问这个，因为这个有一定的技术难度，也能体现一个人的实际开发经验
jsonp是前后端来配合使用的.
使用原理:通过动态创建script标签通过script标签的src请求没有跨域限制来获取资源


补充知识：
浏览器页面上使用ajax发请求，当前页面地址和ajax请求的地址不同源，才会有跨域限制
但script、img、link标签中的src属性发的请求都没有跨域限制


使用jsonp原理：
这样便可以用script标签中的src来操作，去访问后端地址的接口时，前后端规定好使用的get请求传入的参数名便可，这样也没有了跨域限制


-----------------------------------------------------------------------------------------
前端页面，例如：

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSONP</title>
</head>
<body>
    <script>
        function print(obj){
            alert(obj.user)
            alert(obj.data)
        }
    </script>
    <!-- 前端页面：访问后端API，传入后端指定get参数，后端处理返回后，接受到返回的调用和实参对象来使用 -->
    <script src="http://127.0.0.1:8888/getAll?fun=print"></script>
</body>
</html>

-----------------------------------------------------------------------------------------
后端页面，例如：

//导包
const express=require("express")

//创建服务器
const app=express()

app.get('/getAll',(req,res)=>{
    //接受到前端传入的get参数，当作函数调用这个参数，并传入实参对象，最后返回前端
    res.send(`${req.query.fun}({"user":"我是jine","data":"成功调用√"})`)
})

//启用服务器
app.listen(8888,()=>{
    console.log("服务器成功启动√")
})


-----------------------------------------------------------------------------------------
    
或者还可以直接在Ajax请求时，加上 dataType:'jsonp'

例如：

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>点击哟</title>
    <script src="https://jine.oss-cn-beijing.aliyuncs.com/API/jquery-3.5.0.js"></script>
    <script>
        $(()=>{
            let $btn= $('button')
            $btn.on("click",()=>{
                $.ajax({
                    url:'http://127.0.0.1:8888/getAll',
                    dataType:'jsonp',
                    success:(backData)=>{
                        alert(backData.user)
                        alert(backData.data)
                    }
                })

                // 如果访问的接口支持jsonp，那么发送ajax便可以使用jsonp
                //  ajax加 dataType:'jsonp' 便可使用
                //  加的原理是：自动创建一个script标签，用他的src属性去请求服务器

                //注意：后端中的参数必须是callback，因为使用ajax开启jsonp，src传递的参数是callback，所以要一致
            })
        })
    </script>
</head>
<body>
    <button>点击我哟~</button>
</body>
</html>

"注意：后端中的参数必须是callback，因为使用ajax开启jsonp，src传递的参数是callback，所以要一致"
```





### 聚合数据（API）

```
百度搜索聚合数据，进入官方
便可调用别人提供已经写好的API
只要使用的接口支持jsonp，那么可以用ajax去请求
```







## 数据库操作

```javascript
安装第三方模块（npm i mysql）
```





### 查询

```javascript
查询数据库，使用如下，例如：

//导包
const express=require("express")
const mysql=require("mysql")

//创建服务器
const app=express()

//创建一个和数据库的连接
const connction=mysql.createConnection({
    host:'localhost', //地址
    user:'root',     //账户
    password:'xxxxxxx', // 密码
    database:'gradem'  //数据库名
})

//打开连接
connction.connect();

//执行sql语句
//查询操作
connction.query('select * from student',(error,results,fields)=>{
    //error 报错对象，若没有错误就返回null
    //results sql语句得到的结果集，若有错返回undefined
    //
    if(error) throw console.error

   
    // console.log(results[3].sname)
    //results返回的是一个数组，数组中包含对象

    // console.log(fields)
    //拿到字段的信息
    
});

//关闭连接
connction.end()

//开启服务器
app.listen(8888,()=>{
    console.log("服务器已成功开启√")
})
```





### 增加

```javascript
//导包
const express=require("express")
const mysql=require("mysql")

//创建服务器
const app=express()

//创建一个和数据库的连接
const connction=mysql.createConnection({
    host:'localhost', //地址
    user:'root',     //账户
    password:'xxxxxxxx', // 密码
    database:'gradem'  //数据库名
})

//打开连接
connction.connect();

// 数据
let data={
    sno:'20200606',
    name:'库里',
    sex:'男',
    saddress:'美国',
    sdept:'NBA职业联赛系',
    speciality:'三分篮球专业'
}

let addSql=`insert into student(sno,sname,ssex,saddress,sdept,speciality) values('${data.sno}','${data.name}','${data.sex}','${data.saddress}','${data.sdept}','${data.speciality}')`

//执行sql语句
//增加数据
connction.query(addSql,(error,results,fields)=>{
    if(error==null){
        //返回结果是一个对象
        console.log(results)
        
        //受影响的行数，如果大于0，说明新增成功
        console.log(results.affectedRows)

        //插入这条数据的id
        console.log(results.insertId)

    }else{}
        console.log(error);   
});

//关闭连接
connction.end()

//开启服务器
app.listen(8888,()=>{
    console.log("服务器已成功开启√")
})
```





### 更新

```javascript
//导包
const express=require("express")
const mysql=require("mysql")

//创建服务器
const app=express()

//创建一个和数据库的连接
const connction=mysql.createConnection({
    host:'localhost', //地址
    user:'root',     //账户
    password:'19981123', // 密码
    database:'gradem'  //数据库名
})

//打开连接
connction.connect();


let updateSql=`update student set sname='小学生' where sno='20200606' `

//执行sql语句
//更新数据
connction.query(updateSql,(error,results,fields)=>{
    if(error==null){
        //返回结果是一个对象
        console.log(results)
        
        //受影响的行数，如果大于0，说明新增成功
        console.log(results.affectedRows)

        //插入这条数据的id
        console.log(results.insertId)

    }else{}
        console.log(error);   
});

//关闭连接
connction.end()

//开启服务器
app.listen(8888,()=>{
    console.log("服务器已成功开启√")
})
```





### 删除

```javascript
//导包
const express=require("express")
const mysql=require("mysql")

//创建服务器
const app=express()

//创建一个和数据库的连接
const connction=mysql.createConnection({
    host:'localhost', //地址
    user:'root',     //账户
    password:'xxxxxxxx', // 密码
    database:'gradem'  //数据库名
})

//打开连接
connction.connect();


let delSql=`delete from student where sno='20050202'`

//执行sql语句
//删除数据
connction.query(delSql,(error,results,fields)=>{
    if(error==null){
        //返回结果是一个对象
        console.log(results)
        
        //受影响的行数，如果大于0，说明新增成功
        console.log(results.affectedRows)

        //插入这条数据的id
        console.log(results.insertId)

    }else{}
        console.log(error);   
});

//关闭连接
connction.end()

//开启服务器
app.listen(8888,()=>{
    console.log("服务器已成功开启√")
})
```



### 黑马第三方库（数据库简易操作）

```javascript
const hm=require('mysql-ithm')

//连接数据库
//没有自动创建
hm.connect({
    host:"localhost",
    port:'3306',
    user:'root',
    password:'19981123',
    database:'game'
})

//创建Model（表格模型，增删改查）
//如果table表格存在则连接，不存在则自动创建
//最好先创建好数据库和表，因为这个hm模块创建出来的表，再存入中文时会报错
//自己创建的数据库和表可以先设置为utf-8
let heroModel=hm.model('hero',{
    name:String,
    skill:String,
    icon:String,
    status:String
})
```



## npm发布包



### 一、发布一个新包



#### 1、进入要发布的项目根目录，初始化为npm包：

```
npm init
```

依次按提示填入包名、版本、描述、github地址、关键字、license等

![](https://img-blog.csdn.net/20180908174017676?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Rhb2VyY2h1bg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

这步完成之后会生成一个package.json文件，上面输入的这些信息可以在该文件中修改

<font color='red'>注意：如果你的包引用了第三方包，则需要在package.json文件种增加dependencies节点，写入依赖的包及版本</font>

```css
"dependencies": {
    "mysql": "^2.18.1"
    /*这个mysql便是依赖包的版本*/
  }
```



#### 2、注册npm用户，有两种方法



方法一、npm官网注册：npm

方法二、使用npm 命令注册：npm adduser（）

```css
注意：如果用户名被别人注册过，那么回报如下错误：

Unable to authenticate, need：Basic



注意：用第二种方法注册的用户登录后，发布包时候会报如下错，只能使用方法一，去官网注册

 'mypackage1' is not in the npm registry.
```



#### 3、账号登录

```
npm login
```

依次输入第二步中第一种方法注册的用户名、密码和邮箱



#### 4、发布包，上传到npm包服务器

```
npm publish
```

<font color="red">注意：如果报错：'You do not have permission to publish "mypackage1". Are you logged in as the correct user?'</font>

表示包’mypackage1‘已经在包管理器已经存在被别人用了，需要更该包名称

’+’符合表示发布成功了



可以去自己的npm主页上验证以下，可以看到包mypackage_tao已经在列表中了



<font color="red">注意：如果发布时报错：‘no_perms Private mode enable, only admin can publish this module:’</font>

表示当前不是原始镜像，可能用的是其他镜像，如淘宝镜像，

要切换回原始的npm镜像，命令：

```
npm config set registry https://registry.npmjs.org/
```

如果用了nrm工具，使用命令：nrm use npm 切换



淘宝镜像

```css
npm config set registry https://registry.npm.taobao.org

// 配置后可通过下面方式来验证是否成功
npm config get registry
// 或
npm info express
```



### 二、更新一个已经发布的包



#### 1、修改包的版本

将package.json文件中的version值修改。



#### 2、重新发布包

```
npm publish
```



### 三、删除包



#### 1、删除指定的版本

```
npm unpublish 包名@版本号
```



#### 2、删除整个包

```
npm unpublish 包名 --force
```

会有警告提示





## 抓包入库



### 爬取王者荣耀英雄

```javascript
//导入模块
const hm=require('mysql-ithm')
const Crawler = require("crawler");


//1、抓包
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            
            // console.log(JSON.parse(res.body))
            /*王者荣耀所有的英雄，返回的是包含了很多对象的数组 */


            //所有的英雄，都要去获取他对应的头像和技能
            //所以要遍历出每一个英雄的ename，拼接一个路径重新发请求
           
            JSON.parse(res.body).forEach((item)=>{
                //console.log(`https;//pvp.qq.com/web201605/herodetaul/${item.ename}.shtml`)

                //详情技能请求
                xq.queue(`https://pvp.qq.com/web201605/herodetail/${item.ename}.shtml`)
            })
        }
        done();
    }
});

//存取英雄信息
let heros=[]

//创建一个英雄技能详情的信息的抓包
var xq = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;

            // //英雄名字
            // console.log($('.cover-name').text())

            // // //英雄技能
            // console.log($('.skill-name>b').first().text())

            // // //英雄头像
            // console.log('https:'+$('.ico-play').prev('img').attr('src'))
            
            //增加英雄名字、英雄技能、英雄头像
            heros.push({
                name:$('.cover-name').text(),
                skill:$('.skill-name>b').first().text(),
                icon:'https:'+$('.ico-play').prev('img').attr('src'),
                status:false
            })
        }
        done();
    }
});

//王者荣耀，页面人物信息数据抓取
// Queue just one URL, with default callback
c.queue('https://pvp.qq.com/web201605/js/herolist.json');


//要等待所有异步请求数据全部做完后，才开始入库
xq.on('drain',()=>{
    // 调用API,插入数据
    heroModel.insert(heros,(err,res)=>{
        console.log(err)
        console.log(res)
        if(!err) console.log("成功添加√")
    })
})

//2、连接数据库
//没有自动创建
hm.connect({
    host:"localhost",
    port:'3306',
    user:'root',
    password:'19981123',
    database:'game'
})

//3、创建Model（表格模型，增删改查）
//如果table表格存在则连接，不存在则自动创建
//最好先创建好数据库和表，因为这个hm模块创建出来的表，再存入中文时会报错
//自己创建的数据库和表可以先设置为utf-8
let heroModel=hm.model('hero',{
    name:String,
    skill:String,
    icon:String,
    status:String
})
```





### 爬取美女图片

```javascript
//导入模块
const hm=require('mysql-ithm')
const Crawler = require("crawler");




//存取所有美女图片链接
let links=[]

//1、抓包
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server

            //遍历当前页面所有指定的美女图片
            $('.soxflashtext').each((index,item)=>{
                let img=$(item).prev('a').children().attr('src')
                let name=$(item).prev('a').children().attr('alt')
                links.push({
                    name,
                    link:img
                })
            })
        }
        done();
    }
});

// // Queue just one URL, with default callback
c.queue('https://www.tupianzj.com/meinv/mm/toumingqunzi/');




//要等待所有异步请求数据全部做完后，才开始入库
c.on('drain',()=>{
    // 调用API,插入数据
    mmModel.insert(links,(err,res)=>{
        console.log(err)
        console.log(res)
        if(!err) console.log("成功添加√")
    })
})

//2、连接数据库
//没有自动创建
hm.connect({
    host:"localhost",
    port:'3306',
    user:'root',
    password:'19981123',
    database:'girl'
})

//3、创建Model（表格模型，增删改查）
//如果table表格存在则连接，不存在则自动创建
//最好先创建好数据库和表，因为这个hm模块创建出来的表，再存入中文时会报错
//自己创建的数据库和表可以先设置为utf-8
let mmModel=hm.model('mm',{
    name:String,
    link:String
})
```





## cookie

![image-20200708233538908](C:\Users\10796\Pictures\image-20200708233538908.png)



### 原生cookie设置

```javascript
//导入模块
const express= require("express")

//创建服务器
const app=express()

//路由
//登录
app.get('/login',(req,res)=>{
    let {username,password}=req.query
    //设置cookie
    res.writeHead(200,{
        'Conten-Type':'text/plain;charset=utf-8',
        'Set-Cookie':`user=${password}` //实际开发，是密文
    })
    res.send()
})

//查询
app.get('/list',(req,res)=>{
    console.log(req.headers)
    res.send('666')
})


//开启服务器
app.listen(8888,()=>{
    console.log("服务器已开启√")
})
```





### 第三方 cookie-session 模块

```javascript
//1、导包
const express=require('express')
const cookieSession=require('cookie-session')

//2、创建服务器
const app=express()

//3、设置cookie中间件
app.use(cookieSession({
    name: 'session',
    keys: ['jine','niec','good'],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours（cookie过期时间）
}))

//4、注册路由
//登录接口
app.get('/login',(req,res)=>{
    let {name,passwd}=req.query
    //登录成功，响应回去一个cookie
    //发回去的session，是一个userCookie对象
    req.session.userCookie ={name,passwd}
    res.send("ok")
})

//5、开启服务器
app.listen(8888,()=>{
    console.log("服务器已成功开启√")
})
```



### 解决cookie跨域问题

```javascript
"注意:在前端页面中设置访问对应的服务器接口（设置了cookie），而且浏览器中的URL为本地地址(C://xxxxx/login.html)去访问，浏览器会获取不到cookie，且http://localhost:8888/login.html，也是获取不到cookie"

"只能是访问，http://127.0.0.1:8888/login.html  这样cookie才没有跨域问题"


"下面是解决cookie跨域问题，以下内容来自（https://www.cnblogs.com/lijinwen/p/8012547.html）"

前端的ajax后者axios需要设置withCredentials为true。这样请求会携带上cookie

同时后端使用cors中间件。 即可,如下：

//需要安装并且引入中间件cors
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  maxAge: '1728000'
  //这一项是为了跨域专门设置的
}
app.use(cors(corsOptions))
//设置跨域

-----------------------------------------------------------------------------------------
如果不用中间件，也可以这样，显示的设置

Access-Control-Allow-Credentials 为true

注意origin不能是*号。 这样浏览器就不会拦截服务器设置的cookie了

app.all('*', function(req, res, next) {
     res.header("Access-Control-Allow-Origin", req.headers.origin); //需要显示设置来源
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
     res.header("Access-Control-Allow-Credentials",true); //带cookies7     res.header("Content-Type", "application/json;charset=utf-8");
     next();
 });

```



## Promise （解决回调地狱）



### Promise 概述

```css
Promise是异步编程的一种解决方案，比传统的解决方案一回调函数和事件一更合理和更强大。

它由社区最早提出和实现，ES6将其写进了语言标准，统一了用法,原生提供了Promise对象。

所谓Promise,简单说就是一个容器， 里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果。

从语法上说，Promise是一个对象，从它可以获取异步操作的消息。

Promise 提供统一的API,各种异步操作都可以用同样的方法进行处理。

Promise 对象代表一个异步操作：
有三种状态：pending(进行中)、fulfilled (已成功)和rejected (已失败)。

Promise对象的状态改变，只有两种可能:
1、成功：从pending变为fulfilled
2、失败：从pending变为rejected。

只有异步操作的结果，可以决定当前是哪一种状态， 任何其他操作都无法改变这个状态。

这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。


ajxa和axios也会返回promise对象（有些方法自身便会返回promise对象，不用去手写promise对象）
```



### Promise 语法

```javascript
ES6规定，Promise对象是一个构造函数，用来生成Promise实例

Promise 构造函数接受一个函数作为参数，
这个作为参数的函数，也有俩个参数，该函数的俩个参数分别是resolve和reject
这俩个参数也是函数，由JavaScript 引擎提供，不用自己部署

异步操作成功后，调用resolve()方法，其内部调用了then()里面的第一个参数函数
异步操作失败后，调用reject()方法，其内部调用了then()里面的第二个参数函数

例如：

const fs=require('fs')

let p=new Promise((resolve,reject)=>{
    //写异步操作（读文件）
    fs.readFile(`${__dirname}/file/aa.txt`,'utf-8',(err,data)=>{
        if(err){
            //文件读取失败
            reject(err)  // 调用then() 里面第二个参数函数
        }else{
            //文件读取成功
            resolve(data)//调用then() 里面第一个参数函数
        }
    })
})

p.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})

/*上面p对象中写异步操作，这个对象会直接执行。*/

-----------------------------------------------------------------------------------------当然也可以为其封装一个函数，以后调用时再执行，例如：

function getPromise(){
    return new Promise((resolve,reject)=>{
    //写异步操作（读文件）
    fs.readFile(`${__dirname}/file/aa.txt`,'utf-8',(err,data)=>{
        if(err){
            //文件读取失败
            reject(err)  // 调用then() 里面第二个参数函数
        }else{
            //文件读取成功
            resolve(data)//调用then() 里面第一个参数函数
        }
    })
})
}

getPromise().then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})
```





### 回调地狱概述

```javascript
假如需求是依次去执行异步代码（异步操作无顺序），而且是顺序执行

那么做法是在异步请求成功后的回调函数中，再去执行下一个异步请求

但是会出现回调地狱，例如：

/*
补充知识：
在一个回调函数中嵌套回调函数，不断的进行嵌套，代码阅读性地，维护不变，让人觉得害怕，这样就是回调地狱
*/

//导包
const fs=require('fs')

//读a文件
fs.readFile(`${__dirname}/file/a.txt`,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data); 
        
        //读b文件
        fs.readFile(`${__dirname}/file/b.txt`,'utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data);  

                //读c文件
                fs.readFile(`${__dirname}/file/c.txt`,'utf-8',(err,data)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log(data);  
                    }
                })
            }
        })
    }
})


```





### 解决回调地狱

```javascript
//导包
const fs=require('fs')

function getPromise(filename){
    return new Promise((resolve,reject)=>{
    //写异步操作（读文件）
    fs.readFile(`${__dirname}/file/${filename}.txt`,'utf-8',(err,data)=>{
        if(err){
            //文件读取失败
            reject(err)  // 调用then() 里面第二个参数函数
        }else{
            //文件读取成功
            resolve(data)//调用then() 里面第一个参数函数
        }
    })
})
}

getPromise('a').then((data)=>{
    console.log(data)
    
    //调用getPromise()，此时传入的参数是b文件，并返回
    //return 返回的整体再去执行下一个then
    return getPromise('b')
},(err)=>{
    console.log(err)
}).then((data)=>{
    console.log(data)
    return getPromise('c')
}).then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})
```





### Promise 方法补充



#### catch()

```javascript
抓取错误信息，这样在每个文件后面省略了 (err)=>{console.log(err)}
只需要再最后写个文件后面 catch((err)=>{console.log(err)})

例如：

//导包
const fs=require('fs')

function getPromise(filename){
    return new Promise((resolve,reject)=>{
    //写异步操作（读文件）
    fs.readFile(`${__dirname}/file/${filename}.txt`,'utf-8',(err,data)=>{
        if(err){
            //文件读取失败
            reject(err)  // 调用then() 里面第二个参数函数
        }else{
            //文件读取成功
            resolve(data)//调用then() 里面第一个参数函数
        }
    })
})
}

getPromise('a').then((data)=>{
    console.log(data)
    
    //调用getPromise()，此时传入的参数是b文件，并返回
    //return 返回的整体再去执行下一个then
    return getPromise('b1')
}).then((data)=>{
    console.log(data)
    return getPromise('c')
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

```





####  all()

```javascript
用于将多个promise实例，包装成一个新的promise实例
所有promise对象执行成功，all才会成功（相对于并且）

//导包
const fs=require('fs')

function getPromise(filename){
    return new Promise((resolve,reject)=>{
    //写异步操作（读文件）
    fs.readFile(`${__dirname}/file/${filename}.txt`,'utf-8',(err,data)=>{
        if(err){
            //文件读取失败
            reject(err)  // 调用then() 里面第二个参数函数
        }else{
            //文件读取成功
            resolve(data)//调用then() 里面第一个参数函数
        }
    })
})
}

let p1=getPromise('a')
let p2=getPromise('b')
let p3=getPromise('c')

let pAll=Promise.all([p1,p2,p3])
//每一个promise对象（p1,p2,p3）都读取成功，最后才会成功
pAll.then((data)=>{
    console.log(data)
})
```





#### race()

```javascript
此方法和all()类似，但是只要一个promise执行成功，那么race就成功（相当于或者）

例如：

//导包
const fs=require('fs')

function getPromise(filename){
    return new Promise((resolve,reject)=>{
    //写异步操作（读文件）
    fs.readFile(`${__dirname}/file/${filename}.txt`,'utf-8',(err,data)=>{
        if(err){
            //文件读取失败
            reject(err)  // 调用then() 里面第二个参数函数
        }else{
            //文件读取成功
            resolve(data)//调用then() 里面第一个参数函数
        }
    })
})
}

let p1=getPromise('a')
let p2=getPromise('b')
let p3=getPromise('c')

let pAll=Promise.race([p1,p2,p3])
//每一个promise对象（p1,p2,p3）有一个读取成功，race便会成功（每次执行后便会随机读一个文件）
pAll.then((data)=>{
    console.log(data)
})
```







## Module 模块

```css
export命令:用于规定模块对外的接口
➢外部能够读取模块内部的某个变量、函数、类
➢使用as关键字重命名
➢该命令可以出现在模块的任何位置，只要处于模块顶层即可，除了块作用域内(import也是如此)。


import命令:用于输入其它模块提供的功能
➢变量、函数
➢使用as关键字
➢输入的变量都是只读的
➢Import命令具有提升效果


浏览器加载ES6模块
<script type='module' src='xxx.js'> </script>
```

