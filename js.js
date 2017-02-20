

var play = document.getElementById("playButton");
var pause = document.getElementById("music");
var bgm = document.getElementById("changeSong");
var body = document.getElementsByTagName("body");
var logo = document.getElementById("logo");



$(play).on("click", function(){
    
    $(play).hide();
    pause.pause();
    $(body).fadeIn().css({
        "background-image": "url(Images/snowT.png)",
        "background-size": "cover"
    })
    $(logo).fadeOut();
    setTimeout(function(){bgm.play()}, 500);
        })

var keyUP = false;
var keyDOWN = false;
var keyLEFT = false;
var keyRIGHT = false;
var spaceBar = false;

var x = window.innerWidth / 2;
var y = window.innerHeight / 2;

// var motion = 

var currentPlayer = "A";

function turn(){                    // This function changes the players turn
    if (currentPlayer == "A"){      // Checks current player to A
        currentPlayer = "B";        // Changes current player to B
    // var playerturn = $(".playerTurn").html("It's A's turn");    // Changes text at top
    }
    else if (currentPlayer == "A"){     // Checks if current player is B
        currentPlayer = "B";            // Changes current player to A
    // var playerturn = $(".playerTurn").html("It's B's turn");    // Changes text at top
    }
}

document.addEventListener("keydown", function(e) {  
  
  switch(e.keyCode){
    case 38:
      keyUP = true;
      break;
    case 40:
      keyDOWN = true;
      break;
    case 37:
      keyLEFT = true;
      break;
    case 39:
      keyRIGHT = true;
      break;
    case 32:
      keySpacebar = true;
      break;
    case 16:
      keyShift = true;
      break;
    default:
  }
});

document.addEventListener("keyup", function(e) {  
  
  switch(e.keyCode){
    case 38:
      keyUP = false;
      break;
    case 40:
      keyDOWN = false;
      break;
    case 37:
      keyLEFT = false;
      break;
    case 39:
      keyRIGHT = false;
      break;
    case 32:
      spaceBar = false;
      break;
//    case 16:
//      keyShift = false;
    default:
  }
  
});



//  Rocket Object
//  Cannon Object
//  Game Object
//  Player Object
//  Terrain Object

function game(){
    
}

        // Creates the terrain for the game

function terrain(){
    
}

        // Function to change players

function player(){
    
    if (currentPlayer = "A"){
          if(keyUP){
            y1 += .05;
          }

          if(keyDOWN){
            y1 -= .05;
          }

          if(keyLEFT){
            x1 -= 5;
          }

          if(keyRIGHT){
            x1+= 5;
          }
    }
    else if (currentPlayer = "B"){
          if(keyUP){
            y2 += .05;
          }

          if(keyDOWN){
            y2 -= .05;
          }

          if(keyLEFT){
            x2 -= 5;
          }

          if(keyRIGHT){
            x2 += 5;
          }
    }
}

document.addEventListener("keydown", function(e){
    // switch(e.keyCode){
     //   case 32:
            
            // bazooka();
    })


            // Takes and stores the Bazooka Angle based on the Spacebar Press
var bazooka = function (){
    
}

            // Function to calculate Cannon trajectory
var cannon = function () {
    var bazookaAngle = Math.PI/4;
    var power = 0
    
    var xVelocity = power * Math.cos(bazookaAngle)
    
    
}

