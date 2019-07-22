// if(document.readyState == 'loadding') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }

// function ready() {
//     var addToCartButtons = document.getElementsByClassName('goodsd-btn-add')[0]
//     addToCartButtons.addEventListener('click',addToCartClicked)
// }

// function addToCartClicked(event) {
//     var title = document.getElementsByClassName('name-product')[0].innerText
//     var size = document.getElementsByClassName('tooltip-product active')[0].children[0].innerText
//     var price = document.getElementById('total-money').innerText
//     var image = document.getElementsByClassName('vertical-wrap')[0].children[0].src
//     var quantity = document.getElementsByClassName('quantity')[0].value
//     var color = document.getElementsByClassName('color-product-detail')[0]
//     console.log(title,price,image,size,quantity,color)
// }

// function addItemToCart(title,price,image,size,quantity,color) {
//     var cartRow = document.createElement('tr')
//     cartRow.classList.add('bag-title-tr2')
//     var cartItem = getElementsByClassName('cart-items')[0]
//     var cartRowContents = `
//     <tr class="bag-title-tr2 bag-no-normal-tr2 j-gd-detail-tr">
//             <td class="col-xs-6 gd-detail">
//                 <div class="gd-img">
//                     <img src="//img.ltwebstatic.com/images2_pi/2019/05/17/15580798893026202420_thumbnail_405x552.jpg" alt="">
//                 </div>
//                 <div class="gd-des">
//                     <a href="#">
//                         Đầm nút màu trơn Khaki Casual
//                     </a>
//                     <div class="gd-size">
//                         <span>Kích Thước : M</span>
//                     </div>
//                     <div class="gd-color">
//                         <span>Màu:</span>
//                         <span></span>
//                     </div>
//                 </div>
//                 <div class="gd-operate">
//                     <a href="#">Chỉnh sửa</a>
//                     <a href="#">Thêm sản phẩm vào yêu thích</a>
//                     <a href="#">Xóa</a>
//                 </div>
//             </td>
//             <td class="col-xs-2 gd-price">
//                 <div class="table-cell">
//                     <span class="goods-price">255.000đ</span>
//                 </div>
//             </td>
//             <td class="col-xs-2 gd-num">
//                     <div class="table-cell">
//                             <div class="c-opt-qty">
//                                     <div class="number-input" id="item-id">
//                                         <button class="minus"></button>
//                                         <input class="quantity item-id" min="0" name="quantity" value="1" type="number" step="1">
//                                         <button class="plus"></button>
//                                     </div>
//                             </div>
//                     </div>
//             </td>
//             <td class="col-xs-2 gd-total">
//                 <div class="table-cell">
//                     <span>255.000đ</span>
//                 </div>
//             </td>
//             </tr>
//             `
//     cartRow.innerHTML = cartRowContents
//     cartItem.append(cartRow)
// }

$('.cart-slick').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: $('#button-slider-left-cart'),
    nextArrow: $('#button-slider-right-cart'),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      }
    ]
});

!(function () {
let click = document.getElementById('show-gifts')
click.addEventListener('click',handleClickShow)

function handleClickShow(){
    let checkActive = document.getElementsByClassName('full-gift-content')[0].classList.contains('active')
    if(checkActive) {
        document.getElementsByClassName('full-gift-content')[0].classList.remove('active')
        document.getElementById('gift-hidden').style.display = "none"
        document.getElementById('show-gifts').style.transform = "rotate(180deg)"
    } else {
        document.getElementsByClassName('full-gift-content')[0].classList.add('active')
        document.getElementById('gift-hidden').style.display = "block"
        document.getElementById('show-gifts').style.transform = "rotate(0deg)"
    }

}

})();

$('.minus').click(function(e) {
    var old = $('.quantity.item-id').val()
    $('.quantity.item-id').val(parseInt(old)-1)
    if(parseInt($('.quantity.item-id').val()) < 1) {
      $('.quantity.item-id').val("1");
    }
    return Total()
  });

$('.plus').click(function(e){
    var old = $('.quantity.item-id').val()
    $('.quantity.item-id').val(parseInt(old)+1)
    return Total()
  });

function Total(){
  var price = $('.goods-price').text().replace(/\./g,'')
  var quantity = $('.quantity.item-id').val().replace(/\./g,'')
  var totalMoney = parseInt(price)*parseInt(quantity)
  $('#total-cart').text(formatMoney(totalMoney)+"₫")
  $('#total-all-cart').text(formatMoney(totalMoney)+"₫")
};

$('input.quantity').keyup(function(){
  var price = $('.goods-price').text().replace(/\./g,'')
  var quantity = $('.quantity.item-id').val().replace(/\./g,'')
  var totalMoney = parseInt(price)*parseInt(quantity)
  $('#total-cart').text(formatMoney(totalMoney)+"₫")
  $('#total-all-cart').text(formatMoney(totalMoney)+"₫")
})


  // money format
function formatMoney(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}