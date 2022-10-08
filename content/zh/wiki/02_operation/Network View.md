---
title: 操作 - 网络视图面板
author: 御琪幽然
description: 
date: 2022-10-08
pan: 
video: 
weight: 1
slug: de8c01fa
version: Houdini 19+
producer: 
level: 
tags: 
  - 
nodes:
  - 
pipeline:
  - 
---

# 一、简介
显示节点的面板。

# 二、操作&快捷键

## 切换
-   Alt+2（小键盘2）：切换当前区域显示为Network View。

## 操作
-   I：进入所选节点中。
-   U：返回到上一层节点。

-   N：打开滑动轮盘，可以快速切换当前显示类型。

-   C：打开为节点上色的面板。

-   O：为Network View的节点显示一个Mini Map，再次按下关闭。
-   P：显示所选节点的Attribute面板，再次按下关闭。
-   按住中键可以快速预览选中节点的详细信息。
-   Ctrl+中键：打开节点的详细信息窗口。

-   Alt+拖动节点：复制

## 布局
-   Y：按住进入裁剪模式，可以删掉节点之间连接的线。
-   选中多个节点，并点中其中一个节点的上端口或下端口，可以批量连接。
-   选中多个节点，按住Alt点击其中一个节点的下端口，可以快速添加Merge节点。
-   按住Alt点击线，可以在线中插入一个点，用于优化布线。
-   在连线的节点上按Shift+R可以重新排序线。
-   左键按住节点并摇晃，可以将节点从连线中断开。
-   shift+S：切换线的样式。

-   L：排序所有节点。
-   Shift+L：仅排序所选节点。
-   按住A并拖动某个节点，可以快速排序其之上或之下的所有节点。
-   R：隐藏或显示选中的节点。

## 封装
-   对于所选中的节点，按下Shift+C，可以将其转化为一个subnet节点（类似于封装）。
-   对于subnet节点，同样可以在Parameters面板的小齿轮里设置它的参数。
-   在subnet节点上右键，选择Create Digital Asset可以将其存储为Digital Asset，变成一个hda文件，此时就可以发送给其他人使用它了。

## 节点操作
-   Q：启用选中节点的By Pass
-   W：显示选中节点的Template
-   E：单击或框选择节点设置模板标志。释放键设置选定节点的标志。
-   R：单击或框选节点设置可选模板标志。释放键设置选定节点的标志。
-   T：设置Render Flag

# 三、其他

-   Network View最大化后，会自动在右侧显示节点的属性窗口，可以在选项中手动关闭，在`Tools - Show Parameter Dialog When Maximized`。
-   选择List mode，可以让显示方式更改为列表方式。