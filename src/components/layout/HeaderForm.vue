<template>
  <div class="header-form-container">
    <div class="container">
      <form-search></form-search>
      <div class="header-link">
        <user-profile></user-profile>
        <header-cart></header-cart>
      </div>
    </div>
  </div>

</template>

<script>

  import FormSearch from '@/components/layout/headerForm/FormSearch';
  import UserProfile from '@/components/layout/headerForm/UserProfile';
  import HeaderCart from '@/components/layout/headerForm/HeaderCart';

  export default {
    components: { FormSearch, UserProfile, HeaderCart },
  };
</script>

<style>
  .header-form-container {
    position: relative;
    z-index: 3;
    background: rgb(248, 248, 248);
    padding: 20px 0px 16px;
  }

  .header-link {
    float: right;
    display: inline-flex;
    position: relative;
  }
</style>

