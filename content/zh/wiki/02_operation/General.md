---
title: 操作 - 通用
author: 御琪幽然
description: 
date: 2022-10-08
pan: 
video: 
weight: 1
slug: 56b5eba5
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

# 窗口与面板的操作

## 创建新窗口
-   Alt+Shift+W：打开新的浮动窗口。
-   Alt+Shift+F：打开新的Animation Editor窗口。
-   Alt+G：打开新的Material Palette窗口。

## 切换当前窗口（面板）显示内容
-   Alt+1（小键盘1）：切换为Scene View。
-   Alt+2（小键盘2）：切换为Network View。
-   Alt+3（小键盘3）：切换为Parameters。
-   Alt+4（小键盘4）：切换为Tree View。
-   Alt+5（小键盘5）：切换为Textport。
-   Alt+6（小键盘6）：切换为Animation Editor。
-   Alt+7（小键盘7）：切换为Material Palette。
-   Alt+8（小键盘8）：切换为Geometry Spreadsheet。
-   Alt+9（小键盘9）：切换为Render View。

# 修改配色
## 界面配色
### 切换颜色预设
菜单栏中：`Edit - Color Settings...`即可打开配色调整窗口。
在`Color Scheme`选项里，可以切换默认的深色主题（`Houdini Dark`）与浅色主题（`Houdini Light`）。

### 自定义配色
在右侧的`Download`按钮中，可以下载一些其他人分享的配色，但数量不多且年代久远，效果也一般般。
因此可以考虑自己修改配色方案，以达到自定义的效果。

首先，我们需要复制一份原本的文件作为模板来修改，打开`(Houdini安装路径)\houdini\config`目录，可以翻到`UIDark.hcs`和`UILight.hcs`两个文件。
这两个文件分别对应设置中的`Houdini Dark`和`Houdini Light`文件。
将该文件复制到`(我的文档)\(Houdini版本号)\config`路径下，修改其文件名和内容，重启Houdini后，即可使用修改后的配色方案。
该文件修改的复杂度相比于物体配色要高一些，此处暂不详细介绍。文件中存在一些英文注释的描述，可以尝试根据描述进行一定的猜测和修改。

## 视窗中物体的配色
### 切换颜色预设
在视窗中按`D`即可打开显示选项窗口，点击`Background`选项卡，在`Color Scheme`中即可调整不同的预设。

### 自定义配色
我们可以通过自己修改配色文件的方式，以达到自定义某些区域颜色的目的。

配色文件在`(Houdini安装路径)\houdini\config`目录下，一共有四个文件（建议开启文件后缀名显示功能，以便于区分各个文件）：
- 3DSceneColors
- 3DSceneColors.bw
- 3DSceneColors.dark
- 3DSceneColors.light
其中，`3DSceneColors`与`3DSceneColors.dark`文件中的内容是完全一致的，可能`3DSceneColors`文件是用于备份的。
而`.bw`后缀对应为`Grey`选项的配色，`.dark`和`.light`则各自对应`Dark`和`Light`选项的配色。

（在修改文件之前，建议备份源文件，以保证修改失误时可以轻松还原回原来的效果。）
用记事本打开想要修改的文件，即可看到类似于以下的内容：
`BackgroundColor:	0.00 0.00 0.00	# background color `
内容的含义为：`颜色名称: 颜色值 #备注内容`，三个部分中用制表符（Tab键）进行分隔。
每个部分的具体信息如下：
- 颜色名称：不能修改，以`:`符号结尾，是Houdini中找到各种颜色的依据。
- 颜色值：可以修改，一共有三种方式
	- 三个数字构成的RGB值，数值范围为0.00~1.00，例如`0.50 0.50 0.50`
	- 引用其他颜色的值，方式为一个`@`后面跟上要引用的颜色名称，例如`@BackgroundColor`
	- Alpha方式，可能是设置透明度，例如`ALPHA 0.2`
- 备注内容：跟在一个`#`符号后，这部分内容在文件里多为描述当前行颜色是用于哪些地方的，一般来说没必要修改。当然，你也可以自己添加一些内容，便于自己定位各种颜色。

修改完成后，保存该文件，重新启动Houdini，即可应用修改后的配色方案了。