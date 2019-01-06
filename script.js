window.onload = function(){ // anonymous function, initializng code
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
    var btn = document.getElementById("new"); //get button by id
    btn.addEventListener("click", newGame); 
    function newGame(){
        document.location.reload();
    }
    var tic = document.getElementById("matrix").addEventListener("click", function (event) {
        boxClick(event.target.id);
        
    });
    function boxClick(numId){
        box = document.getElementById(numId);
        ctx = box.getContext("2d");
        switch(numId){
            case "canvas1" : num = 1;
                break;
            case "canvas2" : num = 2;
                break;
            case "canvas3" : num = 3;
                break;
            case "canvas4" : num = 4;
                break;
            case "canvas5" : num = 5;
                break;
            case "canvas6" : num = 6;
                break;
            case "canvas7" : num = 7;
                break;
            case "canvas8" : num = 8;
                break;
            case "canvas9" : num = 9;
                break;
            
        }
    }
    
}