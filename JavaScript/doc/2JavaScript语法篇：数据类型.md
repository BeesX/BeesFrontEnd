# JavaScript语法篇：数据类型

作者: 郭孝星  
邮箱: guoxiaoxingse@163.com  
博客: http://blog.csdn.net/allenwells   
简书: http://www.jianshu.com/users/66a47e04215b/latest_articles  

**关于作者**

>郭孝星，非著名程序员，代码洁癖患者，爱编程，好吉他，喜烹饪，爱一切有趣的事物和人。

**关于文章**

>作者的文章会同时发布在Github、CSDN与简书上, 文章顶部也会附上文章的Github链接。如果文章中有什么疑问也欢迎发邮件与我交流, 对于交流的问题, 请描述清楚问题并附上代码与日志, 一般都会给予回复。如果文章中有什么错误, 也欢迎斧正。如果你觉得本文章对你有所帮助, 也欢迎去star文章, 关注文章的最新的动态。另外建议大家去Github上浏览文章，一方面文章的写作都是在Github上进行的，所以Github上的更新是最及时的，另一方面感觉Github对Markdown的支持更好，文章的渲染也更加美观。

文章目录

https://github.com/guoxiaoxing/web-front-end-learning-route/blob/master/README.md

## 基本数据类型

基本数据类型在内存中占有固定大小的内存空间，它被保存中在栈内存中。

```
Undefined：Undefined有个特殊类型的值undefined，已经声明的变量但韦初始化的值为undefined。
Null：Null有个特殊类型的值null，null是一个特殊的值，它代表了一个空对象指针，typeof null返回object。
Boolean：Boolean包含true与false两个值。
Number：Number类型使用IEEE754格式来表示整数与浮点数。
String：String类型用来表示由0或多个16位Unicode字符组成的字符串。
```
基本类型在调用方法时会自动创建其对应的包装类型，因为基本类型是无法调用方法的，当该方法执行结束后会自动销毁该
对象。

### Boolean

### Number

```
toString()：传入一个int值，表示输出的进制数。
toFixed()：传入一个int值，表示保留小数几位。
toExponential()：传入一个int值，表示可续计数法几位。
toPrecision()：根据值大小，选择是以固定格式（fix）还是指数格式（exponential）返回数值。
```
### String

## 引用数据类型

### Object类型

引用数据类型的值是对象，它是一种数据结构，将数据与功能组织在一起，它被保存在堆内存中。

```
Object：Object类型就是一组数据与功能的集合。
```

注：只有引用数据类型才可以动态的添加和删除属性。

创建Object实例的方式

1 使用new操作符后跟Object的构造函数

```javascript
var persson = new Onject();
person.name = "Nick";
person.age = 29;
```

2 对象字面量表示法

```javascript
var person = {
    name : "Nick",
    age : 29
}
```
### Array类型

>Array类型是存储数据的有序列表，数组的每一项都可以保存任意类型的数据，数组的大小是可以动态变化的。

#### 创建数组

1 Array()/new Array()

```javascript
var colors = new Array();
var colors = new Array(20);
var colors = new Array("red", "green", "blue");
```
注：new可以省略。

2 字面量表示法

```javascript
var colors = ["red", "green", "blue"];
```

数组的length不是只读的，通过修改这个属性，可以在数组末尾添加或删除元素，另外数组长度的上限是4294967295，超过这个限制会发生异常。

#### 数组方法

栈方法

```
push()：接收任意数量的参数，并将它们逐个添加到数组末尾，并返回修改后数组的长度。
pop()：从数组末尾移除最后一项，将数组长度减1，并返回移除的项。
```

队列方法

```
push()：接收任意数量的参数，并将它们逐个添加到数组末尾，并返回修改后数组的长度。
shift()：移除数组中第一个项并返回该项，并将数组长度减1.
unshift()：在数组前端添加任意个项并返回数组的长度。
```

排序方法

```
reverse()：反转数组项的排序。
sort()：接收一个比较函数进行排序，默认将数值转成字符串然后进行比较。
```

操作方法

```
concat()：拼接传递进来的数组与值，并返回拼接完成后的新数组。
slice()：接受起始位置与结束位置，然后对数组进行裁剪，并返回裁剪后的数组。
splice()：用来完成数组项的删除、插入与替换。
```

位置方法

```
indexOf()：从数组起始位置开始查找元素的索引。
lastndexOf()：从数组结束位置开始查找元素的索引。
```

迭代方法

```
every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。
filter()：对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组，
forEach()：对数组中的每一项运行给定函数，这个方法没有返回值。
map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
some()：对数组中的每一项运行给定函数，如果该函数任意一项返回true，则返回true。
```

归并方法

```
reduce()：从数组起始位置遍历至结束位置，根据传入的函数进行归并。
reduceRight()：从数组结束位置遍历至起始位置，根据传入的函数进行归并。
```

### Date类型

#### 创建日期

```javascript
var now = new Data();
```
默认不传参的情况下，新创建的对象自动获取当前的日期与时间。

```
now()：返回当前日期的毫秒数。
parse()：返回日期的毫秒数。
UTC()：返回日期的毫秒数。
```

### RegExp类型

#### RegExp类型创建

1 字面量创建法

```javascript
var expression = / pattern / flags;
```
pattern：正则表达式，包括：字符类、限定符、分组、向前查找以及反向引用。
flags：标志位，用来标明正则表达式的行为。

```
g：全局模式，即应用到所有字符串中，在发现第一个匹配项时停止。
i：表示不区分大小写。
m：多行模式，即在到达一行末尾时还会继续查找下一行是否存在匹配的项。
```

2 对象创建法

```javascript
var expression = new RegExp("pattern", "flags");
```

#### RegExp类型方法

```
exex()：接受一个要应用该正则表达式的字符串，然后返回第一个匹配信息的数组。
```