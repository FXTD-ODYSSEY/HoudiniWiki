// console.log($(".title").text())


$(".menu__title").each(function () {
    $(this).attr("title", $(this).text())
    $(".menu").tooltip({
        track: true,
    })
});
$(".related").tooltip({
    track: true,
})

$(".link_container").each(function () {
    $(this)
})

