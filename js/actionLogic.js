var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

var globalCanonLeft = 0;
var globalCanonRight = 0;


setInterval(refreshScreen, 50);

var flyer1 = new Flyer();

function refreshScreen() {
    moveFlyers();
    context.clearRect(0, 0, canvas.width, canvas.height);
    flyer1.draw(context);
    drawCanonBase(context);
    drawCanonHead(context);
}

function moveFlyers() {
    if(flyer1.x < canvas.width){
        flyer1.x += 3;
    }else{
        flyer1.x = 0;
    }
}

function drawCanonBase(context, left, right) {
    context.beginPath();
    context.lineWidth = "6";
    context.fillStyle = "#0E7A0D";

    var xCanonBase = canvas.width / 2 + globalCanonLeft + globalCanonRight;
    var yCanonBase = canvas.height - 10;

    context.rect(xCanonBase, yCanonBase, 25, 25); 
    context.fill();
} 

function drawCanonHead(context) {
    context.beginPath();
    context.lineWidth = "6";
    context.fillStyle = "#0E7A0D";

    var xCanonHead = canvas.width / 2 + 10 + globalCanonLeft + globalCanonRight;
    var yCanonHead = canvas.height - 20;

    context.rect(xCanonHead, yCanonHead, 5, 15); 
    context.fill(); 
}

document.onkeydown = checkKey;

function checkKey(e) {
    var event = window.event ? window.event : e;

    if (event.code == "ArrowRight"){
        globalCanonRight +=7;
    } else if (event.code == "ArrowLeft"){
        globalCanonLeft -= 7;
    }
}
