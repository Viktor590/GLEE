$(function () {

   $('.user__nav-btn').on('click', function () {
   $('.menu__list').toggleClass('menu__list--active');
 });

  $('.product-page__related-cart').slick({
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});

  $('.product-page__tabs-item').on('click', function(e){
    e.preventDefault();
    $('.product-page__tabs-item').removeClass('product-page__tabs-item--active');
    $(this).addClass('product-page__tabs-item--active');
    
    $('.product-page__content-item').removeClass('product-page__content-item--active');
    $($(this).attr('href')).addClass('product-page__content-item--active');
  });

  $('.product-page__dscr-input').styler();

  $('.product-page__slider-thumb').slick({
    asNavFor: '.product-page__slider-big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false
  });
  $('.product-page__slider-big').slick({
    asNavFor: '.product-page__slider-thumb',
    draggable: false,
    arrows: false
  });

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g id="surface1"> <path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
  });


  $('.shop-page__input').ionRangeSlider({
    type: "double",
    prefix: "$",
     onStart: function (data){
      $('.shop-page__from').text(data.from);
      $('.shop-page__to').text(data.to); 
     },
     onChange: function (data) {
      $('.shop-page__from').text(data.from);
      $('.shop-page__to').text(data.to);  
     },
  });
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  const mixerProducts = mixitup('.products-item__content-inner', {
    selectors: {
      control: '.products-item__btn'
    }
  });
  const mixerDesign = mixitup('.design-inner', {
    selectors: {
      control: '.design-filter__btn'
    }
  });


});