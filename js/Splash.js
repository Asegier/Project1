var play = window.utils.el("splashButton");
var opening = window.utils.el("soundOpening");
var opening2 = window.utils.el("soundOpening2");
var body = document.getElementsByTagName("body");
var logo = window.utils.el("logo");
var buttonSound = window.utils.el("soundButton");

opening.play();

$(play).on("click", function(){
    
    $(play).hide();
    opening.pause();
//    $(body).fadeIn().css({
//        "background-image": "url(./images/snowT.png)",
//        "background-size": "auto"
//    })
    soundButton.play()
    $(logo).fadeOut();
    setTimeout(function(){opening2.play()}, 1500);
        })
