
	function foot(){
	//console.log(0)
	//点击刷新页面：
	
	var arr1 = ["0","-0.5rem","-1rem","-1.5rem"]

	$('a','footer').on("click",function(){
//		$("footer").prevAll().html('');
		$.each($('.footer_img'),function(index,value){
			$('.footer_img').eq(index).css("background-position",""+arr1[index]+" 0")
		})
		var x = $(this).children().eq(0).css("background-position");
		var arr = x.split(" ");
		
		$(this).children().eq(0).css("background-position",''+arr[0]+' -0.5rem')
		 
	})
//	$('a','footer').eq(0).trigger('click');
	
	
}


