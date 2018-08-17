<template>
  <div class="f28">
    找回密码
  </div>
</template>

<script>
/**
 * @script 登录--忘记密码
 *
 * @Author: yejiang
 * @Date: 2017-08-23
 */

export default {
  name: 'forget-password',
  data() {
    return { datetime0: '2017-08-31' }
  },
  beforeCreate() {},
  created() {},
  computed: {},
  methods: {}
}
</script>
<style scoped lang="postcss">
.mmin {
  height: 88px;
  display: flex;
  span {
    width: 50px;
    background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    flex: 1;
    background: #ccc;
    min-width: 0px;
  }
  button {
    background: #ddd;
    width: 120px;
    color: #e86f5e;
  }
}

.date-box {
  display: flex;
  background: pink;
  height: 2rem;
  input {
    border: 1px solid red;
  }
}
</style>
