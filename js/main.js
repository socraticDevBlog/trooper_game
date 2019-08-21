var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

document.onkeydown = checkKey;

function checkKey(e) {
    var event = window.event ? window.event : e;

    if (event.code == "ArrowRight") {
        gameRunner.moveCannonRight(gameRunner, canvas.width);
    }else if (event.code == "ArrowLeft") {
        gameRunner.moveCannonLeft(gameRunner, canvas.width);
    }else if (event.code == "ArrowUp") {
        gameRunner.fire(gameRunner);
    }
}

var gameRunner = new Runner(canvas, context);

// passing the gameRunner to itself ... weird but necessary to 
// preserve object properties defined and usable ...
//
setInterval(function() {
    gameRunner.loop(gameRunner)}, 50);
    