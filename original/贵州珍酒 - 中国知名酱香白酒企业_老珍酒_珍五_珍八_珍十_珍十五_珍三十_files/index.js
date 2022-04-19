$(function(){

    $(window).scroll(function() {
        var scrollTop=$(document).scrollTop();
        if(scrollTop>0){
            $('.header').addClass('on');
        }else{
            $('.header').removeClass('on');    
        }
    });

    $('.phone_menu_btn').click(function(){
            $(this).toggleClass('on');
            $('.phone_menu').toggle();
    })

    $('.home_menu ul li').hover(function(){
        var index=$(this).index();
        var ddsize=$('.subnav .home_menu_lv').eq(index).children('dd').length;
        if(ddsize>0){
            $('.subnav').addClass('cur')    
        }else{
            $('.subnav').removeClass('cur') 
        }
        $('.subnav .home_menu_lv').eq(index).addClass('cur').siblings().removeClass('cur');
    })


    $('.home_mall').hover(function () {
        $('.shop').addClass('cur');
    })

    $('.header').mouseleave(function(){
        $('.subnav').removeClass('cur');
        $('.shop').removeClass('cur');
    })

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    }

    function gerUrlParam(){
        anchor = getQueryVariable("t");
        goAnchor(anchor);  
    }

    function goAnchor(anchor){
        $.scrollTo("[data-anchor='"+anchor+"']",1000);
        return;
        topx = $("[data-anchor='"+anchor+"']").offset().top;
        var myInter = setInterval(function(){
            _top = $(document).scrollTop();
            if(_top < topx){
                $(document).scrollTop(_top + 20);
            }
            else{
                clearInterval(myInter);
            }
        },100);
        $(document).scrollTop();//
    }
    gerUrlParam();

    // var about_us=gerUrlParam('about')

    // goAnchor(about_us);



})



