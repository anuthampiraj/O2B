$(document).ready(function(){
    $('.about-box').slick({
        autoplay: false,
        autoplaySpeed:1000,
        dots: false,
        infinite: false,
        arrows: false,
        slidesToShow: 3,
        infinite:true,
        rows: 0
    }).on('setPosition', function (event, slick) {
     slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
  });