var Rocket = function(x,y, firePower, deg){


    var self = this;
    self.element = null;
    self.speed = firePower;
    self.time = 0;

    self.y = y;
    self.x = x;
    self.angle = deg; //deg;
    self.gravity = 30;
    self.boom = false;


    function collisionDetection() {

        var rocketY = self.element.style.top;
        var rocketX = self.element.style.left;

        if( rocketX < 0 || rocketX > window.innerWidth || rocketY < 0 || rocketY > window.innerHeight ){
            return;
        }

        if( gameBoard.currentLevel.isSolid(rocketX,rocketY) ){
            self.element.remove();
            self.boom = true;


            var canvasElement = document.getElementById("gameboard");
            var ctx = canvasElement.getContext('2d');

            ctx.save();
            ctx.beginPath();
            ctx.arc(parseInt(rocketX), parseInt(rocketY), 30, 0, 2 * Math.PI, false);
            ctx.clip();
            ctx.fillStyle = "rgba(0, 0, 0, 0)";
            ctx.fill();
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            ctx.restore();
         }


    }

    function move(){

        // work out the new position of the ball
        var x = self.speed * Math.cos(self.angle * Math.PI/180) * self.time + self.x;
        var y = self.speed * Math.sin(self.angle * Math.PI/180) * self.time -0.5 * self.gravity * Math.pow(self.time,2);
        y = self.y - y;

        if (x < window.innerWidth && y < window.innerHeight && x > 0){
            // set the position of the ball
            self.element.style.top = y + "px";
            self.element.style.left = x + "px";

        }
        // incriment time
        self.time += 0.05;
    }



    this.render = function(){
        move();
        collisionDetection();

    }


    function init() {

        // Create HTML Element
        self.element = document.createElement("div");
        self.element.classList.add("rocket");
        document.getElementById("game").appendChild(self.element);
    }
    init();
}