// console.log($(".title").text())

function UrlExists(url, cb) {
    jQuery.ajax({
        url: url,
        dataType: 'text',
        type: 'GET',
        complete: function (xhr) {
            if (typeof cb === 'function')
                cb.apply(this, [xhr.status]);
        }
    });
}

_tooltip_func = function (index, elem) {
    description = $(elem).attr("description")
    $(elem).attr("title", $(elem).text())
    this.text = $(elem).text() + "<br>" + description

    href = $(this).attr("href")
    if (!href) return
    links = href.split("/")
    post_id = links[links.length - 2]
    host = window.location.host

    this.cover = "//" + host + "/posts/" + post_id + "/cover.png"
    fn = function(xhr) {
        status = xhr.status
        content = status == 200 ? '<img src="' + this.cover + '" />' + this.text : this.text
        $(this).tooltip({
            content,
            track: true,
        })
    }
    $.ajax({
        url: this.cover,
        dataType: 'text',
        type: 'GET',
        complete: fn.bind(this)
    });


}

$(".menu__title").each(_tooltip_func);
$(".menu__title--collapse-text").each(_tooltip_func)
$(".related").tooltip({
    track: true,
})

$(".link_container").each(function () {
    $(this)
})



// NOTE 将图片路径改为 jsdelivr 的 cdn 路径
var name = "FXTD-ODYSSEY";
var repository = "HoudiniWiki";
var branch = "gh-pages"
var link = "cdn.jsdelivr.net/gh/" + name + "/" + repository + "@" + branch

var host = window.location.host
var href = window.location.href

if (host.startsWith("localhost") || href.startsWith("file")) {
    $("img").each(function () {
        src = $(this).attr("src")
        src = src.replace(link, host)
        src = src.replace("https", "http")
        $(this).attr("src", src)

        src = $(this).attr("data-src")
        if(src){
            src = src.replace(link, host)
            src = src.replace("https", "http")
            $(this).attr("data-src", src)
        }
    })
    $("video").each(function () {
        src = $(this).attr("src")
        src = src.replace(link, host).replace("https", "http")
        $(this).attr("src", src)
    })
}

// NOTE lazyload
// $("img.lazyload").lazyload();
lazyload();