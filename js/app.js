
$('.img-contacts').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
});

var contacts_slider = document.querySelectorAll(".contacts__items");
for (var i = 0; i < contacts_slider.length; i++) {
    var contacts_item = contacts_slider[i].querySelectorAll(".contacts__item");
    if (contacts_item.length > 1) {
        $(contacts_slider[i]).slick({
            slidesToScroll: 1,
            autoplay: false,
            speed: 500,
            slidesToShow: 1,
            dots: false,
            fade: true,
            prevArrow: '<button class="prev"></button>',
            nextArrow: '<button class="next"></button>',
        });
    }
    else{
        $(contacts_slider[i]).slick({
            slidesToScroll: 1,
            autoplay: false,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            dots: false,
            fade: true,
        });
    }
}
var contacts_slider2 = document.querySelectorAll(".contacts__items2");
for (var i = 0; i < contacts_slider2.length; i++) {
    var contacts_item2 = contacts_slider2[i].querySelectorAll(".contacts__item");
    if (contacts_item2.length > 1) {
        $(contacts_slider2[i]).slick({
            slidesToScroll: 1,
            autoplay: false,
            speed: 500,
            slidesToShow: 1,
            dots: false,
            fade: true,
            prevArrow: '<button class="prev2"></button>',
            nextArrow: '<button class="next2"></button>',
        });
    }
    else{
        $(contacts_slider[i]).slick({
            slidesToScroll: 1,
            autoplay: false,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            dots: false,
            fade: true,
        });
    }
}




