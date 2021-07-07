<template>
  <div>
    <h2 class="title">Hello,{{name}}---{{carname}}</h2>
  </div>
</template>
<script>
export default {
  name:'HelloWorld',
  data(){
    return {
      name:"你好哇",
    }
  },

  //接收来自父组件APP 的数据carname，并且在这个组件里面不能重名
  //这是最完整的写法---限制了类型，控制了必要性，指定了默认值
  // props:{
  //   carname:{
  //     type:String,
  //     // required: true,//必要性
  //     default:"隔壁老王"  //默认值
  //   }
  // }

  //这是精简写法
  props:['carname']
}
</script>
<style scoped>
  .title{
    background-color: orange;
  }
</style>