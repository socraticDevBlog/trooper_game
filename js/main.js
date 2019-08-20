document.onkeydown = checkKey;
var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

var gameRunner = new Runner(canvas, context);
gameRunner.start();

// passing the gameRunner to itself ... weird but necessary to perserve
// object properties defined and usable ...
//
setInterval(function() {
    gameRunner.loop(gameRunner)}, 50);

function checkKey(e) {
    var event = window.event ? window.event : e;

    if (event.code == "ArrowRight") {
        gameRunner.moveCannon(gameRunner, "RIGHT");
    } else if (event.code == "ArrowLeft") {
        gameRunner.moveCannon(gameRunner, "LEFT");
    }
}
