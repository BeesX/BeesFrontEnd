# HTML5标记语言：元素与属性

作者：[郭孝星](https://github.com/guoxiaoxing)

校对：[郭孝星](https://github.com/guoxiaoxing)

文章状态：编辑中

**关于项目**

> [BeesFrontEnd](https://github.com/BeesFrontEnd/BeesFrontEnd)项目用来学习HTML、CSS与JavaScript等前端开发技术。

**文章目录**

HTML5语法变化

1. 标签不再区分大小写。
2. 元素可以省略结束标签。
3. 允许省略属性值的属性。
4. 允许属性值不使用引号。

每个元素都有三个属性：

1. id：元素的唯一标识，DOM通过该表示访问元素。
2. class：CSS相关属性。
3. style：CSS相关属性。

新增属性：

1. contentEditable：如果该值为true，则说明该元素可以编辑。
2. designMode：如果设置为on，则该页面说有支持contentEditable的元素都会变成可编辑状态。
3. hidden：如果该值为true，则浏览器会隐藏元素，并且不会保留该元素占用的空间。
4. spellcheck：如果该值为true，则启动拼写检查。

meta可以用来定义页面元信息，主要包括：

- http-equiv：元信息名称，具有特殊意义。可以向浏览器传回一些值供浏览器处理。

主要有：

- Expires：网页过期时间，一旦网页过期。必须重新从服务器上下载。
- Pragma：禁止浏览器从本地磁盘缓存中调阅页面内容。
- Refresh：指定浏览器多长时间后自动刷新页面。
- Set-Cookie：设置Cookie，如果网页过期，那么客户端上的Cookie也将过期。
- content-Type：设置页面的内容类型和所用的字符集。

<img src="https://github.com/BeesFrontEnd/BeesFrontEnd/raw/master/art/html/HTML5.png"/>