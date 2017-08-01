<template>
  <header>
    <header-form></header-form>
    <nav-menu></nav-menu>
  </header>
</template>

<script>
  import HeaderForm from '@/components/layout/HeaderForm';
  import NavMenu from '@/components/layout/NavMenu';

  export default {
    components: { HeaderForm, NavMenu },
  };

</script>

<style scoped>
  header {
    height: 151px;
    position: relative;
    z-index: 1050;
  }
</style>
