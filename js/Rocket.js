var Rocket = function(x,y, firePower, deg){


    var self = this;
    self.element =null;
    self.speed = firePower;
    self.time = 0;

    self.y = y;
    self.x = x;
    self.angle = deg; //deg;
    self.gravity = 30;

    function move(){

        // work out the new position of the ball
        var x = self.speed * Math.cos(self.angle * Math.PI/180) * self.time + self.x;
        var y = self.speed * Math.sin(self.angle * Math.PI/180) * self.time -0.5 * self.gravity * Math.pow(self.time,2);
        y = self.y - y;


        // set the position of the ball
        self.element.style.top = y + "px";
        self.element.style.left = x + "px";

        // incriment time
        self.time += 0.05;
    }



    this.render = function(){
        move();
    }


    function init() {

        // Create HTML Element
        self.element = document.createElement("div");
        self.element.classList.add("rocket");
        document.getElementById("game").appendChild(self.element);
    }
    init();
}