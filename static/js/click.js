$(function(){
	
	$('li').on('click',function(){
		var name = $(this).data("name");
		$('li').children('a').css('color','');
		$(this).children('a').css('color','red');
		$('section').html('');
			//
			$.get("/api/audio",{url : "http://v.juhe.cn/toutiao/index",key : "1b735343b0f1627249cd649437915c40",type:name},function(res){
//					console.log(res);
//					console.log(name);
					var res1 = res.result.data;
					var html = '';
					$.each(res1,function(index,value){
						if(value.realtype==undefined){
							realtype = value.category;
						}else{
							realtype = value.realtype;
						}
//						console.log(value.category)
						html = '<p><a href="'+value.url+'"><img src="'+value.thumbnail_pic_s03+'"></a></p>';
						$h2 = $('<h2><a href="'+value.url+'">'+value.title+'</a></h2>');    
						//value.realtype = value.realtype!="undefined"?value.realtype:value.category;
						$time = $('<p><span>'+value.author_name+'</span><span>'+value.date+'</span><span>'+realtype+'</span></p>')
						
						
						var $div = $('<div></div>');
						var $box = $('<div id="box"></div>');
						$div.append($box);
						$box.html(html);
						$box.append($h2);
						$div.append($time);
						$div.appendTo($('section'));
					})
				},"json")
			//
		})
	$('li').eq(0).trigger('click');
		$('#load').on('click',function(){
			window.location.reload();
		})
	})

