import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import rou from './js/router.js'

   import Resource from 'vue-resource'
   Vue.use(Resource)

import MintUI from 'mint-ui'
	Vue.use(MintUI)
import '../node_modules/mint-ui/lib/style.css'
new Vue({
  el: '#app',
  render: h => h(App),
	router:rou
})



















//$('.money ul li input').click(function(){
//		$('.packages_box').show()
//	})
//$('.dow').click(function(){
//	$('.text').show()
//})
//$('.up').click(function(){
//	$('.text').hide()
//})
////$('.money ul li ').click(function(){
////		$('.packages_box').hide()
////})
