# JavaScript编程语言：JavaScript概述

作者：[郭孝星](https://github.com/guoxiaoxing)

校对：[郭孝星](https://github.com/guoxiaoxing)

文章状态：编辑中

**关于项目**

> [BeesFrontEnd](https://github.com/BeesFrontEnd/BeesFrontEnd)项目用来学习HTML、CSS与JavaScript等前端开发技术。

**文章目录**

JavaScript是一门专门与网页交互而设计的脚本语言，包含以下三个方面：

- ECMAScript：由ECMA-262定义，提供核心语言功能。
- DOM：提供访问与操作网页内容的方法与接口。
- BOM：提供与浏览器交互的接口与方法。


JavaScript脚本可以通过<script></script>标签src属性引入，也可以直接写在<script></script>标签内部。

1. 所有<script>元素都会按照它们的顺序进行解析。
2. defer属性可以让脚本在文档完全呈现之后再执行，延迟执行的脚本总是按照指定它们的顺序进行。
3. async属性表示当前脚本不必等待其他脚本，也不必阻塞文档呈现，不能保证异步脚本按照它们在页面出现的顺序执行。

