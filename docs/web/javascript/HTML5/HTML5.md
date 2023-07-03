# HTML5

### 第一章 HTML5概述

H5是下一代的web开发的基础.

#### 1.1 web技术发展时间线

1. 1991 HTML 就是用标记表示一些比普通文本更丰富的文本,文本的超集,有多个版本,没有图片传递。
2. 1994 HTML2 作为HTML1(+)的后续发展,但从未成为标准
3. 1995 HTML3 提供了很多新特性,例如文字环绕,表格,但是由于兼容性问题停止开发.
4. 1996 CSS+Javascript 用层叠样式表修改样式 最基本的交互alert
5. 1997 HTML4 把一些标签标记为废弃 互联网公司的博弈
6. 1998 CSS2 Web技术停滞 1999 ES3
7. 2000 环境混乱,提出 XHTML 更严格的HTML 去除大写的标签 不闭合的标签等 是XML的实现 (2001 ie6)
8. 2002 Tableless Web Design 表格布局
9. 2005 AJAX 中国到2006年还没有使用ajax的技术
10. 2009 HTML5 移动端的推动
11. 2014 HTML5 Finalized

#### 1.2 HTML5概念

HTML5并不是单纯的超文本的第五次版本,而是定义为Web Application,改变web开发的传统模式.

W3C将H5定义为HTML,CSS,Javascript API的升级语言,是新一代开发Web富**客户端**应用的整体解决方案.

#### 1.3 应用场景

+ 网页应用程序
  * PC端: iCloud , 百度脑图 ,Office365...
  * APP端:淘宝 , 京东 ,美团
  * WeChat端：微信小程序，淘宝，京东等
+ 混合本地式应用
  * PC端:网易云音乐 , 有道词典
  * APP端:淘宝,手机百度,京东
+ 简单的游戏

#### 1.4 HTML5新增特性

HTML:

+ 标签
  * 语义化标签
  * 应用程序标签
+ 属性
  * 链接关系描述
  * 结构数据标记
  * ARIA
  * 自定义属性
+ 智能表单
  * 新的表单类型
  * 虚拟键盘配置
+ 网页多媒体
  * 音频
  * 视频
  * 字幕
+ Canvas
  * 2D
  * 3D (WebGL)
+ SVG

Javascript API:

+ 核心平台提升
  * 新的选择器 QuerySelector
  * 访问历史
  * 全屏
+ 网页存储
  * Application Cache
  * localStorage
  * sessionStorage
  * WebSql
  * indexedDB
+ 设备信息访问
  * 网络状态
  * 硬件访问
  * 设备方向
  * 地理围栏
+ 拖放操作
  * 网页内拖放
  * 桌面拖入
  * 桌面拖出
+ 文件
  * 文件系统API
  * FileReader
+ 网络访问
  * Ajax
  * WebSocket
+ 多线程
+ 桌面通知

CSS :

一些CSS3的新特性

### 第二章 语义化标签

语义化标签能够让HTML代码更符合内容的结构化,标签的语义化

以前我们可能是这样的:

```html
<div class="header"></div>
<div class="nav"></div>
<div class="content">
    <div class="article"></div>
</div>
<div class="sidebar">
    <div class="widget"></div>
</div>
<div class="footer"></div>
```

以后我们肯定是这样的:

```html
<header></header>
<nav></nav>
<section>
    <article></article>
</section>
<aside>
    <div class="widget"></div>
</aside>
<footer></footer>
```

形成统一的规范,更易于人和机器的无障碍读取网页内容.

+ 语义化标签能够便于开发者阅读和写出更优雅的代码
+ 能够让浏览器或者网络爬虫可以更好的进行解释，从而更好的分析其中的内容，更好的搜索引擎优化

切记
**HTML的职责是描述一块区域的内容或意义是什么,而不是它长得是什么样子,网页的外观应该由CSS来决定**

> 一些常见的语义化标签 http://blog.csdn.net/coco379/article/details/52938071

> HTML5的新的语义化标签 http://www.cnblogs.com/zjf-1992/archive/2016/12/16/6182406.html

### 第三章 应用程序标签

应用程序标签主要由 DataList(数据列表),Progress(进度条),Meter(数值显示器),Menu(右键菜单),Detail(明细)等组成,其中后两种标签兼容性不好,我们只对前三种进行讨论.

> HTML <!DOCTYPE> 标签  http://www.w3school.com.cn/tags/tag_doctype.asp  

#### DataList

是input标签的一种补充,类似于自动完成的一种样式,帮助我们匹配查找列表中的内容

> 文档格式无法访问,需要HTTP形式访问

```html
<pre>
    数据列表呈现需要一个载体 input
</pre>
    <input type="text" list='input_list' name="">
    <datalist id="input_list">
        <option value="lisi"></option>
        <option value="wangwu"></option>
    </datalist>
</body>
</html>
```

不仅可以呈现列表,还可以进行自动匹配查找

> 不能修改样式,基本上用jquery

#### 进度条

进度条默认长度是1,可以用value和max控制

**progress**

```html
    <progress></progress>
    <progress value="10" max="100">
```

当我们修改进度条的颜色的时候,发现并不是我们所期待的颜色,并且我们不能对进度和总体样式进行修改.

在谷歌开发者工具中可以打开`Show user agent shadow DOM`选项

在控制台可以看到`progress`的具体配置

> 自定义进度条样式 http://www.hongkiat.com/blog/html5-progress-bar/

> shadow-dom http://www.cnblogs.com/coco1s/p/5711795.html

**meter**

```html
<pre>
    定义的是数值,不是进度,例如销量等.
</pre>

<meter max="100" value="90" high="60" low="30"></meter>
```

> http://www.w3school.com.cn/tags/tag_meter.asp  meter标签

### 第四章 链接关系

对于一些链接,残障人士可能无法识别链接的语意,并且爬虫在检索数据的时候,光靠href是不够的

```html
<a href="shangyiye.html">上一页</a>
<a href="xiayiye.html">下一页</a>
<a href="xiayiye.html">→</a>
<a href="xiayiye.html">next</a>
```

通过链接关系属性声明连入的链接和当前文档之间的关系.

```html
<a href="shangyiye.html" rel="prev">上一页</a>
```

在link头中我们也经常看到rel,指明了文档的类型.

```html
<link rel="stylesheet" type="text/css" href="">
```

如果rel不对或者href链接的文档不对,css都无法正常引入.

```html
<link rel="stylesheet" href="style.css">
<link rel="alternate" type="application/rss+xml" href="http://myblog.com/feed">
<link rel="shortcut icon" href="favicon.ico">
<link rel="pingback" href="http://myblog.com/xmlrpc.php">
<link rel="prefetch" href="http://myblog.com/main.php">
...

<a rel="archives" href="http://myblog.com/archives">old posts</a>
<a rel="external" href="http://notmysite.com">tutorial</a>
<a rel="license" href="http://www.apache.org/licenses/LICENSE-2.0">license</a>
<a rel="nofollow" href="http://notmysite.com/sample">wannabe</a>
<a rel="tag" href="http://myblog.com/category/games">games posts</a>
```

+ alternate   文档的可选版本（例如打印页、翻译页或镜像）
+ stylesheet  文档的外部样式表
+ prefetch    预加载
+ import      文档引入
+ start   集合中的第一个文档
+ next    集合中的下一个文档
+ prev    集合中的前一个文档
+ contents    文档目录
+ index   文档索引
+ glossary    文档中所用字词的术语表或解释
+ copyright   包含版权信息的文档
+ chapter 文档的章
+ section 文档的节
+ subsection  文档的子段
+ appendix    文档附录
+ help    帮助文档
+ bookmark    相关文档
+ nofollow    用于指定 Google 搜索引擎不要跟踪链接
+ licence 一般用于文献，表示许可证的含义
+ tag 标签集合
+ friend  友情链接

对于rel属性,有些写错了也不会报错,只是不读取.所以rel属性可以完美的过度.

### 第五章 数据结构

随着互联网网站和应用的增多,爬虫的负担也变得越来越大,数据结构标签即是帮助爬虫快速提取和检索网站信息的新增标记,需要特定的工具

```html
<div itemscope itemtype="http://example.com/hello">
  <p>我叫<span itemprop="主人">whitsats</span>。</p>
  <p>
    我养了一条叫
    <span itemprop="狗名">旺财</span>的
    <span itemprop="品种">金毛</span>犬。
  </p>
</div>
```

是一个包含键值对信息的html代码块,便于抓取.因为对于'我养了一条叫'这些字段对于我们来说是没有意义的.

> https://search.google.com/structured-data/testing-tool 谷歌的结构数据读取工具

### 第六章 ARIA

全称为`Accessible Rich Internet Application` (无障碍富互联网应用程序)
主要针对于屏幕阅读设备(e.g. NVDA)，更快更好地理解网页.更多的是面对残障人士对网页进行阅读.

但是,ARIA属性不仅仅为了盲人用户,更多的还是为了语义化.

例如,在文本框的书写过程中,我们一般使用label包裹

```html
<label>
    请输入:
    <input type="text" name="name">
</label>
```

如何让残障人士知道当前浏览的区域是网站主导航?

```html
  <div id="mainnav" role="navigation">
    <a href="http://news.qq.com/" target="_blank">新闻</a>
    <a href="http://v.qq.com/" target="_blank">视频</a>
    <a href="http://ent.qq.com/" target="_blank">娱乐</a>
  </div>
```

如何让残障人士知道当li标签是select的选项?

```html
  <div class="dropdown">
    <a href="javascript:;" role="combobox" aria-autocomplete="list" aria-owns="question-list" aria-expanded="true">选择提示问题</a>
    <ul id="question-list" role="listbox">
      <li role="option"><a href="javascript:;">我妈妈的名字是？</a></li>
      <li role="option"><a href="javascript:;">我爸爸的名字是？</a></li>
      <li role="option"><a href="javascript:;">我爱人的名字是？</a></li>
    </ul>
  </div>
```

对于残障人士,页面的一些隐藏内容我们也不需要使用屏幕阅读器来进行读取.

现如今国内对于残障人士用户的重视程度相比国外还远远不够

> http://www.zhangxinxu.com/wordpress/2012/03/wai-aria-%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%98%85%E8%AF%BB/     WAI-ARIA无障碍网页应用属性完全展示

### 第七章 自定义属性

HTML5 增加了一项新功能是 自定义数据属性 ，也就是 `data-*`自定义属性。在HTML5中我们可以使用以 `data-`为前缀来设置我们需要的自定义属性，来进行一些数据的存放.

我们当然可以用JS中的attribute方法存取`data-`自定义属性的值

```html
<div id = "user" data-uid = "12345" data-uname = "布尔教育" > </div>
<script type="text/javascript">
    // 使用getAttribute获取 data- 属性
    var user = document.getElementById('user') ;
    var userName = user.getAttribute('data-uname') ; 
    var userId = user.getAttribute('data-uid') ; //userId = '12345'
    // 使用setAttribute设置 data- 属性
    user.setAttribute('data-site','http://zixue.it') ;
</script>
```

此方法能在所有的现代浏览器中正常工作，但它不是HTML5的自定义 data-*属性被使用目的，不然和我们以前使用的自定义属性就没有什么区别了.我们单纯的不使用`data-`前缀也能完成上述的功能.

在H5中的`data-`属性和我们自定义属性有很大的不同:

####dataset属性存取data-*自定义属性的值

这种方式通过访问一个元素的`dataset`属性来存取`data-*`自定义属性的值。这个`dataset` 属性是HTML5 `JavaScript API`的一部分，用来返回一个所有选择元素`data-` 属性的DOMStringMap对象。

使用这种方法存取数据时，不是使用完整的属性名，如`data-uid`来存取数据，应该去掉`data-` 前缀。

还有一点特别注意的是,`data-`属性名如果包含了连字符，例如`date-of-birth` ，连字符将被去掉，并转换为驼峰式的命名，前面的属性名转换后应该是`dateOfBirth`。

```html
<div id = "user" data-uid = "12345" data-uname = "布尔教育" data-of-name='bool'> </div>
<script type="text/javascript">
     var user = document.getElementById('user');
     console.log(user.dataset);//一个DOMStringMap
     console.log(user.dataset.uid);
     console.log(user.dataset.dataOfName);
     user.dataset.dateOfBirth = '2013';
     console.log(user);
</script>
```

### 第八章 智能表单

HTML5在原有的表单基础上新增了一些新的标签和属性

原有标签type类型:file,text,password,radio,checkbox,button,submit,reset

新增表单类型:http://www.runoob.com/html/html5-form-input-types.html

我们挑选一些兼容性较好的属性和类型进行讲解.

+ 日期和时间
  PC端的样式不可控,常用于移动端

```html
<form>
    <label>
        日期:
        <input type="date" name="bday">
    </label>
    <br>
    <label>
        日期和时间:
        生日 (日期和时间): <input type="datetime" name="bdaytime">
    </label>
    <br>
    <label>
        月份:
       <input type="month" name="bdaymonth">
    </label>
    <br>
    <label>
        时间：
        <input type="time" name="usr_time">
    </label>
    <label>
        选择周: <input type="week" name="week_year">
    </label>
</form>
```

+ 颜色

```html
<label>
    选择你喜欢的颜色: <input type="color" name="favcolor">
</label>
```

+ email

自动验证email输入是否符合格式

```html
<label>
    E-mail: <input type="email" name="email">
</label>
```

+ range

表示一个数值的取值范围，可以通过一些属性定义

    * max - 规定允许的最大值
    * min - 规定允许的最小值
    * step - 规定合法的数字间隔
    * value - 规定默认值

```html
<label>
 范围 ：<input type="range" name="points" min="1" max="10" value="2" step="2">
</label>
```

+ number

number 类型用于应该包含数值的输入域,并且我们还可以对期进行设置

```html
<label>
    数量 ( 1 到 5 之间 ): <input type="number" name="quantity" min="1" max="5">
</label>
```

#### 属性

input元素的新增属性：

+ Autocomplete：自动完成功能.记录用户之前输入的内容，并在下次输入时自动提示完成输入
  + 属性值： on/off
  + 可以在form表单上使用，对整张表单的所有控件进行自动完成的开关
  + 也可以在input上使用，对特定输入框进行修改。
  + 绝大部分浏览器，默认开启。
+ require   表单中必须填写的部分
+ novalidate 属性:属性规定在提交表单时不应该验证 form 或 input 域。
  * 对于input框测试无效
+ pattern属性:pattern 属性描述了一个正则表达式用于验证input元素的值。

### 第九章 网页多媒体

在H5出现之前，网页上的音乐和视频播放器基本都是基于第三方插件，例如flash。由浏览器内部实现video和audio。

**音频播放**

```html
<audio src="demo.mp3"></audio>
```

默认情况下，audio标签支持mp3，ogg和wav格式的音频文件。并且不显示控制条。

```html
<audio src="demo.mp3" controls="controls"></audio>
<!-- 使用controls属性显示控制条 -->
```

因为不同浏览器对音频格式的支持不一致，为了能够让浏览器正常播放音频文件，我们通常准备三种格式的音频，存放于`source`标签下，浏览器将识别第一个支持的格式,而对于不支持音频标签的浏览器（通常是ie8以下），将显示标签内的文字。

> https://www.runoob.com/tags/tag-audio.html

```html
<audio controls="controls">
  <source src="song.ogg" type="audio/ogg">
  <source src="song.mp3" type="audio/mpeg">
您的浏览器不支持音频播放
</audio>
```

`audio`标签有一些属性提供给我们进行设置：

+ controls ： 显示控制条 `controls = 'controls'`
+ loop : 歌曲循环 默认是false
+ autoplay : 自动播放 默认值为false

我们当然可以使用`shadow-root`来对控制条进行样式上的设置,但是自定义起来更为方便,在H5中的`audio`标签提供了一些DOM对象的属性和方法供我们自定义音频播放

属性:

+ currentTime 获取当前播放时间
+ duration 获取歌曲的总时间
+ paused 是否暂停 返回true/false
+ volume 设置或返回音频的音量 最大为1
+ + muted 静音播放

方法:

+ play() 播放歌曲
+ pause() 暂停歌曲
+ load()重新加载歌曲

事件:

+ play 播放事件
+ pause 暂停事件
+ timeupdate 播放位置更改
+ volumechange 音量更改
+ loadstart，durationchange，loadeddata，progress，canplay，canplaythrough等

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <pre>网页多媒体</pre>
    <div id="outbox" style="width: 300px;height: 5px;background: #ccc;position: relative;">
        <div id="inbox" style="height: 100%;width: 0px;background: blue;position: absolute;left: 0;top: 0;"></div>
        <div id="bar" style="width: 10px;height: 20px;background: blue;position:absolute;left: 0px;top: -7.5px;"></div>
    </div>
    <br>
    <br>
    <br>
    <audio>
        <source src="demo.mp3" type="audio/mpeg">
    </audio>
    <br>
    <button id="btn1">播放/暂停</button>
    <button id="btn2">静音</button>
    <input type="range" name="volume" max="1" step="any" value="1">
    <script type="text/javascript">
        var btns = document.getElementsByTagName('button')
        var audio = document.getElementsByTagName('audio')[0]
        var inp = document.getElementsByTagName('input')
        var voice = null;
        var barLeft = 0;
        audio.oncanplay = function(){
            voice = this.volume;
            inp[0].value = voice;
        }
        inp[0].onchange = function(){
              voice = audio.volume = inp[0].value

        }
        btns[0].onclick = function(){
            if (audio.paused) {
                audio.play()
            }else{
                audio.pause()
            }
        }
        btns[1].onclick = function(){
            if (audio.volume) {
                inp[0].value = audio.volume = 0
            }else{
                inp[0].value = audio.volume = voice
            }
        }
        audio.ontimeupdate = function(){
            var rate = this.currentTime / this.duration;
            console.log(this.currentTime)
            inbox.style.width = parseInt(outbox.style.width)*rate + 'px';
            bar.style.left = parseInt(outbox.style.width)*rate + 'px';
        }
        bar.onmousedown = function(event){
            var leftVal = event.clientX - this.offsetLeft;
            document.onmousemove = function(event){
                barLeft = event.clientX - leftVal;
                if (barLeft<0) {
                    barLeft = 0;
                }else if (barLeft>outbox.offsetWidth + bar.offsetWidth) {
                    barLeft = outbox.offsetWidth + bar.offsetWidth;

                }
                inbox.style.width = barLeft + 'px';
                bar.style.left = barLeft + 'px'
                audio.currentTime = barLeft/parseInt(outbox.style.width)*audio.duration
                window.getSelection().removeAllRanges()
            }

        }
        document.onmouseup = function(){
            this.onmousemove = null;
        }

    </script>
</body>
</html>
```

**视频播放**

视频播放使用的是video标签

> https://www.runoob.com/tags/tag-video.html

```html
<video src="demo.MP4"></video>
```

video标签默认不会播放,显示黑屏,并且大小为原大小.

同样,video视频资源也可以写在`source`标签下,支持三种格式:MP4, WebM, 和 Ogg.对于ie8同样不支持.

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
您的浏览器不支持Video标签。
</video>
```

`video`标签的属性和`audio`类似

+ autoplay
+ controls
+ width
+ height
+ loop
+ muted 静音播放
+ poster 载入时的图像

方法:

+ play()
+ pause()
+ load()

事件:

+ play 播放事件
+ pause 暂停事件
+ timeupdate 播放位置更改
+ volumechange 音量更改
+ loadstart，durationchange，loadeddata，progress，canplay，canplaythrough等

**字幕**

对于视频文件,我们可以使用track标签携带字幕,但是浏览器基本不支持,现在的解决方案一般是内嵌字幕

> http://www.w3school.com.cn/tags/tag_track.asp

### 第十章 QuerySelector

### 第十一章 classList

在HTML5 API里，页面DOM里的每个节点上都有一个classList对象，程序员可以使用里面的方法新增、删除、修改节点上的CSS类。使用classList，程序员还可以用它来判断某个节点是否被赋予了某个CSS类。其实类似的方法已经在JQuery中实现了.

**查看classList**

```html
<div class="a b c"></div>
<script type="text/javascript">
    console.log(document.getElementsByTagName('div')[0].classList);
</script>
```

```
DOMTokenList[3]
0: "a"
1: "b"
2: "c"
length: 3
value: "a b c"
__proto__: DOMTokenList
```

其实`classList`的本质就是`DOMTokenList`,DOM标记列表

**classList的API**

属性:

+ length 返回css类的个数

同时我们可以使用toString方法格式化classList

```js
console.log(document.getElementsByTagName('div')[0].classList.toString())
```

等同于`document.getElementsByTagName('div')[0].className`

方法:

+ item() 支持一个参数,为类名的索引值,返回响应类名
+ add() 添加新的类名 等同于jq中的addClass()
+ remove() 删除一个类名 等同于jq中的removeClass()
+ toggle() 传递一个类名,如果对象中存在则删除,返回false,如果没有则添加,返回true 类似jq中的toggleClass()
+ contents() 判断是否存在该类名 类似jq中的hasClass()

注意 无论是添加或者删除,classList并不能一次执行操作多个类名,而JQuery仅仅只需要空格分隔即可

```js
    $('div').addClass('d f');
    console.log($('div'));
```

### 第十二章 历史记录

在HTML中可以通过window.history操作访问历史状态,只存在长度这一个可用值,前进后退不能改变历史记录,但是在H5之前,仅仅能做到前进后退,并不能更多的对历史记录进行操作.

```html
<a href="#news">首页</a>
<a href="#goods">商品</a>
<button>前进</button>
<button>后退</button>
<button>刷新</button>
```

1. window.history.forward(); // 前进
2. window.history.back(); // 后退
3. window.history.go(); // 刷新 location = location

界面上的所有JS操作不会被浏览器记住，就无法回到之前的状态,例如我们在利用Ajax技术进行翻页操作的时候,浏览器地址栏没有发生变化,就不会记住历史记录,我们一旦刷新页面,Ajax操作的翻页就会消失.原有的方法是记录页面的哈希值,但是没有现在方便.

HTML5新增了历史记录的API接口,新增了两个方法,提供了一个事件监听浏览器的前进和后退.帮助我们手动的添加历史记录.

当ajax进行翻页操作时,我们可以通过js将当前页面的信息记录到历史记录中.如果我们需要操作前进后退,可以用事件监听函数获取我们在历史记录中存储的页面信息,从而能够由后台获取所需的数据.

+ history.pushState(放入历史中的状态数据, 设置title(现在浏览器不支持)， 改变历史状态)
+ history.replaceState(修改历史记录的状态数据, 设置title(现在浏览器不支持)， 改变历史状态)
+ popstate 监听浏览器的前进后退操作

```html
<span id="news">新闻</span>
<span id="music">音乐</span>
<script type="text/javascript">
locationHref = location.href
news.onclick = function(){
    history.pushState('xinwen','',locationHref+'#news');
    console.log(history)
}
music.onclick = function(){
    history.replaceState('yinyue','',locationHref + '#music');
    console.log(history)
}
window.addEventListener("popstate", function(){
    console.log(history.state);
})
</script>
</html>
```

### 第十三章 全屏

除了使用F11可以使网页全屏以外,HTML5提供了一个新的API接口帮助我们实现元素或者页面的全屏显示

+ requestFullScreen() 方法,直接在元素上进行调用

注意全屏API的兼容性问题,

+ webkitRequestFullScreen()
+ mozRequestFullScreen()

```html
<div style="width: 200px;height: 150px">
    <img src="fate.jpg" width="100%" height='100%'>
</div>
<script type="text/javascript">
  window.addEventListener('keyup',function(e){
    if (e.keyCode == 70) {
        document.getElementsByTagName('body')[0].webkitRequestFullScreen()
    }
},false)
</script>
```

兼容性判断:

```js
var elem = 需要全屏的元素;
if (elem.webkitRequestFullScreen) {
  elem.webkitRequestFullScreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.requestFullScreen){
  elem.requestFullScreen();
}
```

### 第十四章 Application Cache(废弃)

一个离线网络应用程序就是一个URL的列表——HTML,CSS,JavaScript,图片,或者其他类型
的资源。
把这些资源,在本地缓存下来,当你尝试在没有网络连接时访问网络应用程序,你的网络浏
览器将自动切换并使用本地代替。

本地缓存列表依赖于`.manifest`清单文件,文件规定了缓存的规则

```
CACHE MANIFEST
# 这一句必须存在,而且必须放在头部
CACHE
#这一句指明要缓存的内容
NETWORK#声明用于指定无需缓存的文件
FALLBACK
#这个声明允许你在资源不可用的情况下,将用户重定向到特定文件
#(当更新文件不成功时,默认使用原来的文件)
```

创建一个项目,使用http协议形式打开测试缓存是否成功

**manifest**

```
CACHE MANIFEST
###
CACHE:
01.html
01.js
01.css
NETWORK:
fate.jpg
FALLBACK
```

**01.html**

```html
<!DOCTYPE html>
<html lang="en" manifest="my.manifest">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="01.css">
</head>
<body>
<div>
    <img src="fate.jpg">
</div>
<span>你好</span>
</body>
<script type="text/javascript" src='01.js'>

</script>
</html>
```

**01.css**

```css
div{
    width: 200px;height: 150px;
}
img{
     width:100%; 
     height:100%
}
```

**01.js**

```js
document.getElementsByTagName('img')[0].onclick = function(e){
    this.webkitRequestFullScreen();
    e.preventDefault()
}
```

访问一次之后查看控制台,关闭网络并刷新,发现图片并没有加载,其他元素正常显示

但是,当我们修改被缓存文件的内容时,更改并不能通过刷新获取,这是因为浏览器因为默认优先使用了缓存,所以,当我们写一个用于离线缓存的网页时,每一次修改必须修改`manifest`文件.

### 第十五章 Web Storage

JS在浏览器的生产环境中并不能操作本地文件,我们通常利用cookie来实现客户端的数据存储.
HTML5 提供了几种在客户端存储数据的新方法,即localStorage、sessionStorage、 WebSql Database。前面两个适用于存储较少的数据一般称为简单存储,而WebSql Database适用于存储大型的,复杂的数据;

简单存储与cookie的区别：

web存储安全性较高，在数据量上可以达到5M,而cookie最多也就4KB,或者20个key/value对.

```html
<body>
<script>
//如不设置声明周期,关闭浏览器打开后即消失
document.cookie="name=zhangsan";
alert(document.cookie);
//关闭浏览器不会消失
localStorage.setItem("name","lisi");
alert(localStorage.getItem("name"));
//关闭浏览器会消失
sessionStorage.setItem("name","wangwu");
alert(sessionStorage.getItem("name"))
</script>
</body>
```

localStorage/sessionStorage都有相同的API

+ localStorage.length 获得storage中的个数
+ localStorage .key(n) 获得storage中第n个键值对的键
+ localStorage.key = value
+ localStorage.setItem(key, value) 添加
+ localStorage.getItem(key)获取
+ localStorage.removeItem(key) 移除
+ localStorage.clear() 清除

```html
<script>
window.onload = function() {
    var names = document.getElementsByName("names")[0];
    var pass = document.getElementsByName("pass")[0];
    var save = document.getElementsByName("save")[0];
    if (localStorage.getItem("names") && localStorage.getItem("pass")) {
        names.value = localStorage.getItem("names");
        pass.value = localStorage.getItem("pass");
        save.checked = true;
    }
    save.onclick = function() {
        if (save.checked) {
            localStorage.setItem("names", names.value);
            localStorage.setItem("pass", pass.value);
        } else {
            localStorage.removeItem("names");
            localStorage.removeItem("pass");
        }
    }
}
</script>
</head>

<body>
    用户名:
    <input type="text" name="names">
    <br/> 密码 :
    <input type="password" name="pass">
    <br/> 是否永久保存 :
    <input type="checkbox" name="save">
</body>
```

> https://dev.w3.org/html5/webdatabase/

### 第十六章 File

HTML5新增了文件API,提供客户端本地操作文件的可能.

我们可以通过file表单或拖放操作选择文件,还可以通过JavaScript读取文件的名称、大小、类型、和修改时间.

file类型的input表单新增了files属性,保存我们上传文件的信息,如果要实现多文件上传,可以设置input的multiple属性.

> 可以使用accept属性规定文件上传的MIME类型 例如'image/jpeg'

```html
<form action="#">
        <div class="form-group">
            <label for="input_1">请选择文件</label>
            <input id="input_1" class="form-control" name="input_1" type="file">
        </div>
        <div class="form-group">
            <button id="btn_1" class="btn btn-default" type="button">读取文件信息</button>
        </div>
</form>
<pre id="result"></pre>
</div>
<script>
var btn = document.querySelector('#btn_1');
var input = document.querySelector('#input_1');
btn.addEventListener('click', function() {
    // 获取文件域中选择的文件
    // var file = input.files[0];
    var file = input.files.item(0);
    if (file) {
        result.innerHTML =
            '文件名：' + file.name + '\n文件最近修改时间：' + file.lastModifiedDate+ '\n文件类型：' + file.type + '\n文件大小：' + file.size + '字节'
    } else {
        result.innerHTML = '没有选择任何文件';
    }
});
</script>
```

> toLocaleTimeString toLocaleDateString

### 第十七章 拖拽操作

#### 17.1 页面内拖拽

对于被拖拽的元素,HTML5增加了三个事件用于监听拖拽的过程

+ dragstart 拖拽开始
+ drag 正在拖拽
+ dragend 拖拽结束

```html
<body>
    <div id="one" style="width: 300px;height: 300px;border: 1px solid red"></div>
    <div id="two" style="width: 100px;height: 100px;border: 1px solid blue" draggable="true"></div>
</body>
<script type="text/javascript">
    two.ondragstart = function(e){
        // e.preventDefault();
        console.log(e);
        e.dataTransfer.setData("Text",e.target.id);
        console.log(e.dataTransfer.getData("Text",e.target.id));
        one.innerHTML = '开始'
    }
    two.ondrag = function(e){
        one.innerHTML += '拖动中'
    }
    two.ondragend = function(e){
        one.innerHTML = '结束'
    }
</script>
```

> 想要拖拽元素,必须设置draggable属性

> 页面默认的动作是拖拽后回到原位

在拖动阶段，我们可以存储被拖动元素的属性或者状态到事件对象的dataTransfer中，如果出现跳转，则是浏览器默认的事件被触发，我们需要使用`e.preventDefault()`来阻止默认事件。

投放区的事件

对于被拖的元素而言，拖向何处则为投放区，投放区的事件如下：

+ dragenter 被拖放元素进入
+ dragover 被拖放元素移动
+ dragleave 被拖放元素离开

```html
<body>
    <div id="one" style="width: 300px;height: 300px;border: 1px solid red"></div>
    <div id="two" style="width: 100px;height: 100px;border: 1px solid blue" draggable="true"></div>
</body>
<script type="text/javascript">
    one.ondragenter = function(e){
        // e.preventDefault();
        console.log(e);
        one.innerHTML = '开始'
    }
    one.ondragover = function(e){
        one.innerHTML += '拖动中'
    }
    one.ondragleave = function(e){
        one.innerHTML = '结束'
    }
</script>
```

而drop则是监听被拖拽物拖拽到投放区并松开鼠标的事件，他可以接收到`dataTransfer`中的数据，所以我们的页面内拖拽可以写成如下效果：

```html
<style type="text/css">
    *{
        box-sizing: border-box;
    }
</style>
<body>
    <div id="one" style="width: 300px;height: 300px;border: 1px solid red"></div>
    <div id="two" style="width: 100px;height: 100px;border: 1px solid blue;display: flex;">
        <div style="width: 50px;height: 100px;border:1px solid black;">第一个</div>
        <div style="width: 50px;height: 100px;border:1px solid pink;">第二个</div>
    </div>
</body>
<script type="text/javascript">
one.ondragover = function(e) {
    e.preventDefault();
}
two.onmousedown = function(e){
    e.target.draggable = true;
    e.target.ondragstart = function(ev) {
        ev.dataTransfer.setData("Text", ev.target.innerHTML);
    }
    e.target.ondragend = function(){
        two.removeChild(this)
    }
}
one.ondrop = function(e) {
    var div = document.createElement('div')
    div.style = "width: 50px;height: 100px;border:1px solid black;"
    div.innerHTML = e.dataTransfer.getData("Text")
    this.appendChild(div)
}
</script>
```

+ 对于谷歌浏览器，`e.dataTransfer.setData(key,value)`会导致拖拽到投放区域外的时候浏览器默认搜索设置的值。如果需要，我们可以屏蔽它
+ 对于火狐浏览器，没有`e.dataTransfer.setData(key，value)`还不行。我们可以直接设置键值对为`null，""`;
+ 最新版本的谷歌和火狐浏览器没有发现问题
+ drop事件并不能直接触发,因为默认的松开鼠标我们的拖拽物会返回原来的位置,并不会掉落,所以我们应该阻止投放区域的默认事件.

#### 7.2 拖拽上传

经过观察，事件对象中的dataTransfer也存在files属性，我们可以用熟悉的方法上传拖拽进来的文件：

```html
<body>
    <div id="one" style="width: 300px;height: 300px;border: 1px solid red"></div>
</body>
<script type="text/javascript">
one.ondragover = function(e) {
    e.preventDefault();
}
one.ondrop = function(e) {
    e.preventDefault()
    console.log(e.dataTransfer.files[0]);
}
</script>
```

然后做Ajax文件上传即可

```js
one.ondrop = function(e) {
    e.preventDefault()
    var file = e.dataTransfer.files[0];
    var formData = new FormData();
    formData.append("aa", file);
    var xml = new XMLHttpRequest();
    xml.open("post", url, false);
    xml.send(formData);
}
```
