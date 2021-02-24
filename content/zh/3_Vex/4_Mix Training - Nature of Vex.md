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
  - foundation
nodes:
  - SOP
pipeline:
  - modeling
---


## 总结

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



## 案例分析

### Noise 变化山谷

