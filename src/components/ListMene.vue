<template>
    <div class="indexnav">
        <div
        v-for="item in caculMeneList " 
        :key="item.menuId" >
            <router-link  
            class="indexnav1" 
            :to= "caculTo(item)"
            style="background:#f05b72;margin-left: 3px;">
        
                <svg-icon :icon-class="item.icon" /> <br> 
                {{item.menuName}}
        </router-link>
    </div>
    </div>
     
</template>

<script>
    import axios from 'axios'
    import { serverUrl } from './config'
    export default {
    name: 'ListMene',
    props:['meneid'],
    data(){
      return {
        caculMeneList:[],
      }
    },
    methods:{
        caculTo(item){
            if(item.meneorhtml === "0")
                return {
                    name:'liebiao',
                    params:{
                    meneid:item.menuId
                    }   
                }
            else
             return {
                    name:'reportHtml',
                    params:{
                    meneid:item.menuId
                    }   
                }
        }
    },
    mounted(){

        axios.get(`${serverUrl}/report/getnotk/getbyparent?parentId=`+this.$route.params.meneid).then(
					response => {
						this.caculMeneList = response.data.data                    
					},
					error => {
						console.log(msg)
		})
    },
    beforeDestroy(){
          
    }
}
</script>

<style scoped>
         .indexnav {
                width: 95%;
                margin: 0 auto
                
            }

            .indexnav1 {
                display: block;
                float: left ;
                -moz-border-radius: 5px;
                -webkit-border-radius: 5px;
                border-radius: 15px;
                color: #fff;
                text-align: center;
                text-decoration: none;
                padding: 15px 2;
                font-size: 16px;
                margin: 10px 0;
                width: 49%
            }

            .indexnav a img {
                width: 50px;
                height: 50px
            }

</style>