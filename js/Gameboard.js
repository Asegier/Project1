var play = window.utils.el("splashButton");
var opening = window.utils.el("soundOpening");
var opening2 = window.utils.el("soundOpening2");
var body = document.getElementsByTagName("body");
var logo = window.utils.el("logo");
var buttonSound = window.utils.el("soundButton");
var overlay = document.getElementsByClassName("overlay");

$(play).on("click", function(){
    
    $(play).hide();
    opening.pause();
//    $(body).fadeIn().css({
//        "background-image": "url(./images/snowT.png)",
//        "background-size": "auto"
//    })
    soundButton.play()
    $(logo).fadeOut();
    setTimeout(function(){ opening2.play(); }, 1500);
    $(overlay).css("z-index", "-1");
        })



const gameBoard = (function () {
    opening.play();
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    setTimeout(animloop, 500);

    const player = new Player("player", "rocketLauncher");
    const player2 = new Player("player2", "rocketLauncher2");
    let motion

    window.turn = "player"
    
    return {
        currentLevel: new Level("./Images/snowT.png")
    };

    function render(){
        player.render(motion, turn);
        player2.render(motion, turn);
    }

    function animloop(){
        window.utils.requestAnimFrame(animloop);
        render();
    };

    function onKeydown ({ keyCode }) {
        switch(keyCode){
            case 38: motion = 'up'; break;
            case 40: motion = 'down'; break;
            case 37: motion = 'left'; break;
            case 39: motion = 'right'; break;
            case 32: motion = 'space'; break;
            case 16: motion = 'shift'; break;
        }
    }

    function onKeyup (e) {
        motion = null
    }

})()
