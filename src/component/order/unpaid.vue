<template>
	<main>
		<div class="order_top">
			未付款
		<img src="../../assets/img/return.png" width="15px" onclick="window.history.go(-1)"/>
		<!--<img src="../../assets/img/banner2.fw.png"/>-->
		</div>	
		<!--<button @click="get">按钮</button>
		<p>{{msg}}</p>-->
		<!--<mt-swipe :auto="4000">
		  <mt-swipe-item><img src="../../assets/img/banner.png" width="100%"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/banner2.fw.png" width="100%"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/banner3.fw.png" width="100%"/></mt-swipe-item>
		</mt-swipe>-->
		
		<!--<mt-search v-model="value"></mt-search>
		<mt-search
		  v-model="value"
		  cancel-text="取消"
		  placeholder="搜索">
		</mt-search>-->
		
		<!--<mt-navbar v-model="selected">
		  <mt-tab-item id="1">选项一</mt-tab-item>
		  <mt-tab-item id="2">选项二</mt-tab-item>
		  <mt-tab-item id="3">选项三</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		  	<div class="order_box">
				<div class="title1">日常保洁:</div>
					<div class="order_txte">
						<div class="border_top"></div>
						<h1>2017-10-30&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;09:30-12:00</h1>
						<h2>孵卵器xx小区1号楼110室</h2>
						<p>￥150</p>
						<div class="border_bottom"></div>
					</div>
					<ul>
						<li>取消订单</li>
						<router-link to="/unpaid"><li>未付款</li></router-link>
					</ul>
			</div>
		    <mt-cell v-for="n in 10" :title="'内容 ' + n" />
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		  	<div class="complete">
			<div class="state_box">
				<h1>已完成</h1>
				<div class="state_bottom"></div>
			</div>
			<div class="order_box">
				<div class="title">日常保洁:</div>
				<div class="order_txte">
					<div class="border_top"></div>
					<h1>2017-10-30&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;09:30-12:00</h1>
					<h2>孵卵器xx小区1号楼110室</h2>
					<p>￥150</p>
					<div class="border_bottom"></div>
				</div>
				<ul>
					<li>已完成</li>
					<li>已退款</li>
					<li>评价</li>
				</ul>
			</div>
		</div>
		    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
		  </mt-tab-container-item>
		</mt-tab-container>-->
<!--		
		<ul>
		  <li v-for="item in list">
		    <img v-lazy="item">
		  </li>-->
		</ul>
	</main>
</template>

<script>
//	export default{
//		data(){
//			return {
//				msg:'123'
//			}
//		},
//		methods:{
//			get(){
//				alert(1)
//				this.$toast({
//				   message: '提示',
//				   position: 'top',
//				   duration: 5000,
//				   iconClass: 'iconfont icon-ren'
//				})
//			}
//		}
//	}
//	export default {
//		data(){
//			return{
//				selected:''
//			}
//		}
//	}

//	export default{
//		data(){
//			return{
//				list:['../../assets/img/banner2.fw.png','../../assets/img/banner.fw.png']
//			}
//		}
//	}
</script>

<style>
	.order_top{
		width: 100%;
		height: 46px;
		line-height: 46px;
		background-color: #01aff0;
		text-align: center;
		font-size: 20px;
		color: #fff;
		position: relative;
	}
	.order_top img{
		position: absolute;
		left: 1%;
		top: 10px;
	}
	.mint-swipe-items-wrap{
		height: 0px;
		padding-bottom:32%;
		background: lime;
	}
	.mint-swipe-indicators{
		bottom: 5px;
		/*right: -10%;*/
	}
	/*.mint-swipe-indicator{
		background: #fff;
		opacity: 1;
	}*/
	.order_box{
		width: 100%;
		height: 155px;
		background-color: #fff;
		border-top: 1px solid silver;
		position: relative;
		border-bottom: 1px solid silver;
	}
	.title1{
		width: 100%;
		height: 40px;
		line-height: 40px;
		/*margin-left: 5%;*/
	}
	
	.order_txte{
		width: 100%;
		height: 65px;
		position: relative;
		
	}
	.order_txte .border_top{
		width: 90%;
		height: 1px;
		position: absolute;
		top: 0;
		margin-left: 5%;
		background-color: silver;
	}
	.order_txte h1{
		margin-left: 5%;
		padding:5px 0;
	}
	.order_txte h2{
		margin-left: 5%;
	}
	.order_txte p{
		position: absolute;
		bottom: 0;
		right: 5%;
	}
	.order_txte .border_bottom{
		width: 90%;
		height: 1px;
		position: absolute;
		bottom: 0;
		margin-left: 5%;
		background-color: silver;
	}
	.order_box ul {
		margin-right: 5%;
		margin-top: 10px;
	}
	.order_box ul li{
		float: right;
		width: 20%;
		height: 30px;
		margin-left: 2%;
		border: 1px solid silver;
		text-align: center;
		line-height: 30px;
		border-radius: 10%;
	}
	 .order_box ul li:nth-of-type(2){
		border: 1px solid sandybrown;
		color: sandybrown;
	}
	.complete .order_box ul li:nth-of-type(2){
		border: 1px solid silver;
		color: #000;
	}
	.complete .order_box ul li:nth-of-type(3){
		border: 1px solid #01aff0;
		color:#01aff0;
	}
	.complete{
		margin-top: 15px;
	}
</style>