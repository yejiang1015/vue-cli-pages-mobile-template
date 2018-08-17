<template>
    <ul class="user-nav">
        <router-link tag="li" active-class="active" to="/login">登录</router-link>
        <router-link tag="li" active-class="active" to="/register">注册</router-link>
    </ul>
</template>
<script>
export default {
  name: 'app-user-nav',
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="postcss" scoped>
.user-nav {
  display: flex;
  justify-content: center;
  width: 100%;
  li {
    width: 60px;
    text-align: center;
    cursor: default;
    &.active {
      color: var(--theme11);
    }
  }
}
</style>
