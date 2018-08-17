<template>
  <div class="flex-col f28 autoflex">
    <input type="text" class="ui-p-10" v-model="newTodo" @keydown.enter="addTodo" placeholder="请输入待办事项">
    <div class="ui-pt-20 ui-pb-20 flex">
      <span class="flex-1 flex just-center align-center">名称</span>
      <span class="flex-1 flex just-center align-center">OK</span>
    </div>
    <ul>
      <li v-for="item in $store.getters.TODO" :key="item.id" class="flex ui-p-10" :class="item.flag ? 'isflag' : null">
        <span class="flex-1 flex just-center align-center">{{ item.title }}</span>
        <span class="flex-1 flex just-center align-center" @click="updateFlag(item)">{{ item.flag ? '已完成' : '未完成' }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      newTodo: ''
    }
  },
  beforeCreate() {
    this.$store.dispatch('getTodo', { id: 1 })
  },
  created() {},
  methods: {
    addTodo() {
      if (!this.newTodo.length) return
      this.$store.dispatch('addTodo', {
        data: {
          title: this.newTodo,
          flag: false,
          id: Math.floor(Math.random() * 1000000).toString()
        }
      })
      this.newTodo = ''
    },
    updateFlag(item) {
      this.$store.dispatch('updateTodo', {
        data: {
          title: item.title,
          id: item.id,
          flag: !item.flag
        }
      })
    }
  }
}
</script>
<style scoped lang="postcss">
.isflag {
  background-color: #ccc;
  color: #297d3e;
}
.autoflex {
  background-color: #f1f1f1;
  margin: auto;
  padding: 20px;
}
input {
  border: 1px solid #ddd;
}
</style>
