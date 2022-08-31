---

title: Bites of Python
author: 智伤帝 
description: Mix Training - Python 入门教程
date: 2021-02-23
pan: https://pan.baidu.com/s/1zP6oO2AieDgQ50f77CMgfg
video: https://www.bilibili.com/video/BV1nJ411E7ax/
weight: 1
slug: b22d93e7
version: houdini 16+
producer: Mix Training
level: beginner
tags: 
  - Python
nodes:
  - SOP
pipeline:
  - modeling
---

## 总结

## 观看笔记

### 01 - Environment setup

http://cgtoolbox.com/houdini-expression-editor/

> &emsp;&emsp;配置 Expression Editor 以及 VScode

### 02 - Help, variables and nodes

`hou.wd()` 获取当前 python 节点位置
`hou.selectedNodes()` 获取选中的节点

> &emsp;&emsp;介绍了 Python 的基础操作，以及 Houdini 相关的模块帮助查找。

### 03 - HOM, OBJ loader custom tool

https://www.sidefx.com/docs/houdini/hom/hou/ui#selectFile

`hou.ui.selectFile(title="title")` Houdini 的文件选择窗口

`hou.expandString` 可以将 Houdini 的变量 `$HIP` 扩展成完完整的路径或名称。


## 案例分析

### 选择目录 加载目录下所有的模型文件

```Python
# -*- coding: utf-8 -*-
from __future__ import division
from __future__ import print_function
from __future__ import absolute_import

import os
import hou

# NOTE 打开 Houdini 文件选择窗口 | 选择目录
obj_dir = hou.ui.selectFile(title="Select Obj Directory",file_type=hou.fileType.Directory)
# NOTE 获取的路径可能包含 $HIP houdini 环境变量 | expandString 方便处理
obj_dir_expanded = hou.expandString(obj_dir)

# NOTE 遍历目录下的文件
obj_files = os.listdir(obj_dir_expanded)

# NOTE 创建 geometry 节点
loader = hou.node('/obj').createNode('geo','OBJ_Loader')
# NOTE 创建 merge 节点
merge_objs = loader.createNode("merge","OBJ_Merger")

# NOTE 遍历创建 file 节点 | 修改节点的属性并自动连接到 merge 节点上
for obj in obj_files:

    obj_file_node = loader.createNode('file',obj)
    obj_file_node.parm('file').set(obj_dir + obj)
    obj_file_node.parm("missingframe").set(1)
    merge_objs.setNextInput(obj_file_node)

# NOTE 自动排布节点
loader.layoutChildren()

# NOTE 设置显示标记和渲染标记
merge_objs.setDisplayFlag(True)
merge_objs.setRenderFlag(True)
```

