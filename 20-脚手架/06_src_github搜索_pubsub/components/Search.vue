<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input @keyup.enter="search" v-model="keyword" type="text" placeholder="enter the name you search"/>&nbsp;
        <button @click="search">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Pubsub from 'pubsub-js'
export default {
  name:'Search',
  data() {
    return {
      keyword:''
    }
  },
  methods: {
   async search(){
     //请求之前通知list更新他的data
    //  this.$bus.$emit('get-list-data',{isFirst:false,isLoading:true})
     Pubsub.publish('get-list-data',{isFirst:false,isLoading:true})
      try {
        //发送请求
        const response = await axios.get('https://api.github.com/search/users',{
          params:{q:this.keyword}
        })
      const {items} = response.data
      //请求成功后，通知list更新他的data
      // this.$bus.$emit('get-list-data',{isLoading:false,users:items})
      Pubsub.publish('get-list-data',{isLoading:false,users:items})
      } catch (error) {
        //请求失败，通知list更新他的data
        // this.$bus.$emit('get-list-data',{isLoading:false,users:[],errMsg:error.message})
        Pubsub.publish('get-list-data',{isLoading:false,users:[],errMsg:error.message})
      }
    }
  },
}
</script>
