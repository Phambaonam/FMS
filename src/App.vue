<template>
  <div id="app">
    <header>
      <header-form></header-form>
      <nav-menu></nav-menu>
    </header>
    <img src="./assets/img/logo.png">
    <!--<router-view></router-view>-->
    <footer-bar></footer-bar>
  </div>
</template>

<script>

  import FooterBar from '@/components/layout/FooterBar';
  import NavMenu from '@/components/layout/NavMenu';
  import HeaderForm from '@/components/layout/HeaderForm';

  export default {
    name: 'app',
    components: { FooterBar, NavMenu, HeaderForm },
  };
</script>

<style>
  header {
    height: 151px;
    position: relative;
    z-index: 1050;
  }

</style>
