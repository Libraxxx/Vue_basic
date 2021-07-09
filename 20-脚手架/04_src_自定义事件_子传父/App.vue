<template>
  <div class="app">
    <h2>我是APP组件</h2>
    <!-- 
      以下是给Demo组件的实例对象定义了一个getData事件，
      只要Demo组件实例对象触发了getData事件，那么就会调用test函数
     -->
     <!-- 第一种方式 -->
    <!-- <Demo @getData="test" /> -->
    <!-- 第二种方式 -->
    <Demo ref="demo" />
  </div>
</template>

<script>
import Demo from './components/Demo'
export default {
  name:'App',
  components:{Demo},
  methods: {
    test(x){
      console.log("Demo传递给APP的数据",x);
    }
  },
  mounted() {
    this.$refs.demo.$on('getData',this.test)
  },
}
</script>

<style scoped>
  .app{
    height: 100px;
    background-color: pink;
  }
</style>