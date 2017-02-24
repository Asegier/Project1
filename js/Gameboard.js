var opening2 = window.utils.el("soundOpening2");

opening2.play();

const gameBoard = (function () {

    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    setTimeout(animloop, 500);

    const player = new Player("player", "rocketLauncher");
    const player2 = new Player("player2", "rocketLauncher2");
    let motion

    window.turn = "player"
    
    return {
        currentLevel: new Level("./images/snowT.png")
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
