<template>
  <div class="header-form-container">
    <div class="container">
      <div class="form-search">
        <button type="button" class="navbar-toggle" id="menu-scroll">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <form action="#" id="search_form">
          <div class="search-wrap">
            <input type="text" name="q" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ...">
            <button type="submit">
              <span>Tìm Kiếm</span>
            </button>
          </div>
        </form>
      </div>
      <div class="header-link">
        <div class="user-profile ">
          <div class="before-log">
            <button data-toggle="modal" data-tabs="login" data-target=".user-modal" class="user">Đăng nhập
            </button>
            <button data-toggle="modal" data-tabs="signup" data-target=".user-modal" class="user">Đăng ký
            </button>
          </div>
          <div class="logged">
            <!-- <i class="fa fa-user-o"></i> -->
            <img src="static/img/feedback_1.jpg">
            <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
                Đỗ Hoàng Hiếu
              </button>
              <ul class="dropdown-menu dropdown-menu-right">
                <li><a href="user-account.html">Tài khoản của tôi</a></li>
                <li><a href="order.html">Đơn hàng của tôi</a></li>
                <li><a href="wishlist.html">Danh sách Yêu thích</a></li>
                <li><a href="home.html">Đăng xuất</a></li>
              </ul>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  </div>
</template>
<style>
  .header-form-container {
    position: relative;
    z-index: 3;
    background: rgb(248, 248, 248);
    padding: 20px 0px 16px;
  }

  .form-search {
    display: inline-block;
    width: 546px;
    position: relative;
    z-index: 1;
    float: left;
  }

  .form-search button.navbar-toggle {
    display: none;
    float: left;
    margin-top: -1px;
  }

  .form-search button {
    margin-left: -2.9px;
    height: 35px;
  }
  .form-search button.navbar-toggle .icon-bar {
    background-color: black;
  }
  .form-search input {
    width: 77%;
    height: 35px;
    padding-left: 15px;
  }
  .form-search button {
    margin-left: -2.9px;
    height: 35px;
  }
  .header-link {
    float: right;
    display: inline-flex;
    position: relative;
  }
  .user-profile {
    font-size: 12px;
    padding: 10px 0px 2px 0px;
    position: relative;
    vertical-align: top;
    font-weight: 400;
    line-height: 14px;
    display: inline-block;
    letter-spacing: .9px;
  }
  .user-profile button {
    height: 30px;
    border: none;
    font-size: 15px;
    background-color: #F8F8F8;
    margin-top: -3px;
  }
  .logged {
    display: none;
    align-items: center;
  }
  .logged img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .logged .dropdown-menu {
    border-radius: 0;
    position: absolute;
    right: -17px;
  }
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

