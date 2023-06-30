(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{286:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flutter开发之-动画-animationcontroller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter开发之-动画-animationcontroller"}},[t._v("#")]),t._v(" Flutter开发之——动画-AnimationController")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("ul",[s("li",[t._v("Tween动画控制器，能够根据区间值，执行时间执行相应的动画效果")]),t._v(" "),s("li",[t._v("控制动画的启动、停止，还可以获取动画的运行状态")]),t._v(" "),s("li",[t._v("创建AnimationController时，需要传入duration(动画时长)，lowerBound(区间左值)，upperBound(区间右值)")])]),t._v(" "),s("h2",{attrs:{id:"animationcontroller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animationcontroller"}},[t._v("#")]),t._v(" AnimationController")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    double"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reverseDuration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debugLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lowerBound "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("upperBound "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animationBehavior "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationBehavior")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    required "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TickerProvider")]),t._v(" vsync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("取值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("当前动画的取值(默认lowerBound)")]),t._v(" "),s("td",[t._v("double")])]),t._v(" "),s("tr",[s("td",[t._v("duration")]),t._v(" "),s("td",[t._v("动画执行时长")]),t._v(" "),s("td",[t._v("Duration")])]),t._v(" "),s("tr",[s("td",[t._v("reverseDuration")]),t._v(" "),s("td",[t._v("反向动画时长")]),t._v(" "),s("td",[t._v("Duration")])]),t._v(" "),s("tr",[s("td",[t._v("lowerBound")]),t._v(" "),s("td",[t._v("变化前的值")]),t._v(" "),s("td",[t._v("double")])]),t._v(" "),s("tr",[s("td",[t._v("upperBound")]),t._v(" "),s("td",[t._v("变化后的值")]),t._v(" "),s("td",[t._v("double")])]),t._v(" "),s("tr",[s("td",[t._v("vsync")]),t._v(" "),s("td",[t._v("界面扩展通知触发器")]),t._v(" "),s("td",[t._v("TickerProvider")])])])]),t._v(" "),s("h3",{attrs:{id:"vsync说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vsync说明"}},[t._v("#")]),t._v(" vsync说明")]),t._v(" "),s("ul",[s("li",[t._v("vsync：TickerProvider(抽象类)，用于接收动画变化过程中的通知，类似于接口回调")]),t._v(" "),s("li",[t._v("用户在使用时可以选择TickerProviderStateMixin或SingleTickerProviderStateMixin")]),t._v(" "),s("li",[t._v("混入mixins时，使用关键字with(其他关键字有extends，with，implements)，即具备某种特性")]),t._v(" "),s("li",[t._v("单个 AnimationController 的时候使用 SingleTickerProviderStateMixin")]),t._v(" "),s("li",[t._v("多个 AnimationController 使用 TickerProviderStateMixin")])]),t._v(" "),s("h3",{attrs:{id:"常用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用方法"}},[t._v("#")]),t._v(" 常用方法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("forward")]),t._v(" "),s("td",[t._v("动画开始执行，类似于start")])]),t._v(" "),s("tr",[s("td",[t._v("reverse")]),t._v(" "),s("td",[t._v("动画反向执行")])]),t._v(" "),s("tr",[s("td",[t._v("unbounded")]),t._v(" "),s("td",[t._v("创建没有上下限的AnimationController")])]),t._v(" "),s("tr",[s("td",[t._v("reset")]),t._v(" "),s("td",[t._v("value = lowerBound")])]),t._v(" "),s("tr",[s("td",[t._v("animateTo")]),t._v(" "),s("td",[t._v("正向动画")])]),t._v(" "),s("tr",[s("td",[t._v("animateBack")]),t._v(" "),s("td",[t._v("反向动画")])]),t._v(" "),s("tr",[s("td",[t._v("repeat")]),t._v(" "),s("td",[t._v("周期性执行")])]),t._v(" "),s("tr",[s("td",[t._v("fling")]),t._v(" "),s("td",[t._v("弹性动画")])]),t._v(" "),s("tr",[s("td",[t._v("stop")]),t._v(" "),s("td",[t._v("停止动画")])]),t._v(" "),s("tr",[s("td",[t._v("dispose")]),t._v(" "),s("td",[t._v("释放资源")])])])]),t._v(" "),s("h3",{attrs:{id:"动画的状态-animationstatus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画的状态-animationstatus"}},[t._v("#")]),t._v(" "),s("strong",[s("strong",[t._v("动画的状态(AnimationStatus)")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("取值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("dismissed")]),t._v(" "),s("td",[t._v("动画停止在开始处")])]),t._v(" "),s("tr",[s("td",[t._v("forward")]),t._v(" "),s("td",[t._v("正向运行动画")])]),t._v(" "),s("tr",[s("td",[t._v("reverse")]),t._v(" "),s("td",[t._v("反向运行动画")])]),t._v(" "),s("tr",[s("td",[t._v("completed")]),t._v(" "),s("td",[t._v("动画停止")])])])]),t._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" _MyHomePageState "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyHomePage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingleTickerProvider")]),t._v("特性"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StateMixin")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//具备TickerProvider特性")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义动画初始值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationController")]),t._v(" _controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndouble _size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//动画监听")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     _controller "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        vsync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milliseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lowerBound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        upperBound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addStatusListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationStatus")]),t._v(" status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("completed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          _controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dismissed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          _controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          _size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//body")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GestureDetector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          onTap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("_controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            alignment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alignment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"点我，开始动画"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//释放资源        ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    _controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/PGzxc/CDN@master/blog-flutter/flutter-animationController-sample.gif",alt:"https://cdn.jsdelivr.net/gh/PGzxc/CDN@master/blog-flutter/flutter-animationController-sample.gif"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);