<template>
    <div class="container">
        <img src="../assets/rBUtIl58u6yAK6z8ABYUMdjfumk703.png" alt="Snow" style="width:100%;">
        <div class="centered">{{tittle}}</div>
    </div>
</template> 

<script>
    import axios from 'axios'
    import { serverUrl } from './config'
    export default {
    name: 'Header',
    data(){
      return {
        tittle:'',
      }
    },
    props:['meneid'],
    mounted(){
        axios.get(`${serverUrl}/report/getnotk/getone?menuId=`+this.$route.params.meneid).then(
                response => {
                    this.tittle = response.data.data.menuName
                },
                error => {
                    console.log(msg)
         })
    },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        .headertop {
                /*background:url(/static/images/bannertop.jpg) no-repeat; background-size:100%; */
                font-size: 22px;
                color: #fff;
                /*padding:20Px 0;*/
                text-align: center;
            }

            .headertop h1 {
                font-weight: bold;
                line-height: 38px;
                padding: 10px 0 1px 0 ;
                font-size: 36px;
                margin: 0
            }

            .headertop img {
                display: block;
                height: auto;
                max-width: 100%;
            }
            .container {
            position: relative;
            text-align: center;
            color: white;
            }

            .centered {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 4vw;
}
</style>
