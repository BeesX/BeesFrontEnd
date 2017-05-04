

ECMAScript 6: http://es6.ruanyifeng.com/#README

let

let声明变量, 

```java
let a = 10;
```

1. 变量在声明之前不可以使用, 使用typeof操作也会报错。
2. 只在代码块范围内有效。
3. 统一代码块内不允许重复声明。

>块级作用域: ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。S6 引入了块级作用域，明确允许在
块级作用域之中声明函数。块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。

do

do表达式可以把级作用域可以变为表达式。

```java
let x = do{
    let t = f();
    t = t + 1;
}
```

const

const声明一个只读的常量, 

```
const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错
```


1. 变量在声明之前不可以使用, 使用typeof操作也会报错。
2. 只在代码块范围内有效。
3. 统一代码块内不允许重复声明。
4. 复合类型常量, 变量名指向的是数据所在的地址, 而不是数据本身。

>const命令只是保证变量名指向的地址不变，并不保证该地址的数据不变，所以将一个对象声明为常量必须非常小心。

如果真的想将对象冻结，应该使用Object.freeze方法。

```
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```

除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。

```
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, value) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};
```

>ES5只有两种声明变量的方法：var命令和function命令。ES6除了添加let和const命令，后面章节还会提到，另外
两种声明变量的方法：import命令和class命令。所以，ES6一共有6种声明变量的方法。
 
解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

```
let [a, b, c] = [1, 2, 3];
```
