---
title: Junichiro Horikawa - Houdini Tutorials
author: 智伤帝
description: 细川俊一郎 Houdini 教程
date: 2021-03-06
pan: https://pan.baidu.com/s/1gWkvdjCFSlFikbIho4TlbQ
video: https://www.bilibili.com/video/BV1Dv411Y7oz/
weight: 2
slug: 1591ee1e
version: houdini 16.0+
producer: Junichiro Horikawa
level: intermediate
tags: 
  - 🔢数学
nodes:
  - SOP
pipeline:
  - modeling
---

https://github.com/jhorikawa/HoudiniHowtos

## 总结


## 案例

### 01 - Spiral Trail - 2021-03-06

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/1591ee1e/example_01.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;利用 scatter 生成随机的顶点。
> &emsp;&emsp;solver 加入 wrangle 通过 sin 和 cos 函数对顶点进行圆周运动和向上运动
> &emsp;&emsp;最后添加 trial 节点生成飘带线段。
> &emsp;&emsp;最后将相关的属性暴露进行控制。

{{<attachments pattern="example_01.hip" />}}



