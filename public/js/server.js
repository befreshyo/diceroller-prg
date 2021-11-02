function RollDiceX(){
    x = document.getElementById("diceX").value = Math.floor(Math.random()*6) + 1;

}

function RollDice(){
    y = document.getElementById("diceY").value = Math.floor(Math.random()*6) + 1;

    if (x > y){
        result = "person 1 :-)"
    } else if (y > x){
        result = "person 2 :-)"
    } else {
        result ="tied :-("
    }
    document.getElementById("resultID").innerHTML = result;
    
}

function start(){
    RollDiceX();
    RollDice();
}

