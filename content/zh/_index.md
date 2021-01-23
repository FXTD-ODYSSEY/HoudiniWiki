---
title: Houdini 百科
description: Houdini 总结 & 经验
date: 2021-1-2T04:15:05+09:00
draft: false
# updatesBanner: "Banner - &nbsp; [Hugo ZDoc theme](https://github.com/zzossig/hugo-theme-zdoc) &nbsp; just arrived"
landing:
  height: 500
  image: logo.png
  title:
    - Houdini 百科
  text:
    - Houdini 总结 & 经验
  titleColor:
  textColor:
  spaceBetweenTitleText: 25
  buttons:
    - link: 1_learning
      text: 进入百科
      color: primary
    # - link: updates/help/
    #   text: 使用手册
    #   color: default
  # backgroundImage: 
  #   src: images/landscape.jpg
  #   height: 600


sections:
  - bgcolor: teal
    type: card
    description: |
      Houdini 软件的节点流非常灵活，一个效果有很多不同的方案来实现，我希望通过这个网站帮助我将知识分门别类，快速搜索到我想要的知识点。 
      同时将很多不同的教程知识点搜集整理到一起，让知识脉络更加清晰。
    header: 
      title: 建站初衷
      hlcolor: "#8bc34a"
      color: '#fff'
      fontSize: 32
      width: 220
    cards:
      - subtitle: 快速搜索
        subtitlePosition: center
        description: <center>基于 Fuse.js 实现全站模糊搜索</center>
        image: images/section/processor.png
        color: white
      - subtitle: 写作便利
        subtitlePosition: center
        description: <center>基于 Markdown 编写</center>
        image: images/section/keyboard.png
        color: white
      - subtitle: 分类整理
        subtitlePosition: center
        description: <center>利用 Hugo 强大的 taxonomies 特性</center>
        image: images/section/root-server.png
        color: white
  - bgcolor: DarkSlateBlue
    type: normal
    description: "Houdini 软件学习汇总整理平台，致力于将知识脉络整理清楚，方便以后查阅学习"
    header:
      title: 基于 Hugo 构建
      subtitlePosition: center
      hlcolor: DarkKhaki
      color: "#fff"
      fontSize: 32
      width: 340
      textAlign: center
    body:
      subtitle: 生成快速高效，可扩展性很强，写作灵活
      subtitlePosition: left
      description: 本静态网站在 [ZDoc](https://github.com/zzossig/hugo-theme-zdoc) 主题基础上进行了部分修改构建而成 <br> 欢迎到 Github 上贡献属于的你的 Houdini 学习记录 <a href="https://github.com/FXTD-ODYSSEY/HoudiniWiki"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path></svg></a> 
      color: white
      image: /hugo.svg
      imagePosition: left
      
footer:
  sections:
    - title: 智伤帝个人
      links:
        - title: 博客
          link: https://blog.l0v0.com/
        - title: Github
          link: https://github.com/FXTD-ODYSSEY
        - title: bilibili
          link: https://space.bilibili.com/12895307
        - title: Wiki
          link: https://wiki.l0v0.com/
    - title: Houdini 官方文档
      links:
        - title: 官方文档
          link: https://www.sidefx.com/docs/houdini/
        - title: Python 编程
          link: https://www.sidefx.com/docs/houdini/hom/intro.html
        - title: Python hou 参考文档
          link: https://www.sidefx.com/docs/houdini/hom/hou/index.html
        - title: 官方资源
          link: https://www.sidefx.com/docs/
    - title: Houdini 官方资源
      links:
        - title: Houdini Youtube 官方
          link: https://www.youtube.com/channel/UCegWLyW4CYzph4dYW-gYy0g
        - title: 官方视频教程
          link: https://www.sidefx.com/learn/
        - title: 官方论坛
          link: https://www.sidefx.com/forum/
    - title: Houdini 学习资源
      links:
        - title: cgwiki
          link: https://www.tokeru.com/cgwiki/
        - title: Rohan Dalvi
          link: https://www.youtube.com/channel/UCfGN9OlJF9KakdyUK04M3cA
        - title: Junichiro Horikawa
          link: https://www.youtube.com/channel/UC5NStd0QmACnWs9DzqJ3vHg
        - title: Entagma
          link: https://www.youtube.com/channel/UCWu6SQmC6nAZ-reuj3lF2eQ
  contents: 
    align: left
    applySinglePageCss: false
    markdown:
      |
      ## Houdini Wiki
      Copyright © 2020. All rights reserved.

---
