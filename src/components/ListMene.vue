<template>
    <div class="indexnav">
        <div
        v-for="item in meneList " 
        :key="item.menuId" >
            <router-link  
            class="indexnav1" 
            :to="{path:'/listmene',
            query:{
                meneid:item.menuId
            }}"
            style="background:#f05b72;margin-left: 3px;">
        
                <svg-icon :icon-class="item.icon" /> <br> 
                {{item.menuName}}
        </router-link>
    </div>
   
    <router-view/>
    
    </div>
     
</template>

<script>
    import axios from 'axios'

    export default {
    name: 'ListMene',

    props:['meneList','meneid'],
    methods:{

    },
    mounted(){
        console.log(this.meneid)
    },
    beforeDestroy(){
       
        // if(this.meneid !== null){
        //     axios.get('http://10.164.163.39:8080/report/getnotk/getbyparent?parentId='+this.meneid).then(
		// 			response => {
		// 				console.log('请求成功了',response)
		// 				//请求成功后更新List的数据
		// 				this.meneList = response.data.data
		// 			},
		// 			error => {
		// 				//请求后更新List的数据
		// 				console.log(msg)
		// 			})
        // }
        
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