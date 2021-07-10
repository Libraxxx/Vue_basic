<template>
  <div>
    <div class="container">
      <h2 class="title">欢迎使用GitHub用户搜索</h2>
      <Search></Search>
      <List></List>
    </div>
  </div>
</template>

<script>
import Search from './components/Search'
import List from './components/List.vue'
export default {
  name:'App',
  components:{Search,List}
}
</script>

<style scoped>
  .title{
    text-align: center;
  }
</style>