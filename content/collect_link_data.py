# -*- coding: utf-8 -*-
"""
collect the relink short code information to json data
for js request the data to generate the related link
"""

from __future__ import division
from __future__ import print_function
from __future__ import absolute_import


__author__ = "timmyliang"
__email__ = "820472580@qq.com"
__date__ = "2021-01-17 22:25:48"

import os
import re
import json
from codecs import open
from collections import defaultdict

DIR = os.path.dirname(__file__)
lang = "zh"
example_path = os.path.join(DIR, lang)
output_path = os.path.join(DIR, "..", "data", "links.json")


def main():
    output_data = defaultdict(dict)
    for dirpath, dirnames, files in os.walk(example_path):
        for fname in files:
            if not fname.endswith(".md"):
                continue
            elif "index.md" in fname:
                continue
            md_path = os.path.join(dirpath, fname)

            with open(md_path, "r", encoding="utf-8") as f:
                md = f.read()

            # NOTE 正则匹配 relink short code block
            config = md.split("---")[1]
            match = re.search(r"slug\d*:\d*(.*)", config)
            if not match:
                continue
            post_id = match.group(1).strip()
            match = re.search(r"title\d*:\d*(.*)", config)
            title = match.group(1).strip()
            # print(config)
            node_links = defaultdict(list)
            regx = r"""<[ ]*relink(?:"[^"]*"['"]*|'['"]*|.*?)+>(?:.|\n)*?<\D*\/\D*relink\D*>"""
            for i, relink in enumerate(re.findall(regx, md), 1):
                match = re.search(r">\}\}((?:.|\n)*?)\{\{<", relink)
                inner = match.group(1).strip()
                # print(inner)

                links = {"inner": inner}

                for link in re.findall(r"relink(.*?)\d*>\d*\}\}", relink):
                    links["id"] = "link_node_%s" % i
                    for section in link.split(" "):
                        if not "=" in section:
                            continue
                        key, value = section.split("=")
                        value = value.strip()
                        if value.startswith('"') and value.endswith('"'):
                            value = value[1:-1]
                        elif value.startswith("'") and value.endswith("'"):
                            value = value[1:-1]

                        links[key] = value

                nodes = links.pop("url", "")
                for node in nodes.split("|"):
                    if not node:
                        continue
                    node_links[node].append(links)

            path = dirpath.replace("\\", "/").split("content")[-1]
            for node, links in node_links.items():
                node = os.path.basename(node)
                node = node.split("#")[0]
                output_data[node][post_id] = {
                    "links": links,
                    "path": path,
                    "title": title,
                }

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(output_data, f, indent=4, ensure_ascii=False)
    # print(output_data)


if __name__ == "__main__":
    main()
