

var play = document.getElementById("playButton")
var pause = document.getElementById("music")
var bgm = document.getElementById("changeSong")

$(play).on("click", function(){
    
    $(play).hide();
    pause.pause();
    bgm.play();
        })

var keyUP = false;
var keyDOWN = false;
var keyLEFT = false;
var keyRIGHT = false;
var spaceBar = false;

var motion = {
  left: false,
  right: true
}

var bazookaAngle = 0

var currentPlayer = "A"

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
    case 16:
      keyShift = false;
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
        
    }
    else if (currentPlayer = "B"){
        
    }
}

document.addEventListener("keydown", function(e){
    // switch(e.keyCode){
     //   case 32:
            
            // bazooka();
    })


            // Takes and stores the Bazooka Angle based on the Spacebar Press
function bazooka (){
    
}

            // Function to calculate Cannon trajectory
function cannon() {
    
    
}

