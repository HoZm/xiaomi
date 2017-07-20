$(function () {
    $('.list li').hover(function () {
        $(this).find('div').stop().slideDown();
    },function () {
        $(this).find('div').stop().slideUp();
    })
    $('.listo li').hover(function () {
        $(this).find('div').stop().slideDown();
    },function () {
        $(this).find('div').stop().slideUp();
    })
})
