
$('.img-contacts').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
});
var contacts_slider = document.querySelector(".contacts__items-first");
    var contacts_item = contacts_slider.querySelectorAll(".contacts__item");
    if (contacts_item.length > 1) {
        $(contacts_slider).slick({
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
        $(contacts_item).slick({
            slidesToScroll: 1,
            autoplay: false,
            speed: 500,
            slidesToShow: 1,
            dots: false,
            fade: true,
        });
    }
    
var contacts_slider2 = document.querySelector(".contacts__items-first2");
    console.log(contacts_slider2);
    var contacts_item2 = contacts_slider2.querySelectorAll(".contacts__item");
console.log(contacts_item2);
console.log(contacts_item2.length);
    if (contacts_item2.length > 1) {
        $(contacts_slider2).slick({
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
        $(contacts_item2).slick({
            slidesToScroll: 1,
            autoplay: false,
            speed: 500,
            slidesToShow: 1,
            dots: false,
            fade: true,
        });
    }





