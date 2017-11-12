<template>
	<main>
		<div class="my_top">
			<div class="return">
				<img src="../../assets/img/return.png" width="15px" onclick="window.history.go(-1)"/>
			</div>
			<div class="core">
				<img src="../../assets/img/touxiang.png" width="55px"/>
			</div>
			<p>个人中心</p>
		</div>
		<div class="column_wallet">
			<img src="../../assets/img/wallet.png" width="30px"/>
			<p>我的钱包</p>
		</div>
		<div class="column">
			<img src="../../assets/img/people.png" width="30px"/>
			<p>会员中心</p>
		</div>
		<div class="column">
			<img src="../../assets/img/order_3.png" width="30px"/>
			<p>我的订单</p>
		</div>
		<div class="column">
			<img src="../../assets/img/message.png" width="30px"/>
			<p>消息中心</p>
		</div>
		<div class="column">
			<img src="../../assets/img/adrress.png" width="30px"/>
			<p>地址管理</p>
		</div>
		<div class="column_address">
			<img src="../../assets/img/share.png" width="30px"/>
			<p>邀请地址</p>
		</div>
	</main>
</template>

<script>
</script>

<style>
	body{
		background: #f9f9f9;
	}
	.my_top{
		width: 100%;
		height: 110px;
		background: #01aff0;
	}
	.return img{
		padding-left: 2%;
		padding-top: 10px;
	}
	.core img{
		float: left;
		padding-left: 7%;
		padding-top: 7px;
	}
	.my_top p{
		float: left;
		margin-left: 5%;
		margin-top: 20px;
		font-size: 20px;
		color: #fff;
	}
	.column_wallet{
		width: 100%;
		height: 46px;
		background-color: #fff;
		border-bottom: 1px solid silver;
		border-top: 1px solid silver;
		margin: 15px 0;
	}
	.column_wallet img{
		float: left;
		margin-left: 5%;
		margin-top: 8px;
	}
	.column_wallet p{
		float: left;
		margin-left: 4%;
		margin-top: 9px;
		font-size: 20px;
		
	}
	.column{
		width: 100%;
		height: 46px;
		background-color: #fff;		
		/*border-bottom: 1px solid silver;*/
		border-top: 1px solid silver;
		
	}
	.column img{
		float: left;
		margin-left: 5%;
		margin-top: 8px;
	}
	.column p{
		float: left;
		margin-left: 4%;
		margin-top: 9px;
		font-size: 20px;
		
	}
	.column_address{
		width: 100%;
		height: 46px;
		background-color: #fff;
		border-top: 1px solid silver;
		border-bottom: 1px solid silver;
		margin-top: 15px;
	}
	.column_address img{
		float: left;
		margin-left: 5%;
		margin-top: 8px;
	}
	.column_address p{
		float: left;
		margin-left: 4%;
		margin-top: 9px;
		font-size: 20px;
		
	}
</style>