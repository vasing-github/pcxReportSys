<template>
  <div>
   
      <Header/>
      <list-mene :meneList="meneList" :meneid=0 />
</div>
    
</template>

<script>
import Header from './Header.vue'
import ListMene from './ListMene.vue'
import axios from 'axios'

export default {
    name:'FirstPage',
    components: {Header,ListMene},
    props:['meneid'],
    data(){
      return {
        meneList:[]
      }
    },
    mounted(){
        axios.get('http://10.164.163.39:8080/report/getnotk/getbyparent?parentId='+this.meneid).then(
					response => {
            //请求成功后更新List的数据
						this.meneList = response.data.data
					},
					error => {
						//请求后更新List的数据
						console.log(msg)
					})
    }
}
</script>

