<template>
  <div>
    <div class="todo-header">
        <input 
          v-model="name"
          @keyup.enter="add"
          type="text" 
          placeholder="请输入你的任务名称，按回车键确认"
         />
      </div>
  </div>
</template>
<script>
  export default {
    name:'Header',
    data() {
      return {
        name:''
      }
    },
    props:['addTodo'],
    methods: {
      add(){
        // console.log(this.name);
        //根据用户的输入生成一个TODO对象
        //把当前的时间戳作为id
        if(this.name.trim()){
          //如果用户输入的不为空
          const todoObj = {id:Date.now(),name:this.name,done:false}
          // console.log(todo);
          //通知APP在data中添加一个todo
          this.addTodo(todoObj)
          //清空输入框
          this.name = ''
        }else{
          alert("输入不允许为空")
        }
      }
    },
  }
</script>
<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
  