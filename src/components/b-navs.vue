<template>
  <nav class="b-nav">
    <h3 class="flex align-center title">
      <span class="flex-1">所有书签</span>
      <span class="num">{{ $store.getters.bookmarkTags.total }}</span>
    </h3>
    <h3 class="flex align-center title">
      <span class="flex-1">所有分类</span>
      <span class="iconfont icon-sanjiaoxing-down"></span>
    </h3>
    <ul class="flex-col nav-list">
      <li class="flex align-center nav-item river-hover" v-for="(item, index) in $store.getters.bookmarkTags.list" :key="item.id" :class="{ 'active': tagPic === item.name }" @click="focus(item, index)">
        <i class="iconfont icon-wenjianjia"></i>
        <span class="flex-1">{{ item.name }}</span>
        <span>{{ item.total }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
import cookie from '@/utils/cookie';

export default {
  name: 'HelloWorld',
  data() {
    return {
      tagPic: ''
    };
  },
  props: {
    msg: String
  },
  created() {
    this.$store.dispatch('bookmarkTags');
  },
  computed: {
    watchBookmarkTags() {
      return this.$store.getters.bookmarkTags.list;
    }
  },
  watch: {
    watchBookmarkTags(val) {
      this.tagPic = cookie.getCookie('tagsActive') || val[0].name;
      this._getData(this.tagPic);
    }
  },
  methods: {
    focus(item, index) {
      this.tagPic = item.name;
      cookie.setCookie('tagsActive', item.name);
      this._getData(item.name);
    },
    _getData(val) {
      this.$store.dispatch('bookmarkFind', {
        data: {
          queryType: 'tags',
          tags: val,
          queryString: ''
        }
      });
    }
  }
};
</script>

<style scoped lang="postcss">
.b-nav {
  .title {
    height: 64px;
    padding: 0 10px;
    color: #d9d9d9;
    position: relative;
    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      left: 0;
    }
    &::before {
      bottom: 1px;
      background-color: #24262a;
    }
    &::after {
      bottom: 0px;
      background-color: #4b4d52;
    }
  }
  .nav-list {
    padding-bottom: 5px;
    .nav-item {
      color: #d9d9d9;
      height: 24px;
      cursor: default;
      padding: 0 10px 0 15px;
      .iconfont {
        margin-right: 6px;
      }
      &:hover {
        color: var(--b_header);
      }
      &.river-hover {
        vertical-align: middle;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        &::before {
          content: '';
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--b_header);
          -webkit-transform: scaleY(0);
          transform: scaleY(0);
          -webkit-transform-origin: 50% 100%;
          transform-origin: 50% 100%;
          -webkit-transition-property: transform;
          transition-property: transform;
          -webkit-transition-duration: 0.5s;
          transition-duration: 0.5s;
          -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
        }
      }
      &.active {
        color: #383a3f;
      }
      &.active:before {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transition-timing-function: cubic-bezier(
          0.52,
          1.64,
          0.37,
          0.66
        );
        transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
      }
    }
  }
  .num {
    color: #999;
    font-size: 12px;
  }
}
</style>
