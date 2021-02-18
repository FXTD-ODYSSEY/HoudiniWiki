---
title: The Secret Language of Houdini 
author: 智伤帝
description: 官方入门讲解
date: 2021-02-05
pan: https://pan.baidu.com/s/1dEyUW4VVaOdQ5V-yzN8LgQ
video: https://www.bilibili.com/video/BV1SK4y1h72h
weight: 1
slug: f7f755c5
version: houdini 16+
producer: Official
level: beginner
tags: 
  - foundation
nodes:
  - SOP
pipeline:
  - all
---

https://www.sidefx.com/learn/getting_started/

## 总结

> &emsp;&emsp;教程通过简单一个足球的案例。
> &emsp;&emsp;讲解了 Houdini 主要相关的功能模块的作用
> &emsp;&emsp;对于入门了解 Houdini 有帮助

## 观看笔记

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f7f755c5/01.png)


![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f7f755c5/02.png)


![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f7f755c5/03.png)

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f7f755c5/04.png)

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f7f755c5/05.png)

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f7f755c5/06.png)

## 案例分析

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f7f755c5/07.png)

> &emsp;&emsp;使用 platonic 节点创建一个基础足球。
> &emsp;&emsp;给每一个面添加 patches 属性。
> &emsp;&emsp;然后细分模型。
> &emsp;&emsp;将模型重新投射到 球 上。
> &emsp;&emsp;然后利用细分的属性 patches 可以找到之前的足球低模相关的面。

> &emsp;&emsp;通过 foreach 设置 pieces 属性可以设置遍历面。
> &emsp;&emsp;可以将之前低模相关的面逐个获取进行挤出。
> &emsp;&emsp;最后再添加细分即可。


## 案例下载

{{<attachments pattern=".*.hip">}}
