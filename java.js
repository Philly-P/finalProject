
var playerGold = "gold";
var playerGreen = "green";
var current = playerGold;

var gameOver = false;
var stand;

var rows = 6;
var columns = 7;

window.onload = function () {

    startGame();

}

function startGame() {
    stand = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push(' ');

            //<div id="0-0" class="hole"></div>
            let hole = document.createElement("div");
            hole.id = r.toString() + "-" + c.toString();
            hole.classList.add("hole");
            hole.addEventListener("click", placePiece);
            document.getElementById("stand").append(hole);
        }
        stand.push(row);
    }

}

function placePiece() {
    if (gameOver) {
        return;
    }
    let coords = this.id.split("-");
    let c = parseInt(coords[1]);

    let r = currColumns[c];
    if (r < 0) {
        return;
    }

    stand[r][c] = current;
    let hole = document.getElementById(r.toString() + "-" + c.toString());
    if (current == playerGold) {
        hole.classList.add("gold-piece");
        current = playerGreen;
    }
    else {
        hole.classList.add("green-piece");
        current = playerGold;
    }
    r -= 1;
    currColumns[c] = r;

    checkWin();
}


function checkWin() {
    //horizontal
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (stand[r][c] != ' ') {
                if (stand[r][c] == stand[r][c + 1] && stand[r][c + 1] == stand[r][c + 2] && stand[r][c + 2] == stand[r][c + 3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    //vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (stand[r][c] != ' ') {
                if (stand[r][c] == stand[r + 1][c] && stand[r + 1][c] == stand[r + 2][c] && stand[r + 3][c]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    //diagnal
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (stand[r][c] != ' ') {
                if (stand[r][c] == stand[r + 1][c + 1] && stand[r + 1][c + 1] == stand[r + 2][c + 2] && stand[r + 2][c + 2] == stand[r + 3][c + 3]) {
                    setWinner(r, c);
                    return;

                }
            }
        }
    }

    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (stand[r][c] != ' ') {
                if (stand[r][c] == stand[r - 1][c + 1] && stand[r - 1][c + 1] == stand[r - 2][c + 2] && stand[r - 2][c + 2] == stand[r - 3][c + 3]) {
                    setWinner(r, c);
                    return;

                }
            }
        }
    }
}

function setWinner(r, c) {
    let winner = document.getElementById("winner");
    if (stand[r][c] == playerGold) {
        winner.innerText = "Gold Knight Wins";
    }
    else {
        winner.innerText = "Green Knight Wins";
    }
    gameOver = true;
}