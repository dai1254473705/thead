//define(["jquery"],function(){
//	return{
//		getdata:function(res){
//			$.get("/api/audio",{url : "http://v.juhe.cn/toutiao/index",key : "1b735343b0f1627249cd649437915c40",type:"top"},function(res){
//					//console.log(res);
//					var res1 = res.result.data;
//					var html = '';
//					$.each(res1,function(index,value){
//						html = '<p><a href="'+value.url+'"><img src="'+value.thumbnail_pic_s03+'"></a></p>';
//						$h2 = $('<h2><a href="'+value.url+'">'+value.title+'</a></h2>');
//						$time = $('<p><span>'+value.author_name+'</span><span>'+value.date+'</span><span>'+value.realtype+'</span></p>')
//						var $div = $('<div></div>');
//						var $box = $('<div id="box"></div>');
//						$div.append($box);
//						$box.html(html);
//						$box.append($h2);
//						$div.append($time);
//						$div.appendTo($('section'));
//					})
//				},"json")
//	}	
//}	
//})