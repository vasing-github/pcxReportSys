<template>
  <div>
      <Header :meneid=meneid ></Header>
      <list-mene  :meneid=meneid />
</div>
    
</template>

<script>
import Header from './Header.vue'
import ListMene from './ListMene.vue'
import ReportHtml from './ReportHtml.vue'

export default {
    name:'FirstPage',
    components: {Header,ListMene,ReportHtml},
    props:['meneid'],
}
</script>

