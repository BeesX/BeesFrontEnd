# <img src="https://github.com/guoxiaoxing/BeesFrontEnd/raw/master/art/logo.png" alt="BeesFrontEnd" width="80" height="80" align="bottom"/> BeesHybrid

[![License](https://img.shields.io/github/issues/BeesX/BeesHybrid.svg)](https://jitpack.io/#BeesX/BeesHybrid)
[![Stars](https://img.shields.io/github/stars/BeesX/BeesHybrid.svg)](https://jitpack.io/#BeesX/BeesHybrid)
[![Stars](https://img.shields.io/github/forks/BeesX/BeesHybrid.svg)](https://jitpack.io/#BeesX/BeesHybrid)
[![Forks](https://img.shields.io/github/issues/BeesX/BeesHybrid.svg)](https://jitpack.io/#BeesX/BeesHybrid)

BeesHybrid项目致力于跨端技术的研究与实践，我们将自上而下的去分析相关的技术原理与最佳实践，前端的技术自上而下大致可以分为以下18层，如下所示：

- 浏览器、Android与iOS
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

而现在的跨端融合，通常指的是PC、Android与iOS三端的融合，希望可以达到一次编写，三端运行的效果。为了达到这个目的，我们需要进行大量的前置工作，对上我们需要设计良好的DSL与CLI来支撑业务开发，对下我们需要寻找良好的跨端方案，解决多端兼容性和适配问题。

对上述18层技术栈做个抽象，可以大致分为

- 前端业务框架：提供业务开发相关DSL，例如Vue、React等。
- 前端工程框架：提供编译、打包、模板、预处理等工具，例如Webpack、Sass等。
- 跨平台解决方案：提供跨端解决方案，例如ReactNative、Weex与小程序等。

后续的文章会围绕着三大主题的原理分析与最佳实践来展开。第一次阅读本系列文章的同学，建议先阅读：

- [跨端技术入门指南](https://github.com/BeesX/BeesHybrid/blob/master/doc/跨端技术入门指南.md)


