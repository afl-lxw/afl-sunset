# Less 和 Sass

### 第一章 Less和Sass简介

Less和Sass都为动态样式表的语言，即css框架，通过简洁明了的语法定义，使得编写CSS的工作变得非常简单。

### 第二章 Less

本质上，LESS 包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 CSS 文件。LESS 并没有裁剪 CSS 原有的特性，更不是用来取代 CSS 的，而是在现有 CSS 语法的基础上，为 CSS 加入程序式语言的特性。

#### 2.1 配置

在服务器配置less非常简单，只需要安装less的编译器：

`npm install -g less`

打开`lessc --help`,我们可以看到使用方法：

`lessc [option option=parameter ...] <source> [destination]`,实际上，我们编译一个less文件的时候，可以直接输出指令

```shell
lessc styles.less styles.css
```

而在客户端使用则更加便捷，我们可以直接引入名为less.js的编译器，对所写代码进行编译

```html
<link rel="stylesheet/less" type="text/less" href="styles.less" />
<script src="https://cdn.bootcss.com/less.js/2.7.2/less.js"></script>
```

>注意，一定要在自己写完的样式之后引入less编译器

当然,我们的less通常用于持续化继承工具中进行使用,例如glup和webpack,这些工具可以帮助我们自动构建less为css

#### 2.2 变量

Less中的变量充许你在样式中的某个地方对常用的值进行定义，然后应用到样式中，这样只要改变你定义的变量参数值就可以达到改变全局的效果：

```less
@color: #4d926f;
    #header {
        color: @color;
    }
    h2 {
        color: @color;
    }      
```

编译后的效果

```css
#header {
    color: #4d926f;
}
h2 {
    color: #4d926f;
}
```

同时，对于变量，我们还可以做运算

```less
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;

#header { color: @light-blue; }
```

我们不仅可以定义属性值为变量，同时可以定义属性为常量；类似其他语言中的动态变量.

```less
@color :blue;
@blue : 'color' ;
@height:10px; 
@width:100px; 
#header {
    height: @height; 
    width: @width; 
    color: @@blue; 
} 
```

在一个less文件中,我们可以使用`@inport`导入其他less文件

```less
@color : blue;
@import '02.less';
div{
    color:@color;
    background:@background;
}
```

```less
@background:yellow;
```

#### 2.3 混入

在 LESS 中我们可以定义一些通用的属性集为一个 class，然后在另一个 class 中去调用这些属性.

```less
.border{
    border:1px solid red;
}
@color :blue;
@blue : 'color' ;
@height:10px; 
@width:100px; 
#header {
    height: @height; 
    width: @width; 
    color: @@blue; 
    .border;
}
```

在混入的同时,我们可以把这个类看作一个可以传递参数的函数调用

```less
.border(@yourcolor){
    border:1px solid @yourcolor;
}
@color :blue;
@blue : 'color' ;
@height:10px; 
@width:100px; 
#header {
    height: @height; 
    width: @width; 
    color: @@blue; 
    .border(yellow);
}
```

当然,对于函数,我们也可以定义默认值

```less
.border(@yourcolor:red){
    border:1px solid @yourcolor;
}
@color :blue;
@blue : 'color' ;
@height:10px; 
@width:100px; 
#header {
    height: @height; 
    width: @width; 
    color: @@blue; 
    .border;
}
```
#### 2.4 套嵌

我们平时在写css的时候,通常会多次运用选择器选择子元素进行样式控制

```html
<div id="header">
    <a>学习less</a>
</div>
```

```css
#header {
    display: inline;
    float: left;
}
#header a {
    font-size: 26px;
    font-weight: bold;
}             
```

Less允许我们运用套嵌描述子元素样式,写法类似dom的层级关系

```less
#header{
    width: @width * 5;
    height: @height;
    .border;
    a:first-child{
        color:@color;
    };
    a:last-of-type{
        color:blue;
    }
}
```

对于伪类选择器,我们发现编译后的样式不正确

```less
#header{
    display: inline;
    float: left;
    a{
        font-size: 26px;
        font-weight: bold;
        :hover{
            color:yellow;
        }
    }
}
```

这时,我们只需要用`&`符号,让属性连写

```less
#header{
    display: inline;
    float: left;
    a{
        font-size: 26px;
        font-weight: bold;
        &:hover{
            color:yellow;
        }
    }
}
```

#### 2.5 函数

Less 提供了多种函数用于控制颜色变化、处理字符串、算术运算等等

>http://www.1024i.com/demo/less/reference.html

>http://lesscss.cn/functions/

#### 2.6 循环

less给我们提供了控制循环的API `loop`,类似于`if...else`语句,我们可以使用`loop`帮助我们完成css的编译

比如说

```less
.loop(@counter) when (@counter > 0) {
  .loop((@counter - 1));    // next iteration
  width: (10px * @counter); // code for each iteration
}

div {
  .loop(5); // launch the loop
}
```

对于我们曾经自己写过的boolstrap,尝试控制循环:

```less
.loop(@n , @i: 1 ) when (@i <= @n) {
      .col-md-@{i} {
            width: (@i * 100% / @n); 
      }
      .loop( @n , (@i + 1) ); 
}
@media(max-width:992px){
    .loop(12);
}
```

>注意 `.loop`是函数名,可以随意定义,when相当于if判断

### 第三章 Sass

世界上最成熟、最稳定、最强大的专业级CSS扩展语言！`(...)`

>http://sass-lang.com/

学习完了less,sass对我们来说也会很简单

#### 3.1 安装sass

在windows上如果想要使用sass,我们需要配置ruby环境,首先安装ruby,配置项选择添加到环境变量中

安装完毕,在控制台输入`ruby -v`可以查看安装的ruby版本号

安装完ruby后,就可以继续安装sass了

控制台输入`gem install sass`,sass会自动安装在你的全局环境中.

#### 3.2 使用sass

sass提供两种风格的书写格式,一种为默认的sass风格,另外一种为scss风格,
其中,scss风格更像是我们采用的css书写样式

**sass**

```sass
#sidebar
  width: 30%
  background-color: #faa
```

**scss**

```scss
#sidebar {
  width: 30%;
  background-color: #faa;
}
```

另外,scss风格对空白不敏感,而sass则对空白,例如换行和空格敏感

SASS提供四个编译风格的选项：

+ nested：嵌套缩进的css代码，它是默认值。
+ expanded：没有缩进的、扩展的css代码。
+ compact：简洁格式的css代码。
+ compressed：压缩后的css代码。

我们使用默认值即可.

```css

ul {
        margin: 0;
        padding: 0;
        list-style: none;
}

li {
         display: inline-block;
 }

a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
}
```

尝试使用不同风格的sass样式进行编译;

>在使用express时,sass默认风格是sass,我们只需要略作更改,改做scss即可

`sass test.scss` 可以在命令行输出编译后的结果
`sass test.scss test.css` 可以将结果输出为css文件.

>sass在线编译器 http://www.sassmeister.com/

#### 3.3 变量

和less类似,sass也支持变量

```sass
$blue : #1875e7;
$width: 10px;
$height : 100px;
div{
    height:$height;
    width:$width;
    color : $blue;
}
```

同样,变量也支持嵌套书写

```sass
$side : left;
.rounded{
    border-#{$side}-radius: 5px;
}
```

注意外边写的是`#`号,括号内写$side;

sass同样也可以支持`@import`引入

```sass
@import '02.sass';
div{
    height:$height;
    width:$width;
    color : $blue;
}
```

```sass
$blue : #1875e7;
$width: 10px;
$height : 100px;
```

>我们生成的css文件会有一个编译目录和sass.map文件,sass文件相当于源文件，css相当于编译后的文件，当检查到页面问题的时候，你看到的是css，但是需要修改的是sass文件，这个map就是两个文件的对应关系表。

#### 3.4 计算

和less一致,sass也支持计算

```sass
#header{
    margin-top : (14px / 2);
    width : 100px + 50px;
    color : #FFF - #211;
}
```

#### 3.5 套嵌

Sass同样支持选择器套嵌

```css
#header {
    display: inline;
    float: left;
}
#header a {
    font-size: 26px;
    font-weight: bold;
}             
```

```sass
#header{
    display: inline;
    float: left;
    a{
        font-size: 26px;
        font-weight: bold;
    }
}
```


对于伪类选择器,我们依旧用`&`符号链接

```sass
#header{
    display: inline;
    float: left;
    a{
        &:hover{
            color:yellow;
        }
        font-size: 26px;
        font-weight: bold;
    }
}
```

#### 3.6 代码继承

Sass允许一个选择器，继承另一个选择器,使用`@extend`继承父类属性

```sass
.class1{
    background:yellow;
}
.class2{
    @extend .class1;
    width : 100px;
    height : 10px;
}
```

#### 3.7 代码混用

类似less,sass也支持代码混用,并支持传入参数,只是需要用到`@mixin`和`@include`命令

```sass
@mixin color($v : yellow){
    background: $v;
}
#header {
    @include color(red);
}
```

#### 3.8 函数

>http://sass-lang.com/documentation/Sass/Script/Functions.html 

#### 3.9 控制结构

**for循环**

Sass支持 if,for,while,each作为控制结构用于数据输出;

>http://sass-lang.com/documentation/file.SASS_REFERENCE.html#control_directives__expressions

```sass
@media(max-width:992px){
    @for $i from 1 through 12 {
        .col-md-#{$i}{
            width : $i*100%/12;
            float : left;
        }
    } 
}
```








