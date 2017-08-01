<template>
  <div id="app">
    <header-bar></header-bar>
    <img id="vue" src="./assets/img/logo.png">
    <!--<router-view></router-view>-->
    <footer-bar></footer-bar>
  </div>
</template>

<script>

  import FooterBar from '@/components/layout/FooterBar';
  import HeaderBar from '@/components/layout/HeaderBar';

  export default {
    name: 'app',
    components: { HeaderBar, FooterBar },
  };
</script>

<style>
  #vue {
    height: 350px
  }
</style>
