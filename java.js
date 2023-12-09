
var playerGold = "gold";
var playerGreen = "green";
var current = playerGold;

var gameOver = false;
var stand;

var rows = 0;
var columns = 0;

window.onload = function() {

    startGame();

}

function startGame() {
stand = [];

for(let r = 0; r < rows; r++){
    let row = [];
    for(let c = 0; c < columns; c++){
        row.push('');

        let hole = document.createElement("div");
        hole.id = r.toString() + "-" + c.toString();
        hole.classList.add("hole");
        document.getElementById("stand").append(hole);
    }
}

}