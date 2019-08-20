var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

setInterval(refreshScreen, 50);

var flyer1 = new Flyer();
var canon = new Canon(canvas.width, canvas.height);

function refreshScreen() {
    moveFlyers();
    context.clearRect(0, 0, canvas.width, canvas.height);
    flyer1.draw(context);
    canon.draw(context);
}

function moveFlyers() {
    if(flyer1.x < canvas.width){
        flyer1.moveRight();
    }else{
        flyer1.resetX();
    }
}

document.onkeydown = checkKey;

function checkKey(e) {
    var event = window.event ? window.event : e;

    if (event.code == "ArrowRight"){
        canon.moveRight();
    } else if (event.code == "ArrowLeft"){
        canon.moveLeft();
    }
}
