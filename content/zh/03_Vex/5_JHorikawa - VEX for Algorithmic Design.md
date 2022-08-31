---
title: VEX for Algorithmic Design
author: 智伤帝
description: VEX 入门课程
date: 2021-02-16
pan: https://pan.baidu.com/s/1St_q-BAkNatFDMXw9n7FGQ
video: https://www.bilibili.com/video/BV1Po4y1Z7Fm/
weight: 4
slug: f2707ffa
version: houdini 16+
producer: Junichiro Horikawa
level: beginner
tags: 
  - ࠁHoudini/VEX
nodes:
  - SOP
pipeline:
  - modeling
---
## 前言

> &emsp;&emsp;

## 01 Attribute Basics

```
f@val = 1.553; // float
i@val = 100;  // interger
s@sval = "abc"; // string
v@vval = set(3.0,6.3,1.4);  // vector
f[]@aval = array(3.5,2.5,1.0,6.0); // float array
```

> &emsp;&emsp;通过 Vex wrangle 可以在模型上添加自定义属性

### 特殊属性

```
@P = rand(@P);
```

> &emsp;&emsp;P 表示位置，通过上面的设置可以随机模型的顶点

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/8e124f805f9eb461edeb43c94c45d1d3.jpeg)

```
@Cd = rand(@P);
```

### Cd 表示颜色，可以实现顶点色

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/1e329824998815f92a75fa8bee732acb.jpeg)

---

[https://www.sidefx.com/docs/houdini/vex/snippets](https://www.sidefx.com/docs/houdini/vex/snippets)

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/f0a17a8f9c1e2c4fa4dbf579323f1734.jpeg)

> &emsp;&emsp;可以使用 `@ptnum` `@primnum` 获取数据
> &emsp;&emsp;`@Frame` 可以获取 Frame 数据
> &emsp;&emsp;Detail 属性每次只运行一次

## 02 Group Basics

> &emsp;&emsp;属性的冒号表示分组

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/9e5fad30721a941b3fa4633908e84547.jpeg)

> &emsp;&emsp;通过 group 节点可以打组

[None](../None.html) 可以修改属性
[None](../None.html) 可以修改分组

> &emsp;&emsp;houdini 可以通过打组将合并的模型中找到相应的分类
> &emsp;&emsp;注: 这里也可以用 [None](../None.html) 对不连续的 部分 进行拆分

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v22e8f8137cb2c41e1977f521ff27a8145.png)

## 03 Parameters Basics

### Parameter Interface

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v2ab474eff52ff4c9fa634d091aca8de45.png)

> &emsp;&emsp;打开 `Edit Parameter Interface..` 可以编辑 Houdini 节点的界面

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v21481d6fb6aa64c3f80b7f937db9fc117.png)

> &emsp;&emsp;通过这个方式可以构建一些常用的 GUI。
> &emsp;&emsp;下拉菜单可以在 menu 标签也添加相应的对象。

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v20cd1372f165a4663a4af7acdffd6acbf.png)

> &emsp;&emsp;可以通过 expression 引用通道的数值。

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v25d0cb2bc04414dbb94114ae8fba20173.png)

> &emsp;&emsp;vex wrangle 可以通过 `ch` 的方法去获取其他节点 channel 的数据。
> &emsp;&emsp;这样就可以实现各种参数的传入控制。

### reference 路径更新

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v28ac2b4cd228446039697b5461f2d41f0.png)

> &emsp;&emsp;如果将引入路径写到 vex 代码里面，如果参数路径发生改变，vex 代码不会更新
> &emsp;&emsp;但是如果通过 channel 的 `copy reference` 功能的话，路径改变可以自动更新。

### ramp parameters

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v2cabe297fbc324ec2afe279f8bf6a15a8.png)

> &emsp;&emsp;输入 ramp 和 float，通过 float 值可以在 ramp 上滑动改变颜色。

### parameter expression

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v2c59ae94892ef47d39d3f56202f58cd12.png)

https://www.sidefx.com/docs/houdini/network/expressions.html#globals

> &emsp;&emsp;这里有 很多 Expression 可用的变量

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v2424b8d61e5d4441cae7d4d4b06803936.png)

> &emsp;&emsp;这里可以拿到很多 节点 内置的变量值

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v23591128f91cc4dbb850d7b75eb95ebb7.png)

> &emsp;&emsp;也可以在文档里面找到可用的 local variable

https://www.sidefx.com/docs/houdini/expressions/index.html

> &emsp;&emsp;这里也有很多 `HScript` 提供的 function

## 04 Variables and operations

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v228a1d9f9e3754340af3cac9e05e36fe5.png)

> &emsp;&emsp;vex 的变量语法与 C 语言相似

![image.png](https://pic7.58cdn.com.cn/nowater/webim/big/n_v26e6815825a9f4c589bc4883823337ca7.png

> &emsp;&emsp;可以利用 Vex 做一个简易的计数器


![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v2738a7e41795746c5a07cb3a124e23605.png)

> &emsp;&emsp;Vex 可以隐式转换和显示转换类型。

---

![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/f2707ffa/n_v23636fa597d55457987ca5b943d9311c4.png)

> &emsp;&emsp;字符串转数值 [atof](https://www.sidefx.com/docs/houdini/vex/functions/atof.html) [atoi](https://www.sidefx.com/docs/houdini/vex/functions/atoi.html)  
> &emsp;&emsp;数值转字符串 [itoa](https://www.sidefx.com/docs/houdini/vex/functions/itoa.html) (没有 `ftoa` 函数)
> &emsp;&emsp;使用 [sprintf](https://www.sidefx.com/docs/houdini/vex/functions/sprintf.html) 可以处理复杂的字符串替换

---

> &emsp;&emsp;Houdini vector 类型获取值，可以用 数组方式获取 也可以用 xyz 属性获取。



