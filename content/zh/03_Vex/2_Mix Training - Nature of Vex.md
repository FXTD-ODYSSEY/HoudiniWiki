---
title: Nature of Vex
author: 智伤帝
description: MIX Training - VEX 入门教程
date: 2021-02-24
pan: https://pan.baidu.com/s/1AHEAKFsnEI7TK8Eyba_5ag 
video: https://www.bilibili.com/video/BV1pJ411E76o
weight: 4
slug: 981987a0
version: Houdini 16+
producer: MIX Training
level: beginner
tags: 
  - ࠁHoudini
nodes:
  - SOP
pipeline:
  - modeling
---

## 总结

> &emsp;&emsp;Mixtrn 出品的教程都很棒，这个 Vex 作为入门非常好。
> &emsp;&emsp;每个课程最后都会布置作业，自己动手去实践。


## 观看笔记

### 01 - Environment setup

> &emsp;&emsp;第一集合 Bites of Python 完全一致 [链接](../b22d93e7#01---environment-setup)
> &emsp;&emsp;应该是 Python 课程引用了 VEX 课程的介绍。

### 02 - Variables, attributes and Conditional statements

> &emsp;&emsp;介绍了 VEX 的变量类型和使用。

```VEX
int red;
float green = 0.5;
i@blue = 1;

float myrand = rand(@ptnum);
vector mycolor = {.5,0,0};
mycolor.r = myrand;
v@myvector = set(-1,10,20);

@P.y = snoise(@P+@Time)*2;

@Cd = mycolor; 

if(@P.y < 0){
    @Cd = set(0,green,0);
}
else if(@P.y < 1){
    @Cd = set(1,0,0);
}
else {
    @Cd = set(0,0,1);
}
```

![02](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/981987a0/01.jpg)

### 03 - Creating Geometry parameters and mod multiplication

> &emsp;&emsp;wrangle 可以接入不同的控件 parameters 
> &emsp;&emsp;本节的效果推荐看 Youtube 免费教程 [Modular Multiplication](https://www.youtube.com/watch?v=Nms9ntdA2Wo) 
> &emsp;&emsp;数学相关的知识推荐 `KhanAcademy` 

### 04 - Random Walker

> &emsp;&emsp;本集实现的算法 [Random Walker](https://natureofcode.com/book/introduction/#i1-random-walks) 来自 https://natureofcode.com/ 这个网站，线上看书是免费的。
> &emsp;&emsp;这本书的代码是在 Processing 软件运行的 [官网](https://processing.org/)
> &emsp;&emsp;Processing 的作者也有 [Youtube 频道](https://www.youtube.com/c/TheCodingTrain/playlists)，有很多数学图形的只是。
> &emsp;&emsp;另外 kadenze.com 也有相关的视频课程 [链接](https://www.kadenze.com/courses/the-nature-of-code-ii/info)



## 案例分析

### 02 - Noise 变化山谷

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/981987a0/example_01.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;不同的 noise 进行组合。

{{<attachments pattern="example_01.hip" />}}

### 03 - 模乘计算

![04](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/981987a0/example_02.jpg)

> &emsp;&emsp;实现原理 参考 [Youtube百万播放视频](https://www.youtube.com/watch?v=qhbuKbxJsk8)
> &emsp;&emsp;利用求余数实现不同线段的连接

{{<attachments pattern="example_02.hip" />}}


### 04 - 随机路线

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/981987a0/example_03.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;通过随机数以及 if 判断随机出运动方向。
> &emsp;&emsp;通过 solver 将运动数据进行叠加。

{{<attachments pattern="example_03.hip" />}}
