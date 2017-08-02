<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="menu row">
        <div class="collapse navbar-collapse" id="menu-collapse">
          <ul class="nav navbar-nav navbar-left">
            <li v-for="link in navbarLeft">
              <router-link :to="link.link">{{ link.name }}</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li v-for="link in navbarRight">
              <router-link :to="link.link">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <a class="logo" href="home.html"><img src="static/img/logo-min.png"></a>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        navbarLeft: [
          { link: '/', name: 'TRANG CHỦ' },
          { link: '/product', name: 'SẢN PHẨM' },
          { link: '/project', name: 'DỰ ÁN' },
          { link: '/collection', name: 'BỘ SƯU TẬP' },
        ],
        navbarRight: [
          { link: '/event', name: 'Event' },
          { link: '/about', name: 'VỀ MIN' },
          { link: '/blog', name: 'Blog' },
          { link: '/contact', name: 'LIÊN HỆ' },
        ],
      };
    },
  };
</script>

<style scoped>
  .navbar {
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    margin-bottom: 0;
    border-radius: 0;
    border: 0;
  }

  .logo {
    position: absolute;
    top: 0;
    left: 0;
    right: -40px;
    width: 20%;
    margin: auto;
    text-align: center;
  }
  .logo img {
    max-width: 100px;
    display: inline-block;
    margin: 10px 0;
  }
  .menu {
    min-height: 50px;
  }

  .menu .navbar-collapse {
    width: 100%;
    margin: auto;
    border-top: none;
  }
  #menu-collapse li::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: calc(50% - 15px);
    width: 30px;
    height: 3px;
    transition: all 0.4s ease;
    transform: scale(0);
    background: #336699;
  }
  .collapse .navbar-left {
    justify-content: flex-end;
  }

  .collapse .navbar-right {
    justify-content: flex-start;
  }

  .collapse .nav {
    width: 42%;
    display: flex;
    justify-content: space-around;
  }

  #menu-collapse li {
    position: relative;
  }
  #menu-collapse li:hover::before {
    transform: scale(1);
  }
  #menu-collapse li::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: calc(50% - 15px);
    width: 30px;
    height: 3px;
    transition: all 0.4s ease;
    transform: scale(0);
    background: #336699;
  }

  .navbar-default .navbar-nav > li > a {
    color: #000;
  }

  @media (min-width: 992px) {
    header .nav > li > a {
      padding: 15px 20px;
      font-size: 16px;
    }
  }
  .nav > li > a {
    padding: 15px 8px;
    text-transform: uppercase;
    font-weight: 800;
  }

</style>
