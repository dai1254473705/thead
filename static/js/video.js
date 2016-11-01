function callback(res){
	var html = "";
var obj = res.result.data[0].data;

	for(var i=0,len = obj.length;i<len;i++ ){
		
		var Oset = obj[i];
		//导演名称及连接
		var director = Oset.director.data;
		
		var Odir = "";//导演名
		
		$.each(director,function(index,value){
//			console.log(value.name);//获取导演名
			Odir = value.name; 
			return false;
		})
		
		//电影类型
		var typedata = Oset.type.data;
		//将电影类型放到空字符串
		var Otype = "";
//		console.log(typedata);
		$.each(typedata,function(index,value){
			Otype += value.name+"、"; 
			
		})
//		console.log(Otype);//成功获取到电影类型
		
		//电影详情
		var Ostory = Oset.story.data.storyBrief;
		var OstoryLink = Oset.story.data.storyMoreLink;

		//主演名称及连接
		var star = Oset.star.data;
		
		var OstarName = "";//主演名
		
		var OstarLink = "";//主演名
		
		var arr1 = [];//定义一个空数组，放主演
		
		var arr2 = [];//定义一个空数组，放主演链接
		
		var A = "";//定义一个空字符串，用来成放动态生的a标签
		
		$.each(star,function(index,value){
			
//			console.log(value);
			if(value.name){
				
				OstarName = value.name; //获取主演姓名
				
				OstarLink = value.link; //获取主演连接

				arr1.push(OstarName+'、');//将主演名字放到arr1
				
				arr2.push(OstarLink);//将主演名字放到arr2
				
//				console.log(value.name);	
			}

		})
//		console.log(arr1);
		for (var j=0;j<arr1.length;j++){
			
			A +='<a href="'+arr2[j]+'">'+arr1[j]+'</a>';
		}
		//console.log(A);//动态生成存放主演的a标签
		
		html +='<section><div class="cont"><div class="pic"><a href="#"><img src="'+Oset.iconaddress+
		'" alt="'+Ostory+'" title="'+OstoryLink+' "/></a></div><div class="text"><h1>名称：<a href="'+Oset.m_iconlinkUrl+'">'+Oset.tvTitle+
		'</a></h1><h3>上映：<a href="javascript:;">'+Oset.playDate.data+
		'</a></h3><h3>场数：<a href="javascript:;">'+Oset.subHead+
		'</a></h3><h3>导演：<a href="javascript:;">'+Odir+
		'</a></h3><h3>类型：<a href="javascript:;">'+Otype+'</a></h3><h3 style="background:url('+Oset.iconaddress+') no-repeat ;">'+Oset.grade+
		'分</h3><h3>主演：'+A+'</h3></div></div></section>';
	}
	$(".content").html(html);
//	console.log(obj);
}

