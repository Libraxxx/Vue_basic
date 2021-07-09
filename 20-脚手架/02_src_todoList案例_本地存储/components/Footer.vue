<template>
  <div>
    <div class="todo-footer">
        <label>
          <!-- <input type="checkbox" :checked="isAll" @click="checkAll"/> -->
          <input type="checkbox" :checked="isAll" v-model="isAll"/>
        </label>
        <span>
          <span>已完成{{doneCount}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAllDone">清除已完成任务</button>
      </div>
  </div>
</template>

<script>
  export default {
    name:'Footer',
    props:['todos','updateALL','clearAll'],
    computed:{
      doneCount(){
        let count = 0
        for(let i = 0;i < this.todos.length;i++){
          if(this.todos[i].done === true){
            count++
          }
        }
        return count
      },
      total(){
        return this.todos.length
      },
      // isAll(){
      //  return this.doneCount === this.total && this.total > 0
      // }

      isAll:{
        set(flag){
          this.updateALL(flag)
        },
        get(){
          return this.doneCount === this.total && this.total > 0
        }
      }
    },
    methods: {
      //用点击事件去实现全选，在input里面绑定事件
      checkAll(event){
        // console.log(event.target.checked);
        this.updateALL(event.target.checked)
      },

      //清除已完成任务处理事件
      clearAllDone(){
        if(confirm("确定删除已经完成的任务吗？")){
          this.clearAll()
        }
      }
    },
  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
