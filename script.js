$(".menu-btn").on('click', function () {
    $(this).toggleClass('active');
    $(".sm-menu__wrapper").toggleClass('open');
    $(".sm-menu__item").toggleClass('open');
    $("body").toggleClass("active");
});


// ページ内ジャンプ時、ハンバーガーメニューを消す

$(".sm-menu__link").on('click', function () {
    $(".menu-btn").removeClass('active');
    $(".sm-menu__wrapper").removeClass('open');
    $(".sm-menu__item").removeClass('open');
    $("body").removeClass("active");

});

//ローディング画面

$(window).on("load", function () {
    $(".loading__img-wrapper").delay(800).fadeOut(600);
    $(".loading__bg").delay(1300).fadeOut(600);
});
setTimeout("stoploading()", 5000);
function stoploading() {
    $(".loading__bg").fadeOut(600);
}

// fvのテキストの位置調整

$(function () {
    var mvh = $('.fv__text--black').offset();
    $('.fv__text--white').offset({
        top: mvh.top,
        left: mvh.left
    });
})

$(window).resize(function () {
    var mvh = $('.fv__text--black').offset();
    $('fv__text--white').offset({
        top: mvh.top,
        left: mvh.left
    });
})

//お問い合わせメッセージ用

$(document).ready(function () {

    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe_dirFUPiargnPIbdkV_ELOfzdDkya6W1NaNKmxvzL3eARTQ/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    window.location.href = "thanks.html";
                },
                200: function () {
                    window.location.href = "error.html";
                }
            }
        });
        event.preventDefault();
    });

});