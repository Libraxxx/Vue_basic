<template>
  <div class="demo">
    <h2 >我是Demo组件</h2>
    <button  @click="sendData">给APP组件传递数据</button>
  </div>
</template>
<script>
export default {
  name:'Demo',
  data() {
    return {
      name:'老王'
    }
  },
  methods: {
    sendData(){
      this.$emit('getData',this.name)
    }
  },
}
</script>

<style scoped>
  .demo{
    background-color: skyblue;
  }
</style>