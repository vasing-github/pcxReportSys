<template>
    <div class="indexnav">
       <div v-html="myHtml"></div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
    name: 'reportHtml',
    props:['meneid'],
    data(){
      return {
        myHtml:''
      }
    },
    methods:{
       
    },
    mounted(){

        axios.get('http://10.164.163.39:8080/report/getnotk/getone?menuId='+this.$route.params.meneid).then(
					response => {
            //请求成功后更新List的数据
                          console.log(response)
						this.myHtml = response.data.data.content
                        
					},
					error => {
						//请求后更新List的数据
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