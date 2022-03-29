/*----- constants -----*/
const colors = {
     '1': 'pink',
     '-1': 'lime',  
     'null': 'black'
};

let winResult = [];
winResult = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
 ];

/*----- variables used to track the state of the game -----*/
let boardArry = [0,1,2,3,4,5,6,7,8];
let turn;
let gameStatus // Win for 'W', Loose for 'L', Tie for 'T'

/*----- cached element references -----*/
const msgEl= document.querySelector('h1');
const resetBtn = document.getElementById('reset-btn');
/*----- upload the app -----*/

function btnLocation () {
    for (var i = 0; i < boardArry.length; i++) {
      document.getElementById("box-btn").innerHTML += "<button>" + boardArray[i] + "</button>";
    }
  }
  
  btnLocation();
/*----- Handle a player clicking a square -----*/
var selection = document.getElementById("box-btn");
selection.onclick = function() {
  
}


/*----- Handle a player clicking the replay button -----*/
