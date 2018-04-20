# JavaScript编程语言：面向对象

作者：[郭孝星](https://github.com/guoxiaoxing)

校对：[郭孝星](https://github.com/guoxiaoxing)

文章状态：编辑中

**关于项目**

> [BeesFrontEnd](https://github.com/BeesFrontEnd/BeesFrontEnd)项目用来学习HTML、CSS与JavaScript等前端开发技术。

**文章目录**

## 对象属性

属性类型

- Configurable：表示能否通过delete删除属性从而重新定义属性。
- Enumerable：表示能否通过for-in循环返回属性。
- Writeable：表示能否修改属性的值。
- Value：属性的数据值。

访问器属性

- Object.defineProperty()：定义访问器属性。
- Object.defineProperties()：定义多个访问器属性。
- Object.getOwnPropertyDescriptor()：获取给定属性的描述符。

## 对象创建

1. 工厂模式。
2. 构造函数。
3. 原型模式。