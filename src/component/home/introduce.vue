<template>
	<main>
		<div class="order_top">
			服务介绍
			<img src="../../assets/img/return.png" width="16px" onclick="window.history.go(-1)"/>
		</div>
		<ul class="list">
			<li>
				<h1>1:什么是优惠券?</h1>
				<p>给持券人的某种特殊权利的优待券(如赊购物品或享受客人的优惠)。</p>
			</li>
			<li>
				<h1>2:优惠券如何使用?</h1>
				<p>优惠券按照使用分类：一种是宣传型优惠券，根据商家提供的优惠直接去消费。另一种是折扣型优惠券，在消费时使用即可享受相应的优惠。。</p>
			</li>
			<li>
				<h1>3:如何获得优惠券?</h1>
				<p>我们领取优惠券后，最好及时下单，因为这样优惠券一般都有一个有效期，到期后，就没有优惠了.</p>
			</li>
			<li>
				<h1>4:什么是优惠券?</h1>
				<p>给持券人的某种特殊权利的优待券(如赊购物品或享受客人的优惠)。</p>
			</li>
			
		</ul>
	</main>
</template>

<script>
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
		top: 7px;
	}
	.list li{
		width: 100%;
		margin-top: 10px;
	}
	.list li h1{
		font-size: 20px;
		color:#01aff0;
		margin-left: 5%;
	}
	.list li p{
		font-size: 18px;
		padding: 5px 5%;
	}
</style>