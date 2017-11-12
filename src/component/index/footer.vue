<template>
	<div id="footer">
		<ul>
			<li><img src="../../assets/img/index_blue.png" width="35px"/><router-link to="/home">首页</router-link></li>
			<li><img src="../../assets/img/order_gray.png" width="35px"/><router-link to="/order">订单</router-link></li>
			<li><img src="../../assets/img/my_gray.png" width="35px"/><router-link to="/my">我的</router-link></li>
		</ul>
	</div>
</template>
<script>
</script>

<style>
	*{
		text-decoration: none;
	}
	body,html{
		width: 100%;
	}
	.router-link-active{
				color: red;
				font-size:20px ;
			}
	#footer ul{
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	#footer ul li{
		float: left;
		width: 33.3%;
		text-align: center;
		text-decoration: none;
		position: relative;
	}
	#footer ul li img{
		position: absolute;
		top: -35px;
	}
</style>