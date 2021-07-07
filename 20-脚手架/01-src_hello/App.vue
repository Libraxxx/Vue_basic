<template>
  <div id="app">

    <!-- 
      ref的使用：
        1.标签中直接编写 ref="xxx"
        2.通过this.$refs.xxx获取
        3.备注：
          1.若给HTML内置标签打ref，则获取到的是真实的DOM节点
          2.若给组件标签打ref，则获取到的是组件实例对象
     -->

    <button @click="showData">点我提示数据</button>
    <!-- 若给HTML内置标签打ref，则获取到的是真实的DOM节点 -->
    <input type="text" ref="keywords">
    <!-- 若给组件标签打ref，则获取到的是组件实例对象 -->
<!-- carname是要传给子组件的数据，要动态绑定，使用v-bind -->
    <HelloWorld ref="hello" :carname="carName"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      // keywords:''
      carName:"马自达"
    }
  },
  methods:{
    showData(){
      //通过$refs拿到input框的值
      alert(this.$refs.keywords.value)
    }
  }
}
</script>

<style>

</style>
