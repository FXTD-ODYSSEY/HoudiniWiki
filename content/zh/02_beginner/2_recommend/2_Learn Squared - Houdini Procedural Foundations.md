---
title: Houdini Procedural Foundations
author: 智伤帝
description: Learn Squared 程序入门教程
date: 2021-02-24
pan: https://pan.baidu.com/s/1NLIyjIe8e_GKmn7QJZAQzA
video: https://www.bilibili.com/video/BV1nW411H7rw?p=2
weight: 2
slug: 246621d8
version: Houdini 15.5
producer: Learn Squared
level: beginner
tags: 
  - foundation
nodes:
  - SOP
pipeline:
  - modeling
---

https://www.learnsquared.com/courses/houdini-foundations

## 总结

## 观看笔记
### 1 - Core Concepts 

> &emsp;&emsp;第一节的系列视频介绍 Houdini 的界面和基础操作。

### 2 - Multi-Scatter Tool

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/246621d8/01.jpg)

> &emsp;&emsp;HDA 可以配置输入端的说明

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/246621d8/02.jpg)

> &emsp;&emsp;attribute interpolate 可以将 prim 类型的数据差值传递到点上。
> &emsp;&emsp;这里也是节点说明的推荐运用方式， 确保在原始模型上撒点，同时获取的撒点之后的动态效果。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/246621d8/03.jpg)

> &emsp;&emsp;这里通过获取模型的变化来驱动点云变化。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/246621d8/04.jpg)

> &emsp;&emsp;可以根据其他的属性设置来配置这个组件显示与否。

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/246621d8/05.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

> &emsp;&emsp;alt + 鼠标中键 可以添加到 UI 上，不一定需要拖拽。




## 案例分析




### 程序化小车

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/246621d8/example_01.jpg)

 
