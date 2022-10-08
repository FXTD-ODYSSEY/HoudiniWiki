---
title: 操作 - 场景视图面板
author: 御琪幽然
description: 
date: 2022-10-08
pan: 
video: 
weight: 1
slug: ec4c6289
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
显示当前场景的视图。

# 二、操作&快捷键

## 切换
-   Alt+1（小键盘1）：切换当前区域显示为Scene View。

## 操作
-   Tab：打开创建菜单，在Network View中则会打开其对应的创建菜单。
-   C：打开滑动轮盘，有一些常用操作。
-   D：打开选项菜单

## 导航模式
在Scene View中，默认进入了导航模式（Navigation），此时的快捷键操作有：

-   左键：（tumbles）旋转。
-   中键：（pans）平移。
-   右键：（dollies）缩放。
-   Ctrl+Alt+左键：（box-zooms）缩放至框选范围。
-   Ctrl+Right：（zooms）调整FOV？（暂时不确定具体作用）
-   空格+Ctrl+左键：（tilts）旋转视图。
-   按住L：（alternate tumble, dolly, and zoom）用以切换旋转、平移、缩放。（暂时用不出来效果）
-   M或Alt+M：（First Person Navigation）进入第一人称导航模式。

## 视图
-   1：默认视图。
-   2：顶视图、俯视图。
-   3：前视图、后视图。
-   4：左视图、右视图。
-   5：UV视图。
-   空格：返回到导航模式。
-   G：导航模式下，将视图调整至与所选物体适合，如未选择物体则将视图重置回默认位置。
-   H：导航模式下，将视图重置回默认位置。
-   W：切换当前显示模式至线框模式，再次点击将变回之前所选的显示模式。
-   Shift+W：显示或关闭表面框线。
-   B：切换为类似于3DsMax的四视口模式。

## 编辑
-   Enter：进入物体编辑模式。
-   S：物体编辑模式下，可以选择物体，再次按下S确认选择。
-   D：打开显示设置界面，在Network View中则会打开其对应的显示设置界面。

-   T：移动。
-   R：旋转。
-   E：缩放。

-   按住Shift调节物体的尺寸时，会从两侧向中心缩放；调节物体位置或旋转物体时，变动值会更小。
-   在选择元素并显示操控手柄时，可以按M或者右键选择Align Handle，以修改操控手柄的参考系。

# 三、其他