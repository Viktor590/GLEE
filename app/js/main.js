$(function () {
  
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


})