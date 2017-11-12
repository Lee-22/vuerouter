<template>
	<main class="home">
		<div id="header">
			<h1>首页</h1>
			<div class="header_left">
				<select name="opt" id="" style="background: #01aff0; border: none; color: #fff;">
		    		<option value="101280101">广州</option>
		    		<option value="101280601">深圳</option>
		    		<option value="101280701">珠海</option>
		    		<option value="101280800">佛山</option>
		    	</select>
			</div>
			</div>
			<router-link to="/telephone"><div class="header_right">
				<img src="../../assets/img/phone_index.png" width="22px"/>
			</div></router-link>
			<router-view></router-view>
			
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../../assets/img/banner.png" width="100%"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/banner2.fw.png" width="100%"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/banner3.fw.png" width="100%"/></mt-swipe-item>
			</mt-swipe>
			
			<!--<div class="Img">-->
				<!--<img src="../../assets/img/banner.png" width="100%"/>-->
				<!--<img src="../../assets/img/banner2.fw.png" width="100%"/>
				<img src="../../assets/img/banner.png" width="100%"/>-->
				<!--<div class="spot">
					<span class="spot_left"></span>
					<span class="spot_in"></span>
					<span class="spot_rgiht"></span>
				</div>-->
			<!--</div>-->
			
			
			<div class="title">
				常用服务
				<span class="title_left"></span>
				<span class="title_rgiht"></span>
			</div>
			<router-link to="/daily"><div class="daily">
				<div class="border_top"></div>
				<img src="../../assets/img/baojie.png" width="18%"/>
				<div class="clear">
					<h1>日常保洁</h1>
					<p>35元/小时,2小时起</p>
				</div>
				<div class="border_bottom"></div>
			</div></router-link>
			<router-view></router-view>
			<div class="house">
				<div class="border_top"></div>
				<ul>
					<li>
						<router-link to="/floor"><div class="floor">
							<div class="border_rgiht"></div>
							<img src="../../assets/img/diban.png" width="65px"/>
							<p>地板打蜡</p>
						</div></router-link>
					</li>
					<li>
						<router-link to="/windows"><div class="window">
							<div class="border_rgiht"></div>
							<img src="../../assets/img/chuanghu.png" width="65px"/>
							<p>窗户清里</p>
						</div></router-link>
						<router-view></router-view>
					</li>
					<li>
						<router-link to="/leather"><div class="leather">
							<img src="../../assets/img/piju.png" width="65px"/>
							<p>皮具打蜡</p>
						</div></router-link>
						<router-view></router-view>
					</li>
				</ul>
				<div class="border_bottom"></div>
			</div>
			<div class="title">
				服务介绍
				<span class="title_left"></span>
				<span class="title_rgiht"></span>
			</div>
			<div class="introduce_box">
				<div class="introduce_top"></div>
				<ul>
					<li>
						<router-link to="/introduce"><div class="introduce">
							<img src="../../assets/img/fuwu2.png" width="60px"/>
							<p>服务介绍</p>
							<div class="introduce_rgiht"></div>
						</div></router-link>
						<router-view></router-view>
					</li>
					<li>
						<router-link to="/member"><div class="member">
							<img src="../../assets/img/huiyuan2.png" width="60px%"/>
							<p>会员介绍</p>
						</div></router-link>
						<router-view></router-view>
					</li>
				</ul>
				<div class="introduce_bottom"></div>
			</div>
		</main>
</template>

<script>
</script>

<style>
	.home{
		background: #f9f9f9;
	}
	#header{
		width: 100%;
		line-height: 46px;
		text-align: center;
		font-size: 20px;
		color: #fff;
		background: #01aff0;
		position: relative;
	}
	.header_left{
		position: absolute;
		top:0px;
		left: 3%;
		font-size: 16px;
		
	}
	.header_right {
		position: absolute;
		top: 5px;
		right: 4%;
	}
	
	.mint-swipe-items-wrap{
		height: 0px;
		padding-bottom:32%;
		
	}
	.mint-swipe-indicators{
		bottom: 0px
	}
	/*.Img{
		position: relative;
	}
	.Img img{
		display: block;
	}
	.spot{
		position: absolute;
		bottom: 5px;
		right: 4%;
		width: 55px;
		text-align: center;
	}
	.spot .spot_left{
		display: inline-block;
		width: 10px;
		height: 10px;
		background: #fff;
		border-radius:100%;
	}
	.spot .spot_in{
		display: inline-block;
		width: 10px;
		height: 10px;
		background: #fff;
		margin: 0 5px;
		border-radius:100%;
	}
	.spot .spot_rgiht{
		display: inline-block;
		width: 10px;
		height: 10px;
		background: #fff;
		border-radius:100%;
	}*/
	.title{
		width: 22%;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		text-align: center;
		position: relative;
		color: silver;
	}
	.title .title_left{
		position: absolute;
		width: 160%;
		height: 1px;
		background: silver;
		left: -160%;
		top: 20px;
	}
	.title .title_rgiht{
		position: absolute;
		width: 160%;
		height: 1px;
		background: silver;
		right: -160%;
		top: 20px;
	}
	.daily{
		width: 100%;
		height: 105px;
		background: #fff;
		background-image: url(../../assets/img/hot.png);
		background-size: 40px auto;
		background-position: left top;
		background-repeat: no-repeat;
		position: relative;
	}
	.daily .border_top{
		width: 100%;
		height: 1px;
		background-color: silver;
		position: absolute;
		left: 0;
		top: 0;
	}
	.daily img{
		width: 70px;
		margin-left: 10%;
		margin-top: 18px;
	}
	.daily .border_bottom{
		width: 100%;
		height: 1px;
		background-color: silver;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	.clear{
		position: absolute;
		left: 33%;
		top: 28px;
	}
	.clear h1{
		font-size: 23px;
		margin-bottom: 5px;
	}
	.clear p{
		font-size: 18px;
		color: silver;
	}
	.house{
		width: 100%;
		height: 105px;
		background: #fff;
		margin-top: 20px;
		position: relative;
	}
	.house ul li{
		float: left;
		width: 33.3%;
		text-align: center;
		margin-top: 10px;
		position: relative;
	}
	.house .border_top{
		width: 100%;
		height: 1px;
		background-color: silver;
		position: absolute;
		left: 0;
		top: 0;
	}
	.border_rgiht{
		position: absolute;
		width: 1px;
		height: 90px;
		background-color: silver;
		right: 0;
	}
	.house .border_bottom{
		width: 100%;
		height: 1px;
		background-color: silver;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	.introduce_box{
		width: 100%;
		height: 80px;
		line-height: 80px;
		background: #fff;
		position: relative;
		margin-bottom: 65px;
	}
	.introduce_top{
		width: 100%;
		height: 1px;
		background-color: silver;
		position: absolute;
		left: 0;
		top: 0;
	}
	.introduce_box ul li{
		float: left;
		width: 50%;
		position: relative;
	}
	.introduce img{
		display: inline-block;
		float: left;
		margin-left: 15%;
		margin-top: 10px;
	}
	.introduce p{
		float: left;
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin-left: 5%;
		margin-top: 25px;
	}
	.introduce_rgiht{
		position: absolute;
		right: 0;
		width: 1px;
		height: 70px;
		line-height: 70px;
		margin-top: 5px;
		background-color: silver;
	}
	.member img{
		display: inline-block;
		float: left;
		margin-left: 15%;
		margin-top: 10px;
	}
	.member p{
		float: left;
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin-left: 5%;
		margin-top: 25px;
	}
	.introduce_bottom{
		width: 100%;
		height: 1px;
		background-color: silver;
		position: absolute;
		left: 0;
		bottom: 0;
	}
</style>