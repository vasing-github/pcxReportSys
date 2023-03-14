<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import ListMene from './components/ListMene.vue'
import ReportHtml from './components/ReportHtml.vue'

export default {
  name: 'App', 
  components: {Header,ListMene,ReportHtml},
}
</script>

<style>
    #app {
      /* font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px; */
      padding: 0;
      margin: 0;
      background: #fff;
      font-size: 14px
    }

          

    a {
      text-decoration: none
    }

            

            
            .toerw {
                bottom: 0;
                padding: 9px 0 8px 3%;
                position: fixed;
                background: #9933cc;
                width: 97%;
                color: #fff
            }

            .toerw a {
                color: #FFF;
                font-size: 16px
            }

</style>
