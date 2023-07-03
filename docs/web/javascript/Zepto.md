# Zepto

## Zepto和移动手势开发

###第一章 认识zepto
Zepto是一个轻量级的针对现代高级浏览器的JavaScript库， 它与jquery有着类似的api。 如果你会用jquery，那么你也会用zepto。zepto文件的很小，主代码gzip压缩版本只有9.6kb，并且封装了很多独立的模块，供用户灵活的选用，因此十分适合移动web开发使用。

移动端同时也有jqmobile和hammer.js等框架，但是jqmobile类似bootstrap，侧重于UI的开发，体积也比较大。现在我们仅以zepto为代表作为讲解。

> 随着手机端网速和wifi的普及，外部引入的文件大小似乎已经不能影响用户的体验了。从性能上来说，zepto逊色与Jquery，为了保持代码的统一性，现在的前端框架基本上用作与手势开发。

### 第二章 querySelector

Zepto是针对现代浏览器开发的js库，现代浏览器基本上都支持querySelecor,而zepto封装的即为querySelector.

#### 2.1 querySelector

从ie7开始，浏览器内置了名为querySelector的js原生选择器，支持以css选择器的方式选择dom元素。

querySelector提供了两个API接口

+ `document.querySelector("");`选中一个dom元素
+ `document.querySelectorAll("")`; 选中一组dom元素，可以以数组的方式取出其中的单元。

#### 2.2 querySelector实例

```html
<div id="test">你好 querySelector</div>
```

我们用原生js选中它,获取其中的文字,十分简单

```js
document.getElementById('test');
```

如果采用querySelector选中的话,需要使用css选择器的#id,即为

```js
document.querySelector("#test");
```

或者

```js
document.querySelectorAll('#test')[0];
```

上面的例子可能看不到querySelector的优势,但是对于复杂的选择,我们可以直接使用css3选择器进行选择

```html
<ul class="season">
        <li>春</li>
        <li>夏</li>
        <li>秋</li>
        <li>冬</li>
</ul>
```

如果我想要选择'夏'这个li,用原生js怎么写?
如果采用querySelector选中的话,可能会很简单

```js
document.querySelector('.season>li:nth-child(2)').innerHTML;
document.querySelectorAll('.season>li')[1].innerHTML;
```

同样我们也可以对其中的内容进行遍历

```js
var node = document.querySelectorAll('.season>li');
for (var i = 0; i < node.length; i++) {
    console.log(node[i].innerHTML);
}
```

### 第三章 Zepto

#### 3.1 zepto的下载

我们首先从github上下载完整版的zepto

> http://www.css88.com/doc/zeptojs_api/

##### 3.1.2 zepto模块分析

| module     | default | description                                                                         |
| ---------- | ------- | ----------------------------------------------------------------------------------- |
| zepto      | ✔       | 核心模块；包含许多方法                                                                         |
| event      | ✔       | 通过on()& off()处理事件                                                                   |
| ajax       | ✔       | XMLHttpRequest 和 JSONP 实用功能                                                         |
| form       | ✔       | 序列化 & 提交web表单                                                                       |
| ie         | ✔       | 增加支持桌面的Internet Explorer 10+和Windows Phone 8。                                       |
| detect     | ×       | 提供 $.os和 $.browser消息                                                                |
| fx         | ×       | The animate()方法                                                                     |
| fx_methods | ×       | 以动画形式的 show, hide, toggle, 和 fade*()方法.                                             |
| assets     | ×       | 实验性支持从DOM中移除image元素后清理iOS的内存。                                                       |
| data       | ×       | 一个全面的 data()方法, 能够在内存中存储任意对象。                                                       |
| deferred   | ×       | 提供 $.Deferredpromises API. 依赖"callbacks" 模块. 当包含这个模块时候, $.ajax() 支持promise接口链式的回调。  |
| callbacks  | ×       | 为"deferred"模块提供 $.Callbacks。                                                        |
| selector   | ×       | 实验性的支持 jQuery CSS 表达式 实用功能，比如 $('div:first')和 el.is(':visible')。                    |
| touch      | ×       | 在触摸设备上触发tap– 和 swipe– 相关事件。这适用于所有的`touch`(iOS, Android)和`pointer`事件(Windows Phone)。 |
| gesture    | ×       | 在触摸设备上触发 pinch 手势事件。                                                                |
| stack      | ×       | 提供 andSelf& end()链式调用方法                                                             |
| ios3       | ×       | String.prototype.trim 和 Array.prototype.reduce 方法 (如果他们不存在) ，以兼容 iOS 3.x.           |

####3.2 zepto选择器

#####3.2.1 zepto选择器特征
和JQuery一样,zepto也拥有一个选择器帮我们选择dom元素,jQuery 通过自己编写的 sizzle 引擎来支持 CSS 选择器，而 Zepto 是直接通过浏览器提供的 document.querySelectorAll 接口,只能够使用标准的css选择器,至于JQuery中的一些伪类选择器,比如

+ :visible :hidden
+ :first
+ :eq

等等,这些伪类选择器可以通过`selector.js`来进行拓展.

#####3.2.2zepto选择器用法

```js
$('div')  //=> 所有页面中得div元素
$('#foo') //=> ID 为 "foo" 的元素

// 创建元素:
$("<p>Hello</p>") //=> 新的p元素
// 创建带有属性的元素:
$("<p />", { text:"Hello", id:"greeting", css:{color:'darkblue'} })
//注意闭合标签的写法;
```

我们可以用类似JQuery的api来对dom元素进行操作,但是zepto一般适用于移动端,没有封装click事件,所以我们需要引入`touch.js`和`event.js`,使用触摸事件'tap'

例子如下:

```html
<ul class="season">
        <li>春</li>
        <li>夏</li>
        <li>秋</li>
        <li>冬</li>
</ul>
<button id="add">增加</button>
<script src="src/zepto.js"></script>
<script src="src/event.js"></script>
<script src="src/touch.js"></script>
```

```js
$('#add').tap(function(){
        $("<li />", { text:"Hello", id:"greeting", css:{color:'darkblue'} }).appendTo('.season')

    })
```

#### 3.3 zepto常见方法和事件

其实zepto的方法和JQuery方法类似,也存在:val(),html(),append(),appendTo(), insertBefore()等,他们在使用上除了选择器不同,基本一致.
当我们在使用时发现和JQuery有偏差的时候,直接查询官方手册即可;
比如我们想写一个click事件其实也是有办法的,类似于jquary中的on,zepto也给我们封装了一个`on`

修改上例:

```js
$('#add').on(click,function(){
        $("<li />", { text:"Hello", id:"greeting", css:{color:'darkblue'} }).appendTo('.season')

    })
```

使代码能够正常在pc页面执行.

#### 3.4 zepto写轮播图

下面我们就用zepto修改淘宝中的轮播图
首先查看demo,发现要写动画,必须加载`fx.js`和`event.js`

查看animate的使用方法

```js
setInterval(function() {
    $('.banner-wrap>li:last-of-type').animate({
        opacity: 0.4
    }, 500, function() {
        $('.banner-wrap>li:last-of-type').prependTo('.banner-wrap').css({
            opacity: 1
        });
    })

}, 3000)
```

#### 3.5 zepto中的手势

zepto中的手势暂时支持双击 单击 长按 滑动等效果.

##### 3.5.1 touch

```html
<style>
html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
*{
    margin: 0;
    padding:0;
}

#view {
    background:orange;
}
</style>
<body>
    <div id="view">
        <pre><b>哈哈</b></pre>
        <p>第1段文字内容</p>
        <p>第2段文字内容</p>
        <p>第3段文字内容</p>
        ......
    </div>
</body>
```

```js
$("#view").tap(function(){
  $('pre').html('单击');
})
$("#view").longTap(function(){
  $('pre').html('长按');
})
$("#view").doubleTap(function(){
  $('pre').html('双击');
})
$(document).swipeUp(function(){
  $('pre').html('飞起');
})
$(document).swipeDown(function(){
  $('pre').html('下来');
})
$(document).swipeLeft(function(){
    $('#view').css('transform' , 'translate(-50%,0,0)');
});
```

但是我们想要实现的手指滑动移动一些距离并没有实现,这就需要我们对原生的手势事件进行分析.

> 左右滑动无法实现是chrome54以上的指针活动和zepto内置的指针活动重复了 在chrome://flags 关闭Pointer Events

##### 3.5.2 gusture

经过测试,安卓手机不适配,测试苹果手机

```js
$('#view').pinch(function(){
    $('pre').html('pinch');
})
```

需要引入OS模块并且禁用默认的手势事件

### 第四章 移动手势开发

#### 4.1移动web开发和普通web开发的区别

1.样式：移动适配
2.行为：单击 双击 滑动 转动

#### 4.2触摸事件

Apple在发布iPhone 3gs 的同时引入了两种新的事件概念：touch和gesture。

我们可能是多点触控
Touch用来保存有多少手指接触在屏幕上以及这些触点的位置、触点的状态。（有多少手指 触摸在了 屏幕的多少的不同位置上 ）
Gesture则是用来描述用户在交互时到底做了哪些更高层次上的行为，比如：pinching，rotating，swiping，double-tapping等等；
Touch事件在众多平台上都得到支持(最初在iOS上建立起的touch事件模型已被作为标准写入W3C Touch Events specification)，
而原生的Gesture事件在很多地方都没有得到支持，在iOS上的Gesture事件也仅限于其平台支持的少量gesture。

#### 4.3 触摸事件的类型

+ ontouchstart
+ ontouchmove
+ ontouchend
+ ontouchcancel

其中,触摸取消可以被更高优先级的事件所取代。打游戏来电话可以使用touchcancel来保存分数。

#### 4.4 事件对象

我们来查看触摸事件的事件对象有哪些:

```js
bd.addEventListener('touchstart' , function(e) {
    console.log(e);
} , false);


bd.addEventListener('touchmove' , function(e) {
    console.log(e);
} , false);

bd.addEventListener('touchend' , function(e) {
    console.log(e);
} , false);
```

可以看到,在这几种touch事件当中,都存在三个很重要的属性

+ touches : 当前在屏幕上的所有点
+ targetTouches : 当前在目标点击元素上的所有点
+ changedTouches : 整个事件中，所触摸的所有点

在移动开发当中,触摸的对象一般来说是针对整个屏幕,即页面的body而言,所以touches和changedTouches可以混用.

而changedTouches相对中的Touchlist对象则列出了和这个触摸事件对应的 Touch 对象。
对于 touchstart 事件, 这个TouchList对象列出在此次事件中新增加的触点。对于 touchmove 事件，列出和上一次事件相比较，发生了变化的触点。对于 touchend ，列出离开触摸平面的触点（这些触点对应已经不接触触摸平面的手指）。

在Touchlist,即changedTouches相对的对象当中,我们可以取到

```
0:{
    pageX:...,
    pageY:...,    
}
```

可以帮助我们定位当前触摸点相对屏幕的位置.

通过位置,我们就可以计算滑动的距离并且做一些列的手势开发工作.

**注意**
一般来说,touches,和changedTouches这两个TouchList在touchend事件中为空,这也是可以理解的,因为触摸结束的时候屏幕上已经不存在触点了.

**注意**
由于屏幕尺寸比较小,移动设备上的触摸事件比onclick事件优先级要高.触摸后有300ms延迟触发onclick事件.
如果不想触发onclick事件,可以直接使用`preventDefault()`阻止事件发生.

#### 4.5 屏幕滚动

我们可以利用touchstart和touchend来完成屏幕的上下滚动

```html
<style>
html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
<body>
    <div id="view" style="margin-top:0px">    
        <h1>标题</h1>
        <div>
            <p>内容1</p>
            <p>内容2</p>
            <p>内容3</p>
            .....
         </div>
    </div>
</body>
```

```js
(function(){
    var bd = document.getElementsByTagName('body')[0];
    var view = document.getElementById('view');

    var startY = 0 , endY = 0 , distance;

    bd.addEventListener('touchstart' , function(e) {
        console.log(startY = e.changedTouches[0].pageY);
    } , false);

    bd.addEventListener('touchend' , function(e) {
        endY = e.changedTouches[0].pageY;
        distance = endY - startY;

        console.log(view.style.marginTop);

        view.style.marginTop = parseInt(view.style.marginTop) + distance + 'px';

    } , false);
    })();
```

上面的滚动并不是无缝的,我们可以利用touchmove来动态的确定移动的起始值

```js
var startY = 0,
    endY = 0,
    distance = 0,
    mt = 0;
var bd = document.getElementsByTagName('body')[0];
var view = document.getElementById('content');
bd.addEventListener('touchstart', function(e) {
    startY = e.changedTouches[0].pageY;
}, false);
bd.addEventListener('touchmove', function(e) {
    endY = e.changedTouches[0].pageY;
    distance = endY - startY;
    console.log(endY);
    mt = parseInt(view.style.marginTop);
    if (mt >= 100) {
        return;
    };
    view.style.marginTop = mt + distance + 'px';
    startY = endY;
    //保证每次开始都是新的start
}, false);
bd.addEventListener('touchend', function(e) {
    if (mt >= 0) {
        var step = mt / 20;
        var clock = setInterval(function() {
            mt = mt - step;
            if (mt <= 0) {
                view.style.marginTop = 0 + 'px';
                clearInterval(clock);
            } else {
                view.style.marginTop = mt + 'px';
            }
        }, 50)
    }else{
        return false;
    }
}, false)
```

**注意**
在手机端展示的时候,要禁止手机端默认的手势效果

```js
    document.getElementsByTagName('body')[0].addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);
```

#### 4.6 屏幕其他手势操作

除了屏幕滚动以外,我们同样可以用起始点的坐标值自己封装一系列的手势动作.

+ 左右滑动 判断起始点的相对位置 及位移的方向
+ 双击 判断一定时间内同一对象上触发开始和结束的次数
+ 旋转 判断初始两根手指所在的点连成的线于结束时的夹角
+ 缩放 判断初始两根手指所在的点连成的线于结束时的长度比值

但是这些功能我们并非需要全部封装,基本上都是用第三方的类库,直接使用.

#### 4.7 gusture (选学)

gusture是苹果手机原生支持的两个及两个以上的手指触控时发生的事件的api,可以很方便的帮助我们实现旋转,缩放等效果并加以控制,很不幸的是,在android设备上,gusture并不能做到适配.

```html
<style type="text/css">
    #box{
        width: 300px;
        height: 300px;
        background: red;
    }
</style>
<body>
    <div id="output"></div>
    <div id="box">111111111111</div>
</body>
```

```js
    document.getElementsByTagName('body')[0].addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);
    var output = document.getElementById('output');

    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    }, false);

    document.addEventListener('gestureend', function() {
        output.innerHTML = 'Gesture ended (rotation=' + event.rotation + ',scale=' + event.scale + ')';
    }, false);

    document.addEventListener('gesturechange', function(event) {
        output.innerHTML = 'Gesture changed (rotation=' + event.rotation + ',scale=' + event.scale + ')';
        // document.getElementById('box').style.transform = "scale(" + event.scale + "," + event.scale + ")";
        document.getElementById('box').style.transform = "rotateZ(" + event.rotation + "deg )" + "scale(" + event.scale + "," + event.scale + ")";
    }, false);
```

### 第五章 腾讯手势插件AlloyFinger

目前AlloyFinger作为腾讯手机QQ web手势解决方案，在各大项目中都发挥着作用.

> https://github.com/AlloyTeam/AlloyFinger

我们首先从github上下载AlloyFinger,查看其中的demo;

我们用腾讯的手势插件完成一个旋转加缩放的效果:

```html
<style type="text/css">
    #box{
        width: 300px;
        height: 300px;
        background: red;
    }
</style>
<body>
    <div id="output"></div>
    <div id="box">111111111111</div>
</body>
```

```js
var box = document.getElementById("box");
        Transform(box);
        new AlloyFinger(box, {
            rotate:function(evt){
                box.rotateZ += evt.angle;
            },
            multipointStart: function () {
                initScale = box.scaleX;
            },
            pinch: function (evt) {
                box.scaleX = box.scaleY = initScale * evt.scale;
            }
        });
```

> 推荐文章: https://segmentfault.com/a/1190000007448808