---
title: GAMES QUICKSTART
author: 智伤帝
description: 游戏相关快速入门
date: 2021-02-11
pan: https://pan.baidu.com/s/1smKRoJvl0KFxqFqePCZL7w
video: https://www.bilibili.com/video/BV1Jp4y1Y7PE
weight: 2
slug: 169ffaba
version: Houdini 18
producer: SideFX
level: beginner
tags: 
  - foundation
nodes:
  - SOP
pipeline:
  - modeling
  - games
---

https://www.sidefx.com/tutorials/games-quickstart/

## 总结

> &emsp;&emsp;这个教程比较短，简单讲解了 SOP 模块在游戏模型的处理运用。

## 观看笔记

![03](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/169ffaba/01.jpg)

> &emsp;&emsp;可以修改 C 键的快捷菜单，切换到直接切换到相应的模块。

<video alt="03" src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/169ffaba/02.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;可以设置 Bend 的范围，然后进行弯曲。


![06](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/169ffaba/03.jpg)

> &emsp;&emsp;使用 Gamers 节点可以自动生成 lod | 自动展 UV | 自动 Bake



## 案例分析

### 1 - 猪头锁链

<video alt="08" src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/169ffaba/example_01.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;通过 `draw curve` 节点绘制曲线，通过 resample 重采样曲线。
> &emsp;&emsp;通过曲线的点复制出锁环，通过 `orientation along curve` 节点将锁环。

### 2 - 街区挤出

![06](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/169ffaba/example_02.jpg)

> &emsp;&emsp;教程通过导入图片生成切分成多块的面片，这里我参考了一个教程的用法，来模拟实现类似效果。 [B站](https://www.bilibili.com/video/BV1nW411H7rw?p=43)
> &emsp;&emsp;然后添加一个属性并让这个属性随机，挤出的时候让 distance scale 属性使用新添加的属性即可随机挤出高度。

### 3 - 挤出动画

<video alt="10" src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/169ffaba/example_03.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;`attribute noise` 自带动画属性，勾选上即可看到运动的属性效果。

### 4 - 倒角残垣

<video alt="10" src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/169ffaba/example_04.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;这里将 pscale 属性设置成随机值，倒角的时候使用 pscale 进行偏移。

## 案例下载

{{<attachments pattern=".*.hip">}}



