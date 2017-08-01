<template>
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
</template>

<script>

</script>

<style scoped>
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
</style>
