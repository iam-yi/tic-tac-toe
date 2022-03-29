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
let board, turn, gameStatus;  // Win for 'W', Loose for 'L', Tie for 'T'



/*----- cached element references -----*/
const box = document.querySelector('div');
const text = document.querySelector('h1');

/*----- event listensers -----*/
documents.querySelector('section').addEventListener('click', handleMove);
document.querySelectir('button').addEventListener('click', initialize);



/*----- Handle a player clicking the replay button -----*/
