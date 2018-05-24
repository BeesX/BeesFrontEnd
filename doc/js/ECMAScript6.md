# 文章标题

作者：[郭孝星](https://github.com/guoxiaoxing)

校对：[郭孝星](https://github.com/guoxiaoxing)

文章状态：编辑中

**关于项目**

> [BeesFrontEnd](https://github.com/BeesFrontEnd/BeesFrontEnd)项目用来学习HTML、CSS与JavaScript等前端开发技术。

**文章目录**


> ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语
言可以用来编写复杂的大型应用程序，成为企业级开发语言。

## 一 let与const

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

## 二 解构赋值

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

## 三 字符串的扩展

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


## 四 正则的扩展

```javascript
var regex = /xyz/i;
```

- u修饰符: Unicode模式.
- i修饰符
- y修饰符: 粘连模式.
- s修饰符: dotAll模式.


### 五 数值的扩展

- 二进制: 0b
- 八进制: 0o

数值操作

```javascript
Number('0b11');// 7
Number('0o11');// 9

Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45

Number.isInteger(25) // true
Number.isInteger(25.1) // false

Number.isInteger(25) // true
Number.isInteger(25.0) // true

Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false
```

超过最大范围会误判

```javascript
Number.isInteger(3.0000000000000002) // true

Number.isInteger(5E-324) // false
Number.isInteger(5E-325) // true
```

Number.EPSILON表示一个极小的常量, 表示1与大于1的最小浮点数之间的差值. 对于84位数来说, 这个值是2的-52次方.


```javascript
Number.EPSILON === Math.pow(2, -52)
// true
Number.EPSILON
// 2.220446049250313e-16
Number.EPSILON.toFixed(20)
// "0.00000000000000022204"
```

浮点数的计算是不精确的

```javascript
0.1 + 0.2
// 0.30000000000000004

0.1 + 0.2 - 0.3
// 5.551115123125783e-17

5.551115123125783e-17.toFixed(20)
// '0.00000000000000005551'

0.1 + 0.2 === 0.3 // false
```

Number.EPSILON可以用来表示可以接受的误差范围.

```javascript
function withinErrorMargin (left, right) {
  return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
}

0.1 + 0.2 === 0.3 // false
withinErrorMargin(0.1 + 0.2, 0.3) // true

1.1 + 1.3 === 2.4 // false
withinErrorMargin(1.1 + 1.3, 2.4) // true
```

ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。


```javascript
Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1
// true
Number.MAX_SAFE_INTEGER === 9007199254740991
// true

Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER
// true
Number.MIN_SAFE_INTEGER === -9007199254740991
```

指数运算符

```javascript
2 ** 2 // 4
2 ** 3 // 8

let a = 1.5;
a **= 2;
// 等同于 a = a * a;

let b = 4;
b **= 3;
// 等同于 b = b * b * b;
```

Math对象新增的静态函数

- Math.trunc方法用于去除一个数的小数部分，返回整数部分。
- Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
- Math.cbrt方法用于计算一个数的立方根。
- Math.clz32方法返回一个数的 32 位无符号整数形式有多少个前导 0。
- Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。
- Math.fround方法返回一个数的32位单精度浮点数形式。
- Math.hypot方法返回所有参数的平方和的平方根。
- Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1。
- Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。
- Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN
- Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN。
- Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
- Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
- Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
- Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
- Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
- Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）

## 六 对象的扩展

### 6.1 属性简写

```javascript
function f(x, y){
    return {x, y};
}

// 等同于
function f(x, y){
    return {x: x, y: y};
}

f(1, 2);// Object {x: 1, y: 2}
```

### 6.2 方法简写

```javascript
const o = {
  method() {
    return "Hello!";
  }
};

// 等同于

const o = {
  method: function() {
    return "Hello!";
  }
};
```
属性名表达式

```javascript
// 方法一
obj.foo = true;

// 方法二
obj['a' + 'bc'] = 123;

let lastWord = 'last word';

const a = {
  'first word': 'hello',
  [lastWord]: 'world'
};

a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world"
```

函数名表达式

```javascript
let obj = {
  ['h' + 'ello']() {
    return 'hi';
  }
};

obj.hello() // hi
```
### 6.3 Object.is()

ES5 比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，
ES6 提出“Same-value equality”（同值相等）算法，用来解决这个问题。Object.is()就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符
（===）的行为基本一致。

```javascript
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false

+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

### 6.4 Object.assign()

Object.assign()方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

```javascript
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

// 如果该参数不是对象，则会先转成对象，然后返回。
typeof Object.assign(2) // "object"

// 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
Object.assign(undefined) // 报错
Object.assign(null) // 报错

// Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不
// 拷贝不可枚举的属性（enumerable: false）。
Object.assign({b: 'c'},
  Object.defineProperty({}, 'invisible', {
    enumerable: false,
    value: 'hello'
  })
)
// { b: 'c' }

// 属性名为 Symbol 值的属性，也会被Object.assign拷贝。
Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' })
// { a: 'b', Symbol(c): 'd' }
```

特点

- 浅拷贝
- 同名属性替换
- 数组也视为对象, 相同位置的元素会被替换.
- 取值函数会先求值, 再进行复制.

用途

- 为对象添加属性

```javascript
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}
```

- 为对象添加方法


```javascript
Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {
    ···
  },
  anotherMethod() {
    ···
  }
});

// 等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {
  ···
};
SomeClass.prototype.anotherMethod = function () {
  ···
};
```

- 克隆对象


```javascript
function clone(origin){
    retrun Object.assign({}, origin);
}

// 采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如
// 果想要保持继承链，可以采用下面的代码。
function clone(origin){
    let originProto = Objhect.getPrototypeOf(origin);
    return Object.assign(Objhect.create(originProto), origin);
}
```
- 合并多个对象

```javascript
const merge1 = (target, ...sources) => Object.assign(target, ...sources);
const merge2 = ( ...sources) => Object.assign({}}, ...sources);
```
- 为属性指定默认值

```javascript
const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};

function processContent(options){
    options = Object.assign({}, DEFAULTS, options})
}
```

### 6.5 属性的可枚举性和遍历

Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。

```javascript
let obj = {foo: 123};
Object.getOwnPropertyDescriptor(obj, 'foo');
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
```

enumerable称为可枚举性, 如果该属性为false, 则表示某些操作会忽略当前属性.

- for...in循环：只遍历对象自身的和继承的可枚举的属性。
- Object.keys()：返回对象自身的所有可枚举的属性的键名。
- JSON.stringify()：只串行化对象自身的可枚举的属性。
- Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

另外, 只有for...in会返回继承的属性，其他三个方法都会忽略继承的属性，只处理对象自身的属性。

属性的遍历一共有5种方法:

- for...in: 循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
- Object.keys(obj): 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
- Object.getOwnPropertyNames(obj): 返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
- Object.getOwnPropertySymbols(obj): 返回一个数组，包含对象自身的所有 Symbol 属性的键名。
- Reflect.ownKeys(obj): 返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

遍历规则:

1. 首先遍历所有数值键，按照数值升序排列。
2. 其次遍历所有字符串键，按照加入时间升序排列。
3. 最后遍历所有 Symbol 键，按照加入时间升序排列。

### 6.6 对象扩展运算符

对象扩展运算符

```javascript
let z = {a: 2, b: 4};
let n = {...z};//n {a: 2, b: 4}
```

扩展运算符可以跟表达式

```javascript
const obj = {
    ...(x > 1 ? {a: 1} : {}),
    b: 2
}
```

扩展运算符的参数对象之中，如果有取值函数get()，这个函数是会被执行的。

```javascript
// 并不会抛出错误，因为 x 属性只是被定义，但没执行
let aWithXGetter = {
  ...a,
  get x() {
    throw new Error('not throw yet');
  }
};

// 会抛出错误，因为 x 属性被执行了
let runtimeError = {
  ...a,
  ...{
    get x() {
      throw new Error('throw now');
    }
  }
};
```

## 七 Symbol

continue： http://es6.ruanyifeng.com/#docs/symbol


```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

###

###

###

###

###

```javascript

```

###

###

###

###

###

###

