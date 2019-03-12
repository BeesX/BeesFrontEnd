# JavaScript编程语言：基本概念

作者：[郭孝星](https://github.com/guoxiaoxing)<br />校对：[郭孝星](https://github.com/guoxiaoxing)

文章状态：编辑中

**关于项目**
> [BeesFrontEnd](https://github.com/BeesFrontEnd/BeesFrontEnd)项目用来学习HTML、CSS与JavaScript等前端开发技术。


**文章目录**
> JavaScript是一种专为与网页交互而设计的脚本语言，由ECMAScript、DOM与BOM三部分组成。


两种在网页引入JavaScript的方式：

引入源码<br /><script><br />  function foo() {

  }<br /></script><br />引入源码文件<br /><script src="js/main.js"></script>
<a name="31c8249c"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E4%B8%80-%E8%AF%AD%E6%B3%95)一 语法

1. 区别大小写。
1. 变量是松散类型的，可以保存任何类型的数据。
1. <br />
<a name="5fb057bb"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E4%BA%8C-%E5%8F%98%E9%87%8F%E8%B5%8B%E5%80%BC)二 变量&赋值

ECMAScript的变量是松散类型，使用var定义。

<a name="581014f6"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E4%B8%89-%E5%80%BC)三 值

1. 与访问变量有按值和按引用两种方式不同， 函数的参数都是按值传递的。
1. typeof检测值得类型，instanceof判断是不是某种类型。
1. 内部环境可以访问外部环境的作用域和变量，而外部环境不能访问内部的。
1. JavaScript没有块级作用域，大括号和for循环里面定义的变量都会被提升到外部，可以被使用。

基本类型

1. 基本类型不能动态添加属性。
1. 基本类型复制会创建一个新值，然后分配给变量。

引用类型

1. 引用类型传值按引用传递。



<a name="7febea22"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E5%9B%9B-%E5%B8%83%E5%B0%94)四 布尔

Boolean：只有两个值，即：true和false。<br />false
* undefined、null
* false
* -0，NaN
* ‘’

以上为假值，其余为真值，值得判断可以使用Boolean(value)进行判断。

<a name="b19d8a29"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E4%BA%94-%E6%95%B0%E5%AD%97)五 数字

Number：使用IEEE754格式来保存整数和浮点数值。
* Number.MAX_VALUE：5e-324
* Number.MIN_VALUE：1.7976931348623157e-308
* NaN：非数，任何与NaN的操作都会返回NaN，NaN不与任何数字相等。

Array
1. 创建数组有两种方式：① Array构造函数。② 数组字面量表示法。
1. 数组的length不是只读的，可以通过修改length的大小来移除数组末尾的项。
1. 数组最多可以容纳4294967295个项，如果超出这个范围，可能导致运行时间超长的脚本错误。
1. 使用Array.isArray()检测是否是一个数组。
1. 使用join()方法可以为数组添加项分隔符。
1. 栈方法push()与pop()。
1. 队列方法shift()与unshift()。
1. 排序方法reverse()与sort()。
1. 拼接方法concat()。
1. 裁剪方法splice()。
1. 位置方法indexOf()与lastIndexOf()。
1. 迭代方法every()、filter()、forEach()、map()、some()。
1. 归并方法reduce()、reduceRight()。
<a name="d181941c"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E5%85%AD-%E5%AD%97%E7%AC%A6%E4%B8%B2)六 字符串

String：标识由零或者多个16位Unicode字符组成的字符序列。

<a name="c5659e87"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E4%B8%83-%E8%AF%AD%E5%8F%A5)七 语句

1. if
1. while
1. for
1. for in
1. label
1. break与continue
1. with：将代码的作用域设定到一个特定的对象中。
1. switch

<a name="29198146"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E5%85%AB-%E5%87%BD%E6%95%B0)八 函数
函数使用function关键字来声明。
1. JavaScript函数函数是存储在arguments数组里的，因此它不介意传递了多少个参数进来以及参数的类型是什么。
1. JavaScript函数没有重载，参数不定，也没有函数签名的特性。
1. 函数声明会在解析器执行的时候会进行一个函数声明提升的过程，读取并将函数声明添加到执行环境中，函数表达式则不会。
1. 函数可以作为值进行传递。
1. 函数内部对象arguments是一个数组对象，包含着传入函数中的所有参数。arguments.callee属性是一个指针，指向arguments对应的函数。
1. apply()方法与call()可以用来传递参数和扩展函数作用域。
> 函数名是指针，函数是对象。

三种创建函数的方式<br />第一种：函数声明。<br />function sum(num1, num2){<br />    return num1 + num2;<br />}<br />第二种：函数表达式。<br />var sum = function(num1, num2){<br />    return num1 + num2;<br />};<br />第三种：函数声明。<br />var sum = new Function("num1", "num2", "return nun1 + num2")
<a name="afb9a5c4"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E4%B9%9D-%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86)九 异常处理
<a name="d181941c-1"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E5%85%AD-%E5%AD%97%E7%AC%A6%E4%B8%B2-1)六 字符串
<a name="1f81d8a1"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E5%9B%9B-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)四 数据类型
<a name="509f0362"></a>
### [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#41-undefined)4.1 Undefined
Undefined：只有一个值，即：undefined，在使用var声明了一个变量，但是未对其加以初始化。
<a name="ab67ba36"></a>
### [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#42-null)4.2 Null
Null：只有一个值，即：null，表示一个空对象指针。
<a name="0b376ab0"></a>
### [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#43-boolean)4.3 Boolean
<a name="32ed370e"></a>
### [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#44-number)4.4 Number
<a name="d73822ee"></a>
### [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#46-string)4.6 String
* 字符串是不可变的。
<a name="562a1fb8"></a>
### [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#47-object)4.7 Object
> 引用数据类型的值是对象，保存在堆内存中。

1. 引用数据类型可以动态地增加属性。
1. 基本数据类型按值传递，引用数据类型按引用传递，JavaScript里函数参数都是按值传递的。
1. 检查类型使用typeof，检测对象类型使用Instanceof。
1. JavaScript没有块级作用域，没有使用var声明的变量会自动变成全局变量。
<a name="Object"></a>
#### [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#object)Object
Date
1. parse()方法接收一个日期字符串，然后尝试解析成日期的毫秒数。
1. UTC()方法接收一组数字，然后尝试解析成日期的毫秒数。
1. now()方法返回当前日期和时间的毫秒数。

RegExp<br />var expression = /pattern/flags/<br />pattern表示正则表达式，flags表示标志位：
* g表示全局模式。
* i表示不区分大小写。
* m表示多行模式。

Global<br />全局方法
1. eval()
1. encodeURI()

Math
<a name="3100a784"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E4%BA%94-%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5)五 控制语句
<a name="ba61324e"></a>
## [](https://github.com/BeesX/BeesFrontEnd/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/JavaScript%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md#%E5%85%AD-%E5%87%BD%E6%95%B0)六 函数
