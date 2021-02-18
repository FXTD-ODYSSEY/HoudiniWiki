---

title: Pluralsight - Houdini VEX Fundamentals
author: 智伤帝
description: VEX 入门课程
date: 2021-02-14
pan: https://pan.baidu.com/s/1St_q-BAkNatFDMXw9n7FGQ
video: https://www.bilibili.com/video/BV1Po4y1Z7Fm/
weight: 1
slug: dbcc6763
version: houdini 16+
producer: Pluralsight
level: beginner
tags: 
  - VEX
nodes:
  - SOP
pipeline:
  - modeling

---

## 总结


## 观看笔记


### VEX & HScript 比较 

```VEX
@P += sin(@Frame/10);
```

```HScript
sin($F*4)
```

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/01.jpg)
 

> &emsp;&emsp;Houdini 的 HScript 和 VEX 都能通过 sin 函数控制缩放

### 04 - Hello world 

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/02.jpg)

```VEX
printf("Hello World");
```

> &emsp;&emsp;VEX 可以像 C 语言一样打印出字符串，默认在 Detail 下值运行一次。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/03.jpg)

```VEX
printf("Hello World with Point %d\n",@ptnum);
```

> &emsp;&emsp;如果输入参数并且设置为 Points 模式下运行，则会自动遍历模型的数据。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/04.jpg)

```VEX
`points("../hello",0,"message")`
```

> &emsp;&emsp;Houdini 如同操作系统，输入文件路径就可以获取相应节点下的数据。

### 05 - Houdini Specifics

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/05.jpg) 

> &emsp;&emsp;VOP 节点可 `View VEX Code` 打开背后生成的 VEX 代码。VOP 是用节点生产 VEX 代码。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/06.jpg)

> &emsp;&emsp;Wrangle 节点有 VEX 代码模板。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/07.jpg)
![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/08.jpg)

> &emsp;&emsp;在 VEX 代码的函数下停留一小段时间可以按 F1 打开 Houdini 的帮助文档。

### VEX 语法

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/09.jpg)

```VEX
int points = npoints(0);

if(points>7){
  @cd = rand(@ptnum);
}

int var = 0;
for(int i=0;i<points;i++){
  var ++;
}
```

> &emsp;&emsp;VEX 采用 C 语言的大部分语法规则。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/10.jpg)

```VEX
int count = 1;

float weight = 1.5;

string str = 'A message';

int myArray[] = {1,2,3,4,5};

vector position = {1,3,0};

matrix translation = { {1,1,1,1} , {2,2,2,2} , {3,3,3,3} , {4,4,4,4} };

printf("Test %d\n",translation);

int new;

// 类型转换
new = (int)weight;
```

> &emsp;&emsp;VEX 的变量类型以及变量命名， 命名遵循 C 命名规则，首字符必须为字母，命名变量不包含特殊符号。
> &emsp;&emsp;vector 变量可以通过 .r .g .b .a 或者 .x .y .z .w 的方式获取相应的四个值，对应到 matrix 也同理。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/11.jpg)

> &emsp;&emsp;使用 VEX 可以让顶点的 Y轴 大于 零的全部归零。

### 10 - functions

```VEX
point(); // get attribute
prim();
vertex();
detial();

setpointattrib(); // set attribute

addpoint(); // make a point

npoints(); // how many are there

setpointgroup(); // put in group
```

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/15.jpg)

> &emsp;&emsp;常用的 VEX 函数

### 12 - foreach 节点

![11](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/12.jpg)

> &emsp;&emsp;16.0 以下的节点使用 `foreach subnetwork` 进行循环操作，到了 16.5+ 的版本就不存在这个节点了，不过实现的效果是一致的。

### 13 - 引用

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/13.jpg)

> &emsp;&emsp;VEX 的传参修改会改变原来的数值，这点和 Python 不一样。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/14.jpg)

> &emsp;&emsp;VEX 的函数参数间隔使用 `;`

### 17 - NearPoints

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/16.jpg)

```VEX
@Cd = 0;

@Cd = set(0);

@Cd = {0};

@Cd = {0,0,0};
```

> &emsp;&emsp;设置 Vector 变量有不同的方式可以做到。




## 案例分析

### Y轴归零 - 11

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/example_01.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;使用 VEX 语言的三种操作让 Y轴大于零的 部分归零。

```VEX
if(@P.y > 0)@P.y=0;
```

```VEX
vector pos_all[];
vector pos;

// 获取顶点的位置
for (int i = 0; i < npoints(0); i++)
{
    pos = point(0,"P",i);
    append(pos_all,pos);
}

// 设置顶点的位置
foreach(int index;vector posi;pos_all){
    if(posi.y>0){
        posi.y = 0;
        setpointattrib(0, "P", index, posi, "set");
    }
}
```

```VEX
int pt_num[] = primpoints(0, @primnum);
vector pos;

foreach(int pt;pt_num){
    pos = point(0,"P",pt);
    if(pos.y>0){
        pos.y = 0;
        setpointattrib(0, "P", pt, pos, "set");
    }
}
```

{{<attachments pattern="example_01.hip" />}}

### VEX 构建模型 - 13 & 15

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/example_02.jpg)

> &emsp;&emsp;`addpoint` `addprim` `addvertex` 结合这几个命令可以在 Houdini 构建几何体。
> &emsp;&emsp;`addvertex` 的顺序影响 prim 的法线方向。


<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/example_03.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;通过 for 循环批量创建几何体。

{{<attachments pattern="example_02.hip" />}}


### 寻找临近的点生成线 - 16

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/example_04.jpg)

> &emsp;&emsp;`nearpoints` 找到每个点临近的顶点序号。
> &emsp;&emsp;`addprim` 给临近的点添加线段。

{{<attachments pattern="example_03.hip" />}}

### 根据外部模型距离生成颜色值 - 19

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/example_05.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;利用 pcloud 点云计算模型的距离

```VEX
int origin = chi("source");
float distance = ch("dist");
int amount = chi("amount");
int target;

vector pos = point(1,"P",origin);
int pcloud = pcopen(0,"P",pos,distance,amount);

if(pcnumfound(pcloud)>0){
    while(pciterate(pcloud)){
        pcimport(pcloud, "point.number", target);
        setpointattrib(0, "Cd", target, {1,0,0}, "set");
    }
}
```
{{<attachments pattern="example_04.hip" />}}

### point cloud 模型偏移 - 20

<video src="https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/example_06.mp4" autoplay loop muted width=100%></video>

> &emsp;&emsp;教程使用 wrangle 遍历 points ，然后每个 @P 获取到 外部顶点的 pcloud
> &emsp;&emsp;如果查询得到则计算出距离和方向，然后将方向叠加到顶点的位置上。
> &emsp;&emsp;上面的操作会导致顶点位置偏移了很多。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/exmaple_06_01.jpg)

> &emsp;&emsp;方向进行 normalize 归一化。
> &emsp;&emsp;通过 `distance` 提取出距离
> &emsp;&emsp;将距离作为衰变映射，乘到归一化的方向上。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/exmaple_06_02.jpg)


{{<attachments pattern="example_05.hip" />}}








































