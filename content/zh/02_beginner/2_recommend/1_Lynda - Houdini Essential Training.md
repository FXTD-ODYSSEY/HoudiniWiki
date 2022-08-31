---
title: Lynda - Houdini Essential Training
author: 智伤帝
description: Lynda 入门教程
date: 2021-02-10
pan: https://pan.baidu.com/s/1javKvMoAWBF5n7cdtJnSaw
video: https://www.bilibili.com/video/BV1pW411H7nV
weight: 1
slug: e127bd01
version: Houdini 16
producer: Lynda
level: beginner
tags: 
  - ࠁHoudini
nodes:
  - SOP
  - DOP
  - CHOP
  - SHOP
  - ROP
pipeline:
  - modeling
---

https://www.lynda.com/Houdini-tutorials/Houdini-Essential-Training/571627-2.html

## 总结

> &emsp;&emsp;这个教程娓娓道来，蜻蜓点水般介绍了 Houdini 各个主要功能模块。
> &emsp;&emsp;虽然教程是 16 年的，但是对于入门来说非常友好，基础操作到 SOP 节点运用可谓是简单易懂。
> &emsp;&emsp;特别是 SOP 的讲解上采用 1 集重点介绍一个 节点的方式，讲解不深但胜在清楚。
> &emsp;&emsp;后续还比较全面介绍了 Houdini 的 CHOP DOP COP2 这些模块，是入门教程里面相当全面的。
> &emsp;&emsp;当然介绍全面的代价就是各个模块部分都是浅尝辄止，如果想从 SOP 更深入地入门，推荐 Rohan 的 [Introduction to Houdini](../dfbf612d)

## 教程笔记

### 基础操作 1 - 20

{{< relink url="1_learning/basic" >}} 

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/01.jpg)

> &emsp;&emsp;设置里面可以 配置 自动保存 | 比如时间、保存方式等等

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/02.jpg)

> &emsp;&emsp;视窗设置可以配置轴向以及操作方式

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/03.jpg)

> &emsp;&emsp;视窗上按 D 可以的打开配置窗口，比如调整法线显示的大小。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/04.jpg)

> &emsp;&emsp;background 可以设置背景的颜色

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/05.jpg)

> &emsp;&emsp;在节点窗口 按 D 可以打开配置窗口配置节点显示。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/06.jpg)

> &emsp;&emsp;蓝色作用于显示，紫色作用于渲染。按住 Ctrl 点击显示可以单独配置紫色标记。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/07.jpg)

> &emsp;&emsp;右键菜单可以设置控制轴的朝向。

{{</ relink >}}


### SOP 21 - 39

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/08.jpg)

> &emsp;&emsp;删除属性可以使用通配符进行匹配 `* ^Cd` 删除所有属性除了 `Cd` 属性，P 属性也会保留。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/09.jpg)

> &emsp;&emsp;copy 节点自带 pack 选项，勾选可以节省模型复制的消耗。

<video alt="46" src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/13.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;不使用 pack 在复杂的模型下会导致机器卡顿。


### 动画 & CHOP 程序化曲线 40 - 50

![42](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/10.jpg)

> &emsp;&emsp;CHOP 里的 wave 节点可以通过上面的方式创建三个通道 

![42](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/11.jpg)

> &emsp;&emsp;$C 可以获取到当前 通道 

![43](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/12.jpg)

> &emsp;&emsp;生成的曲线可以通过 HScript 设置到外部的通道上

![43](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/14.jpg)

> &emsp;&emsp;CHOP 生成多个曲线通道，然后使用 copy stamp 将运动赋予到其他的模型上。

<video alt="46" src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/15.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;可以锁住视窗到 CHOP 里面直接调整查看效果。
> &emsp;&emsp;通过 CHOP 程序化生成动画曲线，可以批量设置多个复杂的动画。


![43](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/16.jpg)

> &emsp;&emsp;相关的曲线也可以通过 channel 节点应用到 SOP 的属性上。

### ROP 渲染 51 - 60

> &emsp;&emsp;渲染的参数设置和 Arnold5 的配置差不多。

![55](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/17.jpg)

> &emsp;&emsp;可以打开看到后台运行的 Mantra 节点

https://www.sidefx.com/docs/houdini/render/noise


> &emsp;&emsp;教程推荐阅读 Houdini 上述的文档，详细介绍了不同的参数对应渲染噪点的影响。

![56](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/18.jpg)

> &emsp;&emsp;这里可以控制 渲染 的 AOV 输出，让 exr 包含其他图层通道。

![57](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/19.jpg)

> &emsp;&emsp;使用 OpenGL 节点可以多层次配置输出，输出速度快，和 Viewport 效果相似。

![58](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/20.jpg)

> &emsp;&emsp;ROP 也有 geometry 节点用来批量 bake 模型出缓存。

![59](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/21.jpg)

> &emsp;&emsp;可以通过 filmbox 节点将场景导出为 FBX ， abc 文件也有同样的节点进行输出。

![66](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/22.jpg)

> &emsp;&emsp;默认情况下输出 Mantra 渲染会自动将模型细分。

### 材质 61 - 66

> &emsp;&emsp;材质设置上和 Maya 相似，节点功能更多更复杂。

### 灯光 67 - 72

> &emsp;&emsp;Houdini 不同类型的灯光是一体的，可以任意切换，非常方便，使用方式和 Maya 的灯光大差不差。
> &emsp;&emsp;Houdini 的灯光参数更多，控制上比 Maya 更方便。

### RBD 破碎 73 - 80

![80](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/23.jpg)
![80](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/24.jpg)

> &emsp;&emsp;可以先用低模来模拟，然后将模拟的结果转换为 points ， 再用 points 去驱动高模。

![80](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/25.jpg)

> &emsp;&emsp;使用了本地 cache 的数据，否则有可能会因为 dopimport 节点的聚焦而导致重算，可以将节点聚焦到 Null 上。

### Wire 变形器 81 - 83

### Particle 发射器 84 - 90

### Pyro 结算器 91 - 95

### Pyro 结算器 96 - 98

## 案例分析

### CHOP 动画控制

<video alt="50" src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_01.mp4" autoplay loop muted width=100%></video>

---

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_01_01.gif)

> &emsp;&emsp;首先通过 alt K 关键帧给环添加旋转运动。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_01_02.gif)

> &emsp;&emsp;然后通过 copy transform 将复制的缩放和旋转叠加。

> &emsp;&emsp;最后通过 copy stamp 加 box 的方式复制出多个铁环来运动。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_01_03.jpg)

> &emsp;&emsp;再 stamp 上获取 CHOP  生成的曲线，通过 $PT 获取多个不同的 CHOP 曲线，连接到 铁环 的 RotateY 上。

---

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_01_04.jpg)

> &emsp;&emsp;生成随机的 Constant 分段曲线。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_01_05.jpg)

> &emsp;&emsp;通过 Copy 节点生成 100 条运动曲线。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_01_06.jpg)

> &emsp;&emsp;添加 Seed 变量根据每一条曲线生成一个随机传入到 wave 节点，实现 100 条曲线的变化都不一样。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_01_07.jpg)

> &emsp;&emsp;Filter 让曲线更平滑。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_01_08.jpg)

> &emsp;&emsp;Math 节点限定曲线所处的范围。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_01_08.jpg)

> &emsp;&emsp;对节点右键可以保存输出缓存文件。

### RBD 破碎

<video alt="50" src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_02.mp4" autoplay loop muted width=100%></video>

---

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_02_01.jpg)

> &emsp;&emsp;需要生成 glue constraint 确保模型破碎之前是紧凑贴合在一起的。
> &emsp;&emsp;使用 connect adjacent face 生成约束用到的曲线。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_02_02.jpg)

> &emsp;&emsp;使用 glue 约束将 broken 的曲线的部分 delete 掉，使约束断开。


### Wire 变形器

<video alt="50" src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_03.mp4" autoplay loop muted width=100%></video>

#### 模型制作思路

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_03_01.jpg)

> &emsp;&emsp;制作一个半球，半球通过方块和细分加 ray 投射生成，这样布线比较均匀。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_03_02.jpg)

> &emsp;&emsp;上面的 UV 生成使用 X 或 Z 轴投射 UV，这样顶点从上到下在 UV 上形成 Y 轴渐变。
> &emsp;&emsp;通过 UV 渐变可以可以作为渐变图，利用这个渐变图可以控制 Noise 从上到下的起的作用
> &emsp;&emsp;但是我实际测试渐变图的控制效果并不好，于是我采用了 [Rohan Dalvi 入门教程](../dfbf612d) 里提到的 relbbox 的方式制作渐变。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_03_03.jpg)

> &emsp;&emsp;通过手动选取部分的面进行 blast ，可以单独进行挤出操作。
> &emsp;&emsp;挤出的时候可以调整 thickness 曲线来控制挤出的厚度。
> &emsp;&emsp;曲线生成默认不在原点通过 carve 进行偏移，然后通过 resample 重新生成曲线。

#### 变形驱动

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_03_04.jpg)

> &emsp;&emsp;使用 WireCapture 获取绑定的权重 wireCapture 属性。
> &emsp;&emsp;通过 timeshift 节点确保获取第一帧的位置解算权重，不会导致权重飘忽不定。
> &emsp;&emsp;使用 copy attribute 节点将第一帧的数据传递到运动的模型上。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_03_05.jpg)

> &emsp;&emsp;利用 wiresolver 节点物理结算曲线的运动。
> &emsp;&emsp;然后将解算的运动输入到外部的 wire deform 实现曲线带权重驱动模型的效果。

{{<attachments pattern=".*.hip">}}


### 粒子发射器

<video alt="50" src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_04.mp4" autoplay loop muted width=100%></video>


### Pyro 烟雾结算

<video alt="50" src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_05.mp4" autoplay loop muted width=100%></video>

### 图片合成

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/e127bd01/example_06.jpg)
















