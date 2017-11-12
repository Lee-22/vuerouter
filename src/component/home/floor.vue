<template>
	<main>
		<div class="order_top">
				地面打蜡
			<img src="../../assets/img/return.png" width="15px" onclick="window.history.go(-1)"/>
			<p>免责声明</p>
		</div>
		<div class="choice">
			<div class="position">
				<img src="../../assets/img/adrress.png" width="25px"/>
			</div>
			<p>请选择服务地址</p>
			<div class="next">
				<img src="../../assets/img/arrow.png" width="13px"/>
			</div>
		</div>
		<div class="houses">
			<div class="measure">
				<h1>地面面积:</h1>
				<h2>35/㎡,50㎡起</h2>
			</div>
			<input placeholder="输入面积"  id="numer"/>
			<p>㎡</p>
		</div>
		<div class="time_box">
			<div class="time">
				<img src="../../assets/img/time.png" width="25px"/>
			</div>
			<p>请选择服务时间</p>
			<div class="next">
				<img src="../../assets/img/arrow.png" width="13px"/>
			</div>
		</div>
		<div class="service">标准服务</div>
		<div class="cost">
			合计:￥0.0
		</div>
		<div class="submits">提交订单</div>
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
	.order_top p{
		position: absolute;
		right: 2%;
		top: 1px;
		font-size: 16px;
	}
	.choice{
		width:100%;
		height: 46px;
		background-color: #fff;
		border-bottom: 1px solid silver;
	}
	.choice .position{
		float: left;
		margin-left: 5%;
		margin-top: 10px;
	}
	.choice p{
		float: left;
		margin-left: 3%;
		margin-top: 10px;
		font-size: 18px;
	}
	.choice .next{
		float: right;
		margin-right: 3%;
		margin-top: 13px;	
	}
	.houses{
		width: 100%;
		height: 60px;
		margin: 20px 0;
		background-color: #fff;
		border-top: 1px solid silver;
		border-bottom: 1px solid silver;
		position: relative;
	}
	.measure{
		float: left;
		margin-left: 5%;
		margin-top: 10px;
		
	}
	.measure h2{
		color: red;
	}
	#numer{
		width: 50%;
		height: 34px;
		margin-left: 8%;
		line-height: 30px;
		margin-top: 13px;
		padding-left: 10px;
		border-radius: 5%;
		border: 1px solid #01aff0;
		
	}
	.houses p{
		position: absolute;
		right: 10%;
		top:18px;
	}
	.time_box{
		width: 100%;
		height: 46px;
		line-height: 46px;
		margin-top: 15px;
		border-top: 1px solid silver;
		border-bottom: 1px solid silver;
		background-color: #fff;
	}
	.time_box .time{
		float: left;
		margin-left: 5%;
		margin-top: 8px;
	}
	.time_box p{
		float: left;
		margin-left: 3%;
		font-size: 18px;
	}
	.time_box .next{
		float: right;
		margin-right: 3%;
		margin-top: 8px;	
	}
	.service{
		width: 100%;
		height: 46px;
		text-align: center;
		line-height: 46px;
		background-color: #01aff0;
		margin-top: 25px;
		font-size: 20px;
		color: #fff;
	}
	.cost{
		float: right;
		color: salmon;
		font-size: 25px;
		margin-top: 15px;
		margin-right: 5%;
		overflow: hidden;
	}
	.submits{
		width: 100%;
		height: 46px;
		text-align: center;
		line-height: 46px;
		background-color: sienna;
		margin-top: 60px;
		font-size: 20px;
		color: #fff;
	}
</style>