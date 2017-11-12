import VueRouter from 'vue-router'
//首页
import home from '../component/nav/home.vue'
import daily from '../component/home/daily.vue'
import floor from '../component/home/floor.vue'
import windows from '../component/home/windows.vue'
import leather from '../component/home/leather.vue'
import introduce from '../component/home/introduce.vue'
import member from '../component/home/member.vue'
import telephone from '../component/home/telephone.vue'
//订单
import order from '../component/nav/order.vue'
import unpaid from '../component/order/unpaid.vue'
//我的
import my from '../component/nav/my.vue'

export default new VueRouter({
	routes:[
		{path:'/home',component:home},
		{path:'/daily',component:daily},
		{path:'/floor',component:floor},
		{path:'/windows',component:windows},
		{path:'/leather',component:leather},
		{path:'/introduce',component:introduce},
		{path:'/member',component:member},
		{path:'/telephone',component:telephone},
		
		{path:'/order',component:order},
		{path:'/unpaid',component:unpaid},
		
		{path:'/my',component:my},
		{path:'*',redirect:'/home'}
	]
})


