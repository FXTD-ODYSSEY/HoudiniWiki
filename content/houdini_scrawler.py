# -*- coding: utf-8 -*-
"""
collect Houdini wiki information
"""

from __future__ import division
from __future__ import print_function
from __future__ import absolute_import

__author__ = "timmyliang"
__email__ = "820472580@qq.com"
__date__ = "2021-01-13 21:01:56"

import os
import time
import requests
from bs4 import BeautifulSoup, element
from textwrap import dedent

DIR = os.path.dirname(__file__)
lang = "zh"
nodes_path = os.path.join(DIR, lang, "1_nodes")


def get_html(url):

    header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
        "Accept-Encoding": "gzip",
        "Accept-Language": "zh-CN,zh;q=0.9",
    }

    req = requests.get(url, headers=header, timeout=5)
    return str(req.content, "utf-8")


def generate_data():

    web_url = "https://www.sidefx.com/docs/houdini/"

    base_url = "http://127.0.0.1:48626/"

    html = get_html(base_url)
    soup = BeautifulSoup(html, "html.parser", from_encoding="utf-8")
    count = 0

    nodes = soup.find("div", {"id": "nodes-body"})
    for a in nodes.find_all("a"):
        title = a.text
        typ = title.split("-")[0].strip()
        desc = a.attrs["title"]
        href = os.path.dirname(a.attrs["href"])

        typ_path = os.path.join(nodes_path, typ)
        if not os.path.exists(typ_path):
            os.mkdir(typ_path)

        link = base_url + href
        web_link = web_url + href

        text = dedent(
            f"""
            ---
            title: "{typ}"
            description: "{title}"
            date: {time.strftime("%Y-%m-%d", time.localtime()) }
            draft: false
            collapsible: true
            weight: 1
            ---
            
            {web_link}
            
            """
        )
        text += desc

        with open(os.path.join(typ_path, "_index.md"), "w", encoding="utf-8") as f:
            f.write(text.strip())

        node_html = get_html(link)
        node_soup = BeautifulSoup(node_html, "html.parser")
        for li in node_soup.find_all("li", {"class": "item"}):

            a = li.find("a", {"class": "node"})
            if not a:
                continue
            summary = li.find("p", {"class": "summary"})
            node_summary = summary.text.replace("\n", " ") if summary else ""
            node_summary = node_summary.replace("'", "\\'")
            node_summary = node_summary.replace('"', '\\"')
            node_summary = node_summary.replace(":", "-")
            node_title = a.text.replace(":", "-")
            node_href = a.attrs["href"]
            # print("===================================")
            # print(node_title,node_href)

            node_md = node_href.replace(".html", ".md")
            node_md = os.path.basename(node_md)
            if node_md == "index.md":
                continue

            node_web_url = f"{web_link}/{node_href}"

            node_url = f"{link}/{node_href}"

            node_content = dedent(
                f"""
                ---
                title: {node_title}
                description: {node_summary}
                date: {time.strftime("%Y-%m-%d", time.localtime()) }
                draft: true
                ---
                    
                {node_web_url}
                
                """
            )

            folder = os.path.join(typ_path, "_official")

            if not os.path.exists(folder):
                os.mkdir(folder)

            path = os.path.join(folder, node_md)
            with open(path, "w", encoding="utf-8") as f:
                f.write(node_content.strip())


if __name__ == "__main__":
    # import os
    # text = "nodes/obj/index.html"
    # print(os.path.dirname(text))
    generate_data()