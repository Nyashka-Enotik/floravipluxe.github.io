
$('.img-contacts').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
});



$('.vivoz').each(function(i, e){
    if ($(e).find('.vivoz__item').length > 1) {
        $(e).slick({
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            arrows: false,
        });
    }
})


