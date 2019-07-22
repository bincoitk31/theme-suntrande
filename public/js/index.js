let clock = $('.count-down').FlipClock(43200, {
  countdown: true,
});


$('.abc-slick').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: $('#button-slider-left'),
  nextArrow: $('#button-slider-right'),
});

$('.slider-gallery').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $('.slick-arrow-left-gallery'),
  nextArrow: $('.slick-arrow-right-gallery'),
});

$('.slider-nav-wapprer').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  variableWidth: true,
  slidesToScroll: 3,
  prevArrow: $('#button-slider-nav-left'),
  nextArrow: $('#button-slider-nav-right'),
});

(function () {
  var click = document.querySelector('.menu-icon')
  click.addEventListener('click',handleClickShow)

  function handleClickShow() {
    document.getElementsByClassName('navbar-mobile-menu-0')[0].style.left = '0'
  }

  function handleClickHide() {
    document.getElementsByClassName('navbar-mobile-menu-0')[0].style.left = '-3000px'
    document.getElementsByClassName('nav-mobile-menu')[0].style.left = '-3000px'
  }
  
  var arrow = document.querySelector('.btn-x')
  arrow.addEventListener('click',handleClickHide)
})()

!(function () {
  var click = document.querySelector('li.next-tab')
  click.addEventListener('click',handleClickShow)

  function handleClickShow() {
    document.getElementsByClassName('nav-mobile-menu')[0].style.left = '0'
  }
  var clickClose = document.querySelector('.btn-left-nav')
  clickClose.addEventListener('click',handleClickHide)

  function handleClickHide() {
    document.getElementsByClassName('nav-mobile-menu')[0].style.left = '-3000px'
  }
  
})()




  