var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

setInterval(refreshScreen, 50);

var flyer1 = new Flyer();

function refreshScreen() {
    moveFlyers();
}

function moveFlyers() {
    if(flyer1.x < canvas.width){
        flyer1.x += 3;
    }else{
        flyer1.x = 0;
    }
 
    flyer1.draw(canvas, context);
}
