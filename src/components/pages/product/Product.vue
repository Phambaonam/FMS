<template>
  <div>
    <div class="container-fluid page-heading shop-heading">
      <div class="heading-content">
        <h1>Sản phẩm</h1>
        <p>Mỗi món đồ là một câu chuyện nhỏ. MIN cùng bạn viết nên câu chuyện ngôi nhà mình.</p>
        <ol class="breadcrumb">
          <li><a href="home.html">Trang chủ</a></li>
          <li class="active">Sản phẩm</li>
        </ol>
      </div>
    </div>
    <div class="container shop-main">
      <div class="row">
        <nav class="navbar navbar-default" id="shop-menu">
          <button type="button" class="navbar-toggle collapsed pull-left" data-toggle="slide-collapse"
                  data-target=".shop-nav">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <div class="collapse navbar-collapse pull-left shop-nav">
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <form>
                  <a href="" class="dropdown-toggle" data-toggle="dropdown">Lọc theo hãng sản xuất <span
                    class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li class="checkbox"><label><input type="checkbox" name="brand1"
                                                       value="brand1">IKEA</label></li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><label><input type="checkbox" name="brand2"
                                                       value="brand2">Hooker</label></li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><label><input type="checkbox" name="brand3"
                                                       value="brand3">Ashley</label></li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><label><input type="checkbox" name="brand4" value="brand4">Stanford</label>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><label><input type="checkbox" name="brand5" value="brand5">Stickley</label>
                    </li>
                    <li role="separator" class="divider"></li>
                  </ul>
                </form>
              </li>
              <li class="dropdown">
                <form>
                  <a href="" class="dropdown-toggle" data-toggle="dropdown">Lọc theo mức giá <span
                    class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li class="checkbox"><input type="checkbox" name="price1" value="price1">Dưới 1 triệu
                    </li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><input type="checkbox" name="price2" value="price2">Từ 1 triệu đến
                      3 triệu
                    </li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><input type="checkbox" name="price3" value="price3">Từ 3 triệu đến
                      5 triệu
                    </li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><input type="checkbox" name="price4" value="price4">Từ 5 triệu đến
                      10 triệu
                    </li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><input type="checkbox" name="price5" value="price5">Trên 10 triệu
                    </li>
                    <li role="separator" class="divider"></li>
                  </ul>
                </form>
              </li>
              <li class="dropdown">
                <form>
                  <a href="" class="dropdown-toggle" data-toggle="dropdown">Lọc theo màu sắc <span
                    class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li class="checkbox"><input type="checkbox" name="color1" value="color1">Đen</li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><input type="checkbox" name="color2" value="color2">Trắng</li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><input type="checkbox" name="color3" value="color3">Nâu</li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><input type="checkbox" name="color4" value="color4">Xám</li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><input type="checkbox" name="color5" value="color5">Xanh lá</li>
                    <li role="separator" class="divider"></li>
                  </ul>
                </form>
              </li>
              <li class="dropdown">
                <form>
                  <a href="" class="dropdown-toggle" data-toggle="dropdown">Lọc theo Chất liệu <span
                    class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li class="checkbox"><input type="checkbox" name="color1" value="color1">Gỗ</li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><input type="checkbox" name="color2" value="color2">Kính</li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><input type="checkbox" name="color3" value="color3">Plastic</li>
                    <li role="separator" class="divider"></li>
                    <li class="checkbox"><input type="checkbox" name="color4" value="color4">Kim loại</li>
                    <li role="separator" class="divider"></li>
                  </ul>
                </form>
              </li>
            </ul>
          </div>

          <select class="form-control pull-right">
            <option disabled selected hidden>Sắp xếp</option>
            <option value="sort1">Thứ tự mặc định</option>
            <option value="sort2">Thứ tự theo sản phẩm mới</option>
            <option value="sort3">Thứ tự theo giá: thấp đến cao</option>
            <option value="sort4">Thứ tự theo giá: cao đến thấp</option>
            <option value="sort5">Thứ tự theo lượng review</option>
          </select>
        </nav>

        <div class="product-list">

          <!--------- menu danh muc san pham start ----------------------->
          <ul class="nav nav-stacked col-xs-3 collapse navbar-collapse shop-nav">
            <li class="nav-title"><a data-toggle="display-all"><h4>Danh mục </h4></a></li>
            <li>
              <button class=" product-group" type="button"><h4>Thiết kế theo phòng</h4>
              </button>
            </li>
            <li>
              <ul class="nested-tab">
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Phòng khách</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#1">Coffee & Accent Tables</a></li>
                    <li><a href="#2">Chairs</a></li>
                    <li><a href="#3">Sofas & Sectionals</a></li>
                    <li><a href="#4">Media Storage</a></li>
                    <li><a href="#5">Bookcases</a></li>
                    <li><a href="#6">Footstools & Ottomans</a></li>
                    <li><a href="#7">Accent Chests & Cabinets</a></li>
                    <li><a href="#8">Futons & Accessories</a></li>
                    <li><a href="#9">Slipcovers & Chair Covers</a></li>
                  </ul>
                </li>
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Phòng Ăn</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#1">Bar Stools & Counter Stools</a></li>
                    <li><a href="#2">Dining Chairs</a></li>
                    <li><a href="#3">Dining Tables</a></li>
                    <li><a href="#4">Buffets & Sideboards</a></li>
                    <li><a href="#5">Dining Sets</a></li>
                    <li><a href="#6">Kitchen Islands & Carts</a></li>
                    <li><a href="#7">Dining Tables</a></li>
                  </ul>
                </li>
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Phòng Tắm</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#">Bathroom Vanities</a></li>
                    <li><a href="#">Medicine Cabinets</a></li>
                    <li><a href="#">Vanity Tops & Side Splashes</a></li>
                    <li><a href="#">Bathroom Organizers</a></li>
                  </ul>
                </li>
                <li class="submenu">
                  <button class="sub-group" type="button"><h5>Phòng Làm Việc</h5></button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#">Desks</a></li>
                    <li><a href="#">Office Chairs</a></li>
                    <li><a href="#">Bookcases</a></li>
                    <li><a href="#">Filing Cabinets</a></li>
                    <li><a href="#">Drafting Tables</a></li>
                  </ul>
                </li>
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Phòng Ngủ</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#">Beds</a></li>
                    <li><a href="#">Headboards</a></li>
                    <li><a href="#">Dressers</a></li>
                    <li><a href="#">Nightstands & Bedside Tables</a></li>
                    <li><a href="#">Bedroom Furniture Sets</a></li>
                    <li><a href="#">Bedroom & Makeup Vanities</a></li>
                    <li><a href="#">Vanity Stools & Benches</a></li>
                    <li><a href="#">Armoires & Wardrobes</a></li>
                  </ul>
                </li>
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Chứa đồ</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#">Bookcases</a></li>
                    <li><a href="#">Media Storage</a></li>
                    <li><a href="#">Dining Tables</a></li>
                    <li><a href="#">Buffets & Sideboards</a></li>
                    <li><a href="#">Dining Sets</a></li>
                    <li><a href="#">Kitchen Islands & Carts</a></li>
                    <li><a href="#">Dining Tables</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li style="height: 15px"></li>
            <li>
              <button class=" product-group" type="button">
                <h4>Lựa chọn theo sản phẩm</h4>
              </button>
            </li>
            <li>
              <ul class="nested-tab">
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Nệm & Giường Ngủ</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#">Giường Ngủ</a></li>
                    <li><a href="#">Nệm</a></li>
                  </ul>
                </li>
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Ghế, Đôn & Ghế Dài</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#">Ghế Ăn</a></li>
                    <li><a href="#">Đôn có bậc & Thang</a></li>
                    <li><a href="#">Đôn & Ghế Dài</a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </li>
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Đồ Trang Trí</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#">Đồng Hồ</a></li>
                    <li><a href="#">Khung Ảnh</a></li>
                    <li><a href="#">Tranh Ảnh</a></li>
                    <li><a href="#">Lọ Hoa</a></li>
                  </ul>
                </li>
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Bàn Ghế Văn Phòng</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#">Bàn Làm Việc</a></li>
                    <li><a href="#">Ghế Văn Phòng & Ghế Dài</a></li>
                    <li><a href="#">Tranh Ảnh</a></li>
                    <li><a href="#">Lọ Hoa</a></li>
                  </ul>
                </li>
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Dụng Cụ Nhà Bếp</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#">Tiện Ích Sắp Xếp Nhà Bếp</a></li>
                    <li><a href="#">Dụng Cụ Sơn Chế</a></li>
                    <li><a href="#">Bảo Quản Thực Phẩm</a></li>
                  </ul>
                </li>
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Nội Thất Bếp</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#">Tủ Bếp</a></li>
                    <li><a href="#">Tiện Ích Lưu Trữ Nhà Bếp</a></li>
                  </ul>
                </li>
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Đèn</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#">Đèn Trần</a></li>
                    <li><a href="#">Đèn Đứng</a></li>
                    <li><a href="#">Đèn Bàn</a></li>
                  </ul>
                </li>
                <li class="submenu">
                  <button class="sub-group" type="button">
                    <h5>Gương</h5>
                  </button>
                  <ul class="submenu-content">
                    <div class="sign"><i class="fa  fa-caret-right"></i></div>
                    <li><a href="#">Gương Đứng</a></li>
                    <li><a href="#">Gương Trang Điểm</a></li>
                    <li><a href="#">Gương Treo Tường</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <!---------- end menu danh muc san pham ------------------------>

          <div class="item-list col-xs-12 col-sm-9">
            <div class="row">
              <div class="col-item chair arm-chair col-xs-6 col-lg-4">
                <div class="item-container">
                  <div class="photo">
                    <img src="static/img/product_1a.jpg">
                    <div class="vertical-icon">
                      <a href="#"><i class="fa fa-heart-o"></i></a>
                      <a href="javascript:void(0)" class="buy"><i class="fa fa-shopping-cart"></i></a>
                      <a href="shop-detail.html"><i class="fa fa-search-plus"></i></a>
                    </div>

                  </div>
                  <div class="name description">
                    <h3><a href="#">Eros Papasan</a></h3>
                    <p><a href="#">by Kartell</a></p>
                    <p>
                                   <span class="price">
                                        <del class="sale-off">$69.36</del>
                                    <strong>$99.21</strong>
                                   </span>
                    </p>

                    <div class="rating">
                      <span id="star1" class="star fa fa-star" data-rating="1"></span>
                      <span id="star2" class="star fa fa-star" data-rating="2"></span>
                      <span id="star3" class="star fa fa-star" data-rating="3"></span>
                      <span id="star4" class="star fa fa-star" data-rating="4"></span>
                      <span id="star5" class="star fa fa-star" data-rating="5"></span>
                      <span id="numberStar">&#40<span id="number_rating">1</span>&#41</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <nav>
              <div class="pagination">
                <a class="prev page-no" href="#">
                  <i class="fa fa-long-arrow-left"></i>
                </a>
                <a href="#" class="page-no">1</a>
                <a href="#" class="page-no current">2</a>
                <a href="#" class="page-no">3</a>
                <a href="#" class="page-no">4</a>
                <a href="#" class="page-no">5</a>
                <a class="next page-no" href="#">
                  <i class="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </nav>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  /* start */
  .shop-nav .dropdown-menu {
    padding: 0;
    border-radius: 0;
  }

  .page-heading {
    height: 360px;
    background: no-repeat center fixed;
    background-size: cover;
    position: relative;
  }

  .heading-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    z-index: 1;
    text-align: center;
  }
  .heading-content h1 {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }
  .heading-content p {
    font-size: 16px;
    color: #fff;
  }
  .shop-main {
    transform: translateY(-25px);
    position: relative;
  }
  .shop-heading {
    background-image: url(../../../../static/img/shop-banner.jpeg);
  }

  .breadcrumb {
    background-color: transparent;
    font-size: 18px;
  }

  .breadcrumb::before {
    font-family: FontAwesome;
    content: "\f015";
    color: #fff;
    padding: 0 3px;
  }
  .breadcrumb li > a, .breadcrumb .active {
    color: #fff;
  }
  .breadcrumb > li + li::before {
    font-family: FontAwesome;
    content: "\f178";
    color: #fff;
  }

  #shop-menu.navbar {
    background: #fff;
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 0;
  }
  #shop-menu .form-control {
    width: 200px;
    position: absolute;
    top: 0;
    right: 15px;
    bottom: 0;
    margin: auto;
    padding: 6px;
  }

  .item-list, .product-list {
    float: left;
  }

  .product-list {
    width: 100%;
  }

  .nav-stacked.shop-nav {
    background: #fff;
    padding-right: 0;
    padding-left: 0;
    width: 25%;
  }

  .nav-stacked.shop-nav {
    border: solid 1px #e7e7e7;
  }

  .nav-stacked > li.nav-title {
    border-bottom: solid 1px #e7e7e7;
  }
  .navbar-default .navbar-nav > li a {
    color: #777;
  }

  .nav-title {
    padding: 5px 15px 0;
    text-transform: uppercase;
  }


  .nav-title h4, .product-group h4, .sub-group h5 {
    padding-left: 15px;
    position: relative;
  }

  .sub-group h5 {
    padding-left: 30px;
  }

  .nav-title h4 {
    color: #336699;
  }
  .nav > li a {
    display: block;
    padding: 10px 15px;
  }

  .nav > li.nav-title > a {
    padding: 0;
    cursor: pointer;
  }

  .nav > li.nav-title > a:hover {
    background: none;
  }

  .nav-title h4::before, .product-group h4::before, .sub-group h5::before {
    content: '';
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #336699;
  }

  .product-group, .sub-group {
    padding: 0 15px;
    background: transparent;
    border: none;
  }

  .product-group:focus, .sub-group:focus {
    outline: none;
  }

  .product-group, .sub-group {
    /*border:1px solid green;*/
    width: 100%;
    text-align: left;
    transition: all 0.4s ease;
  }

  .product-group h4::before, .sub-group h5::before {
    transform: scaleY(0.2);
    transition: all 0.4s ease;
  }

  .product-group:hover h4, .sub-group:hover h5, .product-group.active h4, .sub-group.active h5 {
    color: #336699;
  }

  .product-group.active h4, .sub-group.active h5 {
    font-weight: bold;

  }

  .product-group.active, .sub-group.active {
    background: #e7e7e7;
  }

  .product-group:hover h4::before, .sub-group:hover h5::before, .product-group.active h4::before, .sub-group.active h5::before {
    transform: scaleY(1);
  }

  .nested-tab {
    list-style: none;
    padding-left: 0;
  }

  .submenu {
    position: relative;
  }

  .submenu-content {
    display: none;
    position: absolute;
    background: #ffffff;
    min-width: 210px;
    margin-left: 96%;
    padding-left: 4%;
    margin-top: -13%;
    z-index: 1;
  }

  .submenu-content li a:hover {
    color: green;
    background: #DFDEDA;
  }

  .submenu:hover .submenu-content {
    display: block;
  }

  .sign {
    position: absolute;
    top: 10px;
    left: 7px;
    color: black;
    cursor: pointer;
  }
 /* end */

 /* start */
.item-container {
  border: solid 1px #e7e7e7;
  margin: 0 0 15px;
  transition: all 0.4s ease;
}

.item-container:hover {
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
}
.photo {
  position: relative;
}
.photo img {
  width:100%;
}

.vertical-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 5%;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  z-index: 5;
}

.vertical-icon i {
  margin: 5px 0;
  width: 40px;
  height: 40px;
  transform: translateX(30px);
  opacity: 0;
  border-radius: 50%;
  background-color: #f8f8f8;
  font-size: 20px;
}

.vertical-icon i::before {
  height: 40px;
  line-height: 40px;
}

.photo:hover .vertical-icon i {
  transform: translateX(0);
  opacity: 1;
}

.vertical-icon a {
  color: #999999;
}

i.fa-heart-o {
  transition: all 0.5s ease;
}

i.fa-shopping-cart {
  transition: all 0.5s ease 0.15s;
}

i.fa-search-plus {
  transition: all 0.5s ease 0.3s;
}

.name, .price {
  background-color: #fff;
}

.price {
  text-align: center;
  padding: 15px;
}

.price strong {
  color: #339966;
  font-size: 25px;
}

.name h3, .name p {
  margin: 0;
  text-align: center;
  padding-bottom: 10px;
}

/* ***********css star tú viết ******* */
.star, #numberStar {
  font-size: 20px;
  color: #8e8877;
}

.rating {
  text-align: center;
  padding-bottom: 15px;
}
  .sale-off {
    font-size: 25px;
  }

/* ***********end css star tú viết ******* */

  /* end */

</style>
