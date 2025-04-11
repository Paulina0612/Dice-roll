
let result = 0;

function displayResult() {
    result = getRandomNumber();
    document.getElementById("resultInput").value = result;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

