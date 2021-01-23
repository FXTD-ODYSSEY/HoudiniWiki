// console.log($(".title").text())


$(".menu__title").each(function () {
    $(this).attr("title", $(this).text())
    $(".menu").tooltip({
        track: true,
    })
});
$(".menu__title--collapse-text").each(function () {
    $(this).attr("title", $(this).text())
    $(this).tooltip({
        track: true
    })
})
$(".related").tooltip({
    track: true,
})

$(".link_container").each(function () {
    $(this)
})



// NOTE 将图片路径改为 jsdelivr 的 cdn 路径
var name = "FXTD-odyssey";
var repository = "HoudiniWiki";
var branch = "gh-pages"
var link = "//cdn.jsdelivr.net/gh/" + name + "/" + repository + "@" + branch

var host = window.location.host
if(host.startsWith("localhost")){
    $("img").each(function () {
        src = $(this).attr("src")
        $(this).attr("src",src.replace(link,host))
        src = $(this).attr("src")
    })
    $("video").each(function () {
        src = $(this).attr("src")
        $(this).attr("src",src.replace(link,host))
        src = $(this).attr("src")
    })
}
