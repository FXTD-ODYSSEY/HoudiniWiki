function UrlExists(url,cb){jQuery.ajax({url:url,dataType:'text',type:'GET',complete:function(xhr){if(typeof cb==='function')
cb.apply(this,[xhr.status]);}});}
_tooltip_func=function(){text=$(this).text()
href=$(this).attr("href")
links=href.split("/")
post_id=links[links.length-2]
host=window.location.host
cover="//"+host+"/posts/"+post_id+"/cover.png"
UrlExists(cover,(status)=>{$(this).attr("title",text)
content=status===200?'<img src="'+cover+'" />'+text:text
$(".menu").tooltip({content:content,track:true,})})}
$(".menu__title").each(_tooltip_func);$(".menu__title--collapse-text").each(_tooltip_func)
$(".related").tooltip({track:true,})
$(".link_container").each(function(){$(this)})
var name="FXTD-ODYSSEY";var repository="HoudiniWiki";var branch="gh-pages"
var link="cdn.jsdelivr.net/gh/"+name+"/"+repository+"@"+branch
var host=window.location.host
var href=window.location.href
if(host.startsWith("localhost")||href.startsWith("file")){$("img").each(function(){src=$(this).attr("src")
$(this).attr("src",src.replace(link,host))
src=$(this).attr("src")})
$("video").each(function(){src=$(this).attr("src")
$(this).attr("src",src.replace(link,host))
src=$(this).attr("src")})}