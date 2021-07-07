<template>
  <div>
    <div class="todo-container">
    <div class="todo-wrap">
      <!-- 头部Header -->
      <Header :addTodo="addTodo"></Header>
      <!-- 列表List -->
      <List :todos="todos" :updateTodo="updateTodo" :deleteTodo="deleteTodo"></List>
      <!-- 底部Footer -->
      <Footer :todos="todos" :updateALL="updateALL" :clearAll="clearAll"></Footer>
    </div>
  </div>
  </div>
</template>
<script>
  /* eslint-disable */
  //引入组件
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'

  export default {
    name:'APP',
    components:{ //注册组件
      Header,
      List,
      Footer
    },
    data() {
      return {
        todos:[
          {id:'001',name:'吃',done:true},
          {id:'002',name:'喝',done:true},
          {id:'003',name:'嫖',done:false},
          {id:'004',name:'赌',done:false}
        ]
      }
    },
    methods: {
      //添加一个todo
      addTodo(todoObj){
        //把用户输入的TODO添加到todos前面
        this.todos.unshift(todoObj)
      },

      //更新一个todo----使用id去更新
      // updateTodo(id,done){
      //   this.todos = this.todos.map((todo)=>{
      //     if(id === todo.id){
      //       // 生成一个新的对象，改变里面的done属性，并返回这个对象
      //       return {...todo,done:done}
      //     }else{
      //       return todo
      //     }
      //   })
      // }


      //更新一个todo----使用索引值index去更新
      updateTodo(index,done){
        this.todos[index].done = done
      },

      //删除一个todo
      deleteTodo(index){
        this.todos.splice(index,1)
      },

      //全选 or 全不选
      updateALL(done){
        this.todos = this.todos.map((todo)=>{
          return {...todo,done}
        })
      },

      //清除已完成的任务
      clearAll(){
        this.todos = this.todos.filter((todoObj)=>{
          return todoObj.done === false
        })
      }
    },
  }
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>