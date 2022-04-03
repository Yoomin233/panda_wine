$(function(){


    $("#header").load("/public/header.html");
    $("#footer").load("/public/footer.html");

    $(window).scroll(function () {
        
    });

 	$('.return-top,.returnTop').click(function(){
		$('body,html').animate({
            scrollTop: 0
        }, 800);
	})

    var animateDH = $(".animation");
    // if(animateDH.length>0){
    //     animateDH.each(function(i) {
    //         var s=$(this).attr('data-data-wow-delay');
    //         if(s!=null){

    //         }
    //     })
    // }
    $(window).bind('scroll load',function(){
        var pmw=window.innerWidth,
            pmh=window.innerHeight;
        var scrollTop = $(window).scrollTop()+pmh;
        if(animateDH.length>0){
            animateDH.each(function(i) {
                var animateTop = $(this).offset().top+60;
                if (scrollTop > animateTop) {
                    $(this).addClass("srcospcur");
                }else{
                    $(this).removeClass("srcospcur");
                }
            });
        }
    });


    $(document).click(function(e){
        if((!$(e.target).parents().hasClass('js-noclick')&&!$(e.target).hasClass('js-noclick'))){
            $(".js-noclick").removeClass('on');

            $('.footerBox .foot .link ul').fadeOut();
        }
    });

    $(window).scroll(function(){
        $(".js-noclick").removeClass('on');
        $('.footerBox .foot .link ul').fadeOut();
    })


    
})


window.onload = function() { 
    var a = new Array();  
    var i=0;  
    if($('.bx').length>0){
        $('.bx').each(function(){  
            a[i]=$(this).offset().top-$('.header').height();  
            i++;  
        });
        // var ur =location.href;  
        // if(ur.indexOf("?") != -1){  
        //     var type=ur.split('?')==undefined?0:ur.split('?')[1].split("=")[1];  
        //     if(type!=0){  
        //         $('body,html').animate({  
        //             scrollTop: a[type-1]  
        //         }, 800);  
        //     }  
        // };
        $('.nav a').click(function(){
            var _id=$(this).attr('data-id');
            $('body,html').animate({  
                scrollTop: a[_id-1]  
            }, 800);  
        })
    }
}