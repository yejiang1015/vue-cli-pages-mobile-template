<template>
  <router-link to="/" tag="h1" class="app-logo flex-col align-center">
    <span class="txt">网链书签</span>
    <span class="href">webhref.com</span>
  </router-link>
</template>
<script>
export default {
  name: 'app-logo'
};
</script>

<style lang="postcss" scoped>
.padding {
  padding: 100px 0 !important;
}
.app-logo {
  padding: 30px 0;
  cursor: pointer;
  .txt {
    color: #2f2f2f;
    font-size: 28px;
  }
  .href {
    font-size: 14px;
    line-height: 20px;
    color: #999;
  }
}
</style>
