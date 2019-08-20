document.onkeydown = checkKey;
var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

var gameRunner = new Runner(canvas, context);
gameRunner.start();

// passing the gameRunner to itself ... weird but necessary to 
// preserve object properties defined and usable ...
//
setInterval(function() {
    gameRunner.loop(gameRunner)}, 50);

function checkKey(e) {
    var event = window.event ? window.event : e;

    if (event.code == "ArrowRight") {
        gameRunner.moveCannonRight(gameRunner);
    } else if (event.code == "ArrowLeft") {
        gameRunner.moveCannonLeft(gameRunner);
    }
}
