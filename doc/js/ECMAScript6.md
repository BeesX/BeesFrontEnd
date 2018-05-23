# 文章标题

作者：[郭孝星](https://github.com/guoxiaoxing)

校对：[郭孝星](https://github.com/guoxiaoxing)

文章状态：编辑中

**关于项目**

> [BeesFrontEnd](https://github.com/BeesFrontEnd/BeesFrontEnd)项目用来学习HTML、CSS与JavaScript等前端开发技术。

**文章目录**


> ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语
言可以用来编写复杂的大型应用程序，成为企业级开发语言。

### 1 let与const

let声明变量

1. let声明的变量只在声明的块级作用域有效, 不存在变量提升.
2. let声明的变量需要先声明后使用.
3. let声明的局部变量覆盖全局变量.
4. let不允许重复声明变量.

const声明变量

1. const声明一个只读常量, 一旦声明不可改变, 事实上, const保证的是声明的那个变量的内存地址不会改变, 所以
对象里的值还是可以改变的.

关于顶层对象

- 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
- 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
- Node 里面，顶层对象是global，但其他环境都不支持。

获取顶层对象的方法

```javascript
// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
```

### 2 解构赋值

```javascript
let [a, b c ] = [1, 2, 3];
```

解构赋值的用途

1. 交换变量的值

```javascript
let x = 2;
let y = 3;
[x. y] = [y, x];
```

2. 函数返回多个返回值

```javascript
// 返回一个数组
function example(){
    return [1, 2, 3];
}

let [a, b, c] = example();

// 返回一个对象
function example(){
    return{
        foo: 1,
        bar: 2
    };
}

let {foo, bar} = example();
```

3. 函数参数的定义

```javascript
// 参数是一组有次序的值
function f([x. y, z]){

}
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}){}
f({x:2, y:2, z:1});
```

4. 提取json数据

```javascript
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
```

5. 函数参数默认值

```javascript
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};
```

6. 遍历Map解构

```javascript
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for(let [key, value] of map){
    console.log(key + "is" + value);
}
```
7. 输入指定模块的指定方法

```javascript
const { SourceMapConsumer, SourceNode } = require("source-map");
```

### 3 字符串的扩展

将码点放入大括号, 可以正确解析该字符.

```
"\u{20BB7}"
// "𠮷"

"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;
hell\u{6F} // 123

'\u{1F680}' === '\uD83D\uDE80'
// true
```

模板字符串

```javascript
// 普通字符串
`In JavaScript '\n' is a line-feed.`

// 多行字符串
`In JavaScript this is
 not legal.`

console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
```


### 4 正则的扩展

continue: http://es6.ruanyifeng.com/#docs/regex

### 5 数值的扩展

### 6

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

