$(".menu__title").each(function(){$(this).attr("title",$(this).text())
$(".menu").tooltip({track:true,})});$(".menu__title--collapse-text").each(function(){$(this).attr("title",$(this).text())
$(this).tooltip({track:true})})
$(".related").tooltip({track:true,})
$(".link_container").each(function(){$(this)})
var name="FXTD-odyssey";var repository="HoudiniWiki";var branch="gh-pages"
var link="//cdn.jsdelivr.net/gh/"+name+"/"+repository+"@"+branch
var host=window.location.host
var location=window.location
if(host.startsWith("localhost")||location.startsWith("file")){$("img").each(function(){src=$(this).attr("src")
$(this).attr("src",src.replace(link,host))
src=$(this).attr("src")})
$("video").each(function(){src=$(this).attr("src")
$(this).attr("src",src.replace(link,host))
src=$(this).attr("src")})}