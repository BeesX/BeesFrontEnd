# JavaScrit语法篇：数据类型

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
## 引用数据类型

引用数据类型的值是对象，它被保存在堆内存中。

```
Object：Object类型就是一组数据与功能的集合。
```

注：只有引用数据类型才可以动态的添加和删除属性。