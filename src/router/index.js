// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import FirstPage from '../components/FirstPage.vue'

import ListMene from '../components/ListMene.vue'
import reportHtml from '../components/ReportHtml.vue'


//创建并暴露一个路由器
export default new VueRouter({
	mode: 'history',
	routes:[
		{
			path:'/firstpage/:meneid',
			component:FirstPage,
			props:true
		},
		{
			name:"liebiao",
			path:'/listmene/:meneid',
			component:ListMene,
			
		},
		{
			name:"reportHtml",
			path:'/reportHtml/:meneid',
			component:reportHtml,
			
		},
		{path: '/', redirect: '/firstpage/201'}
	]
})
