var play = window.utils.el("playButton");
var pause = window.utils.el("music");
var bgm = window.utils.el("changeSong");
var body = document.getElementsByTagName("body");
var logo = window.utils.el("logo");
var buttonSound = window.utils.el("buttonSound");


$(play).on("click", function(){
    
    $(play).hide();
    pause.pause();
    $(body).fadeIn().css({
        "background-image": "url(./images/snowT.png)",
        "background-size": "auto"
    })
    buttonSound.play()
    $(logo).fadeOut();
    setTimeout(function(){bgm.play()}, 1500);
        })
