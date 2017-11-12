<template>
	<main>
		<div class="order_top">
			联系分式
		<img src="../../assets/img/return.png" width="15px" onclick="window.history.go(-1)"/>
	</div>
	<div class="contact">
		<h1>xx环保有限公司:</h1>
		<ul>
			<li>电话:020-xxxx-122</li>
			<li>邮箱:liXXXX09@163.com</li>
			<li>QQ:343XXX432</li>
			<li>传真:86(20)XXXX61</li>
		</ul>
	</div>
	
	</main>
</template>

<script>
</script>

<style >
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
	.contact h1{
		font-size: 24px;
		margin-left: 5%;
		margin-top: 10px;
		margin-bottom: 10px;
		color: slategray;
		
	}
	.contact ul li{
		margin-left: 5%;
		font-size: 20px;
		padding: 10px 0;
		color: slategray;
		border-bottom: 1px dashed silver;
	}
</style>