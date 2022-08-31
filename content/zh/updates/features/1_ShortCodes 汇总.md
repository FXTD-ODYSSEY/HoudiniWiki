---
title: ShortCodes 汇总
author: 智伤帝
description: 网站支持的 Hugo ShortCodes 汇总
date: 2021-01-20
weight: 1
slug: 91d7f687
tags: 
  - ✒博客/HoudiniWiki
---

## 幻灯片

{{<revealjs theme="moon" progress="true">}}

# In the morning

___


## Getting up

- Turn off alarm
- Get out of bed

___

## Breakfast

- Eat eggs
- Drink coffee

---

# In the evening

___

## Dinner

- Eat spaghetti
- Drink wine

___

## Going to sleep

- Get in bed
- Count sheep

{{</revealjs>}}


{{<revealjs theme="moon" progress="true">}}

# In the morning

___


## Getting up

- Turn off alarm
- Get out of bed

___

## Breakfast

- Eat eggs
- Drink coffee

---

# In the evening

___

## Dinner

- Eat spaghetti
- Drink wine

___

## Going to sleep

- Get in bed
- Count sheep

{{</revealjs>}}


## columns 分栏

{{< columns >}} <!-- begin columns block -->
# Left Content
Lorem markdownum insigne...

<---> <!-- magic separator, between columns -->

# Mid Content
Lorem markdownum insigne...

<---> <!-- magic separator, between columns -->

# Right Content
Lorem markdownum insigne...
{{< /columns >}}

## attachmests

```
{{/*<attachmests />*/}}
```



## panel

{{% panel theme="danger" header="panel title" footer="asdasfq" %}}this is a panel text{{% /panel %}}

