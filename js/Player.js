var Player = function(){

    /*
     * Game variables
     */

    var life            = 100;                     // Health
    var speed           = 5;                       // Walking speed
    var weapons         = [];                      // Weapons array
    var currentWeapon   = 0;                       // Current weapon

    var deg = 0;
    var rocketDeg = 0;
    var facingRight = true;
    var self = this;

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

    var isPoweringUP = false;
    var firePower = 0;
    firingRockets = [];

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

        // Once all init is done
    };


    this.changeDegree = function(degrees){
        rocketDeg += degrees;
        rocketDeg = rocketDeg%360;

        console.log(rocketDeg);
    }


    function shoot(){


        var shootingDegree = 0;

        if(!facingRight){

            if(rocketDeg <= 180){
                shootingDegree = 90 + (90 - rocketDeg);
            }else{
                shootingDegree = 270 + (270 - rocketDeg);
            }
        }else{
            shootingDegree =  rocketDeg;
        }

        console.log(firingRockets.length);
        firingRockets.push(new Rocket(position.x,position.y, firePower, shootingDegree));
        firePower = 0;
    }


    /*
     *
     */

    this.render = function(motion){
        if(dropStopped){
            var charA = document.getElementById("player");
            var bazA = document.getElementById("rocketLauncher");

            if(motion.up == true){

                self.changeDegree(1);

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
                self.changeDegree(-1);

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

//                deg = deg - 90
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

        /*
         * Shoot Rocket
         */
        if(motion.space && !isPoweringUP){
            isPoweringUP = true;
        }

        if(motion.space && isPoweringUP){
            firePower += 2
        }

        if(!motion.space && isPoweringUP){
            isPoweringUP = false;
            shoot();
        }

        firingRockets.forEach(function(el, index){
            el.render();

            if(el.boom){
                firingRockets.splice(index,1);
            }
        });

    }

        

    init();

}