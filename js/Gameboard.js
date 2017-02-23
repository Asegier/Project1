var GameBoard = function(){

    /*
     * Game variables
     */

    var gravity = 10;


    /*
     * Game environment
     */
    var player = new Player();
    var player2 = new Player();
    
    var level = new Level("../Images/snowT.png");
    this.currentLevel = level;

    var motion = {              // Motion object
        'up'    : false,
        'down'  : false,
        'left'  : false,
        'right' : false,
        'space' : false,
        'shift' : false,
        'gravity': gravity
    }

    /*
     *  Keyboard events
     */
    document.addEventListener("keydown", function(e) {
        switch(e.keyCode){
            case 38:
                motion.up = true;
                break;
            case 40:
                motion.down = true;
                break;
            case 37:
                motion.left = true;
                break;
            case 39:
                motion.right = true;
                break;
            case 32:
                motion.space = true;
                break;
            case 16:
                motion.shift = true;
                break;
            default:
        }
    });

    document.addEventListener("keyup", function(e) {

        switch(e.keyCode){
            case 38:
                motion.up = false;
                break;
            case 40:
                motion.down = false;
                break;
            case 37:
                motion.left = false;
                break;
            case 39:
                motion.right = false;
                break;
            case 32:
                motion.space = false;
                break;
            case 16:
                motion.shift = false;
                break;
            default:
        }
    });




    /*
     *  Render game
     */
    function render(){
        player.render(motion);
       // rocket.render(motion);
       // debugger;
    }


    /*
     *  Game loop
     */
    function animloop(){
        window.requestAnimFrame(animloop);
        render();
    };

    setTimeout(function(){ animloop() }, 500);

}


window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();


var gameBoard = new GameBoard();
