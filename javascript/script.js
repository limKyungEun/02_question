jQuery(document).ready(function(){
    
    //메뉴 슬라이드 다운 기능
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().
        slideDown(500);//0.5초
    }).mouseout(function(){
        $(this).find('.submenu').stop().
        slideUp(500);
    });

    //이미지 슬라이드 애니메이션 기능 
    var imgs = 2;//3개
    var now = 0;

    start();

    function start(){
        $('.imgslide>a').eq(0).//index번호로 선택된 요소를 찾아줌
        siblings().//해당요소의 앞과 뒤에 나오는 형제요소들을 모두 찾아줌
        animate({width:"-800px"});//애니메이션 효과 실행 .이미지 크기, 위치 속성을 함께 사용함

        setInterval(function(){
            now = now == imgs?0:now+=1;//조건문 now랑 imgs값을 비교 참이면 now값을 0으로 변경, 거짓이면 now값을 1증가
            $('.imgslide>a').eq(now-1).animate
            ({width:"-800px"});
            $('.imgslide>a').eq(now).animate({width:"800px"});
        },4000);//4초
        
    }

    //공지사항, 갤러리 탭 전환 기능
    $(function(){
        $('.tabmenu>li>a').click(function(){//<a href="#">공지사항</a> 이 부분을 클릭하면
            $(this).parent().addClass('active').//현재요소의 부모 요소를 찾아(li) 'active'클래스를 추가
            siblings().removeClass('active');//다른 형제요소를 찾은 후 'active'클래스 삭제
                return false;//클릭이벤트 처리를 중단하고 함수를 호출한 곳으로 즉시 돌아감..어렵노
        });
    });
});