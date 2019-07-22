
!(function () {
    let panels = document.querySelectorAll(".list-classify-filter")
    for (let i = 0; i < panels.length; i++) panels[i].addEventListener("click", handleClickPanel);
    function handleClickPanel(event) {
        event.stopPropagation();
        if (this.classList.contains("active")) {
            this.classList.remove("active");
            this.querySelector(".list-title-category").classList.remove("changed");
            this.querySelector(".list-title-category").classList.add("add-dele");
            
            // let panelChilds = this.querySelectorAll(".panel");
            // for (let i = 0; i < panelChilds.length; i++) panelChilds[i].classList.remove("active")
        } else {
            this.classList.add("active");
            this.querySelector(".list-title-category").classList.remove("add-dele");
            this.querySelector(".list-title-category").classList.add("changed");
            
        }
    }
})();

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    let z = $(window).scrollTop();
    let headerHeight = $(document).height()-$("#height-content").height() - document.getElementById("footer").clientHeight;
    let fixtop = $(window).scrollTop() - headerHeight + $("#list-head").height();
    if(fixtop <= 0) {
        document.querySelector(".sidebar-cate-in").style.transform = `translateY(-${z}px)`;

    }
    let footerHeight = document.getElementById("footer").clientHeight;
    let diff = ($(window).scrollTop() + window.innerHeight) - ($(document).height() - footerHeight)+140;
    if (diff >= 0) {
        document.querySelector(".sidebar-cate-in").style.transform = `translateY(-${diff}px)`;
    } 
};


function handleOver(element) {
  let productVariantId = element.attributes["data-product-variant-id"].value;
  let productId = element.attributes["data-product-id"].value;   
  
  let productTilte = element.attributes["data-product-title"].value; 
  
  let titleOfProduct = document.querySelectorAll(`span[data-product-id='${productId}'].item--wrap--tit`);
  for (let i = 0; i < titleOfProduct.length;++i) titleOfProduct[i].style.display = "none";
  let title = document.querySelector(`span[data-product-title="${productTilte}"]`);
  title.style.display = "initial";

  let imagesOfProduct = document.querySelectorAll(`img[data-product-id='${productId}']`); 
  
  // an het images cua product
  for (let i = 0; i < imagesOfProduct.length; i++) imagesOfProduct[i].style.display = "none";                        
  
  // hien anh ma hover vao thuoc tinh cua product variant
  let image = document.querySelector(`img[data-product-variant-id="${productVariantId}"]`);
  image.style.display = "initial";
}

!(function renderProductGrid() {
  let innerHTML = "";
  for (let i = 0; i < 20; i++) {
    let variantId = i*100;
    let titleId = i*1000;
    innerHTML += `
      <div class="item ">
      <div class="hover-add-to-cart">
        <div class="btn-add-to-cart">Thêm đến giỏ hàng</div>
      </div>
      <div class="item--wrap">
        <div class="item--wrap--image">
            <img data-product-id="${i}" src="//img.ltwebstatic.com/images2_pi/2019/03/29/15538531282331216666_thumbnail_405x552.jpg" data-product-variant-id="${variantId}" alt=""class="item--wrap--img">
            <img data-product-id="${i}" src="//img.ltwebstatic.com/images2_pi/2019/05/13/15577368281875253707_thumbnail_405x552.jpg" data-product-variant-id="${variantId + 1}" alt=""class="item--wrap--img">
        </div>
        <div class="item--wrap--title">
            <span class="item--wrap--tit" data-product-title="${titleId}" data-product-id="${i}">Áo sơ mi nút hồng Casual</span>
            <span class="item--wrap--tit" data-product-title="${titleId + 1}" data-product-id="${i}">Áo sơ mi nút xanh Casual</span>
        </div>
        <div class="price-like">
            <span class="item--wrap--price1">209.000₫</span>
            <span class="item--wrap--price2">500.000₫</span>
            <span class="item--wrap--like"><i class="fas fa-heart"></i></span>
        </div>
        <div class="item--wrap--switchColor">
          <div class="setColor">
            <div class="color-pink" data-product-id="${i}" data-product-variant-id="${variantId}" data-product-title="${titleId}" onmouseover="handleOver(this)"></div>
            <div class="color-green" data-product-id="${i}" data-product-variant-id="${variantId+1}" data-product-title="${titleId+1}" onmouseover="handleOver(this)"></div>
          </div>
        </div>
      </div>
    </div>

    `
  }
// <img src="//img.ltwebstatic.com/images2_pi/2019/05/07/15572186762976006570.jpg" alt="">
{/* <span class="color-green" data-product-id="${i}" data-product-variant-id="${variantId + 1}" data-product-title="${titleId + 1}" onmouseover="handleOver(this)">
            <a href="#">
              <img src="//img.ltwebstatic.com/images2_pi/2019/04/17/15554801582312518569.jpg" alt="">
            </a>
           </span> */}
  document.getElementById("product-grid").innerHTML += innerHTML;
})();
                             
(function () {
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


