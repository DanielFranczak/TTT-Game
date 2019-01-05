window.onload - function(){ // anonymous function, initializng code
    var num; // create vars
    var box;
    var ctx;
    var turns = 1;
    var filled;
    var symbol;
    var winner;
    var gameOver = false;
    filled = [false, false, false, false, false, false, false, false, false ]; // here are falses cause the fields are empty 
    symbol = [' ', ' ',' ', ' ',' ', ' ',' ', ' ',' '];
    winner = [[0,1,2], [3,4,5],[6,7,8], [0,3,6], [1,4,7],[2,5,8],[2,4,6],[0,4,8]];//two dimensions array winner[0] = [0,1,2], winner[0][0] shows 0, winner[0][1] shows 1, winner[0][2] shows 2 
}