---
title: Entagma Patreon- Adding Houdini to your Arsenal 
author: 智伤帝
description: Entagma AHTYA 入门系列教程 
date: 2021-01-16
pan: https://pan.baidu.com/s/1ijIw4fILLcAnq9PIeObs-Q
video: https://www.bilibili.com/video/BV137411q7sA
weight: 1
slug: ddc0b6e3
version: Houdini 17+
producer: Entagma
level: beginner
tags: 
  - foundation
nodes:
  - SOP
pipeline:
  - modeling

---

## AHTYA01 - Intro To The UI And Basic Concepts 

{{< relink url="1_learning/basic" >}} 

+ 按 空格 键切换到摄像机控制
+ 在节点窗口下按住 A 键拖拽可以对齐节点
+ 在属性编辑面板按鼠标中间可以按不同数量及调整参数

{{</ relink >}}


## AHTYA02 - About Geometry And Attributes

### Houdini & Maya 数据结构差别

> &emsp;&emsp;Houdini 有 `Points` `Primitives` `Vertices` 数据结构组成
> &emsp;&emsp;对应Maya的 `Vertex` `Face`  `FaceVertex` 的数据结构

### 构建几何体


{{< relink url="20_nodes/sop/dd4f50e5|1_learning/vex|3_vex/dbcc6763" pattern="geometry.hip" >}} 

## 构建几何体

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

索引自 [Pluralsight - Houdini VEX Fundamentals](/zh/3_vex/dbcc6763)

{{</ relink >}}

### 多面挤压

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/03.png)

> &emsp;&emsp;第一眼我看到这个效果，我的想法是用 for 循环遍历每一个面进行 extrude 操作。
> &emsp;&emsp;随机操作可以用 随机数 加入 for 循环的遍历序号来实现。
****
![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/ddc0b6e3/04.png)

> &emsp;&emsp;通过 foreach 循环的 meta 节点可以获取遍历的序号，作为随机数的种子。
> &emsp;&emsp;显然这个方法没有利用教程提到 Houdini 数据结构，是比较蠢的方法。

> &emsp;&emsp;创建属性属性随机可以用 Vex 更简单来实现。

```VEX
f@weight = rand(@primnum);

```

## AHTYA03 - Noisy VOPs

> &emsp;&emsp;VOP 节点 和 wrangle 节点都是一样


```chart
{
    "type": "bar",
    "data": 
       {
        "labels": ["One", "Two", "Three", "Four", "Five", "Six"],
        "datasets": [{
            "label": "# of Votes",
            "data": [12, 19, 3, 5, 3, 8]
        }]
    }
}
```