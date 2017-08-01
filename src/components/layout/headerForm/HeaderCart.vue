<template>
  <div id="header-cart">
    <div class="cart-box mycart">
      <a href="cart.html" class="header-cart item">
        <i class="fa fa-shopping-cart"></i>
        Giỏ Hàng
        <span class='cart-count total'>0</span>
      </a>
      <a href="wishlist.html" class="header-cart item">
        <i class="fa fa-heart-o"></i>
        Yêu Thích
        <span class='cart-count'>0</span>
      </a>
    </div>
  </div>
</template>
<style scoped>

  .header-cart {
    /* border: 2px solid #fff; */
    padding: 5px 0px 5px 0px;
    border-radius: 4px;
    margin-left: 1px;
    letter-spacing: .7px;
    font-weight: 400;
    font-size: 15px;
    vertical-align: middle;
    display: inline-block;
  }

  .cart-box {
    /* margin-left: -30px; */
    padding: 2px;
  }

  .cart-box .fa {
    margin: 8px;
  }

  .cart-count {
    color: rgba(255, 255, 255, 0.91);
    background: #4CAF50;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    line-height: 20px;
    font-size: 17px;
    padding-top: 4px;
    font-weight: 700;
  }

  i.fa-heart-o {
    transition: all 0.5s ease;
  }
</style>
