# JavaScript编程语言：基本概念

作者：[郭孝星](https://github.com/guoxiaoxing)

校对：[郭孝星](https://github.com/guoxiaoxing)

文章状态：编辑中

**关于项目**

> [BeesFrontEnd](https://github.com/BeesFrontEnd/BeesFrontEnd)项目用来学习HTML、CSS与JavaScript等前端开发技术。

**文章目录**

> JavaScript是一种专为与网页交互而设计的脚本语言，由ECMAScript、DOM与BOM三部分组成。

 两种在网页引入JavaScript的方式：
 
 引入源码
 
 ```html
  <script>
   function foo() {

   }
 </script>
 ```

引入源码文件

```html
 <script src="js/main.js"></script>
```

## 一 语法

1. 区别大小写。
2. 变量是松散类型的，可以保存任何类型的数据。

## 二 关键字和保留字

## 三 变量

ECMAScript的变量是松散类型，使用var定义。

## 四 数据类型

### 4.1 Undefined

Undefined：只有一个值，即：undefined，在使用var声明了一个变量，但是未对其加以初始化。

### 4.2 Null

Null：只有一个值，即：null，表示一个空对象指针。

### 4.3 Boolean

Boolean：只有两个值，即：true和false。

### 4.4 Number

Number：使用IEEE754格式来保存整数和浮点数值。

- Number.MAX_VALUE：5e-324
- Number.MIN_VALUE：1.7976931348623157e-308
- NaN：非数，任何与NaN的操作都会返回NaN，NaN不与任何数字相等。

### 4.6 String

String：标识由零或者多个16位Unicode字符组成的字符序列。

- 字符串是不可变的。

### 4.7 Object

> 引用数据类型的值是对象，保存在堆内存中。

1. 引用数据类型可以动态地增加属性。
2. 基本数据类型按值传递，引用数据类型按引用传递，JavaScript里函数参数都是按值传递的。
3. 检查类型使用typeof，检测对象类型使用Instanceof。
4. JavaScript没有块级作用域，没有使用var声明的变量会自动变成全局变量。

#### Object

Array

1. 创建数组有两种方式：① Array构造函数。② 数组字面量表示法。
2. 数组的length不是只读的，可以通过修改length的大小来移除数组末尾的项。
3. 数组最多可以容纳4294967295个项，如果超出这个范围，可能导致运行时间超长的脚本错误。
4. 使用Array.isArray()检测是否是一个数组。
5. 使用join()方法可以为数组添加项分隔符。
6. 栈方法push()与pop()。
7. 队列方法shift()与unshift()。
8. 排序方法reverse()与sort()。
9. 拼接方法concat()。
10. 裁剪方法splice()。
11. 位置方法indexOf()与lastIndexOf()。
12. 迭代方法every()、filter()、forEach()、map()、some()。
13. 归并方法reduce()、reduceRight()。

Date

1. parse()方法接收一个日期字符串，然后尝试解析成日期的毫秒数。
2. UTC()方法接收一组数字，然后尝试解析成日期的毫秒数。
3. now()方法返回当前日期和时间的毫秒数。

RegExp

```javascript
var expression = /pattern/flags/
```
pattern表示正则表达式，flags表示标志位：

- g表示全局模式。
- i表示不区分大小写。
- m表示多行模式。

Global

全局方法

1. eval()
2. encodeURI()

Math

## 五 控制语句

1. if
2. while
3. for
4. for in
5. label
6. break与continue
7. with：将代码的作用域设定到一个特定的对象中。
8. switch

## 六 函数

函数使用function关键字来声明。

1. JavaScript函数函数是存储在arguments数组里的，因此它不介意传递了多少个参数进来以及参数的类型是什么。
2. JavaScript函数没有重载，参数不定，也没有函数签名的特性。
3. 函数声明会在解析器执行的时候会进行一个函数声明提升的过程，读取并将函数声明添加到执行环境中，函数表达式则不会。
4. 函数可以作为值进行传递。
5. 函数内部对象arguments是一个数组对象，包含着传入函数中的所有参数。arguments.callee属性是一个指针，指向arguments对应的函数。
6. apply()方法与call()可以用来传递参数和扩展函数作用域。

> 函数名是指针，函数是对象。

三种创建函数的方式

第一种：函数声明。

```javascript
function sum(num1, num2){
    return num1 + num2;
}
```

第二种：函数表达式。


```javascript
var sum = function(num1, num2){
    return num1 + num2;
};
```

第三种：函数声明。

```javascript
var sum = new Function("num1", "num2", "return nun1 + num2")
```
