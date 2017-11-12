<template>
	<main>
		<div class="order_top">
			日常清理
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
		<div class="area_box">
			<div class="house">
				<img src="../../assets/img/area.fw.png" width="30px"/>
				<p>请选择房屋面积(㎡)</p>
				<div class="border_bottom"></div>
			</div>
			<ul>
				<li>1-100</li>
				<li>101-130</li>
				<li>130-160</li>
				<li>160-200</li>
				<li>200-260</li>
				<li>260-380</li>
				<li>380-500</li>
				<li>500-720</li>
			</ul>
			<p class="square">30-50元/小时,1元/平方</p>
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
		<div class="service">请选择服务</div>
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
	.area_box{
		width: 100%;
		height: 200px;
		margin-top: 15px;
		background-color: #fff;
		border-top: 1px solid silver;
		border-bottom: 1px solid silver;
	}
	.area_box .house{
		width: 100%;
		height:46px;
		position: relative;
	}
	.area_box .house img{
		float: left;
		margin-left: 5%;
		margin-top: 10px;
	}
	.area_box .house p{
		float: left;
		margin-left: 3%;
		margin-top: 10px;
		font-size: 18px;
	}
	.area_box .house .border_bottom{
		width: 90%;
		height: 1px;
		position: absolute;
		bottom: 0;
		left: 5%;
		background-color: silver;
	}
	.area_box ul{
		width: 100%;
	}
	.area_box ul li{
		float: left;
		width: 20%;
		height: 30px;
		margin-left: 3.5%;
		margin-top: 15px;
		line-height: 30px;
		text-align: center;
		border: 1px solid silver;
		border-radius: 20%;
	}
	.area_box .square{
		float: right;
		margin-right: 5%;
		margin-top: 15px;
		color: #ccc;
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