var Player = function(){

    /*
     * Game variables
     */

    var life            = 100;                     // Health
    var speed           = 5;                       // Walking speed
    var weapons         = [];                      // Weapons array
    var currentWeapon   = 0;                       // Current weapon

    /*
     * Game environment
     */

    var position = {
        x: 0,
        y: 0
    };

    var playerElement = document.getElementById("player");

    var isDropping = false;
    var dropStopped = false;


    /*
     * Drop the player
     */
    var dropPlayer = function(){

        var dropPositions = gameBoard.currentLevel.dropPositions();
        var x = dropPositions[parseInt( Math.random() * dropPositions.length )];
        position.x = x;
    }


    var stopDropPlayer = function(){
        dropStopped = gameBoard.currentLevel.isSolid(position.x, position.y+playerElement.getClientRects()[0].height);

    }



    /*
     *  init Player
     */
    function init(){

        // Add default weapons
       // weapons.push(new Rocket(20));


        // Once all init is done

    }







    /*
     *
     */
    this.render = function(motion){



        if(dropStopped){
            return;
        }

        position.y += motion.gravity;
        playerElement.style.top = position.y + "px";
        playerElement.style.left = position.x + "px";

        if(isDropping){
            stopDropPlayer();
        }

        if(!isDropping) {
            dropPlayer();
            isDropping = true;
        }


    }


    init();

}