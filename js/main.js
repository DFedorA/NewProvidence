$(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(450).fadeOut('slow');
  });


var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 500,
        modifier: 5,
        slideShadows : false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  var swiper = new Swiper('.swiper-container_2', {
      effect: 'flip',
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination_2',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

$('.slider').slick({
    prevArrow:'<i class="fas fa-chevron-left"></i>',
    nextArrow:'<i class="fas fa-chevron-right"></i>',

});

var toggle = document.getElementById('container_2');
var toggleContainer = document.getElementById('toggle-container');
var toggleNumber;

toggle.addEventListener('click', function() {
    toggleNumber = !toggleNumber;
    if (toggleNumber) {
        toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
        toggleContainer.style.backgroundColor = 'dodgerblue';
    } else {
        toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
        toggleContainer.style.backgroundColor = 'dodgerblue';
    }
    console.log(toggleNumber)
});