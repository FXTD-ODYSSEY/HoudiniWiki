---
title: Rohan Dalvi - INTRO TO VEX
author: 智伤帝 
description: Rohan Dalvi VEX 入门课程
date: 2021-02-21
pan: https://pan.baidu.com/s/1fvqF6lwOJOAuB2ss2PBHVw 
video: https://www.bilibili.com/video/BV1hb4y1R7WU/
weight: 1
slug: e2741bbf
version: houdini 16.0
producer: Rohan Dalvi
level: beginner
tags: 
  - ࠁHoudini/VEX
nodes:
  - SOP
pipeline:
  - modeling
---

https://www.sidefx.com/tutorials/intro-to-vex/

## 总结

> &emsp;&emsp;这个教程对于入门 Vex 来说还算不错。
> &emsp;&emsp;就是第二集的做法有点拉胯，我自己重新做了一个简洁的版本。

> &emsp;&emsp;rohan 在教程里面也提到他并不是 programer 
> &emsp;&emsp;所以对于 VEX 的编写不是很专业，不过对于新手入门教学来说足够了。

## 观看笔记

![01](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e2741bbf/01.jpg)

> &emsp;&emsp;`@opinput1_P` 可以获取第二个输入的模型信息。
 
![02](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e2741bbf/02.jpg)
 
> &emsp;&emsp;教程这里使用 modulo 除以 1 取余数得到的值全部是 0 ，所以直接连接 constant 0 的效果也是一样的。(不太懂为啥要用取余数的方法)


## 案例分析


<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e2741bbf/example_01.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;给 zscale 属性加上随机数，然后 poly extrude 节点勾选上 zscale 属性实现随机挤出。

{{<attachments pattern="example_01.hip" />}}


<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e2741bbf/example_02.mp4" autoplay loop muted width=100%></video>


> &emsp;&emsp;通过 `lerp(@P,@opinput1_P,mix_value)` 通过 lerp 混合第一个输入和第二个输入的位置。
> &emsp;&emsp;为了让顶点位置过渡不混乱，可以加入 sort 节点从上到下排序顶点顺序。
> &emsp;&emsp;通过 `relbbox` 获取 bounding box，使用 bouding box 的信息作为上面的 mix 值即可实现过渡控制。 

{{<attachments pattern="example_02.hip" />}}


<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e2741bbf/example_03.mp4" autoplay loop muted width=100%></video>


> &emsp;&emsp;教程后面的做法尽比较乱，我自己重新做了一遍自己的做法。
> &emsp;&emsp;规避了 copy stamp 节点， copy to points 效率更高[^1]

[^1]: Houdini Kitchen 教程 12集 讲解 foreach 有提到 [链接](/zh/4c3b6b79#12-copy-stamping-and-the-foreach-loops)

---

![02](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e2741bbf/example_03_01.jpg)

> &emsp;&emsp;教程使用 circle 节点通过 sort 节点的 shift 功能
> &emsp;&emsp;将圆球 copy 到 0 点的位置，不用关键帧也实现了太阳东升西落的效果。
> &emsp;&emsp;但是我觉得 copy to point 有点不太好，所以我用 wrangle 来修改小球的 @P 属性。

![02](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e2741bbf/example_03_02.jpg)

{{<attachments pattern="example_03.hip" />}}











