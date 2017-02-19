

play = document.getElementById("playButton")

play.on("click", function(){
        
        
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
    if (currentPlayer == "A"){      // Checks current player for X
        currentPlayer = "B";        // Changes current player to O
    // var playerturn = $(".playerTurn").html("It's O's turn");    // Changes text at top
    }
    else if (currentPlayer == "A"){     // Checks if current player is O
        currentPlayer = "B";            // Changes current player to X
    // var playerturn = $(".playerTurn").html("It's X's turn");    // Changes text at top
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
    case //////////////////////////////////////;
      spaceBar = true;
      break;
          
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
    case /////////////////////////////;
      spaceBar = false;
      break;
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

function terrain(){

}

function player(){
    
    if (currentPlayer = "A"){
        
    }
    else if (currentPlayer = "B"){
        
    }
}

document.addEventListener("keydown", function(e){
    switch(e.keyCode){
            case
            
            bazooka();
    }
}

function bazooka (){
    
}

function cannon() {
    
    
}

