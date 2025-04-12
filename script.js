
let result = 1;
const c = document.getElementById("myCanvas");
const canvas = c.getContext("2d");
const diceColor = "black";
const dotColor = "white";
const dotRadius = 20;

/*
    0    1    2
    *         * 0
    *    *    * 1
    *         * 2

 */
const side=c.height;
const dotsPositions = [
    [[side/4, side/4],     [-20, -20],       [(3*side)/4, side/4]],
    [[side/4, side/2],     [side/2, side/2], [(3*side)/4, side/2]],
    [[side/4, (3*side)/4], [-20, -20],       [(3*side)/4, (3*side)/4]]
];

function displayResult() {
    spinDice();
    
    // Delay the result generation and dot drawing until the spin animation ends
    setTimeout(() => {
        result = getRandomNumber();
        drawDots();
        document.getElementById("resultInput").value = result;
    }, 500); // Match the duration of the spin animation (1s)
}

function spinDice() {
    const canvasElement = document.getElementById("myCanvas");

    // Add the spin-animation class
    canvasElement.classList.add("spin-animation");

    // Remove the class after the animation ends
    setTimeout(() => {
        canvasElement.classList.remove("spin-animation");
    }, 1000); // Match the duration of the animation (1s)
};

function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function drawDots() {
    
    canvasFillBackground();
    let pos = dotsPositions.at(0).at(0);
    if (result == 1 || result == 3 || result == 5) {
        pos = dotsPositions.at(1).at(1);
        drawDot(pos.at(0), pos.at(1));
    }
    if (result == 2 || result == 3 || result == 4 || result == 5 
        || result == 6) {
        pos = dotsPositions.at(0).at(0);
        drawDot(pos.at(0), pos.at(1));
        pos = dotsPositions.at(2).at(2);
        drawDot(pos.at(0), pos.at(1));
    }
    if (result == 4 || result == 5 || result == 6) {
        pos = dotsPositions.at(0).at(2);
        drawDot(pos.at(0), pos.at(1));
        pos = dotsPositions.at(2).at(0);
        drawDot(pos.at(0), pos.at(1));
    }
    if (result == 6) {
        pos = dotsPositions.at(1).at(0);
        drawDot(pos.at(0), pos.at(1));
        pos = dotsPositions.at(1).at(2);
        drawDot(pos.at(0), pos.at(1));
    }
}

function drawDot(x, y){
    canvas.fillStyle = dotColor;
    canvas.beginPath();
    canvas.arc(x, y, dotRadius, 0, 2 * Math.PI);
    canvas.fill();
}

function canvasFillBackground() {
    canvas.fillStyle = diceColor;
    canvas.fillRect(0, 0, c.width, c.height);
}

canvasFillBackground();
drawDots();

