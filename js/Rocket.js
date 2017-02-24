const Rocket = function Rocket (x,y, firePower, deg) {

    const self = this;
    self.speed = firePower;
    self.angle = deg;
    self.y = y;
    self.x = x;
    this.render = render;
    self.element = null;
    self.time = 0;
    self.boom = false;

    init();

    function collisionDetection () {

        const rocketY = self.element.style.top;
        const rocketX = self.element.style.left;

        if( rocketX < 0 || rocketX > window.innerWidth || rocketY < 0 || rocketY > window.innerHeight ){
            return;
        }

        if( gameBoard.currentLevel.isSolid(rocketX, rocketY) ){
            self.element.remove();
            self.boom = true;

            const canvasElement = window.utils.el("gameboard");
            const ctx = canvasElement.getContext('2d');

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

    function move () {
        // work out the new position of the ball
        var x = self.speed * Math.cos(self.angle * Math.PI/180) * self.time + self.x;
        var y = self.speed * Math.sin(self.angle * Math.PI/180) * self.time -0.5 * window.constants.ROCKET_GRAVITY * Math.pow(self.time,2);
        y = self.y - y;

        if (x < window.innerWidth && y < window.innerHeight && x > 0){
            // set the position of the ball
            self.element.style.top = y + "px";
            self.element.style.left = x + "px";

        }
        // incriment time
        self.time += 0.05;
    }

    function render () {
        move();
        collisionDetection();

    }

    function init() {
        self.element = document.createElement("div");
        self.element.classList.add("rocket");
        window.utils.el("game").appendChild(self.element);
    }
}