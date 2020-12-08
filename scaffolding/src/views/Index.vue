<template>
<div>
  <div class="banner">
    <mt-swipe  @change="handleChange" >
      <mt-swipe-item><img src="../assets/images/banner1.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/banner2.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/banner1.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/banner1.png" alt=""></mt-swipe-item>
</mt-swipe>
  </div>
  <div class="yellow_si">
		<ul class="clearfix">
			<li class="wow bounceIn">
				<div class="pic">
					<img src="../assets/images/ye_01.png" alt="" class="img_xiao" />
				</div>
				<div class="pirce">
					50 218
				</div>
				<div class="txt">
					对新人成功举办婚礼
				</div>
				<div class="go">
					<a href="hunyan.html">go</a>
				</div>
			</li>
			<li class="wow bounceIn">
				<div class="pic">
					<img src="../assets/images/ye_02.png" alt="" class="img_xiao" />
				</div>
				<div class="pirce">
					1500
				</div>
				<div class="txt">
					位婚礼主持人任你选
				</div>
				<div class="go">
					<a href="hunyan.html">go</a>
				</div>
			</li>
			<li class="wow bounceIn">
				<div class="pic">
					<img src="../assets/images/ye_03.png" alt="" class="img_xiao" />
				</div>
				<div class="pirce">
					499 99
				</div>
				<div class="txt">
					高端订婚宴10桌
				</div>
				<div class="go">
					<a href="hunyan.html">go</a>
				</div>
			</li>
			<li class="wow bounceIn">
				<div class="pic">
					<img src="../assets/images/ye_04.png" alt="" class="img_xiao" />
				</div>
				<div class="pirce">
					30
				</div>
				<div class="txt">
					高端宴会设计师
				</div>
				<div class="go">
					<a href="hunyan.html">go</a>
				</div>
			</li>
		</ul>
	</div>
  </div>
  
</template>
<script>
export default {
  methods:{
     handleChange(index) {
     }
  }
}
</script>
<style >
 .banner{
   width:400px;
   height:100px;
 }

.yellow_si ul li{  
  width: 50%  !important;
  padding: 15px 0px 30px;
 border-bottom: 1px solid #e2b939;
}
.yellow_si ul li:hover{
  background: #ef7ebe;;
}
.yellow_si ul li {
    width: 25%;
    float: left;
    text-align: center;
    box-sizing: border-box;
    padding: 30px 0px;
    border-right: 1px solid #e2b939;
    position: relative;
    background: #fed73a;
}
.yellow_si ul li .go {
    height: 53px;
    width: 53px;
    background: url(../assets/images/go.png) no-repeat;
    position: absolute;
    bottom: 0px;
    right: 0px;
    color: #fed73a;
    font-weight: bold;
    font-family: arial;
    font-size: 14px;
    line-height: 70px;
    text-align: right;
}
.yellow_si ul li .go a{
   color:#fed73a;
}
.yellow_si ul li .pirce {
    font-family: impact;
    font-size: 54px;
    position: relative;
    margin: 5px 0px;
    color: #FFF;
    overflow: hidden;
    height: 65px;
}
.yellow_si ul li .pic {
  position: relative;
}
.yellow_si ul li .pic:after {
  content: "";
  border-bottom: 1px solid #3d211d;
  width: 27px;
  position: absolute;
  bottom: -4px;
  left: 50%;
  margin-left: -13px;
}
</style>