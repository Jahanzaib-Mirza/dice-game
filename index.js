function play() {
    var p1 = Math.floor(Math.random() * 6) + 1;
    var p2 = Math.floor(Math.random() * 6) + 1;
    setDice(p1, ".img1");
    setDice(p2, ".img2");

    if (p1 === p2) {
        document.querySelector("h1").textContent = "Draw";
    }
    else if (p1 > p2) {
        document.querySelector("h1").textContent = "🚩Player 1 Wins";

    }
    else {
        console.log("player 2 wins")
        document.querySelector("h1").textContent = "Player 2 Wins🚩";
    }
}

function setDice(value, src) {
    switch (value) {
        case 1: {
            document.querySelector(src).setAttribute("src", "images/dice1.png");
            break;
        }
        case 2: {
            document.querySelector(src).setAttribute("src", "images/dice2.png");
            break;
        }
        case 3: {
            document.querySelector(src).setAttribute("src", "images/dice3.png");
            break;
        }
        case 4: {
            document.querySelector(src).setAttribute("src", "images/dice4.png");
            break;
        }
        case 5: {
            document.querySelector(src).setAttribute("src", "images/dice5.png");
            break;
        }
        case 6: {
            document.querySelector(src).setAttribute("src", "images/dice6.png");
            break;
        }
    }
}
