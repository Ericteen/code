
HTML+CSS

1.对WEB标准以及W3C的理解与认识
标签闭合、标签小写、不乱嵌套、提高搜索机器人搜索几率、使用外 链css和js脚本、结构行为表现的分离、文件下载与页面速度更快、内容能被更多的用户所访问、内容能被更广泛的设备所访问、更少的代码和组件，容易维 护、改版方便，不需要变动页面内容、提供打印版本而不需要复制内容、提高网站易用性；

2.xhtml和html有什么区别
HTML是一种基本的WEB网页设计语言，XHTML是一个基于XML的置标语言
最主要的不同：
XHTML 元素必须被正确地嵌套。
XHTML 元素必须被关闭。
标签名必须用小写字母。
XHTML 文档必须拥有根元素。

3.Doctype? 严格模式与混杂模式-如何触发这两种模式，区分它们有何意义?
用于声明文档使用那种规范（html/Xhtml）一般为 严格 过度 基于框架的html文档
加入XMl声明可触发，解析方式更改为IE5.5 拥有IE5.5的bug

4.行内元素有哪些?块级元素有哪些?CSS的盒模型?
块级元素：div p h1 h2 h3 h4 form ul
行内元素: a b br i span input select
Css盒模型:内容，border ,margin，padding

5.CSS引入的方式有哪些? link和@import的区别是?
内联 内嵌 外链 导入
区别 ：同时加载
前者无兼容性，后者CSS2.1以下浏览器不支持
Link 支持使用javascript改变样式，后者不可

6.CSS选择符有哪些?哪些属性可以继承?优先级算法如何计算?内联和important哪个优先级高?
标签选择符 类选择符 id选择符
继承不如指定 Id>class>标签选择
后者优先级高

7.前端页面有哪三层构成，分别是什么?作用是什么?
结构层 Html 表示层 CSS 行为层 js

8.css的基本语句构成是?
选择器{属性1:值1;属性2:值2;……}

9.你做的页面在哪些流览器测试过?这些浏览器的内核分别是什么?
Ie(Ie内核) 火狐（Gecko） 谷歌（webkit） opear(Presto)

10.写出几种IE6 BUG的解决方法
1.双边距BUG float引起的 使用display
2.3像素问题 使用float引起的 使用dislpay:inline -3px
3.超链接hover 点击后失效 使用正确的书写顺序 link visited hover active
4.Ie z-index问题 给父级添加position:relative
5.Png 透明 使用js代码 改
6.Min-height 最小高度 ！Important 解决’
7.select 在ie6下遮盖 使用iframe嵌套
8.为什么没有办法定义1px左右的宽度容器（IE6默认的行高造成的，使用over:hidden,zoom:0.08 line-height:1px）

11.标签上title与alt属性的区别是什么?
Alt 当图片不显示是 用文字代表。
Title 为该属性提供信息

12.描述css reset的作用和用途。
Reset重置浏览器的css默认属性 浏览器的品种不同，样式不同，然后重置，让他们统一

13.解释css sprites，如何使用。
Css 精灵 把一堆小的图片整合到一张大的图片上，减轻服务器对图片的请求数量

14.浏览器标准模式和怪异模式之间的区别是什么?
盒子模型 渲染模式的不同
使用 window.top.document.compatMode 可显示为什么模式

15.你如何对网站的文件和资源进行优化?期待的解决方案包括：
文件合并
文件最小化/文件压缩
使用CDN托管
缓存的使用

16.什么是语义化的HTML?
直观的认识标签 对于搜索引擎的抓取有好处

17.清除浮动的几种方式，各自的优缺点
1.使用空标签清除浮动 clear:both（理论上能清楚任何标签，，，增加无意义的标签）
2.使用overflow:auto（空标签元素清除浮动而不得不增加无意代码的弊端,,使用zoom:1用于兼容IE）
3.是用afert伪元素清除浮动(用于非IE浏览器)

Javascript
1.javascript的typeof返回哪些数据类型
Object number function boolean underfind

2.例举3种强制类型转换和2种隐式类型转换?
强制（parseInt,parseFloat,number）
隐式（== – ===）

3.split() join() 的区别
前者是切割成数组的形式，后者是将数组转换成字符串

4.数组方法pop() push() unshift() shift()
Push()尾部添加 pop()尾部删除
Unshift()头部添加 shift()头部删除

5.事件绑定和普通事件有什么区别

6.IE和DOM事件流的区别
1.执行顺序不一样、
2.参数不一样
3.事件加不加on
4.this指向问题

7.IE和标准下有哪些兼容性的写法
Var ev = ev || window.event
document.documentElement.clientWidth || document.body.clientWidth
Var target = ev.srcElement||ev.target

8.ajax请求的时候get 和post方式的区别
一个在url后面 一个放在虚拟载体里面
有大小限制
安全问题
应用不同 一个是论坛等只需要请求的，一个是类似修改密码的

9.call和apply的区别
Object.call(this,obj1,obj2,obj3)
Object.apply(this,arguments)

10.ajax请求时，如何解释json数据
使用eval parse 鉴于安全性考虑 使用parse更靠谱
11.b继承a的方法

12.写一个获取非行间样式的函数

function getStyle(obj,attr,value)
{
if(!value)
{
if(obj.currentStyle)
{
return obj.currentStyle(attr)
}
else
{
obj.getComputedStyle(attr,false)
}
}
else
{
obj.style[attr]=value
}
}

13.事件委托是什么
让利用事件冒泡的原理，让自己的所触发的事件，让他的父元素代替执行！
http://www.webasily.com/?p=78 例子可见此链接

14.闭包是什么，有什么特性，对页面有什么影响
闭包就是能够读取其他函数内部变量的函数。
深入理解JavaScript的闭包特性 如何给循环中的对象添加事件 此链接可查看（问这个问题的不是一个公司）

15.如何阻止事件冒泡和默认事件
canceBubble return false

16.添加 删除 替换 插入到某个接点的方法
obj.appendChidl()
obj.innersetBefore
obj.replaceChild
obj.removeChild

17.解释jsonp的原理，以及为什么不是真正的ajax
动态创建script标签，回调函数
Ajax是页面无刷新请求数据操作

18.javascript的本地对象，内置对象和宿主对象
本地对象为array obj regexp等可以new实例化
内置对象为gload Math 等不可以实例化的
宿主为浏览器自带的document,window 等

19.document load 和document ready的区别
Document.onload 是在结构和样式加载完才执行js
Document.ready原生种没有这个方法，jquery中有 $().ready(function)

20.”==”和“===”的不同
前者会自动转换类型
后者不会

21.javascript的同源策略
一段脚本只能读取来自于同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号的组合

22.编写一个数组去重的方法
function oSort(arr)
{
var result ={};
var newArr=[];
for(var i=0;i<arr.length;i++)
{
if(!result[arr])
{
newArr.push(arr)
result[arr]=1
}
}
return newArr
}




前端同学大福利，最全的面试题目整理

HTML&CSS

1. 常用那几种浏览器测试？有哪些内核(Layout Engine)?

(Q1) 浏览器：IE，Chrome，FireFox，Safari，Opera。
(Q2) 内核：Trident，Gecko，Presto，Webkit。


2. 说下行内元素和块级元素的区别？行内块元素的兼容性使用？（IE8 以下）


(Q1) 行内元素：会在水平方向排列，不能包含块级元素，设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效。
块级元素：各占据一行，垂直方向排列。从新行开始结束接着一个断行。
(Q2) 兼容性：display:inline-block;*display:inline;*zoom:1;

3. 清除浮动有哪些方式？比较好的方式是哪一种？
(Q1)
（1）父级div定义height。
（2）结尾处加空div标签clear:both。
（3）父级div定义伪类:after和zoom。
（4）父级div定义overflow:hidden。
（5）父级div定义overflow:auto。
（6）父级div也浮动，需要定义宽度。
（7）父级div定义display:table。
（8）结尾处加br标签clear:both。

(Q2) 比较好的是第3种方式，好多网站都这么用。

4. box-sizing常用的属性有哪些？分别有什么作用？


(Q1)box-sizing: content-box|border-box|inherit;
(Q2)content-box:宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框(元素默认效果)。
border-box:元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。

5. Doctype作用？标准模式与兼容模式各有什么区别?


(Q1) <!DOCTYPE>告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

(Q2) 标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

6. HTML5 为什么只需要写 <!DOCTYPE HTML>？


HTML5不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）。
而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。

7. 页面导入样式时，使用link和@import有什么区别？

（1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
（2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
（3）import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题。

8. 介绍一下你对浏览器内核的理解？

主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。

渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

JS引擎则：解析和执行javascript来实现网页的动态效果。

最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

9. html5有哪些新特性？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？
(Q1) 
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
(1)绘画 canvas;
(2)用于媒介回放的 video 和 audio 元素;
(3)本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
(4)sessionStorage 的数据在浏览器关闭后自动删除;
(5)语意化更好的内容元素，比如 article、footer、header、nav、section;
(6)表单控件，calendar、date、time、email、url、search;
(7)新的技术webworker, websocket, Geolocation;

(Q2)
IE8/IE7/IE6支持通过document.createElement方法产生的标签，
可以利用这一特性让这些浏览器支持HTML5新标签，
浏览器支持新标签后，还需要添加标签默认的样式。
当然也可以直接使用成熟的框架、比如html5shim，
<!--[if lt IE 9]>
<![endif]-->

10. 简述一下你对HTML语义化的理解？

用正确的标签做正确的事情。
html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的;
搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;
使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

JavaScript

1. 介绍js的基本数据类型

Undefined、Null、Boolean、Number、String

2. js有哪些内置对象？

数据封装类对象：Object、Array、Boolean、Number 和 String

其他对象：Function、Arguments、Math、Date、RegExp、Error

3. this对象的理解

this总是指向函数的直接调用者（而非间接调用者）；

如果有new关键字，this指向new出来的那个对象；

在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window。

4. eval是做什么的？

它的功能是把对应的字符串解析成JS代码并运行；

应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。

由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')')。

5. DOM怎样添加、移除、移动、复制、创建和查找节点

// 创建新节点

createDocumentFragment() //创建一个DOM片段

createElement() //创建一个具体的元素

createTextNode() //创建一个文本节点

// 添加、移除、替换、插入

appendChild()

removeChild()

replaceChild()

insertBefore() //在已有的子节点前插入一个新的子节点

// 查找

getElementsByTagName() //通过标签名称

getElementsByName() //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)

getElementById() //通过元素Id，唯一性

6. null和undefined的区别？

null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。

undefined：

（1）变量被声明了，但没有赋值时，就等于undefined。

（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

（3）对象没有赋值的属性，该属性的值为undefined。

（4）函数没有返回值时，默认返回undefined。

null：

（1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。

7. new操作符具体干了什么呢?

（1）创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。

（2）属性和方法被加入到 this 引用的对象中。

（3）新创建的对象由 this 所引用，并且最后隐式的返回 this 。

8. JSON 的了解？

JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小。

格式：采用键值对，例如：{'age':'12', 'name':'back'}

9. call() 和 apply() 的区别和作用？

apply()函数有两个参数：第一个参数是上下文，第二个参数是参数组成的数组。如果上下文是null，则使用全局对象代替。

如：function.apply(this,[1,2,3]);

call()的第一个参数是上下文，后续是实例传入的参数序列。

如：function.call(this,1,2,3);

10. 如何获取UA？

function whatBrowser() { 

document.Browser.Name.value=navigator.appName; 

document.Browser.Version.value=navigator.appVersion; 

document.Browser.Code.value=navigator.appCodeName; 

document.Browser.Agent.value=navigator.userAgent; 

} 

其他

1. HTTP状态码知道哪些？

100 Continue 继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息

200 OK 正常返回信息

201 Created 请求成功并且服务器创建了新的资源

202 Accepted 服务器已接受请求，但尚未处理

301 Moved Permanently 请求的网页已永久移动到新位置。

302 Found 临时性重定向。

303 See Other 临时性重定向，且总是使用 GET 请求新的 URI。

304 Not Modified 自从上次请求后，请求的网页未修改过。

400 Bad Request 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。

401 Unauthorized 请求未授权。

403 Forbidden 禁止访问。

404 Not Found 找不到如何与 URI 相匹配的资源。

500 Internal Server Error 最常见的服务器端错误。

503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。

2. 你有哪些性能优化的方法？

（1） 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。

（2） 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数

（3） 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。

（4） 当需要设置的样式很多时设置className而不是直接操作style。

（5） 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。

（6） 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。

（7） 图片预加载，将样式表放在顶部，将脚本放在底部 加上时间戳。

3. 什么叫优雅降级和渐进增强？

优雅降级：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了,为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效。

渐进增强：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能,向页面增加无害于基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。

4. 哪些常见操作会造成内存泄漏？

内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。

垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。

闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）。

5. 线程与进程的区别

一个程序至少有一个进程,一个进程至少有一个线程。

线程的划分尺度小于进程，使得多线程程序的并发性高。 

另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。 

线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。 

从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别。





 关于兼容性问题的小结

 1.  最小高度问题：在IE6下，当元素高度<19px时候，当成19px来处理。

  解决：给元素添加overflow:hidden;

2.  border:1px dotted #000;在IE6下效果等同于dashed，但是从2px开始就可以兼容dotted。

这里还有一个问题就是当border的width越来越大的时候，比如为10px，那么chrome此时dotted是正方形，其他浏览器是width为10px的圆！

3.  IE6下对块元素设置display:inline-block;无效！

4.  当li元素内还嵌套eg.<a><span>等子元素，如果li的子元素均浮动，那么在IE6、7下，li的下方会出现间隙。

  解决：方法一：给li加浮动。

       此时如果不给li设宽度，在IE6、7下li的宽度会继承父级的宽度！但是在标准浏览器下子元素同时变为左浮动，li的宽度则是li的子元素的宽度之和！！

     方法二：给li加vertical-align。（这条不会带来其他问题）此时，标准浏览器下li继承ul的宽了！

IE6、7下，如果不给子元素设定宽高，子元素总会继承父元素的宽高值！！！

5.  IE6下的双边距问题：

  出现该问题的必要条件：IE6下，块元素   浮动，设置横向margin，此时横向的margin会变为设置的margin值的双倍！（其实是最左第一个和最右第一个变为双倍，中间相邻的各个元素间的margin值是：前一个的margin-right+后一个的margin-left值）

  如果是添加margin-left，那么只有左边起第一个元素的左margin变为双倍，同理，添加margin-right是是有右边起第一个元素的右margin变为双倍。

  解决：添加display:inline;

6.  当一行子元素占有的宽度之和比父元素的宽度大3px，或者子元素没有占满最后一行时，最后一行的子元素的margin-bottom会消失！！

  无解决办法，只能是尽量规避引起问题的这些原因。

7．在IE6下的文字溢出BUG

       当父元素内有两个元素，并且这两个元素都是浮动元素时，如果子元素的宽度和父级的宽度相差小于3px的时候,两个浮动元素中间有注释或者内嵌元素时，第二个子元素的文字会出现在下一行，添加的注



释、内嵌元素越多，溢出的文字越多。

当父元素内有多个元素，并且这些所有元素都是浮动元素时，如果子元素的宽度和父级的宽度相差小于3px的时候,任意两个浮动元素中间有注释或者内嵌元素时，总是最后一个子元素的文字溢出。。

  解决：用div把注释或者内嵌元素用div包起来

8． 当浮动元素和绝对定位元素是并列关系时，在IE6下绝对定位元素会消失。

  解决：给定位元素外面包个div，让两者不是并列关系就可以了

  自己实践了下面几种情况，后来突然发现只要不让两者是并列关系就可以解决！！不需要考虑这么多！如在实践中遇到定位元素消失的情况那么就考虑是不是这种情况引起的。

      1. margin:0 0 0 0-97px; float:left;      ----->>  绝对定位元素不消失

      2. margin:0 0 0 98-100px; float:left;   ----->>  绝对定位元素消失了！！

      3. 只有float:right;                            ----->>  绝对定位元素不消失

      4. margin:0 0 0 98-100px; float:right; ----->>  绝对定位元素消失了！！

      5. margin:0 98-100px 0 0 ; float:right;----->>  绝对定位元素消失了！！

      6. margin:0 0-97px 0 0 ; float:right;   ----->>  绝对定位元素不消失

 

 

9.  在IE6、7下，如果父级设置overflow:hidden;且子元素设置了relative定位，如果子元素的高度大于父元素，那么此时hidden的作用无效！子元素的高度依旧会超出父元素

  解决：给父级也添加一个position:relative;



10.  给某一元素设置position:absolute;并且它的父元素设置的宽高为奇数时，在IE6下，如果是用right和bottom设置偏移量，那么这两个偏移量的值会有1px的偏差。left和top并没有该问题！

  无解决办法，所以设置时尽量不要用奇数！



11.  IE6不支持固定定位：position:fixed;所在IE6下以只能是用js实现固定定位！

 

 

12.  png24在IE6下不支持的问题

在<head></head>中写如下语句：（.box表示需要插入png图片的元素的类名，如果都需要用这个，就用通用符*咯~）

<!--[if IE 6]>

<script src="DD_belatedPNG_0.0.8a.js"></script>

<script>

DD_belatedPNG.fix('.box');

</script>

<![endif]-->

10.  !important涉及的兼容性问题

      background:red !important; background:pink;

      在IE6下，在important 后边再加一条同样的样式，会破坏掉important的作用，会按照默认的优先级顺序来走，即：默认样式 < 类型 < class < id < style(行间)
