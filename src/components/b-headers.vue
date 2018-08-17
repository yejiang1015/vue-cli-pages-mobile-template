<template>
  <header class="b-header flex">
    <router-link to="/" tag="h3" class="logo flex just-center align-center">WEBHREF</router-link>
    <section class="operable flex-1 flex align-center">
      <i class="iconfont icon-tianjia3" style="font-size: 26px;" @click="$store.dispatch('aeDialog', {isHide: true, type: 'add'})"></i>
      <router-link to="col" tag="i" active-class="active" class="iconfont icon-pailiefangshi rotate"></router-link>
      <router-link to="row" tag="i" active-class="active" class="iconfont icon-pailiefangshi"></router-link>
      <div class="search flex-1">
        <i class="iconfont icon-sousuo1"></i>
        <input type="text" v-model="searchModel">
        <section class="pos search-pos" v-if="searchResult.length && searchModel">
          <h3 class="search-pos-title flex align-center">
            搜
            <span>"{{ searchTxt }}"</span>
            相关书签
          </h3>
          <div class="search-pos-list">
            <a href="#" class="search-pos-item flex align-center" v-for="item in searchResult" :key="item.id" target="_blank">百度一下 很开心</a>
          </div>
        </section>
      </div>
    </section>
    <section class="user flex just-center align-center" @click.stop="isHide = !isHide">
      <i class="iconfont icon-yonghu"></i>
      <i class="iconfont icon-sanjiaoxing-down"></i>
      <ul class="user-pos pos" v-if="isHide">
        <router-link to="/" tag="li" class="user-pos-item flex just-center align-center">回到首页</router-link>
        <li class="user-pos-item flex just-center align-center" @click="$store.dispatch('aeDialog', {isHide: true, type: 'add'})">添加书签</li>
        <li class="user-pos-item flex just-center align-center" @click="_await">分类设置</li>
        <li class="user-pos-item flex just-center align-center" @click="_await">更多设置</li>
        <li class="user-pos-item flex just-center align-center" @click="_await">批量上传</li>
        <li class="user-pos-item flex just-center align-center" @click="_await">个人中心</li>
        <li class="user-pos-item flex just-center align-center" @click="_signOut">退出登录</li>
      </ul>
    </section>
  </header>
</template>

<script>
import { Message } from 'element-ui';

export default {
  name: 'bookmark-header',
  data() {
    return {
      searchModel: '',
      searchTxt: '',
      searchResult: [],
      isHide: false,
      timer: null
    };
  },
  created() {
    window.document
      .querySelectorAll('body')[0]
      .addEventListener('click', () => {
        this.isHide = false;
      });
  },
  watch: {
    searchModel(val) {
      this.searchTxt = val.length >= 18 ? val.substring(0, 18) + '...' : val;
      window.clearTimeout(this.timer);
      this.timer = window.setTimeout(() => {
        this._search(val);
      }, 500);
    }
  },
  props: {},
  methods: {
    _signOut() {
      this.$store.dispatch('signOut', {
        success: res => {
          if (res.status === 1) {
            this.$router.push('/');
          }
        }
      });
    },
    _search(val) {
      this.searchResult.push(val);
    },
    _await() {
      Message({
        type: 'success',
        message: '敬请期待!'
      });
    }
  }
};
</script>
<style lang="postcss" scoped>
.b-header {
  color: #fff;
}
.logo {
  width: 245px;
  cursor: default;
  font-size: 28px;
}
.operable {
  padding-left: 24px;
  .iconfont {
    font-size: 24px;
    margin: 0 6px;
    &.rotate {
      transform: rotate(90deg);
    }
  }
  .active {
    border-radius: 2px;
    color: var(--b_nav);
  }
  .search {
    position: relative;
    max-width: 400px;
    .iconfont {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--b_header);
    }
    input {
      height: 34px;
      width: 100%;
      min-width: 70px;
      background: #fff;
      border-radius: 6px;
      padding: 0 12px;
      padding-right: 40px;
      caret-color: var(--b_header);
      color: #666;
    }
  }
}
.user {
  position: relative;
  width: 125px;
  .iconfont {
    font-size: 24px;
  }
  .icon-sanjiaoxing-down {
    font-size: 18px;
  }
}
.pos {
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 1024;
  width: 100%;
  background-color: #fcfaf4;
  box-shadow: 0px 2px 18px -3px #000;
  border-radius: 6px;
  min-height: 100px;
  &::after {
    position: absolute;
    z-index: 1025;
    content: '';
    left: 64px;
    top: -12px;
    border: 6px solid #fcfaf4;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
  }
}
.search-pos {
  color: var(--b_nav);
  .search-pos-title {
    font-size: 16px;
    height: 46px;
    padding: 0 15px;
    span {
      color: var(--b_header);
    }
  }
  .search-pos-list {
    max-height: 350px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .search-pos-item {
    height: 32px;
    border-bottom: 1px solid #f1f1f1;
    padding: 0 15px;
    font-size: 14px;
    color: var(--b_nav);
    color: #666;
    &:hover {
      background-color: var(--b_item);
    }
  }
}
.user-pos {
  user-select: none;
  width: 100px;
  top: 48px;
  left: 0px;
  padding: 8px 0;
  .user-pos-item {
    color: var(--b_nav);
    text-align: center;
    height: 28px;
    font-size: 14px;
    &:hover {
      background: var(--b_nav);
      color: var(--b_item);
      cursor: default;
    }
  }
}
</style>
