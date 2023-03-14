<template>
 
    <div class="headertop">
       <img src="http://www.scpc.gov.cn/group3/M00/00/0E/rBUtIl58u6yAK6z8ABYUMdjfumk703.png">
    </div>
 
</template>

<script>
export default {
  name: 'Header',
 
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
</style>
