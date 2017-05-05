# JavaScript语法篇：垃圾收集

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

基本原理

>找出那些不再继续使用的变量，然后释放占用的内存。

JavaScript中的垃圾收集方式是标记清除。

标记

当变量进入环境后，将此变量标记为"进入环境"，当变量离开环境后，将变量标记为"离开环境"。有着"进入环境"标记的变量显然不能被回收。

清除

被标记为"离开环境"的变量，会被自动标记为可以回收，垃圾回收器在垃圾回收期间会对它进行自动清除。

注：垃圾回收还有一种机制就是引用计算，每当有个变量引用它，就将引用计算加1，当引用计数为0时，垃圾回收器就可以对它进行收集了。但是
循环引用会导致计数一直不为0，引用无法被回收。

