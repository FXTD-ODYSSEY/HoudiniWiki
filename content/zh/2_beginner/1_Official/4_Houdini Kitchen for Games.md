---
title: Houdini Kitchen for Games
author: 智伤帝
description: Houdini Kitchen 系列教程
date: 2021-02-14
pan: https://pan.baidu.com/s/1FVaGiMdLCsf2mIHutMB2WQ
video: https://www.bilibili.com/video/BV1iV41127nj
weight: 4
slug: 4c3b6b79
version: Houdini 16.5
producer: Houdini Kitchen
level: beginner
tags:
  - foundation
  - L-system
nodes:
  - SOP
pipeline:
  - modeling
---

https://www.sidefx.com/learn/collections/houdini-kitchen-for-games/
[Houdini Kitchen for Games](https://www.houdinikitchen.net/)

## 总结

> &emsp;&emsp;这个系列的教程也围绕 SOP 系列进行讲解。
> &emsp;&emsp;系统讲解了 Houdini 多个模块，也和不少教程有穿插的地方。
> &emsp;&emsp;整个系列看起来很行云流水，就是作者的采音设备有待提高。

> &emsp;&emsp;附注:最后一集 L-system 篇章比较复杂，初学了解即可。

## 观看笔记

![02](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/01.jpg)

> &emsp;&emsp;右键可以创建 reference copy 的节点，所以的通道都和源节点相连接。

---

![04](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/02.jpg)

> &emsp;&emsp;Vop 节点里面 Pattern 目录可以输出固定的图案的节点。

---

![07](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/03.jpg)

> &emsp;&emsp;通过 Prim Vop 获取面的位置生成中心点。

---

![08](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/04.jpg)

```
g`substr(chs("../../Rook_1"),0,1))`
```
> &emsp;&emsp;`chs` 获取 HDA 上层字符串， `substr` 对字符串进行裁切，提取字符串第一个字母。
> &emsp;&emsp;最后组合输出的 `gA` 的效果

---

![09](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/05.jpg)

> &emsp;&emsp;属性传递可以勾选 `Match P Attribute` 实现吸附效果

---

![10](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/06.jpg)
![10](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/07.jpg)

> &emsp;&emsp;两种计算 Volume 的方式。

![10](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/08.jpg)

> &emsp;&emsp;VDB 和 volume 都是一种属性可以在属性面板上看到


> &emsp;&emsp;作者说 90% 的情况都使用 VDB ，因为效果更加可控，效率也更高。
> &emsp;&emsp;只有一种情况例外，那就是用 iso 创建 Volume 进行撒点~

![10](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/09.jpg)

> &emsp;&emsp;模型转 VDB 再转 模型 可以去除模型内部的面。
> &emsp;&emsp;并且可以通过传递法线做模型的 LOD 

![10](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/10.jpg)

> &emsp;&emsp;VDB 可以将一堆穿插的小球合为一体。

---

![12](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/11.jpg)

> &emsp;&emsp;使用 foreach 遍历用 copytopoints 的方式比 `copy stamp` 要稍微高效一点，sidefx 官方推荐用新的方案。
> &emsp;&emsp;教程作者也提到 foreach 的功能更强大。

https://vimeo.com/142534639

> &emsp;&emsp;教程推荐看上面的 官方教程 深入了解 Houdini 的 foreach 功能

---

![13](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/12.jpg)

> &emsp;&emsp;利用 UV auto seam 节点程序化展开切开模型 UV
> &emsp;&emsp;再使用 uv flatten 可以自动展开 UV
> &emsp;&emsp;再使用 UV Layout 将 UV 空间充分利用好。

---

http://algorithmicbotany.org/papers/#abop

L-system 详解书籍

> &emsp;&emsp;14集详细介绍了 L-system 的很多用法，就是用起来相当复杂。

https://www.sidefx.com/docs/houdini/nodes/sop/lsystem

> &emsp;&emsp;L-system定义生成器规则可以自动生长出不同的图案，其中需要学习 L-system 的规则定义。

F 移动一个单位 (生成线段)
f 移动一个单位 
H 移动半个单位 (生成线段)
h 移动半个单位 

> &emsp;&emsp;更多的规则详见上面的官方文档。
> &emsp;&emsp;L-system 不只是创建树木，也可以用来构建雪花等复杂图案。

## 案例拆解

### 星球散布

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/example_01.jpg)

> &emsp;&emsp;Vop 生成 Noise 
> &emsp;&emsp;在 Noise 的基础上散布

### 植物散布

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/example_02.jpg)

### 国际象棋

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/example_03.jpg)

### 植物根茎

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/example_04.jpg)

> &emsp;&emsp;L-system 默认生成的树枝倒放，然后将线段投射到地形上。

### 赛车跑道

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/example_05.jpg)

> &emsp;&emsp;利用 sweep 节点将曲线上的线段变为赛道。

[Procedural Race Tracks](/zh/acc82919) [线上链接](https://www.bilibili.com/video/BV1zJ411E7My)

> &emsp;&emsp;上面这个游戏赛道制作的经典教程和这里使用的方案类似。

### 遍历处理效果

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/example_06.jpg)


![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/example_07.jpg)


### L-system 向日葵

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/4c3b6b79/example_08.jpg)



