var i=0;
		var lb;
		//轮播图运动
		function lbt(){
			++i;
			if(i==5){
				i=0;
			}
			$("#box li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
			$("#bottom1 span").eq(i).addClass("span1").siblings().removeClass("span1");
			
		}
		
		lb=setInterval(lbt,4000);

		//进入图片区域轮播图停止
		$("#box").hover(function(){
			clearInterval(lb);
			console.log('111');
		},function(){
			lb=setInterval(lbt,1000);
		});

		//左侧按钮
		$(".box_left").click(function(){
			--i;
			if(i==-1){
				i=4;
			}
			console.log(i);
			$("#box li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
			$("#bottom1 span").eq(i).addClass("span1").siblings().removeClass("span1");
			
			console.log('222');
		});

		//右侧按钮
		$(".box_right").click(function(){
			++i;
			if(i==5){
				i=0;
			}
			$("#box li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
			$("#bottom1 span").eq(i).addClass("span1").siblings().removeClass("span1");
			
			console.log('222');
		});

		//底部运动
		$("#bottom1 span").mousemove(function(){
			i=$(this).index();
			console.log(i);
			$("#box li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
			$(this).addClass("span1").siblings().removeClass("span1");
		});