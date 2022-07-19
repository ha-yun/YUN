$(function(){
    var skills_list1 = $("#skills_list1");
    var skills_list2 = $("#skills_list2");
    var skills_list1_btn = skills_list1.children("button");
    var skills_list2_btn = skills_list2.children("button");

    function SkillsLeft(){
        let skills_right = $("#skills_right");
        if(skills_right.css("opacity") == '0'){
            skills_list2.animate({opacity : "0"},400);
            skills_right.animate({opacity: "1"}, 50);
        }else{
            skills_list2.animate({opacity : "1"},400);
            skills_right.animate({opacity: "0"}, 50);
        }
    }
    function SkillsRight(){
        let skills_left = $("#skills_left");
        if(skills_left.css("opacity") == '0'){
            skills_list1.animate({opacity : "0"},400);
            skills_left.animate({opacity: "1"}, 50);
        }else{
            skills_list1.animate({opacity : "1"},400);
            skills_left.animate({opacity: "0"}, 50);
        }
    }


    var pro_show = $("#project_show");
    var BtnList = $('.btn_list').children('ul');
    var footer = $("footer");
    var Project_li = $("#project").children('ul').children('li');

    ShowList();
    Event();
    function ShowList(){
        let SCROLL= $(window).scrollTop();
        if(pro_show.offset().top < SCROLL && SCROLL < footer.offset().top ){
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

    function HeaderICON(){
        let SCROLL = $(window).scrollTop();
        let HeaderA = $("#header_icon");
        let BeforeAbout = $("#yun_btn");
        let HEADER = $("header");
        if(SCROLL > BeforeAbout.offset().top){
            HeaderA.css({'opacity':1})
            HEADER.css({'background-color':'#92B4EC'})
        }else{
            HeaderA.css({'opacity':0})
            HEADER.css({'background-color':'rgba(255, 242, 242, 0.1)'})
        }
    }

    function Event(){
        $(window).on('scroll',ShowList);
        $(window).on('scroll',HeaderICON);
        skills_list1_btn.on('click', SkillsLeft);
        skills_list2_btn.on('click', SkillsRight);
    }
})