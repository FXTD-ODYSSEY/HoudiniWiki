---

title: Pluralsight - Houdini VEX Fundamentals
author: 智伤帝
description: Vex 入门课程
date: 2021-01-24
pan: https://pan.baidu.com/s/1St_q-BAkNatFDMXw9n7FGQ
video: https://www.bilibili.com/video/BV1Po4y1Z7Fm/
weight: 1
slug: dbcc6763
version: Houdini 17+
producer: Pluralsight
level: beginner
tags: 
  - vex
nodes:
  - SOP
pipeline:
  - modeling

---


## VEX & HScript 比较 

```VEX
@P += sin(@Frame/10);
```

```HScript
sin($F*4)
```

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/01.jpg)
 

> &emsp;&emsp;Houdini 的 HScript 和 VEX 都能通过 sin 函数控制缩放

## 04 - Hello world 

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
****
## 05 - Houdini Specifics

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/05.jpg) 

> &emsp;&emsp;VOP 节点可 `View VEX Code` 打开背后生成的 VEX 代码。VOP 是用节点生产 VEX 代码。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/06.jpg)

> &emsp;&emsp;Wrangle 节点有 VEX 代码模板。

![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/07.jpg)
![alt](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/dbcc6763/08.jpg)

> &emsp;&emsp;在 VEX 代码的函数下停留一小段时间可以按 F1 打开 Houdini 的帮助文档。

## Vex 语法

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


