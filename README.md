# <img src="https://github.com/guoxiaoxing/BeesFrontEnd/raw/master/art/logo.png" alt="BeesFrontEnd" width="80" height="80" align="bottom"/> BeesFrontEnd

[![License](https://img.shields.io/github/issues/BeesFrontEnd/BeesFrontEnd.svg)](https://jitpack.io/#BeesFrontEnd/BeesFrontEnd)
[![Stars](https://img.shields.io/github/stars/BeesFrontEnd/BeesFrontEnd.svg)](https://jitpack.io/#BeesFrontEnd/BeesFrontEnd)
[![Stars](https://img.shields.io/github/forks/BeesFrontEnd/BeesFrontEnd.svg)](https://jitpack.io/#BeesFrontEnd/BeesFrontEnd)
[![Forks](https://img.shields.io/github/issues/BeesFrontEnd/BeesFrontEnd.svg)](https://jitpack.io/#BeesFrontEnd/BeesFrontEnd)


随着ReactNative、Weex与Flutter等跨端框架的发展，大前端的概念也逐渐普及开来，纯粹的Native开发相对变得比较少，前端也成为了客户端同学必须要掌握的一门技术，但是客户端同学做的是跨端开发，在学习路线上和前端同学又稍有不同，下面从客户端同学的视角去讨论如何学习前端知识。

这里为大家整理了一份跨端技术图谱，这份图谱并没有去穷尽所有的前端技术，只是从客户端开发的视角去梳理常用的技术点，帮助大家理清脉络。

更多关于跨端技术的讨论可以参见[BeesFrontEnd](https://github.com/guoxiaoxing/BeesFrontEnd)项目。

![](https://user-gold-cdn.xitu.io/2018/11/7/166eddbfe1c1df55?w=914&h=1547&f=png&s=162453)


## 开发工具

IDE推荐[VSCode](https://code.visualstudio.com/)，轻量级、插件丰富，常用插件如下所示：

- Terminal：命令行工具。
- Git History：查看单行提交记录和文件提交记录。
- Git Project Manager：Git项目管理工具。
- Git Len：解决日常开发协作痛点，推荐安装。
- vscode-icons：让你的文件都带上好看的图标。
- Path Intellisense：文件路径自动补全。
- Auto Close Tag：自动闭合HTML标签。
- Baracket Pair Colorizer：成对括号分颜色显示，方便区分。
- Settings Sync：同步你的配置和扩展，参见同步教程。
- VS Color Picker：取色器。
- ES7 React/Redux/GraphQL/React-Native snippets：React代码提示。
- Vue 2 Snippets：Vue2代码提示。

更多关于VSCode的使用技巧可以参见[强大的VSCode](https://juejin.im/post/5b123ace6fb9a01e6f560a4b)。

## 前端基础

对于客户端同学来说，要想上手React、Vue这些框架，需要先掌握HTML、CSS与JavaScript等基础知识，这部分的内容建议通过书籍来学习
，一点一滴打捞基础，要有耐心。

### HTML

书籍：《HTML5权威指南》

### CSS

书籍：《CSS权威指南》、《精通CSS》

### JavaScript

书籍：《JavaScript高级程序设计》、《你不知道的Javascript》

除了基础的JavaScript知识，你还需要掌握ES6相关概念，这块可以参考[ECMAScript 6 入门](http://es6.ruanyifeng.com/)。

### NPM

我们还需要了解NPM相关知识，NPM就像Android里的Maven仓库一样，它是一个JavaScript仓库。

> Node.js的包管理工具。

- [官方文档](https://www.npmjs.com.cn/getting-started/what-is-npm/)
- [NPM新手教程](http://www.runoob.com/nodejs/nodejs-npm.html)

## 前端框架

### Vue

> Vue.js（读音 /vjuː/，类似于 view 的读音）是一套构建用户界面(user interface)的渐进式框架。

- [官方文档](https://cn.vuejs.org/index.html)
- [awesome-vue](https://github.com/vuejs/awesome-vue)
- [Vue.js 2.0 快速上手精华梳理](https://juejin.im/post/59aa1248518825392656a86a)
- [Vue学习看这篇就够](https://juejin.im/entry/5a54b747518825734216c3df)
- [[译] 从1万篇文章中挑出的40篇最棒的 Vue 学习指南（2018版）](https://hijiangtao.github.io/2018/02/06/learn-vue-js-from-top-articles-for-the-past-year-v-2018/)

### React

> 用于构建用户界面的 JavaScript 库。

- [官方文档](https://react.docschina.org/)
- [React.js 小书](http://huziketang.mangojuice.top/books/react/)
- [React入门教程](https://hulufei.gitbooks.io/react-tutorial/content/introduction.html)
- [揭秘react生态体系](https://zhuanlan.zhihu.com/p/26270621)
- [[译] 从1.8万篇文章中脱颖而出45个最棒的 React.js 学习指南（2018版）](https://hijiangtao.github.io/2018/01/23/learn-react-js-from-top-45-tutorials-for-the-past-year-v-2018/)
- [[译] State of Vue.js report 2017 中文版](https://juejin.im/post/5a138fae5188254d28732899#heading-7)

## 跨端框架

从PC时代开始，Native与Web就一直是相互竞争、相互融合的关系，我们先来简单看看它们之间的优势与劣势。

|            |       Native      |       Web         |
|:-----------|:------------|:---------------:
|性能| 高 | 低 |
|用户体验| 好 | 差 |
|功能| 可以充分利用平台自身的能力  | 只有使用W3C的标准能力 |
|迭代| 周期长，需要发布  | 周期短，随时发布  |
|维护成本| 高  | 低 |
|跨平台| 差 | 好  |
|线程| 多线程 | 单线程  |

可以看出，Native与Web之间各有优劣，在移动互联网发展的过程中，开发者们也一直在寻找融合双方优势的方案，经历了以下四个阶段的发展：

- Hybrid 1.0：为Web页面提供Naive API的能力，也就是用JS Bridge去增强系统的WebView的功能。缺点是：体验差，如滚动、动画与交互等，稳定性差，如列表内存占用大等。
- Hybrid 2.0：将Native组件覆盖在WebView之上，例如微信的cover-view，提供更多的扩展能力。缺点是：用户体验融合性不好，如层级、事件、布局等。
- Hybrid 3.0：前端DSL开发，Native渲染，例如React Native与Weex。缺点：对W3C标准能力支持有限，存在平台差异，三端并不完全统一。
- Hybrid 4.0：百花齐放的小程序、快应用、轻应用方案，这个容器也有两种：WebView容器与类ReatNative容器。技术方案上并没有太多的花样，这种方案的兴起由微信带起，本质上
还是源于各大公司对于流量入口和生态的竞争。后续我们会着重聊一下。

注：值得一提的是，同层渲染现在已经逐渐在Android和iOS平台的WebView上实现，未来Hybrid会有更多的玩法。

### ReactNative

> 使用JavaScript和React编写原生移动应用.

- [官方文档](https://facebook.github.io/react-native/docs/getting-started)
- [React-Native学习指南](https://github.com/reactnativecn/react-native-guide)
- [给所有开发者的React Native详细入门指南（第一阶段）](https://juejin.im/post/5898388b128fe1006cb943e3)

### Weex

> Weex是一个基于现代web开发经验构建高性能移动应用程序的框架。

- [官方文档](http://weex.apache.org/guide/)
- [awesome-weex](https://github.com/joggerplus/awesome-weex)
- [WEEX从入门到放肆-图文视频教程（完整版）](https://juejin.im/entry/599d2a06518825243d1efbad)
- [awesome-weex：Weex 学习与开发资料](https://juejin.im/entry/580eab192f301e005c4b61f3)

### Flutter

> Flutter允许您通过一个代码库在iOS和Android上构建漂亮的本地应用程序。

- [官方文档](https://flutter.io/docs)
- [Flutter 开发资源汇总](https://github.com/yuhanle/awesome-flutter-app)
- [[译] Awesome Flutter：带你从入门到进阶的 Flutter 指南](https://juejin.im/post/5b2869e66fb9a00e5f3e861f)

## 小程序

小程序也属于跨端框架的范畴，但它与Weex这些框架不同，比起像ReactNative这种技术创新，它更像是一种商业创新，它源于各大巨头对于流量与入口的竞争。详情可参见[2018年上半年小程序生态白皮书](http://www.aldzs.com/assets/20180629_presentation/white_paper.pdf)。

我们先就他们的技术方案做个简单的对比，如下所示：

- [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18110616)：基于WebView渲染，自建的DSL，与Vue 1.0有点像，不是很好用，后续又出了WePY、mpVue、Taro等DSL。
- [支付宝小程序](https://mini.open.alipay.com/channel/miniIndex.htm)：基于WebView与ReactNative两套容器渲染，自建了一套类React的DSL。
- [快应用](https://www.quickapp.cn/)：基于Native进行渲染，自己定义了一套类Vue的DSL。
- [淘宝轻应用](https://developers.taobao.com/?spm=a21224.framework.0.0.6f4a2f68DEEOFd)：基于WebView与Weex两套容器渲染，自建了一套类Vue的DSL。

事实上，小程序承载的更多是业务形态，我们从业务开发角度对小程序的前端架构做个总结。

![](https://user-gold-cdn.xitu.io/2018/11/7/166eddd38b6ff4b2?w=3499&h=3680&f=png&s=456623)

### 微信小程序

> 小程序是一种新的开放能力，开发者可以快速地开发一个小程序。小程序可以在微信内被便捷地获取和传播，同时具有出色的使用体验。

- [官方文档](https://developers.weixin.qq.com/miniprogram/dev/index.html)
- [微信小程序公开课](https://daxue.qq.com/wechat/wechat_list/cat_id/204)
- [微信小程序开发资源汇总](https://github.com/justjavac/awesome-wechat-weapp)

### 支付宝小程序

> 支付宝小程序是一种全新的开放模式，它运行在支付宝客户端，可以被便捷地获取和传播，为终端用户提供更优的用户体验.

- [官方文档](https://docs.alipay.com/mini/developer/getting-started)
- [支付宝小程序社区](https://openclub.alipay.com/index.php?c=thread&a=subforum&fid=66)

### 快应用

> 快应用是基于手机硬件平台的新型应用形态；标准是由主流手机厂商组成的快应用联盟联合制定；快应用标准的诞生将在研发接口、能力接入、开发者服务等层面建设标准平台；以平台化的生态模式对个人开发者和企业开发者全品类开放。

- [官方文档](https://doc.quickapp.cn/)
- [快应用官方开源项目](https://github.com/quickappcn)
- [快应用开发圈资源汇总](https://github.com/quickappdev/awesome-quickapp)
- [小米直达服务介绍与开发实战](http://www.infoq.com/cn/articles/xiaomi-zhidafuwu)

### 淘宝小程序

- [官方文档](https://developers.taobao.com/startup/light-shop/?spm=a21224.home.0.0.164d168bENeP49)

## 模块化

- commonjs
- AMD(CMD)
- UMD
- ES Module

## 任务管理器
- npm scripts
- grunt
- gulp

## 模块打包工具

- r.js
- webpack
- rollup
- browserify

## CSS预处理器

- Sass
- Less
- Stylus
- Postcss

## 静态检查器

- flow
- typescript

## 测试工具

- mocha
- jasmine
- jest
- ava

## 代码检测工具

- eslint
- jslint

## 附录

### 资源

- [前端资源库](https://github.com/dypsilon/frontend-dev-bookmarks)
- [前端技能树](https://github.com/JacksonTian/fks)
- [前端开发技能树魔兽天赋游戏版](http://skill.phodal.com/)
- [JavaScript算法与数据结构](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md)
- [怎样成长为一个优秀的 Web 前端开发工程师？](https://www.zhihu.com/question/19554845/answer/23605169?utm_source=weibo&utm_medium=weibo_share&utm_content=share_answer&utm_campaign=share_button)

### 技术栈

前端技术从底层到顶层一共可以分为20个，如下所示：

- 浏览器
- 渲染引擎、JavaScript引擎
- HTML/JavaScript/CSS三支柱
- 编辑器
- 编译任务
- 编译工具
- 打包、调试、质量
- 测试
- JS基础类库
- JS类库
- UI框架
- CSS预处理器
- 模板
- 现代化
- 安全/模式
- 中间语言
- 跨平台解决方案

[图片来源](http://www.cnblogs.com/unruledboy/p/WebFrontEndStack.html)


![](https://user-gold-cdn.xitu.io/2018/11/7/166edd77447992e6?w=2000&h=3800&f=png&s=738476)

