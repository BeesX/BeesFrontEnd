# JavaScript编程语言：基本概念

作者：[郭孝星](https://github.com/guoxiaoxing)

校对：[郭孝星](https://github.com/guoxiaoxing)

文章状态：编辑中

**关于项目**

> [BeesFrontEnd](https://github.com/BeesFrontEnd/BeesFrontEnd)项目用来学习HTML、CSS与JavaScript等前端开发技术。

**文章目录**

## 一 语法

1. 区别大小写。
2. 变量是松散类型的，可以保存任何类型的数据。

## 二 数据类型

### 2.1 基本数据类型

> 基本数据类型占用固定大小的空间，保存在栈内存中。

Undefined：只有一个值，即：undefined，在使用var声明了一个变量，但是未对其加以初始化。
Null：只有一个值，即：null，表示一个空对象指针。
Boolean：只有两个值，即：true和false。
Number：使用IEEE754格式来保存整数和浮点数值。

1. 最大值Number.MAX_VALUE，最小值Number.MIN_VALUE，超出这个数值后，会自动转成正无穷Infinity和负无穷-Infinity。
2. 非数值NaN与任何数运算都会得到NaN。NaN也不等于任何数，包括NaN。

> String：表示由零或者多个16位Unicode字符组成的字符序列，即字符串。

JavaScript里的String属于基本数据类型，不是引用数据类型。

### 2.2 引用数据类型

> 引用数据类型的值是对象，保存在堆内存中。

1. 引用数据类型可以动态地增加属性。
2. 基本数据类型按值传递，引用数据类型按引用传递，JavaScript里函数参数都是按值传递的。
3. 检查类型使用typeof，检测对象类型使用Instanceof。
4. JavaScript没有块级作用域，没有使用var声明的变量会自动变成全局变量。

#### Object

```javascript

```


```javascript

```


#### Array

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

## 三 控制语句

1. if
2. while
3. for
4. for in
5. label
6. break与continue
7. with：将代码的作用域设定到一个特定的对象中。
8. switch

## 四 函数

函数使用function关键字来声明。

1. JavaScript函数函数是存储在arguments数组里的，因此它不介意传递了多少个参数进来以及参数的类型是什么。
2. JavaScript函数没有重载，参数不定，也没有函数签名的特性。

