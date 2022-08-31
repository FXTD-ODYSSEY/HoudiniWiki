---
title: Getting Started with Houdini
author: 智伤帝
description: Arise.Works Youtube 入门系列教程 
date: 2021-03-04
pan: https://pan.baidu.com/s/1skG9C5wp43eoOOmQtaw_3g
video: https://www.bilibili.com/video/BV1bf4y147EM/
weight: 4
slug: a11e1e7a
version: houdini 18.0
producer: Arise.Works
level: beginner
tags: 
  - ࠁHoudini
nodes:
  - SOP
pipeline:
  - modeling
---

https://www.youtube.com/watch?v=axD1ejlaEBA&list=PLFkMNnEYa3AP1ljfLNA4d7lqIgwKbUwHM


## 总结

> &emsp;&emsp;Youtube 上不错的入门免费教程。
> &emsp;&emsp;前面以 SOP 做程序化进行介绍，
> &emsp;&emsp;后续课程有 Houdini Engine 结合 Unreal 的介绍。

## 观看笔记

![01](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/a11e1e7a/01.jpg)

> &emsp;&emsp;可以配置 Compact UI 让界面更加紧凑 


![02](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/a11e1e7a/02.jpg)

> &emsp;&emsp;shift + Enter 可以直接将节点连接到当前选择的节点。 


![04](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/a11e1e7a/03.jpg)

> &emsp;&emsp;`polyframe` 节点可以获取到 Tangent 数据，将 Tangent 输出属性名改为 N 接口将 Tangent 数据写入到法线数据中。
> &emsp;&emsp;`orientalongcurve` Houdini 18 的新节点也可以实现同样的效果。 [链接](/169ffaba#1---猪头锁链)


![07](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/a11e1e7a/04.jpg)

> &emsp;&emsp;HDA 设置 Editable Node 

![07](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/a11e1e7a/05.jpg)

> &emsp;&emsp;Unreal 里面可以生成可控制的曲线


![07](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/a11e1e7a/06.jpg)

> &emsp;&emsp;Curvature 可以过滤出 Bevel 的区域。


## 案例分析

![01](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/a11e1e7a/example_01.jpg)

> &emsp;&emsp;lowpoly 制作
> &emsp;&emsp;借助 Mountain 节点来变形
> &emsp;&emsp;云通过 cloud 节点来做

![04](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/a11e1e7a/example_02.jpg)

![05](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/a11e1e7a/example_03.jpg)

![06](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/a11e1e7a/example_04.jpg)

> &emsp;&emsp;核心思想是利用 shortest path 生成曲线。

![07](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/a11e1e7a/example_05.jpg)

> &emsp;&emsp;Houdini Engine 在 Unreal 里面实现程序化控制。




