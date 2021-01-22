---
title: Entagma AHTYA 系列教程 Entagma Patreon- Adding Houdini to your Arsenal
author: 智伤帝
description: Entagma Houdini 入门系列教程
date: 2021-01-16
pan: "https://pan.baidu.com/s/1kW9HBZT 密码: 123"
video: https://www.bilibili.com/video/BV18z4y1S77y
weight: 2
slug: 32dbb101
version: houdini18
producer: Entagma
level: beginner
tags: 
  - Rohan Dalvi
nodes:
  - SOP
pipeline:
  - modeling

---

## 前言

{{< relink node="/zh/1_nodes/sop/37b24259" nodeName="attributeCreate" >}} 
12341
{{</ relink >}}

{{< relink node="/zh/1_nodes/sop/37b24259" nodeName="attributeCreate" >}} 
a213t42
{{</ relink >}}

```Python
import os

```

> &emsp;&emsp;最近罗列了 Houdini 全面学习的教程菜单 [链接](https://blog.l0v0.com/about/todo.html)
> &emsp;&emsp;目前还没有明确的学习计划，毕竟想搞的东西很多，总是会有些莫名其妙的东西占据了优先度（没错说的正是前两周突然就干起来的 字幕上传工具）
> &emsp;&emsp;好在没有计划，否则相比计划已经慢了大半截了。
> &emsp;&emsp;其实早在做 Minigame 的时候就意识到要把 Houdini 给学起来。（当时还想将程序化操作加到 Minigame 里面，结果速成还远远不够放弃了）
> &emsp;&emsp;然而那个时候还没有找到合适的学习姿势，当时还花了很多时间来研究 draw.io 
> &emsp;&emsp;打算将 Houdini 的节点网络全部截图加上注释说明，这样笔记就可以非常非常详细，虽然很浪费时间，但是和写博客一样应该是值得的。
> &emsp;&emsp;然而事实上我却是一味逃避，即便我又花了很多无谓的时间将 Houdini 教程整理好了。

> &emsp;&emsp;诚然打破舒适区学习新的东西比较困难，但是 Houdini 我并不是全新手了，为啥还是没有以前初学时候的动力十足_(:з」∠)_。
> &emsp;&emsp;直到最近我才大概想明白其中一点点不对劲的地方。
> &emsp;&emsp;学习 Houdini 这种复杂的软件和学习 Maya 或是 Python Qt 开发都是不一样的。
> &emsp;&emsp;无论是 Maya 做绑定、调用 Maya API 还是 PySide 做界面 其实都是有一定的套路，无非是查查文档，或者看几个教程熟悉套路就 OK 了。
> &emsp;&emsp;但是 Houdini 不一样，它是条条大路通罗马的。
> &emsp;&emsp;比起教程按部就班地学习教程的过程，我认为对教程的案例结果进行反推会更好~
> &emsp;&emsp;所以这一部教程，我第一次尝试用这种方法来学习 Houdini ，希望自己可以坚持下去。

[教程地址](https://www.bilibili.com/video/BV137411q7sA)

> &emsp;&emsp;AHTYA 其实是 adding Houdin to your aresenal 的缩写，并不是什么神秘代号。
> &emsp;&emsp;

## 创建集合体

![alt](//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/00.png)

> &emsp;&emsp;创建一个集合体面片，我之前看了 Pluarasight 的 Vex 基础教程，有提到。 [链接](https://www.bilibili.com/video/BV1Zp411d7Hw) 原来我发的链接挂了，这个是中文翻录的链接~
> &emsp;&emsp;通过 Vex 的 API 可以构建集合体。
> &emsp;&emsp;看教程的时候已经记得代码操作了，好歹之前有做过笔记，有点印象的。 [链接](./50174.html)

![alt](//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/00_01.png)

```Vex
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

> &emsp;&emsp;通过上面的代码可以创建一个三角形的几何体，注意 Wrangle 节点要选择 Detail 模式执行。

---

> &emsp;&emsp;教程的做法是用 add 节点。

![alt](//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/00_02.png)

> &emsp;&emsp;这种做法更加简单直接。

## 多面挤压

![alt](//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/01.png)

> &emsp;&emsp;第一眼我看到这个效果，我的想法是用 for 循环遍历每一个面进行 extrude 操作。
> &emsp;&emsp;随机操作可以用 随机数 加入 for 循环的遍历序号来实现。

![alt](//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/01_01.png)

> &emsp;&emsp;通过 foreach 循环的 meta 节点可以获取遍历的序号，作为随机数的种子。
> &emsp;&emsp;显然这个方法没有利用教程提到 Houdini 数据结构，是比较蠢的方法。

> &emsp;&emsp;创建属性属性随机可以用 Vex 更简单来实现。

```Vex
f@weight = rand(@primnum);
```

---

> &emsp;&emsp;教程里面是用 attribute create 节点在 primitive 上创建一个 weight 属性。
> &emsp;&emsp;再通过 attribute random 来实现随机数值随机。

## VOP SOP 变形


![alt](//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02.mp4)


> &emsp;&emsp;这个效果除了 Vop Sop 用 turbulance noise 还可以用 mountain 节点，但是显然没有那么灵活。

---

![alt](//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_01.png)

> &emsp;&emsp;教程里面贴心地介绍了 Turbulance Noise 关于 turbulance 参数的原理

turbulance 属性每次增加
就等于多叠加一层
frequency * 2
Amplitude / 2
的 noise 细节

> &emsp;&emsp;叠加完之后颜色有些差池，但是 pattern 是一致的。


---

> &emsp;&emsp;Vop 移动模型需要用到 dispalcement 节点

<video src="//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_02.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

![alt](//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_03.png)

> &emsp;&emsp;gain 节点可以在 将中间值 在 最大最小值直接进行过度 

<video src="//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_04.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

![alt](//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_05.png)

> &emsp;&emsp;bias 节点可以在 上下 最大最小值直接进行过度 （最大值最小值是两个平面）

---

<video src="//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_06.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

> &emsp;&emsp;Ramp Spline 类型可以自由编辑曲线实现起伏高度的完全自定义，实现上面视频调整山峰高度的效果。
> &emsp;&emsp;加入 abs 节点让高度 负数变为正数 ， 效果就是山谷变成小山丘。
> &emsp;&emsp;通过 twoway 节点控制数值输出。


<video src="//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/02_07.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

> &emsp;&emsp;这个效果加入 3D Noise 来扭曲 1D Noise
> &emsp;&emsp;最后也可以在最后输出 加上一个 Turbulance Noise 调大 turbulance 参数来增加 Noise 细节


### 衰变范围控制

> &emsp;&emsp;

<video src="//cdn.jsdelivr.net/gh/FXTD-odyssey/FXTD-odyssey.github.io@master/post_img/dd8eb095/04.mp4" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>

