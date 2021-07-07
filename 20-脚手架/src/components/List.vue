<template>
  <div>
    <ul class="todo-main">
        <Item 
        v-for="(v,index) in todos" 
        :key="v.id" :todo="v" 
        :updateTodo="updateTodo"
        :deleteTodo="deleteTodo"
        :index="index"
        >
        </Item>
      </ul>
  </div>
</template>

<script>
  import Item from './Item'
  export default {
    name:'List',
    components:{
      Item
    },
    props:['todos','updateTodo','deleteTodo'], //声明接收props数据，声明后可以在vc上找得到
  }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  } 
</style>
