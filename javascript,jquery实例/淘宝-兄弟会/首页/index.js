$(document).ready(function () {


    var i=0;
    var lb;
//轮播图滚动
    function lbt(){
        ++i;
        if(i==5){
            i=0;
        }
        $("#lun ul li").eq(i).fadeIn(1000).siblings().fadeOut(1000);//1秒渐显,1秒渐退 :eq()选择器选取带有指定index值的元素 siblings()方法返回被选元素的所有同级元素。
        $("#lun .yuandian span").eq(i).addClass("sp").siblings().removeClass("sp");//向被选元素添加一个或多个类 返回被选元素的所有同级元素 向被选元素移除一个或多个类
    }

    lb=setInterval(lbt,2300);

//进入图片区域轮播图停止
    $("#lun ul li").hover(function(){
        clearInterval(lb);//解除计时器

    },function(){
        lb=setInterval(lbt,2300);
    });


//左侧按钮
    $(".box_left").click(function(){
        --i;
        if(i==-1){
            i=4;
        }
        $("#lun ul li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
        $(".yuandian span").eq(i).addClass("sp").siblings().removeClass("sp");
    });

//右侧按钮
    $(".box_right").click(function(){
        ++i;
        if(i==5){
            i=0;
        }
        $("#lun ul li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
        $(".yuandian span").eq(i).addClass("sp").siblings().removeClass("sp");
    });

//底部运动
    $(".yuandian span").click(function(){
        i=$(this).index();
        $("#lun ul li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
        $(this).addClass("sp").siblings().removeClass("sp");
    });










})
