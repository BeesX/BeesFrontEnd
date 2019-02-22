
## 属性

![](https://github.com/BeesX/BeesFrontEnd/raw/master/art/css/css-all.png)

## 盒模型

盒模型是CSS里元素大小呈现的一种方式，如下所示：

![](https://github.com/BeesX/BeesFrontEnd/raw/master/art/css/box-model.svg)

## 定位方式

display属性

- block：块级元素，可以设置宽度，默认宽度由父容器决定，默认高度由内容决定，独占一行。
- inline：内联元素，宽度与高度由内容决定，与其他元素病例
- inline-block：宽度可以设置，类似block，但是与其他元素共占一行，类似inline，常用于设置垂直居中。
- table-cell：当元素以表格的形式呈现，可以让元素垂直居中。

position属性

- static：默认值，未被定位。
- relative：相对定位，修改top、left、bottom、right会调整元素的位置，但是其他元素不会调整位置类弥补它偏离后剩下的空隙。
- absolute：绝对定位，修改top、left、bottom、right会调整元素的位置，但是其他元素会调整位置类弥补它偏离后剩下的空隙。
- fixed：固定定位，元素参考的是可视窗口，即页面滚动后，元素仍然会停留在固定位置。
