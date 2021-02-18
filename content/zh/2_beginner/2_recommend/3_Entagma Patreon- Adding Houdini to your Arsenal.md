---
title: Entagma Patreon- Adding Houdini to your Arsenal 
author: 智伤帝
description: Entagma AHTYA 入门系列教程 
date: 2021-02-13
pan: https://pan.baidu.com/s/1ijIw4fILLcAnq9PIeObs-Q
video: https://www.bilibili.com/video/BV137411q7sA
weight: 3
slug: ddc0b6e3
version: houdini 16+
producer: Entagma
level: beginner
tags: 
  - foundation
nodes:
  - SOP
  - SHOP
pipeline:
  - modeling

---

## 总结

## 观看笔记

### 01 - 界面基础

{{< relink url="1_learning/basic" >}} 

+ 按 空格 键切换到摄像机控制
+ 在节点窗口下按住 A 键拖拽可以对齐节点
+ 在属性编辑面板按鼠标中间可以按不同数量及调整参数

{{</ relink >}}


## 02 - 数据结构

### Houdini & Maya 数据结构差别

> &emsp;&emsp;Houdini 有 `Points` `Primitives` `Vertices` 数据结构组成
> &emsp;&emsp;对应Maya的 `Vertex` `Face`  `FaceVertex` 的数据结构

### 构建几何体


{{< relink url="20_nodes/sop/dd4f50e5|1_learning/vex|3_vex/dbcc6763" pattern="geometry.hip" >}} 

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/01.png)

使用 add 构建几何体
生成面片需要勾选 `closed` 选项

```VEX
// 创建一个面片
vector pos1 = set(0,0,0);
vector pos2 = set(1,0,0);
vector pos3 = set(1,1,0);


int p1 = addpoint(0, pos1);
int p2 = addpoint(0, pos2);
int p3 = addpoint(0, pos3);


int prim1 = addprim(0, "poly");

// 注意添加顺序
addvertex(0, prim1, p1);
addvertex(0, prim1, p3);
addvertex(0, prim1, p2);
```

也可以使用 Vex 创建一个三角形的几何体，注意 Wrangle 节点要选择 Detail 模式执行。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/02.png)

索引自 [Pluralsight - Houdini VEX Fundamentals](/zh/dbcc6763)

{{</ relink >}}


### 3 - VOP SOP 变形

<video src="https://cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

> &emsp;&emsp;这个效果除了 Vop Sop 用 turbulance noise 还可以用 mountain 节点，但是显然没有那么灵活。

---

![alt](https://cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_01.png)

> &emsp;&emsp;教程里面贴心地介绍了 Turbulance Noise 关于 turbulance 参数的原理

turbulance 属性每次增加
就等于多叠加一层
frequency * 2
Amplitude / 2
的 noise 细节

> &emsp;&emsp;叠加完之后颜色有些差池，但是 pattern 是一致的。


---

> &emsp;&emsp;Vop 移动模型需要用到 dispalcement 节点

<video src="https://cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_02.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

![alt](https://cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_03.png)

> &emsp;&emsp;gain 节点可以在 将中间值 在 最大最小值直接进行过度 

<video src="//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_04.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

![alt](https://cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_05.png)

> &emsp;&emsp;bias 节点可以在 上下 最大最小值直接进行过度 （最大值最小值是两个平面）

---

<video src="https://cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_06.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

> &emsp;&emsp;Ramp Spline 类型可以自由编辑曲线实现起伏高度的完全自定义，实现上面视频调整山峰高度的效果。
> &emsp;&emsp;加入 abs 节点让高度 负数变为正数 ， 效果就是山谷变成小山丘。
> &emsp;&emsp;通过 twoway 节点控制数值输出。

<video src="https://cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_07.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

> &emsp;&emsp;这个效果加入 3D Noise 来扭曲 1D Noise
> &emsp;&emsp;最后也可以在最后输出  加上一个 Turbulance Noise 调大 turbulance 参数来增加 Noise 细节


### 04 & 05 衰变mask 制作

hypotenuse 斜边
opposite 对边
adjacent 邻边
 
![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/05.png)

> &emsp;&emsp;利用三角函数的特性，点乘时 θ 值小于 90 为正数 | 等于 90 为 0 | 大于 90 为 负数

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/06.png)

> &emsp;&emsp;attribute from volume 需要通过 scalar ramp 的值设置为 -0.2 和 0 才能看到 falloff。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/07.png)

> &emsp;&emsp;这里的 transform 放在 iso 下面就不用每次移动 box 重新计算 iso 体积了。

### 06 & 07 程序化建模

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/08.png)

> &emsp;&emsp;iso 的烟雾看不见可以按 W 打开 wireframe 查看。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/09.png)

> &emsp;&emsp;iso 节点使用 sdf volume 如果开启 laser scan 可以加速生成，但是结果会不准。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/10.png)

> &emsp;&emsp;volume slice 节点可以看到模型的横切面。

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/11.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

> &emsp;&emsp;使用 convert volume 节点可以转换出类似 VDB 模型的效果，同时调整 isovalue 可以非常方便调整模型的大小。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/12.png)

> &emsp;&emsp;通过视窗的菜单选择 3D connected Geometry，可以逐个逐个连续模型地选择。

## 案例分析

### 多面挤压

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/example_01.png)

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/example_01_01.png)

> &emsp;&emsp;通过 foreach 循环的 meta 节点可以获取遍历的序号，作为随机数的种子。(foreach 效率低)
> &emsp;&emsp;显然这个方法没有利用教程提到 Houdini 数据结构，是比较蠢的方法。

> &emsp;&emsp;创建属性属性随机可以用 Vex 更简单来实现。

```VEX
f@weight = rand(@primnum);

```

### Noise 地形

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/example_02.jpg)

> &emsp;&emsp;使用 Noise 制作地形。

{{<attachments pattern="example_02.hip" />}}

### 衰变

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/example_03.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/example_04.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/example_05.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

> &emsp;&emsp;圆球衰变比较简单，主要通过 `distance` 根据顶点的距离生成衰变。
> &emsp;&emsp;线性衰变通过线段向量和顶点线段 dot 点乘计算衰变， 根据 cos 90 为零 大于 90 为负，小于90为正的特性形成衰变。
> &emsp;&emsp;自定义形状衰变则是通过 模型转iso ， 体积转属性实现。

{{<attachments pattern="example_05.hip" />}}

### 程序化建模


![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/example_06.jpg)

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/example_07.jpg)


### Solver VDB 木炭增生效果

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/example_08.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>















