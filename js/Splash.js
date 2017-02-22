var play = document.getElementById("playButton");
var pause = document.getElementById("music");
var bgm = document.getElementById("changeSong");
var body = document.getElementsByTagName("body");
var logo = document.getElementById("logo");
var buttonSound = document.getElementById("buttonSound");


$(play).on("click", function(){
    
    $(play).hide();
    pause.pause();
    $(body).fadeIn().css({
        "background-image": "url(./Images/snowT.png)",
        "background-size": "auto"
    })
    buttonSound.play()
    $(logo).fadeOut();
    setTimeout(function(){bgm.play()}, 1500);
        })
