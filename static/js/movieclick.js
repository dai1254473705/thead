$(function(){
	//点击事件
	var city ="北京";
	
	$(function(){
		//鼠标点击找当地正在上映电影
		$(".s_video").on("tap",function(){
			var val = $(this).siblings("input").val();
			if(val){
				city = val;
				apiMovie();
			}
		})
		
		//点击close关闭
		$(".close").on("tap",function(){
			$(".detalis").css({
				'display':'none'
			})
		})
		
		//点击图片时，详情出现
		$(".content").on("tap","img",function(){
			$(".detalis").css({
				'display':'block'
			})
			//获取图片信息
			$(".txt img")[0].src = $(this)[0].src;
			//获取图片的alt  和  title 内容
			$(".txt p span").html($(this)[0].alt);
			//title
			$(".txt a").attr("href",$(this)[0].title);
//					console.log($(".txt a").attr());
			
		})
		//鼠标touch图标改变
		
		$(".s_video").on("touchstart",function(){
			$(this).css({
				'background':'url(../static/img/video_searchhover.png) no-repeat center',
				'backgroundSize':'0.5rem'
			})
		})
		
		//鼠标touch图标改变
		$(".s_video").on("touchend",function(){
			$(this).css({
				'background':'url(../static/img/video_search.png) no-repeat center',
				'backgroundSize':'0.5rem'
			})
		})
	})
	function apiMovie(){
		//ajax向api传数据
		$.get("/api/audio",{
			//向服务器发送的数据
			url:"http://op.juhe.cn/onebox/movie/pmovie",
			dtype:"json",
			key:"4200ddc0f6d8934c315b3b20fb575b97",
			city:city
		},function(res){
			//console.log(res);
			callback(res);
		},"json");
	}
	apiMovie();
})