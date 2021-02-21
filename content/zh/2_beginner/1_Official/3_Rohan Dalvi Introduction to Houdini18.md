---
title: Rohan Dalvi - Introduction to Houdini18
author: 智伤帝
description: Houdini18 入门教程
date: 2021-02-09
pan: https://pan.baidu.com/s/1MYcVtIJH6bgmPeGbI4b91A
video: https://www.bilibili.com/video/BV1qf4y1B7D3
weight: 4
slug: dfbf612d
version: Houdini 18
producer: Rohan Dalvi
level: beginner
tags:
  - foundation
nodes:
  - SOP
  - SHOP
  - ROP
  - LOP
pipeline:
  - modeling
---

https://www.sidefx.com/learn/collections/introduction-to-houdini-1/

## 总结

> &emsp;&emsp;这个教程算是挺长的，对于入门来说难度曲线不算太大，讲得也很通俗易懂。
> &emsp;&emsp;主要围绕 SOP 进行讲解，实现的案例挺有意思的，适合初学者上手。

## 观看笔记

### 基础操作

{{< relink url="1_learning/basic" >}} 


![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/01.jpg)

> &emsp;&emsp;右键可以调整关照效果阴影效果。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/02.jpg)

> &emsp;&emsp;节点窗口 按 F 或者 G 聚焦选中节点， H 聚焦所有节点

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/03.jpg)

> &emsp;&emsp;L 键可以整理所有的节点，shift+L 整理选中的节点。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/04.jpg)

> &emsp;&emsp;工具架生成的物体可以按住 Ctrl 可以按米字型吸附。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/05.jpg)

https://www.sidefx.com/docs/houdini/basics/select#secure

> &emsp;&emsp;secure selection 关闭状态可以在 控制轴出现的情况选择 Component ，通过 shift + ~ 可以开启和关闭。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/06.jpg)

> &emsp;&emsp;shift + / 可以在节点窗口打开快速查找节点面板

{{</ relink >}}

### 程序化思维

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/07.jpg)

> &emsp;&emsp;普遍的三维软件节点与节点之间的记录是按照固定序号进行关联的。
> &emsp;&emsp;如果增加分段之后，无法继承之前的选面 模式 继续挤出。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/08.jpg)

> &emsp;&emsp;Houdini 通过分组可以更加灵活地进行局部处理。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/09.jpg)

> &emsp;&emsp;`group range` 节点可以根据一定 pattern 进行灵活打组。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/10.jpg)

> &emsp;&emsp;`group expression` 可以根据 VEX 表达式判断来打组。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/11.jpg)

> &emsp;&emsp;`expand group` 可以对现有的分组进行选择扩展。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/12.jpg)

> &emsp;&emsp;group combine 可以将将组外作为与一个新组进行处理。

{{< relink url="1_learning/basic" >}} 

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/13.jpg)

> &emsp;&emsp;使用 $OS 可以直接获取到节点的命名

{{</ relink >}}

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/14.jpg)

> &emsp;&emsp;group 可以根据法线的朝向进行选取

### 属性 & 复制

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/16.jpg)

> &emsp;&emsp;Copy 节点可以勾选创建组给复制对象打组。
> &emsp;&emsp;Copy可以通过 $CY $TPT 配置

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/17.jpg)

https://www.sidefx.com/docs/houdini/nodes/sop/copy#locals-body

> &emsp;&emsp;copy 节点有内置的变量可以通过 $NCY 变量获取复制的个数


![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/18.jpg)

> &emsp;&emsp;copy 节点可以去掉 transform 叠加，这样复制每个 copy 不会一直在之前的基础上叠加旋转和位移。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/19.jpg)

> &emsp;&emsp;add 节点可以删除模型的面只保留顶点。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/20.jpg)

```VEX
@pscale = float(@ptnum)/80;
```

> &emsp;&emsp;sort 节点可以调整节点的序号，对上面复制进行各种不同的效果调整

{{<attachments pattern="02.hip" />}}

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/21.jpg)

> &emsp;&emsp;@scale 是对全局进行缩放， @pscale 是对单个顶点的缩放进行控制。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/22.jpg)

> &emsp;&emsp;attribute randomize 可以对属性进行随机设置，这样可以操控大小旋转和颜色。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/23.jpg)

> &emsp;&emsp;color 节点可以根据一个属性 设置为 ramp 形式，制作彩虹的效果。

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/24.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;使用 mask 节点可以根据选择的顶点映射出一个 mask 属性范围。

### Vex & Ramps

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/25.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;Vop Node 可以使用 unified noise 节点选择 worley 生成硬切的表面

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/26.jpg)

> &emsp;&emsp;使用 relbox 节点可以基于碰撞盒生成 0-1 颜色过渡，使用 vectofloat 将向量分离得到 黑到白 的渐变值。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/27.jpg)

> &emsp;&emsp;这个黑白图可以作为 mask ，使用 mixin 节点对效果进行过滤，实现不同形态的混合。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/28.jpg)

> &emsp;&emsp;也可以结合前面用到的 模型遮罩 更加方便进行过渡动画。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/29.jpg)

> &emsp;&emsp;勾选上 Subdivision Curves 即便弯曲不平滑也可以重新平滑。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/30.jpg)

> &emsp;&emsp;resample 可以导出 curveu 属性来作为遮罩使用。

### Lops 

> &emsp;&emsp;Lops 在案例中进行剖析。

## 案例拆解

#### 模型区域散布

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/example_01.jpg)

> &emsp;&emsp;找出法线朝上的面并且撒点线 + 球

{{<attachments pattern="01.hip" />}}

#### 旋转楼梯生成

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/example_02.jpg)

#### 发散装 MG

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/example_03.mp4" autoplay loop muted width=100%></video>


#### 方块 数字

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/example_04.mp4" autoplay loop muted width=100%></video>


#### 树林散布

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/example_05.jpg)

#### 变形遮罩

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/example_06.mp4" autoplay loop muted width=100%></video>

#### 躁动挤出

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/example_07.mp4" autoplay loop muted width=100%></video>

#### 顶点替代

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/example_08.jpg)


#### 散布随机

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/example_09.mp4" autoplay loop muted width=100%></video>

#### LOP 基础渲染

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/example_10.jpg)


#### LOP 树丛渲染

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/example_11.jpg)

#### PBR 渲染

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dfbf612d/example_12.jpg)










