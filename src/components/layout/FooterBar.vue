<template>
  <footer>
    <div class="container">
      <div class="row footer-top">
        <div class="col-xs-6 col-md-3 footer-item">
          <h4>Thông tin liên hệ</h4>
          <ul>
            <li><i class="fa fa-map-marker"></i>Đ/c: 40 Giảng Võ, Đống Đa, Hà Nội</li>
            <li><i class="fa fa-mobile"></i>Hotline: 0986090925</li>
            <li><i class="fa fa-envelope-o"></i>Email: hieu.do212@gmail.com</li>
          </ul>
        </div>
        <div class="col-xs-6 col-md-3 footer-item">
          <h4>Thời gian mở cửa</h4>
          <ul>
            <li>Thứ 2 - thứ 6: 8AM - 10PM</li>
            <li>Thứ 7: 9AM - 8PM</li>
            <li>Nghỉ Chủ Nhật và các ngày Lễ Tết</li>
          </ul>
        </div>
        <div class="col-xs-6 col-md-3 footer-item">
          <h4>Hỗ trợ khách hàng</h4>
          <ul>
            <li><a href="contact.html">Liên hệ & Góp ý</a></li>
            <li><a href="#">Hướng dẫn mua hàng online</a></li>
            <li><a href="#">Câu hỏi thường gặp</a></li>
            <li><a href="#">Chính sách bảo mật</a></li>
          </ul>
        </div>
        <div class="col-xs-6 col-md-3 footer-item">
          <h4>Chính sách mua hàng</h4>
          <ul>
            <li><a href="#">Chính sách bảo hành, đổi trả</a></li>
            <li><a href="#">Chính sách hội viên</a></li>
            <li><a href="#">Giao hàng và lắp đặt</a></li>
          </ul>
        </div>
      </div>
      <div class="row footer-bot">
        <a href="#" title="Kết nối qua Facebook"><i class="fa fa-facebook-official"></i></a>
        <a href="#" title="Kết nối qua Google+"><i class="fa fa-google-plus-official"></i></a>
        <a href="#" title="Kết nối qua Pinterest"><i class="fa fa-pinterest"></i></a>
        <a href="#" title="Kết nối qua Instagram"><i class="fa fa-instagram"></i></a>
      </div>
    </div>
    <div class="container-fluid copyright">
      <div class="row">
        <p>Copyright 2017 <i class="fa fa-copyright"></i> Designed by Hieudo</p>
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style scoped>
  footer {
    padding-top: 80px;
    background: #fff;
    color: #666;
    font-size: 15px;
  }
  .footer-item {
    margin-bottom: 25px;
  }

  .footer-item ul {
    list-style: none;
    padding-left: 0;
  }

  .footer-item ul > li {
    line-height: 32px;
  }

  .footer-item h4 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    line-height: 0.8;
    margin-bottom: 25px;
    margin-top: 0;
    padding-left: 10px;
    color: #333;
    border-left: solid 3px #336699;
  }
  .footer-item a {
    color: #666;
    overflow: hidden;
    display: block;
    transition: all 0.4s ease;
  }

  .footer-item a:hover {
    padding-left: 12px;
    color: #336699;
  }
  .footer-item ul>li>a::before {
    content: "\f105";
    font-family: 'FontAwesome';
    position: relative;
    left: -5px;
    transition: all 0.4s ease;
    color: #336699;
  }


  @media (max-width: 600px) {
    .footer-item {
      width: 100%;
    }
  }
  .footer-top .fa {
    width: 25px;
    text-align: center;
  }

  .footer-bot {
    padding-bottom: 50px;
    text-align: center;
  }

  .footer-bot a {
    font-size: 24px;
    margin: 10px;
    transition: all 0.4s ease;
    color: #666;
  }

  .footer-bot .fa-facebook-official:hover {
    color: #3b5998;
  }

  .footer-bot .fa-google-plus-official:hover {
    color: #dd4b39;
  }

  .footer-bot .fa-pinterest:hover {
    color: #BD081C;
  }

  .footer-bot .fa-instagram:hover {
    color: #000;
  }

  .copyright p {
    padding: 15px;
    text-align: center;
    background: #e7e7e7;
    /* color: #fff; */
    margin: 0;
  }
</style>
