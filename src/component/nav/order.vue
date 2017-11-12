<template>
	<main>
		<div class="order_top">
			我的订单
		<img src="../../assets/img/return.png" width="15px" onclick="window.history.go(-1)"/>
	</div>
	<div class="state_box">
		<h1>进行中</h1>
		<div class="state_bottom"></div>
	</div>
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
		<div class="submit">提交</div>
	</main>
</template>

<script>
</script>

<style>
	body{
		background: #f9f9f9;
	}
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
	.state_box{
		width: 100%;
		height: 46px;
		position: relative;
		background-color: #fff;
		border-top: 1px solid silver;
	}
	.state_box h1{
		width: 100%;
		line-height: 46px;
		text-align: center;
		font-size: 20px;
	}
	.state_bottom{
		width: 100%;
		height: 1px;
		position: absolute;
		bottom: 0;
		left: 0;
		background: silver;
	}
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
	.submit{
		width: 100%;
		height: 45px;
		margin-top:30px;
		text-align: center;
		line-height: 45px;
		background: #01aff0;
		font-size: 22px;
		color: #fff;
	}
</style>