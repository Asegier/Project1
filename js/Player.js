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
    };


    var stopDropPlayer = function(){
        dropStopped = gameBoard.currentLevel.isSolid(position.x, position.y+playerElement.getClientRects()[0].height);

    };



    /*
     *  init Player
     */
    function init(){

        // Add default weapons
       weapons.push(new Rocket(20));


        // Once all init is done

    };






    /*
     *
     */
    var deg = 0;
    var facingRight = true;
    this.render = function(motion){
        if(dropStopped){
            var charA = document.getElementById("player");
            var bazA = document.getElementById("rocketLauncher");

            if(motion.up == true){
                if (deg <= 91 && deg >= -90){
                    bazA.style.transform="rotate(" + deg + "deg)"
                    if (facingRight == true){
//                        bazA.style.transform="rotate(" + deg + "deg)"
                        deg--;
                    } else if(facingRight == false){
//                        bazA.style.transform="rotate(" + deg + "deg)"
                        deg++;
                    }
                    console.log("motion up!");
//                    debugger;
                }
            }
            if(motion.down == true){
                if (deg >= -91 && deg <= 90){
                    bazA.style.transform="rotate(" + deg + "deg)"
                    if(facingRight == false){
                        deg--;
                    } else if(facingRight == true){
//                        bazA.style.transform="rotate(" + deg + "deg)"
                        deg++;
                    }
                }
//                debugger;
                console.log("motion down!");
            }
            if(motion.left == true){
                position.x -= .5;
                position.y -= 1;
                $(charA).css("background-image", "url(./Images/worm2.png)");             
                $(bazA).css({
                    'background-image': 'url(/Images/Bazooka2.png)',
                    'left': '-12px'
                });
                facingRight = false;    
             
            }
            if(motion.right == true){
                position.x += .5;
                position.y -= 1;
                $(charA).css("background-image", "url(./Images/worm.png)");
                $(bazA).css({
                    'background-image': 'url(/Images/Bazooka.png)',
                    'left': '0px'
                });
                facingRight = true;
            }
        }
        if(!dropStopped){
            
            position.y += motion.gravity;
            playerElement.style.top = position.y + "px";
            playerElement.style.left = position.x + "px";
        }
    

        if(isDropping){

            stopDropPlayer();
        };

        if(!isDropping) {

            dropPlayer();
            isDropping = true;
        }

    }

        

    init();

}