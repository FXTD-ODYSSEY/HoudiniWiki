---
title: 从Maya学Houdini零起点入门极速教学
author: 智伤帝
description: aboutcg 的免费课程
date: 2021-02-05
pan: 
video: https://www.bilibili.com/video/BV12W411t7Ra
weight: 1
slug: 7479ed24
version: Houdini 14
producer: Official
level: beginner
tags: 
  - maya
pipeline:
  - all
nodes:
  - SOP
---

https://www.aboutcg.org/courseDetails/221/introduce

## 总结

> &emsp;&emsp;这个教程对比了 Maya 和 Houdini 的不同差别。
> &emsp;&emsp;特别是粒子系统相关和动画相关的讲解，讲得比较清楚。

## 观看笔记

### follow path

第 7 P 的视频里面提到 follow path 工具架工具移动了 Constraint 下

https://www.sidefx.com/docs/houdini/shelf/constraintpath.html

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/7479ed24/01.png)

路径跟随也和视频里的方式不一样了， Houdini 18 新版本会添加 Constraint 节点网络(CHOP)。

### DOP 缓存限制

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/7479ed24/02.jpg)

DOP network 有最大缓存限制，如果 内存 超标了，自动缓存会将旧的缓存清理。


