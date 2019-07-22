

$('.swiper-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('#slick-prev-1'),
    nextArrow: $('#slick-next-1'),
    arrows: true,
    fade: true,
    infinite: true,
    asNavFor: '.thumbnail-wrapper',
    draggable: false
  });
$('.thumbnail-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    vertical: true,
    asNavFor: '.swiper-wrapper',
    dots: false,
    focusOnSelect: true,
  });

$('.minus').click(function(e) {
    var old = $('.quantity.item-id').val();
    $('.quantity.item-id').val(parseInt(old)-1);
    if(parseInt($('.quantity.item-id').val()) < 1) {
      $('.quantity.item-id').val("1");
    }
    return Total();
  });

$('.plus').click(function(e){
    var old = $('.quantity.item-id').val();
    $('.quantity.item-id').val(parseInt(old)+1);
    return Total();
  });

function Total(){
  var price = $('.price-product-origin').text().replace(/\./g,'');
  var quantity = $('.quantity.item-id').val().replace(/\./g,'');
  var totalMoney = parseInt(price)*parseInt(quantity);
  $('#total-money').text(formatMoney(totalMoney)+"₫");
};

$('input.quantity').keyup(function(){
  var price = $('.price-product-origin').text().replace(/\./g,'');
  var quantity = $('.quantity.item-id').val().replace(/\./g,'');
  console.log(quantity);
  var totalMoney = parseInt(price)*parseInt(quantity);
  $('#total-money').text(formatMoney(totalMoney)+"₫");
})


  // money format
function formatMoney(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

//slider
$('.abc-slick').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: $('#button-slider-left-product'),
  nextArrow: $('#button-slider-right-product'),
                });

  // Zoom picture
  $(document).ready(function(){
    $('#zoom-pic-1').zoom({
      url: 'http://img.ltwebstatic.com/images2_pi/2019/02/22/15508219562619793102_thumbnail_600x799.jpg',
      magnify: 2
    })
    $('#zoom-pic-2').zoom({
      url: 'http://img.ltwebstatic.com/images2_pi/2019/02/22/15508219582023914759_thumbnail_600x799.jpg',
      magnify: 2
    })
    $('#zoom-pic-3').zoom({
      url: 'http://img.ltwebstatic.com/images2_pi/2019/02/22/15508219553138668449_thumbnail_600x799.jpg',
      magnify: 2
    })
    $('#zoom-pic-4').zoom({
      url: 'http://img.ltwebstatic.com/images2_pi/2019/02/22/15508219571421683781_thumbnail_600x799.jpg',
      magnify: 2
    })
  });

(function () {
  let chosseSize = document.querySelectorAll('.tooltip-product');
  for (let i = 0; i < chosseSize.length; i++) {
    chosseSize[i].addEventListener('click', handleChosseSize)
  }

  function handleChosseSize() {
    let chosseSize = document.querySelectorAll('.tooltip-product');
    for (let i = 0; i < chosseSize.length; i++) {
      chosseSize[i] && chosseSize[i].classList.remove('active')
    }
    let checkClass = this.classList.contains('active')
    if (!checkClass) {
      this.classList.add('active');
    }
  }
})()

!(function () {
  var click = document.querySelector('.menu-icon')
  click.addEventListener('click',handleClickShow)

  function handleClickShow() {
    document.getElementsByClassName('nav-mobile-menu')[0].style.left = '0'
  }
  var clickClose = document.querySelector('.btn-close-nav')
  clickClose.addEventListener('click',handleClickHide)

  function handleClickHide() {
    document.getElementsByClassName('nav-mobile-menu')[0].style.left = '-3000px'
  }
  
  var arrow = document.querySelector('.btn-left-nav')
  arrow.addEventListener('click',handleClickHide)
})()