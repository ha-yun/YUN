$(function(){
    var pro_show = $("#project_show");
    var BtnList = $('.btn_list').children('ul');
    var profile = $("#profile");
    var Project_li = $("#project").children('ul').children('li');

    ShowList();
    Event();
    function ShowList(){
        var SCROLL= $(window).scrollTop();
        if(pro_show.offset().top < SCROLL && SCROLL < profile.offset().top ){
            BtnList.fadeIn();
            $(Project_li).each(function(i){
                if(SCROLL > Project_li.eq(i).offset().top - 80){
                    BtnList.children('li').children('a').children('ion-icon').eq(i).attr("name","radio-button-on-outline");
                }else{
                    BtnList.children('li').children('a').children('ion-icon').eq(i).attr("name","radio-button-off-outline");
                }
            })
        }else{
            BtnList.fadeOut();
        }
    }

    function Event(){
        $(window).on('scroll',ShowList);
    }
})