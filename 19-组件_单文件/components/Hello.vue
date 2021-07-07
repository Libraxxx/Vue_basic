<template>
  <div>
    <h2 class="title">名字：{{name}}</h2>
    <h2 @click="show">地址：{{addr}}</h2>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      name: "ajdaj",
      addr: "456"
    }
  },
  methods: {
    show(){
      alert(this.addr)
    }
  },
}
</script>

<style>
  .title{
    background-color: pink;
  }
</style>