$(document).ready(function(){var e=["intuitive","collaborative","minimal","web-based"],s=0;setInterval(function(){$("h1 span").fadeOut(function(){$("h1 span").html(e[s]),$("h1 span").fadeIn(),++s>=e.length&&(s=0)})},4e3),$("#main").submit(function(e){e.preventDefault(),$("#main .cta").html("Submitting..."),$.ajax({type:"get",url:"https://gmail.us10.list-manage.com/subscribe/post-json?u=5a361c29c39f2a500e32d45e5&amp;id=24d392985d&c=?",data:$("#main").serialize(),cache:!1,dataType:"json",contentType:"application/json; charset=utf-8",success:function(e){$("#main").html("<p>Subscribed! Check your inbox.</p>")}})}),$("#main2").submit(function(e){e.preventDefault(),$("#main2 .cta").html("Submitting..."),$.ajax({type:"get",url:"https://gmail.us10.list-manage.com/subscribe/post-json?u=5a361c29c39f2a500e32d45e5&amp;id=24d392985d&c=?",data:$("#main2").serialize(),cache:!1,dataType:"json",contentType:"application/json; charset=utf-8",success:function(e){$("#main2").html("<p>Subscribed! Check your inbox.</p>")}})});if(window.pageYOffset<990){var o=20+(window.innerHeight-$("#base").height())/2,a=(window.innerHeight-310)/2;$("#mockup").css("top",o+"px"),$("#section1").css("top",a+"px")}$(window).on("resize",function(){if(window.pageYOffset<990){var e=20+(window.innerHeight-$("#base").height())/2,s=(window.innerHeight-310)/2;$("#mockup").css("top",e+"px"),$("#section1").css("top",s+"px")}}),$(window).on("scroll",function(){var e=window.pageYOffset,s=[440,700,950,990];if(window.innerWidth>870){if(e<s[3]){var o=20+(window.innerHeight-$("#base").height())/2,a=(window.innerHeight-310)/2;$("#mockup").css("top",o+"px"),$("#section1").css("top",a+"px")}e<20?($("#cont").removeClass("three2"),$(".three").removeClass("three"),$(".topon").removeClass("topon"),$(".fixme").removeClass("fixme"),$(".eyesee").removeClass("eyesee"),$("#panel-base").removeClass("baseon"),$("#folder").removeClass("folderon"),$("#mockup").removeClass("oko"),$(".oko2").removeClass("oko2"),$("#mockup").css("position","sticky"),$("#section1").css("opacity","0"),$("#switch").removeClass("switchon"),$("#properties").removeClass("propertieson"),$("#assets").removeClass("assetson"),$("#panel-top").removeClass("paneltopoff"),$("#panel2").removeClass("panel2on")):e<s[0]&&e>=20?($(".three").removeClass("three"),$(".topon").removeClass("topon"),$(".fixme").removeClass("fixme"),$(".showhead").removeClass("showhead"),$(".eyesee").removeClass("eyesee"),$("#panel-base").removeClass("baseon"),$("#folder").removeClass("folderon"),$("#mockup").removeClass("oko"),$(".oko2").removeClass("oko2"),$("#cont").addClass("three2"),$("#mockup").css("position","sticky"),$("#section1").css("opacity","0"),$("#switch").removeClass("switchon"),$("#properties").removeClass("propertieson"),$("#assets").removeClass("assetson"),$("#panel-top").removeClass("paneltopoff"),$("#panel2").removeClass("panel2on"),$("#section1").css("visibility","visible")):e>=s[0]&&e<s[1]?($("h3").html("No hidden menus<br> or dropdowns"),$("#base").addClass("three"),$("#panel").addClass("topon"),$("#panel").removeClass("three"),$("#switch").removeClass("switchon"),$("#properties").removeClass("propertieson"),$("#assets").removeClass("assetson"),$("#panel-top").removeClass("paneltopoff"),$("#panel2").removeClass("panel2on"),$("#theeye").addClass("eyesee"),$("#folder").removeClass("folderon"),$("#theeye").removeClass("theeyeoff"),$("#panel-base").addClass("baseon"),$(".oko2").removeClass("oko2"),$("#mockup").css("position","sticky"),$("#cont").addClass("three2"),$("#section1").css("opacity","1"),$("#section1").css("visibility","visible")):e>=s[1]&&e<s[2]?($("#switch").addClass("switchon"),$("#properties").addClass("propertieson"),$("#assets").addClass("assetson"),$("#panel-top").addClass("paneltopoff"),$("#panel2").addClass("panel2on"),$("h3").html("Create your own<br> shared libraries"),$("#folder").addClass("folderon"),$("#theeye").addClass("theeyeoff"),$("#theeye").removeClass("eyesee"),$("#panel-base").addClass("baseon"),$("#base").addClass("three"),$("#panel").addClass("topon"),$("#panel").removeClass("three"),$("#switch").addClass("switchon"),$("#panel").removeClass("three"),$(".oko2").removeClass("oko2"),$("#mockup").css("position","sticky"),$("#cont").addClass("three2"),$("#section1").css("opacity","1"),$("#section1").css("visibility","visible")):e>=s[2]&&($("#switch").addClass("switchon"),$("#properties").addClass("propertieson"),$("#assets").addClass("assetson"),$("#panel-top").addClass("paneltopoff"),$("#panel-base").removeClass("base-on"),$("#panel2").addClass("panel2on"),$(".fixme").removeClass("fixme"),$(".topon").removeClass("topon"),$(".three").removeClass("three"),$("#cont").removeClass("three2"),$("#mockup").css("position","absolute"),$("#mockup").css("top","930px"),$("#section1").css("opacity","0"),$("#section1").css("visibility","hidden"))}}),$(document).on("click",'a[href^="#"]',function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},500)}),$("#unlock").on("mouseover",function(){$("#unlock").html("hi@sonuum.com")}),$("#unlock").on("mouseout",function(){$("#unlock").html('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15.8333 9.16663H4.16667C3.24619 9.16663 2.5 9.91282 2.5 10.8333V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V10.8333C17.5 9.91282 16.7538 9.16663 15.8333 9.16663Z" fill="#8313F3"/><path d="M5.83398 9.16663V5.83329C5.83398 4.72822 6.27297 3.66842 7.05437 2.88701C7.83577 2.10561 8.89558 1.66663 10.0007 1.66663C11.1057 1.66663 12.1655 2.10561 12.9469 2.88701C13.7283 3.66842 14.1673 4.72822 14.1673 5.83329V9.16663" stroke="#8313F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Unlock secrets')})});