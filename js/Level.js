var Level = function(imageURL) {


    var canvasElement = document.getElementById("gameboard");
    var ctx = canvasElement.getContext('2d');
    var isCanvasLoaded = false;
    var self = this;

    var availableYPositions = [];

    /*
     * What y position can a worm drop
     */
    this.dropPositions = function() {

        if(!isCanvasLoaded){
            return false;
        }

        if(availableYPositions.length > 0){
            return availableYPositions;
        }

        for(var i = 0; i< ctx.canvas.width; i++){

            var isTransparent = true;
            for(var j = 0; j < ctx.canvas.height; j++){

                var pixel = ctx.getImageData(i, j, 1, 1);

                if(pixel.data[3] != 0){
                    isTransparent = false;
                    break;
                }
            }

            if(!isTransparent){
                availableYPositions.push(i);
            }
        }

        return availableYPositions;
    }

    /*
     * is positon x,y a solid based on the alpha channel
     */
    this.isSolid = function(x,y) {

        if(!isCanvasLoaded){
            return false;
        }

        var pixel = ctx.getImageData(x, y, 1, 1);
        return pixel.data[3] != 0;
    }

    /*
     *
     */
    function positionCanvas(){

        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        var imageObj = new Image();

        imageObj.onload = function() {
            ctx.drawImage(imageObj, 0, window.innerHeight - imageObj.height);
            isCanvasLoaded = true;
            self.dropPositions();
        };
        imageObj.src = imageURL;
    }

    function init(){
        positionCanvas();
    }

    init();
}
