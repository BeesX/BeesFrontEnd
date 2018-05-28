# JavaScript编程语言：ES6

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

> ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。


Symbol由Symbol()函数生成

```javascript
let a = Symbol();
```

/Symbol可以接受一个字符串作为参数，作为对Symbol实例的描述

```javascript
let b = Symbol("foo");
```

如果传入的参数是一个对象，则会调用对象的toString()方法。

```javascript
let c = Symbol(obj1);
```

Symbol值不能与其他类型的值进行运算


```javascript
"your symbol is" + b；
```

Symbol作为对象属性名时， 不能用点运算符， 在对象内部定义属性时， Symbol值必须放在方括号中。

```javascript
let a = Symbol();
let obj = {
    [a]: function(arg) {
      
    }
};
obj[a](123);
```

Symbol还可以用来生成常量。

```javascript
const shpaeType = {
   triangle: Symbol()  
};

function getArea(shape, option) {
    let area = 0;
    switch (shape){
        case shpaeType.triangle:
            break
    } 
}
```

Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。

```javascript
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'a';
obj[b] = 'b';

const symbols = Object.getOwnPropertySymbols(obj);
```

Symbol.for()方法每次都会返回相同的Symbol值。

```javascript
// true
Symbol.for('foo') === Symbol.for('foo');

// false
Symbol('foo') === Symbol('foo');
```

Symbol可以实现模块单例。

传统单例将对象放在全局对象global中。

```javascript
function A() {
    this.foo = 'hello';
}

if(!global._foo){
    global._foo = new A();
}

module.exports = global._foo;
```

Symbol可以防止key被修改。

```javascript
const KEY = Symbol.for('foo');

function A() {
    this.foo = 'hello';
}

if(!global[key]){
    global[key] = new A();
}

module.exports = global[key];
```

## 八 集合

### 8.1 Set

操作方法

- add(value)：添加某个值，返回 Set 结构本身。
- delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
- has(value)：返回一个布尔值，表示该值是否为Set的成员。
- clear()：清除所有成员，没有返回值。

遍历方法

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员


数组去重

```javascript
function dedupe1(array) {
    return Array.from(new Set(array));
}

function dedupe2(array) {
    return {...new Set(array)};
}
```

### 8.2 WeakSet

- WeakSet的成员只能是对象，而不能是其他值。
- WeakSet里的对象都是弱引用。
- WeakSet没有size属性，也不能进行for each操作。

### 8.3 Map

Map类似于对象，是一种键值对的数据结构，但是它的键不仅仅限于字符串。

操作方法

- set(key, value)：set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。
- get(key)：get方法读取key对应的键值，如果找不到key，返回undefined。
- has(key)：has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
- delete(key)：delete方法删除某个键，返回true。如果删除失败，返回false。 
- clear()：clear方法清除所有成员，没有返回值。

遍历方法

- keys()：返回键名的遍历器。
- values()：返回键值的遍历器。
- entries()：返回所有成员的遍历器。
- forEach()：遍历 Map 的所有成员。

数据结构互转

Map转为数组

```javascript
const map = new Map().set(true, 7)
.set({foo: 3}, ['abc']);

// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
let array = [...map];
```

数组转Map

```javascript
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }
new Map([true, 7], [{foo: 3}, ['abc']]);
```

Map转对象

```javascript
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }
```

对象转Map

```javascript
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({yes: true, no: false})
// Map {"yes" => true, "no" => false}
```

Map转JSON

```javascript
// Map 的键名都是字符串，这时可以选择转为对象 JSON。
function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

let myMap = new Map().set('yes', true).set('no', false);
strMapToJson(myMap)
// '{"yes":true,"no":false}'

// Map 的键名有非字符串，这时可以选择转为数组 JSON。
function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}

let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap)
// '[[true,7],[{"foo":3},["abc"]]]' 
```

JSON转Map

```javascript
function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}

jsonToStrMap('{"yes": true, "no": false}')
// Map {'yes' => true, 'no' => false}
```
### 8.4 WeakMap

- WeakMap只接受对象作为键名。
- WeakMap指向的键名都是弱引用。

## 九 Proxy

> Proxy属于元编程的概念，用于修改某些操作的默认行为。


```javascript
var proxy = new Proxy(target, handler);
```

两个参数：

- target：所要代理的对象。
- handler：配置的操作对象。

Proxy拦截操作

- get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
- set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
- has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
- deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
- ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
- getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
- defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
- preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
- getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
- isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
- setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
- apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
- construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。


```javascript
let person = {
    name: '张三'
};

var proxy1 = new Proxy(person, {
    get: function (target, p, receiver) {
        if(p in target){
            return target[p];
        }else {
            document.writeln("property is not in target");
        }
    }
});

// 张三
document.writeln(proxy1.name + "<br/>");
// property is not in target
document.writeln(proxy1.age + "<br/>");
```


```javascript
let proxy2 = new Proxy(person, {
    set: function (target, p, value, receiver) {
        if(value === 'lisi'){
            target[p] = '李四';
        }
    }
});

proxy2.name = 'lisi';
// 李四
document.writeln(proxy2.name + "<br/>");
```

## 十 Reflect

1. Reflect对象可以拿到语言内部的方法。
2. 修改某些Object方法的返回结果，让其变得更合理。


```javascript
// 老写法
try{
    Object.defineProperty(target, property, attributes);
}catch (e) {
  
}

// 新写法
if(Reflect.defineProperty(target, property, attributes)){
    
}else {
    
}
```

3. 让Object的命令式操作都变成函数式操作。

```javascript
// 命令式
'assign' in Object;

// 函数式
Reflect.has(Object, 'assign');
```

4. Reflect对象的方法与Proxy对象的方法一一对应，不管Proxy怎么修改默认行为，你总是可以在Reflect上获取默认行为。

Reflect对象一共有13个静态方法，大部分与Object的同名方法功能是一样的，而且与Proxy对象的方法是一一对应的。

- Reflect.apply(target, thisArg, args)：同于Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数。
- Reflect.construct(target, args)：等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。
- Reflect.get(target, name, receiver)：查找并返回target对象的name属性，如果没有该属性，则返回undefined。
- Reflect.set(target, name, value, receiver)：Reflect.set方法设置target对象的name属性等于value。
- Reflect.defineProperty(target, name, desc)：等同于Object.defineProperty，用来为对象定义属性。未来，后者会被逐渐废除，请从现在开始就使用Reflect.defineProperty代替它。
- Reflect.deleteProperty(target, name)：等同于delete obj[name]，用于删除对象的属性。
- Reflect.has(target, name)：Reflect.has方法对应name in obj里面的in运算符。
- Reflect.ownKeys(target)：用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。
- Reflect.isExtensible(target)：对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展。
- Reflect.preventExtensions(target)：应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。
- Reflect.getOwnPropertyDescriptor(target, name)：同于Object.getOwnPropertyDescriptor，用于得到指定属性的描述对象，将来会替代掉后者。
- Reflect.getPrototypeOf(target)：于读取对象的__proto__属性，对应Object.getPrototypeOf(obj)。
- Reflect.setPrototypeOf(target, prototype)：用于设置对象的__proto__属性，返回第一个参数对象，对应Object.setPrototypeOf(obj, newProto)。


## 十一 Promise

> Promise是一个异步对象，从它可以获取异步操作的信息。

1. 对象的状态不受外界营销，Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有
异步操作的结果，可以决定当前是处于哪一种状态，其他操作无法改变这个状态。
2. 一旦状态发生改变，就不会再变，任何时候都可以得到这个结果。


Promise构造函数接受一个函数作为参数，函数里的参数是两个函数resolve与reject。

1. Promise的then()方法定义在原型对象Promise.prototype上的，它为Promise实例添加状态改变时的回调哈数，该
方法第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调参数。then()方法会返回一个新的Promise实
例（状态改变后的Promise实例）。

2. Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

```javascript
let promise = new Promise(function(resolve, reject) {
    resolve();
    reject();
});

promise.then(function() {
  
}).then(function() {
  
});

promise.then(function() {
  
}).catch(function() {
  
});


continue: http://es6.ruanyifeng.com/#docs/promise

###

```javascript

```

## 十二 Iterator

```javascript

```

## 十三 Generator

```javascript

```

## 十四 async

```javascript

```

## 十五 Class

```javascript

```

## 十六 Decorator

```javascript

```

## 十七 Module

> ES6的模块是编译时加载，模块功能主要有两个命令组成，export命令用于规定模块对外的接口，import命令用于输入其他模块提供的功能。这两个
命令都只能置于模块顶层。

### 17.1 

export可以对外输出变量、方法和类。

```javascript
// 可以直接加在变量前面
export var name = 'Lili';
export var age = 20;

// 也可以直接在脚本末尾导出
export {name, age};
```

export除了输出变量本来的名字，还可以使用as关键字重命名。

```javascript
function v1() {
  
}

export {
    v1 as newName
}
```

### 17.2 

import导入与export的名字一一对应

```javascript
import {name, age} from './profile.js';
```

import同样可也可以为导入的变量重命名。

```javascript
import {v1 as newName} from './profile.js';
```

### 17.3 

> export default 用于指定模块的默认输出。

```javascript
// 第一组
export default function crc32() { // 输出
  // ...
}

// 不需要大括号
import crc32 from 'crc32'; // 输入

// 第二组
export function crc32() { // 输出
  // ...
};

// 需要大括号
import {crc32} from 'crc32'; // 输入
```

export default还可以用来输出类。

```javascript
export default class {
  
}

import MyClass from 'MyClass';
```

### 17.4 import()

import还可以作为一个函数使用，它加载的模块是一个对象。它通常会用在以下场合：

1. 按需加载。

```javascript
button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open();
  })
  .catch(error => {
    /* Error handling */
  })
});
```

2. 条件加载

```javascript
if (condition) {
  import('moduleA').then(...);
} else {
  import('moduleB').then(...);
}
```

3. 动态模块路径

```javascript
import(f())
.then(...);
```

```javascript

```



##

##

##

##

##

##

