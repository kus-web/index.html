$(".humberger-icon").click(function() {
    $(this).toggleClass('active');
    $('.humberger-wrapper').toggleClass('open');
});
$('.humberger-wrapper a').click(function() {
    $('.humberger-icon').removeClass('active');
    $('.humberger-wrapper').removeClass('open');
});

$('.slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

function fadeAnime() {
    $('.fadeUpTrigger').each(function() {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
        }
    });
}

$(window).scroll(function() {
    fadeAnime();
});

function pageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $('#page-top').removeClass('downMove');
        $('#page-top').addClass('upMove');
    } else if ($('#page-top').hasClass('upMove')) {
        $('#page-top').removeClass('upMove');
        $('#page-top').addClass('downMove');
    }
    var wH = window.innerHeight;
    var footerPos = $('#footer').offset().top;
    if (scroll + wH >= (footerPos + 10)) {
        var pos = (scroll + wH) - footerPos + 10;
        $('#page-top').css('bottom', pos);
    } else if ($('#page-top').hasClass('upMove')) {
        $('#page-top').css('bottom', '10px');
    }
}

$(window).scroll(function() {
    pageTopAnime();
});

$('#page-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
