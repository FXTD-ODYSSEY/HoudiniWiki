# 简介
在Houdini中，有两种**函数（function）**，分别是**表达式函数（Expression functions）**和**VEX函数（VEX functions）**。
参考网站：
- [Expression functions (sidefx.com)](https://www.sidefx.com/docs/houdini/expressions/index.html)
- [VEX Functions (sidefx.com)](https://www.sidefx.com/docs/houdini/vex/functions/index.html)

二者的区别简单来说就是，表达式函数是用于填写在参数中的，而VEX函数则是直接用在各类Wrangle节点的VEXpression中的。
值得注意的是，两者之中的一些函数是仅一边有的，也有一些是两边完全一致的，还有一些是两边名称相同，但参数不同，使用方法不同的。
因此，在使用的时候需要加以注意。