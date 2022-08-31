---
title: Game Character Rigging with Houdini
author: 智伤帝
description: Houdini 绑定教程
date: 2022-7-7
pan: 
video: 
weight: 1
slug: 8b770bb6
version: Houdini 17
producer: ABOUTCG
level: beginner
tags:
 - ࠁHoudini/rigging
 - ࠒ视频教程
pipeline:
  - rigging
nodes:
  - SOP
---


- 1. Common Nodes in Use
    - houdini 的骨骼会自动朝向下一个骨骼
    - 在 正交视图 创建骨骼
    - 在 Rigging shelf 可以点击 Bone 创建骨骼
    - alt + w 可以打开批量改名窗口
- 2. Common Nodes in Use 02
    - houdini 的 null node 等价于 maya locator
    - null 节点可以点击进去修改显示效果
    - ![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/8b770bb6/44d37d6094a56f04f189dd17147b5441.png)
    - 使用 Shelf 的 bone 工具可以用滚轮调整创建的骨骼数量
    - 可以用 python 代码批量生成控制器
- 3. Common Nodes in Use 03
    - 在创建 Bone 上可以设置 IK 创建
    - ![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/8b770bb6/a0661b6f89cffdf307ffbd196e1fd10c.png)
    - 可以获取 bone length 让 locator 一直在末端的骨骼位置上
    - ![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/8b770bb6/f654bf0df338746260f64c7d03740ad9.png)
- 3. IK Legs 02
    - 使用 Modify Shelf 可以点击 Mirror 将绑定系统镜像
    - ![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/8b770bb6/2239f35e6e901496684a3fd5f9fb8376.png)
        
- 5. FK Spine 02
    - 通过 Blend 节点可以让 Spine 的转动不影响到 Hip
    - ![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/8b770bb6/c3ca075a654dca72a2c3d08121198713.png)
- 6. FK Arms
    - 在骨骼上按 ctrl +左键可以在中间切分骨骼
- 7. FK Arms 02
    - shift + Z 可以打开 Group 窗口 可以在上面配置隐藏的分组。
    - ![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/8b770bb6/7c5bd09eee9c36c82d8bed0527670e56.png)
- 1. Overview of Houdini's Bi-Harmonic capture system
    - 蒙皮需要模型是 water tighted 的
    - 选中模型然后选中控制器最高层级，Houdini 会用 Bi-Harmonic capture 自动计算权重关联
    -   ![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/8b770bb6/67c4a588f568cc1b01c1ca39caa4b604.png)
- 2. Manual weighting of points
    - Houdini 可以用 edit capture weight 的方式选中顶点然后挪动骨骼的红色 handle 调整权重
    - ![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/8b770bb6/d71eb27a039bf4e70cd1de8521637862.png)
    - 注意: 需要拖拽多次才能让权重彻底转移到相应的权重上(Houdini 会做 average 运算)
- 3. The Paint Skin Weights tool.mp4
    - 也可以点击 spreadsheet 在编辑器中编辑顶点权重
    - ![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/8b770bb6/6e0a2dcd2878a64b4fc330839db1439b.png)
    - 点击工具架上的 paint capture layer 可以生成绘制权重的节点
    - ![image](https://cdn.jsdelivr.net/gh/FXTD-ODYSSEY/HoudiniWiki@gh-pages/posts/8b770bb6/4b135c10d6f1ddd3c2d96029d0783317.png)
    - shift 加 右键可以放大 radius



 Python - End Null Tool
```python
import hou
selections = hou.selectedNodes()
node = selections[-1]

parent_node = hou.Node.parent(node)

end_null = parent_node.createNode("null","END_{0}".format(node.name()))

end_null.setFirstInput(node)
end_null.parm('keeppos').set(1)
end_null.parm('rOrd').set(node.evalParm('rOrd'))
end_null.parm('tz').set(-node.evalParm('length'))

end_null.parm('geoscale').set(0.2)
end_null.moveToGoodPosition()
end_null.parm("controlType").set(2)
end_null.setColor(hou.Color(0.25,0.25,0.25))
end_null.setUserData("nodeShape","circle")

end_null.parm('picking').set(0)
end_null.parm('dcolorr').set(0.25)
end_null.parm('dcolorg').set(0.25)
end_null.parm('dcolorb').set(0.25)
```

 Python - FK Control Tool

```python
import hou
import itertools
bones = hou.selectedNodes()

for bone in bones:
    parent_node = hou.Node.parent(bone)
    fk = parent_node.createNode("null","CTRL_{0}".format(bone.name()))
    fk.setFirstInput(bone)
    fk.parm("keeppos").set(1)

    fk.setFirstInput(bone.inputs()[0])
    fk.moveParmTransformIntoPreTransform()
    fk.parm("rOrd").set(bone.evalParm('rOrd'))

    for axis in 'xyz':
        attr = "r{0}".format(axis)
        exp = 'ch({0}/{1})'.format(bone.relativePathTo(fk),attr)
        bone.parm(attr).setExpression(exp)

    fk.moveToGoodPosition()
    fk.parm("controltype").set(1)
    fk.setColor(hou.Color(0.7655,1,0.576))
    fk.setUserData("nodeShape","circle")


    for attrs in itertools.product(('t','s','p','pr'),'xyz'):
        fk.parm("".join(attrs)).lock(1)
      
    bone.parm('picking').set(0)
    for color in 'rgb':
        bone.parm('dcolor{0}'.format(color)).set(0.6)

    bone_group = hou.Node.addNodeGroup(parent_node,"BONES")
    ctrl_group = hou.Node.addNodeGroup(parent_node,"CONTROLS")

    ctrl_group.addNode(fk)
    bone_group.addNode(bone)
    
    
```

 Python - Rig Helper

- 按钮上使用 `hou.pwd().hdaModule().xxx()`可以 call hda 内部的 python 代码
- 通过  `hou.pwd().evalParm('xxx')` 可以获取界面上的数据实现自定义输入

```python
import hou
import itertools
def ZeroAll():
    # This function definition sets t: and r: transform parms to zero
    # if they are unlocked

    # Grab a reference to the list of nodes on the HDA parm
    fkControls = hou.pwd().evalParm('fkNodes').split()
    
    for fk in fkControls:
        fk = hou.node(fk)
        
        # Set the rotation to zero if it is NOT locked
        for parts in itertools.product('rt','xyz'):
            attr = "".join(parts)
            if not fk.parm(attr).isLocked():
                fk.parm(attr).set(0)

def HideAll():
    # This function hides the control objects in the
    # viewport

    fkControls = hou.pwd().evalParm('fkNodes').split()
    
    for fk in fkControls:
        fk = hou.node(fk)
        fk.parm('tdisplay').set(1)
        fk.parm('display').set(int(fk.evalParm('display') != 1))
            
def KeyAll():
    # Create a keyframe on the nodes listed in the HDA

    fkControls = hou.pwd().evalParm('fkNodes').split()
    
    for fk in fkControls:
        fk = hou.node(fk)
        
        # Create an empty Keyframe object
        k = hou.Keyframe()
        k.setSlopeAuto(True)
        k.setInSlopeAuto(True)
        
        for parts in itertools.product('rt','xyz'):
            attr = "".join(parts)
            if not fk.parm(attr).isLocked():
                k.setValue(fk.evalParm(attr))
                fk.parm(attr).setKeyframe(k)

```
