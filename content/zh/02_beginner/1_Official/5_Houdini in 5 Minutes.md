---
title: Houdini in 5 Minutes
author: 智伤帝
description: Entagma 5 分钟入门教学
date: 2021-02-11
pan: https://pan.baidu.com/s/1XnAYnDH0UCcYfm9pJcD4dw
video: https://www.bilibili.com/video/BV1Yi4y1j7uV
weight: 5
slug: 3a4c10b0
version: Houdini 18
producer: Entagma
level: beginner
tags: 
  - ࠁHoudini
nodes:
  - SOP
pipeline:
  - modeling
---

https://www.sidefx.com/learn/collections/houdini-in-5-minutes/

## 总结

> &emsp;&emsp;Entagma 的教程质量都很高，会从案例的角度出发讲解节点的使用。
> &emsp;&emsp;然而这个教程对于初学来说难度有点高，所以我把它放到后面去了。
> &emsp;&emsp;另外教程后面推销了一下作者 Moritz 参与的插件 MOPS ， 的确很强。

## 观看笔记

### 2 - attributes

https://www.sidefx.com/docs/houdini/model/attributes.html

> &emsp;&emsp;教程推荐阅读文档学习 Houdini 的属性。

### 4 - render it 

![04](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/04.jpg)

> &emsp;&emsp;attribute randomize 有 two way 的方式控制属性随机。


![04](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/01.jpg)

> &emsp;&emsp;按 Ctrl + T 可以复制当前窗口

![10](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/02.jpg)

> &emsp;&emsp;performance monitor 可以可视化看到节点的消耗，用于优化流程。

![11](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/03.jpg)

> &emsp;&emsp;对比了使用 for 循环 color 节点以及 vex 生成随机颜色的性能情况。
> &emsp;&emsp;for 循环是单线程的，所以效率最低。 vex 是性能最好的， production 下建议多采用 vex 。

## 案例分析

### 小球渲染

![11](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/example_01.jpg)

> 1. 使用 isoOffset + scatter 在小球上散布点
> 2. 通过 attribute randomize 随机大小 和 颜色 (颜色选项选择 Two values 可以在两个值间随机) 
> 3. 然后构建渲染效果

> &emsp;&emsp;我这里使用 Houdini18 Karma 进行渲染构建。

{{<attachments pattern="example_01.hip" />}}


### 绘制散布 & 上下运动

![11](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/example_02.jpg)

> 1. 使用 attribute paint 节点绘制自定义图案
> 2. scatter 使用自定义属性进行撒点
> 3. 然后使用上面小球渲染的思路进行散布

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/example_03.mp4" autoplay loop muted width=100%></video>

> 1. 使用 Normal 添加朝上的法线
> 2. 使用 point vop 叠加一层 noise 来运动点

> &emsp;&emsp;教程一开始演示在模型上使用 Mountain 节点，然后再撒点，这样效率会很低，直接用 Vex 实现顶点运动会更高效。

{{<attachments pattern="example_02.hip" />}}

### 多重挤出

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/example_04.mp4" autoplay loop muted width=100%></video>

> 1. 添加随机 0 或 1 的 active 面属性
> 2. 添加随机 zscale 面属性
> 3. extrude 选择 @active==1 进行挤出，并且 zscale 属性要开启
> 4. 添加 foreach feedback 节点来继承之前的循环结果
> 5. 使用 meta 节点给 randomize 节点的 seed 关联 

{{<attachments pattern="example_04.hip" />}}

### 秸枝增生

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/example_05.mp4" autoplay loop muted width=100%></video>

![11](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/example_05_01.jpg)

> 1. solver 节点不断对上一帧的结果进行撒点生成小球，随机状态下会逐渐在特定区域不断叠加小球  
> 2. 然后将生成的小球转成 VDB 平滑再从 VDB 转为模型。

{{<attachments pattern="example_05.hip" />}}

### 复杂旋转

<video  src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/example_06.mp4" autoplay loop muted width=100%></video>

> 1. 遍历模型所有的面，利用 transfrom node 进行旋转。
> 2. 添加一个 Null 节点作为控制器，添加滑竿俩控制旋转。


```VEX
detail("../foreach_begin1_metadata1/","iteration",0) * ch("../controller/weight")
```

{{<attachments pattern="example_06.hip" />}}

### 粒子发射

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/example_07.mp4" autoplay loop muted width=100%></video>

### vellum 沙粒

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/example_08.mp4" autoplay loop muted width=100%></video>

### MOPs 图像变换

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/example_09.mp4" autoplay loop muted width=100%></video>

### 等高线山峰

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/3a4c10b0/example_10.mp4" autoplay loop muted width=100%></video>










