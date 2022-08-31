---
title: Introdution to Attributes, Varaibles and Expressions
author: 智伤帝
description: Houdini 10 官方 HScript 用法详解
date: 2021-02-20
pan: https://pan.baidu.com/s/1dDggPWAnINYC1fdKXuv3aA
video: https://www.bilibili.com/video/BV1XN411X7CZ
weight: 1
slug: 5aa677ce
version: houdini 10
producer: SideFX
level: beginner
tags: 
  - ࠁHoudini/HScript
nodes:
  - SOP
pipeline:
  - modeling
---

## 总结

https://www.sidefx.com/docs/houdini/expressions
https://www.sidefx.com/docs/houdini/commands
https://www.sidefx.com/docs/houdini/ref/windows/textport

> &emsp;&emsp;非常古老的教程，但是总结了很多 HScript 的用法，现在也适用。
> &emsp;&emsp;教程是速看的，所以没有深入实现其中的案例。

> &emsp;&emsp;根据目前的官方文档的说法，以前还没有接入 Python 的时候使用 HScript 来做一些自动化脚本。
> &emsp;&emsp;现在推荐用 Python 来完成这些工作，通道上也支持 Python 脚本作为代码逻辑。


## 观看笔记

> &emsp;&emsp;`bezier()` 关键帧也是用 HScript 连接的

![01](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/5aa677ce/01.jpg)

> &emsp;&emsp;HScript 里面可以使用科学计数法。


![03](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/5aa677ce/02.jpg)

> &emsp;&emsp;`$F` 获取当前整数帧数
> &emsp;&emsp;`$F30` 可以自动补齐 30 个零位在前面

![03](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/5aa677ce/03.jpg)

> &emsp;&emsp;`$FF` 获取当前浮点数帧数

![04](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/5aa677ce/04.jpg)

> &emsp;&emsp;[trunc](https://www.sidefx.com/docs/houdini/expressions/trunc) 函数可以去除小数点。
> &emsp;&emsp;[padzero](https://www.sidefx.com/docs/houdini/expressions/padzero) 可以自动补零。

![13](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/5aa677ce/05.jpg)

> &emsp;&emsp;`opinputpath` 可以获取当前节点接入端的节点

![14](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/5aa677ce/06.jpg)

> &emsp;&emsp;Textport 可以查看函数帮助

![14](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/5aa677ce/07.jpg)

> &emsp;&emsp;Textport 也可以像操作系统一样执行 echo 命令。












