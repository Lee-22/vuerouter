<template>
	<main>
		<div class="order_top">
			会员介绍
		<img src="../../assets/img/return.png" width="16px" onclick="window.history.go(-1)"/>		
	</div>
	<div class="account">
		<h2>充值账号</h2>
		<p>13800138000</p>
	</div>
	<div class="money">
		<h1>请选择充值金额&nbsp;&nbsp;&nbsp;<span>(100起充)</span></h1>
		<ul>
			<li>100</li>
			<li>200</li>
			<li>500</li>
			<li><input placeholder="其他"></li>
		</ul>
		<div class="clearfix"></div>		
		<div class="first">
			<h2>首次充值</h2>
			<p>充100&nbsp;&nbsp;&nbsp;&nbsp;送100</p>
		</div>
	</div>
	<div class="packages_box" style="display: none;">
		<div class="packages_title">选择套餐:</div>
		<div class="packages">
			<h1>充值1000</h1>
			<h2>送100</h2>
			<img src="../../assets/img/btn.png" class="up" width="15px"/>
			<img src="../../assets/img/btn.png" class="dow" width="15px"/>
			<input type="radio" name="" id="" value="" />
			<div class="clearfix"></div>
			<div class="text">
				<h3>送各累卷品一张</h3>
				<h4>赠送明细</h4>
				<p>15元代金卷一张</p>
				<p>价值25元优质大桶水1次</p>
				<p>价值100元优秀理发师剪发1次</p>
				<p>60元皮具打蜡代金劵一张</p>
			</div>
		</div>	
	</div>
	<div class="mobile">
		<h2>推荐人手机号&nbsp;&nbsp;&nbsp;&nbsp;<input placeholder="输入推荐人手机号"></h2>
	</div>
	<div class="recharge">
		立即充值
	</div>
	</main>
</template>

<script>
	export default {
}
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
		top: 7px;
	}
	.account{
		width: 100%;
		height: 46px;
		margin-top: 15px;
		background-color: #fff;
		border-top: 1px solid silver;
		border-bottom: 1px solid silver;
	}
	.account h2{
		float: left;
		margin-left: 5%;
		line-height: 46px;
	}
	.account p{
		float: right;
		margin-right: 5%;
		line-height: 46px;
	}
	.money{
		width: 100%;
		height: 140px;
		background: #fff;
		/*border-bottom: 1px solid silver;*/
	}
	.money h1{
		margin-left: 5%;
		margin-top: 10px;
	}
	.money h1 span{
		color: darkorange;
	}
	.money ul{
		margin-top: 15px;
	}
	.money ul li{
		float: left;
		width: 20%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin-left: 3%;
		border: 1px solid silver;		
	}
	.money ul li input{
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border: 1px solid silver;
	}
	.clearfix{
		clear: both;
	}
	 .first{
		text-align: center;
		margin-top: 15px;
	}
	.first h2{
		font-size: 20px;
		margin-bottom: 5px;
	}
	.first p{
		color: darkorange;
		/*margin-bottom: 10px;*/
	}
	.packages_box{
		width: 100%;
		height: 220px;
		background-color: #fff;
	}
	.packages_title{
		margin-left: 3%;
		font-size: 20px;
	}
	.packages{
		margin-top: 5px;
		margin-left: 3%;
		position: relative;
	}
	.packages h1{
		float: left;
		
	}
	.packages h2{
		float: left;
		margin-left: 10%;
		color:darkorange ;
	}
	.packages img{
		position: absolute;
		left: 55%;
		top: 7px;
	}
	.packages input{
		position: absolute;
		right: 5%;
		top: 7px;
	}
	.text{
		margin-top: 5px;
	}
	.text h3{
		margin-bottom: 5px;
	}
	.clearfix{
		clear: both;
	}
	.mobile{
		margin-top: 15px;
		background: #fff;
		width: 100%;
		height: 46px;
		line-height: 46px;
		border-top: 1px solid silver;
		border-bottom: 1px solid silver;
	}
	.mobile h2{
		margin-left: 5%;
	}
	.mobile h2 input{
		border: none;
		outline: none;
	}
	
	.recharge{
		background-color:#01aff0;
		width: 100%;
		height: 46px;
		text-align: center;
		line-height: 46px;
		color: #fff;
		font-size: 22px;
		margin-top: 30px;
	}
</style>