<template>
    <div class="user-profile ">
      <a href="#register" @click="open('register', $event)" class="btn">Đăng nhập</a>
      <a href="#login" @click="open('login', $event)" class="btn">Đăng ký</a>
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
</template>

<script>

  export default {
//    el: '#fake-nav',
    methods: {
      open(which, event) {
        event.preventDefault();
//        modal.active = which
      },
    },
  };
</script>

<style scoped>
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
</style>
