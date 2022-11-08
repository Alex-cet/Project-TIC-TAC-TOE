let buttonsPressed = [], btn = [];
function startGame() { 
    document.getElementById("startMessage").style.display = 'none';
    document.getElementById("startButton").style.display = 'none';
    document.getElementById("message").innerHTML = "Player1:";
    for (let i = 1; i <= 9; ++i) {
        btn[i] = document.createElement("button");
        btn[i].id = i;
        btn[i].type = "button";
        btn[i].className = "btn";
        btn[i].onclick = function() {
            if (document.getElementById("message").innerHTML === 'Player1:' && buttonsPressed.indexOf(btn[i].id) == -1) {
                insertX(buttonsPressed, i);
            } else if (document.getElementById("message").innerHTML === 'Player2:' && buttonsPressed.indexOf(btn[i].id) == -1) {
                insert0(buttonsPressed, i);
            }
            checkWinner();
        }
        document.body.appendChild(btn[i]);
        if (i % 3 == 0) {
            createNewLine();
        }
    }
}
function createNewLine() {
    let newLine = document.createElement("div");
    newLine.innerHTML = "<br/>";
    document.body.appendChild(newLine);
}

function insert0(buttonsPressed, i) {
    btn[i].innerHTML = "0";
    document.getElementById("message").innerHTML = "Player1:";
    buttonsPressed.push(btn[i].id);
}

function insertX(buttonsPressed, i) {
    btn[i].innerHTML = "X";
    document.getElementById("message").innerHTML = "Player2:";
    buttonsPressed.push(btn[i].id);
}

function checkWinner() {
    if (((btn[1].innerHTML === btn[2].innerHTML && btn[2].innerHTML === btn[3].innerHTML && btn[1].innerHTML != '') || 
    (btn[4].innerHTML === btn[5].innerHTML && btn[5].innerHTML === btn[6].innerHTML && btn[4].innerHTML != '') || 
    (btn[7].innerHTML === btn[8].innerHTML && btn[8].innerHTML === btn[9].innerHTML && btn[7].innerHTML != '') || 
    (btn[1].innerHTML === btn[4].innerHTML && btn[4].innerHTML === btn[7].innerHTML && btn[1].innerHTML != '') || 
    (btn[2].innerHTML === btn[5].innerHTML && btn[5].innerHTML === btn[8].innerHTML && btn[2].innerHTML != '') || 
    (btn[3].innerHTML === btn[6].innerHTML && btn[6].innerHTML === btn[9].innerHTML && btn[3].innerHTML != '') || 
    (btn[1].innerHTML === btn[5].innerHTML && btn[5].innerHTML === btn[9].innerHTML && btn[1].innerHTML != '') || 
    (btn[3].innerHTML === btn[5].innerHTML && btn[5].innerHTML === btn[7].innerHTML && btn[3].innerHTML != ''))) {
        if (document.getElementById("message").innerHTML === 'Player2:') {
            document.getElementById("winner").innerHTML = "Player1 WON!";   
            endGame();
        } else if (document.getElementById("message").innerHTML === 'Player1:') {
            document.getElementById("winner").innerHTML = "Player2 WON!";   
            endGame();
        }
    } else if (buttonsPressed.length == 9) {
        document.getElementById("winner").innerHTML = "Draw!";
        endGame();
    }
}

function endGame() {
    for (let i = 1; i <= 9; ++i) {
        document.getElementById(i).disabled = true;
    }
    let resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.id = "resetButton";
    resetButton.className = "resetButton";
    resetButton.innerHTML = "Play again!";
    resetButton.onclick = function() {
        document.location.reload(true);
    }
    document.body.appendChild(resetButton);
}