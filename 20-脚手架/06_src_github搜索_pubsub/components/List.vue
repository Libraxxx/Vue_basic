<template>
  <div>
    <div class="row" >
      <!-- <h2 v-show="listInfo.isFirst">欢迎使用GitHub用户搜索</h2> -->
      <h2 v-show="listInfo.isLoading">正在加载中，请稍候...</h2>
      <h2 v-show="listInfo.errMsg">{{errMsg}}</h2>

      <div v-show="listInfo.users.length" class="card" v-for="userObj in listInfo.users" :key="userObj.id">
        <a :href="userObj.html_url" target="_blank">
          <img :src="userObj.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{userObj.login}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import Pubsub from 'pubsub-js'
export default {
  name:'List',
  data() {
    return {
      listInfo:{
        users:[],
        isFirst:true,
        isLoading: false,
        errMsg:''
      }
    }
  },
  methods: {
    saveData(msg,dataObj){
      this.listInfo = {...this.listInfo,...dataObj}
    }
  },
  mounted() {
    //组件一挂载就绑定事件
    // this.$bus.$on('get-list-data',this.saveData)

    //组件一挂载就订阅消息
    this.token = Pubsub.subscribe('get-list-data',this.saveData)
  },
  beforeDestroy() {
    //组件销毁前取消绑定事件
    //this.$bus.$off('get-list-data') //关闭全局事件总线

    //组件销毁前取消订阅
    Pubsub.unsubscribe(this.token)   //取消订阅
  },
}
</script>


<style scoped>
  .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>