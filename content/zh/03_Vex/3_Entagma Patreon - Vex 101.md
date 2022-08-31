---

title: Entagma Patreon - Vex 101
author: 智伤帝
description: Entagma VEX 入门课程
date: 2021-02-19
pan: https://pan.baidu.com/s/1epLzq4F2c9uTsYZBZ92QWg
video: https://www.bilibili.com/video/BV1g7411q7BQ
weight: 3
slug: 554149d6
version: houdini 16+
producer: Entagma
level: Intermediate
tags: 
  - VEX
nodes:
  - SOP
  - COP
  - MAT
pipeline:
  - modeling

---

## 总结

> &emsp;&emsp;这套教程很全面地介绍了 VEX 的使用场景
> &emsp;&emsp;最后一集甚至使用 VEX 将论文复杂的数学公式简化为简单的实现，可见其扩展性很强。

> &emsp;&emsp;教程的广度很大，基本上介绍了 VEX 在 Houdini 中的各种调用方式。
> &emsp;&emsp;并且也包含了 编程语言基础的讲解，只是教程的知识越来越多，会给人一种越来越难的感觉_(:з」∠)_
> &emsp;&emsp;即便是个 VEX 的新手教程，我学习的时候难度还是偏高了。
> &emsp;&emsp;不过就 VEX 教程而言，是非常棒的。

> &emsp;&emsp;最后倒数第二个教程 Material VOP 我在 Houdini18 中实现有问题，所以没有进一步提供文件。

## 观看笔记

### 02 - SOP Wrangle Basics
![02](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/01.jpg)

> &emsp;&emsp;wrangle 节点可以设置为 Number 类型自定义执行的次数。

### 09 - Creating Chladni Patterns

[克拉尼图形](https://baike.baidu.com/item/%E5%85%8B%E6%8B%89%E5%B0%BC%E5%9B%BE%E5%BD%A2)

> &emsp;&emsp;克拉尼图形 - 声音可视化

https://thelig.ht/chladni/

```
s(x, y) = asin(πnx) sin(πmy) + bsin(πmx)sin(πny)
```

> &emsp;&emsp;克拉尼图形 算法

![09](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/02.jpg)

> &emsp;&emsp;Houdini16 之后内置 PI 变量，更老的版本需要手动添加 PI 

![09](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_03.jpg)

> &emsp;&emsp;使用公式写 VEX 代码比用 Vop 节点复现公式代码来得方便。

### 14 - Starting A Function Library

> &emsp;&emsp;Mortiz 推荐 Joy of Vex 出自 CGwiki 的系列文章教程作为额外的学习材料 [链接](https://www.tokeru.com/cgwiki/index.php?title=JoyOfVex)

![14](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/03.jpg)

> &emsp;&emsp;Vex 可以通过 include 将预制的函数引入。

![14](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/04.jpg)

> &emsp;&emsp;需要在 Houdini.env 里面引入文件目录。

### 15 - A (Not So) Quick Recap & Fake Hanging Wires

![15](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/05.jpg)

> &emsp;&emsp;Houdini 的 foreach 和 compile 都比 wrangle 节点要慢很多。

### 16 - Pixel Sorting

> &emsp;&emsp;`argsort` 可以重新排序数组

### 17 - Intersecting Lines

> &emsp;&emsp;`intersect_all` 可以检测模型的碰撞

### 18 - Transformation Matrix Intuition

> &emsp;&emsp;`dient` 获取 单位矩阵(identity matrix)

### 20 - Packed Primitives & Primitive Intrinsics

![20](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/06.jpg)

> &emsp;&emsp;可以通过 `Show All Intrinsics` 查看内置的属性

### 22 - How about a Material Wrangle

![22](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/07.jpg)

> &emsp;&emsp;Material 节点里面使用 snippet 不需要 @

## 案例分析

### 法线朝向

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_01.mp4" autoplay loop muted width=100%></video>

{{<attachments pattern="example_01.hip" />}}

### 噪波面片

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_02.mp4" autoplay loop muted width=100%></video>

{{<attachments pattern="example_02.hip" />}}

### chladni pattern 克拉尼图形

![09](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_03.jpg)

![09](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_03_01.jpg)

{{<attachments pattern="example_03.hip" />}}

### sin cos 变化线圈

![10](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_04.jpg)

> &emsp;&emsp;sin 结合 cos 可以构成一个圆圈。
> &emsp;&emsp;加上 frequency 参数动态变化 sin 和 cos 的参数值就可以得到上面效果的线段。
> &emsp;&emsp;再使用 polywire 生成几何体。

{{<attachments pattern="example_04.hip" />}}

### 临近点线段

![11](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_05.jpg)

> &emsp;&emsp;这个效果参考 Vex Fundamentals 教程 [链接](/zh/dbcc6763/#寻找临近的点生成线---16)

![12](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_06.jpg)

{{<attachments pattern="example_06.hip" />}}

### 多重切分

![13](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_07.jpg)

{{<attachments pattern="example_07.hip" />}}

### Catenary 算法

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_08.mp4" autoplay loop muted width=100%></video>

{{<attachments pattern="example_08.hip" />}}

### 交错线碰撞

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_09.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;wrangle 可以根据组去遍历相关的顶点。

{{<attachments pattern="example_09.hip" />}}

### 像素偏移

![17](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_10.jpg)

> &emsp;&emsp;通过 grid 选择 column 可以竖向线段模型
> &emsp;&emsp;通过 `attribute from map` 可以将像素映射到模型上
> &emsp;&emsp;虽然模型没有面，只要离得足够远，就可以看到 贴图 的 效果。

{{<attachments pattern="example_10.hip" />}}


### VEX 矩阵变换

![18](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_11.jpg)

```VEX
// 创建单位矩阵
matrix trn = ident();

// 旋转
float angle_x = radians(chf("rotation_x"));
float angle_y = radians(chf("rotation_y"));
float angle_z = radians(chf("rotation_z"));
rotate(trn,angle_x,{1,0,0});
rotate(trn,angle_y,{0,1,0});
rotate(trn,angle_z,{0,0,1});

// 缩放
vector scale_vec = chv("scale");
scale(trn,scale_vec);

// 位移
vector translate_vec = chv("translate");
translate(trn,translate_vec);

4@trn = trn;

```

> &emsp;&emsp;构建矩阵进行变换，实现类似 transform 节点的效果。
> &emsp;&emsp;最后逐个顶点乘以矩阵实现位置移动。

{{<attachments pattern="example_11.hip" />}}

### 四元数旋转

![18](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_12.jpg)

```VEX
float bias = chf("bias");

vector axis = point (1,"P",1);
axis = normalize (axis);

vector axis2 = point(2,"P",1);
axis2 = normalize (axis2);

float angle = chf("Angle");
angle = radians(angle);

float angle2 = chf("Angle2");
angle2 = radians (angle2);

vector4 quat = quaternion (angle,axis);
vector4 quat2 = quaternion (angle2,axis2);

vector4 rot = slerp(quat,quat2,bias);

v@P = qrotate(rot,v@P);
```

> &emsp;&emsp;四元数旋转可以避免 Gimbal lock (万向节锁) [讲解链接](https://www.bilibili.com/video/BV1Cx411C7ED?p=13)

{{<attachments pattern="example_12.hip" />}}

### copy to points 后矩阵变换

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_13.mp4" autoplay loop muted width=100%></video>

```VEX
matrix3 trn = ident();

float amp = chf("amp");

float angle;
angle = @P.x * amp;
rotate(trn,angle,{1,0,0});
angle = @P.y * amp;
rotate(trn,angle,{0,1,0});
angle = @P.z * amp;
rotate(trn,angle,{0,0,1});

setprimintrinsic(0, "transform", @ptnum, trn);
```

> &emsp;&emsp;通过 copy to points 勾选上 `pack and instance`
> &emsp;&emsp;可以获取到隐藏的 transform 矩阵
> &emsp;&emsp;逐个顶点变换矩阵可以进一步修改模型的 transform 

{{<attachments pattern="example_13.hip" />}}


### COP 编写 VEX

![18](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_14.jpg)

https://www.sidefx.com/docs/houdini/vex/contexts/cop.html

```VEX
float freq = .005;
vector pos = set(@IX *freq,@IY * freq,@TIME);

int seed = 123;
float f1,f2 = 0;

wnoise(pos,seed,f1,f2);

float val = f2 - f1;

@R = val;
@G = val;
@B = val;
```

> &emsp;&emsp;在 COP 节点编写 VEX 生成 Noise 图片。

{{<attachments pattern="example_14.hip" />}}


### Paper 点云保留镜头可视顶点 算法实现

https://webee.technion.ac.il/~ayellet/Ps/KatzTalBasri.pdf

![23](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_15.jpg)


> &emsp;&emsp;利用 Houdini 快速实现 论文的算法。
> &emsp;&emsp;这个算法可以将相机望向顶点集背后理应看不见的顶点进行剔除。
> &emsp;&emsp;上面截图论文红色的顶点左边有穿插，右边通过算法处理就可以去掉背部顶点的重叠。

![23](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/554149d6/example_15_01.jpg)

> &emsp;&emsp;具体原理可以查看 hip 文件

{{<attachments pattern="example_15.hip" />}}
