jQuery(document).ready(function(){
    
    //메뉴 슬라이드 다운 기능
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().
        slideDown(500);//0.5초
    }).mouseout(function(){
        $(this).find('.submenu').stop().
        slideUp(500);
    });
});