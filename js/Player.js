var Player = function (playerId, rocketLauncherId) {
    var self = this;
    self.rocketLauncherId = rocketLauncherId
    self.changeDegree = changeDegree;
    self.render = render;

    /*
     * Game variables
     */

    var life = 100;
    var speed = 5;
    var weapons = [];
    var currentWeapon = 0;
    var deg = 0;
    var rocketDeg = 0;
    var facingRight = true;
    var isRocket = false;

    /*
     * Game environment
     */
    var soundLaunch = window.utils.el("soundLaunch");
    var soundExplosion = window.utils.el("soundExplosion");

    var position = {
        x: 0,
        y: 0
    };

    var playerNode = window.utils.el(playerId);

    var isDropping = false;
    var dropStopped = false;

    var isPoweringUP = false;
    var firePower = 0;
    var firingRockets = [];

    init();

    function init () {

    };

    function dropPlayer () {
        var dropPositions = gameBoard.currentLevel.dropPositions();
        var x = dropPositions[parseInt( Math.random() * dropPositions.length )];
        position.x = x;
    };

    function stopDropPlayer () {
        dropStopped = gameBoard.currentLevel.isSolid(position.x, position.y+playerNode.getClientRects()[0].height);
    };

    function changeDegree (degrees) {
        rocketDeg += degrees;
        rocketDeg = rocketDeg % 360;
    }

    function shoot () {
        var shootingDegree = 0;
        var rockets1Nodes = document.getElementsByClassName("rocket");
        if (isRocket){
            return;
        }
        
        if (!facingRight) {
            $(rockets1Nodes).css("background-image", "url(./images/rocketLeft.png)")
            if (rocketDeg <= 180) {
                shootingDegree = 90 + (90 - rocketDeg);
            }else{
                shootingDegree = 270 + (270 - rocketDeg);
            }
        }else{
            shootingDegree =  rocketDeg;
            $(rockets1Nodes).css("background-image", "url(./images/rocketRight.png)")
        }

        firingRockets.push(new Rocket(position.x,position.y, firePower, shootingDegree, facingRight));
        firePower = 0;
    }

    function render (motion, turn) {
        if (!dropStopped) {
            position.y += window.constants.GAME_GRAVITY;
            playerNode.style.top = position.y + "px";
            playerNode.style.left = position.x + "px";
        }
        if (isDropping) {
            stopDropPlayer();
        };

        if (!isDropping) {
            dropPlayer();
            isDropping = true;
        }
        if (playerId !== turn){
            return;
        }
        if (dropStopped) {
            const bazookaNode = window.utils.el(self.rocketLauncherId);
            const rockets1Nodes = document.getElementsByClassName("rocket");

            if (motion === 'up') {

                self.changeDegree(1);

                if (deg <= 91 && deg >= -90) {
                    bazookaNode.style.transform = `rotate(${deg}deg)`
                    if (facingRight) {
                        deg--;
                    } else if (!facingRight) {
                        deg++;
                    }
                }
            }
            if (motion === 'down') {
                self.changeDegree(-1);

                if (deg >= -91 && deg <= 90) {
                    bazookaNode.style.transform = `rotate(${deg}deg)`
                    if (!facingRight) {
                        deg--;
                    } else if (facingRight) {
                        deg++;
                    }
                }
            }
            if (motion === 'left') {

                position.x -= .5;
                position.y -= 1;
                $(playerNode).css("background-image", "url(./images/worm2.png)");             
                $(bazookaNode).css({
                    'background-image': 'url(./images/Bazooka2.png)',
                    'left': '-12px'
                });
                facingRight = false;
//                $(rockets1Nodes).css("background-image", "url(./images/rocketLeft.png)")
                
            }
            if (motion === 'right') {
                position.x += .5;
                position.y -= 1;
                $(playerNode).css("background-image", "url(./images/worm.png)");
                $(bazookaNode).css({
                    'background-image': 'url(./images/Bazooka.png)',
                    'left': '0px'
                });
                facingRight = true;
//                $(rockets1Nodes).css("background-image", "url(./images/rocketRight.png)")
            }
        }

        /*
         * Shoot Rocket
         */
        if (motion === 'space' && !isPoweringUP) {
            isPoweringUP = true;
        }

        if (motion === 'space' && isPoweringUP) {
            firePower += 2
        }

        if (motion !== 'space' && isPoweringUP) {
            isPoweringUP = false;
            shoot();
            isRocket = true;
            soundLaunch.play();
        }

        firingRockets.forEach(function(el, index) {
            el.render();

            if (el.boom) {
                firingRockets.splice(index,1);
                soundLaunch.pause();
                soundLaunch.currentTime = 0;
                soundExplosion.play();
                isRocket = false;
                window.turn = window.turn === 'player' ? 'player2' : 'player';
            }
        });

    }

}
