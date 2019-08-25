class VisualArtefact {
    constructor() {
        this.id = uuidv4();
        this.x = 0;
        this.y = 0;
        
        // monochrome : green
        //
        this.innercolor = "#0E7A0D";
    }
}

class PointsDisplay extends VisualArtefact {
    constructor() {
        super();
        this.x = 1;
        this.y = 9;
        this.title = "credit : ";
        this.font = "9px Tahoma";
    }

    refreshPoints(context, points) {
       textToCanvas(context, this.title + points.toString(), this.x, this.y, this.innercolor, this.font);
    }

    gameOver(context) {
        textToCanvas(context, "Game over : refresh browser (F5) to play again !", this.x, this.y, this.innercolor, this.font);
    }
}

class Flyer extends VisualArtefact {
    constructor() {
        super();
        this.y = 20;
        this.radius = 5;
        this.speed = 20;
        this.previousX = 0;
    }

    moveRight() {
        this.previousX = this.x;
        this.x += 4;
    }

    moveLeft() {
        this.previousX = this.x
        this.x -= 4;
    }

    reset() {
        this.previousX = -1;
        this.x = 0;
    }

    draw(c) {
        // turbine
        //        
        c.beginPath();
        c.strokeStyle = this.innercolor;
        c.moveTo(this.x - 10, this.y);
        c.lineTo(this.x + 10, this.y);
        c.moveTo(this.x, this.y);
        c.lineTo(this.x, this.y + 5);
        c.lineWidth = 1.5;
        c.stroke(); 

        // helicopter body
        //
        c.beginPath();
        c.arc(this.x, this.y + 10, 5, 0, Math.PI * 2, false);
        c.fillStyle=this.innercolor;
        c.fill();

        // drawing tail
        //
        c.beginPath();
        c.moveTo(this.x, this.y + 10);

        var xBackRotorAxis = 0;
        var yBackRotorAxis = 0;

        if (this.previousX > this.x) {
            xBackRotorAxis = this.x + 20;
            yBackRotorAxis = this.y + 10;
            c.lineTo(xBackRotorAxis, yBackRotorAxis);
        }else {
            xBackRotorAxis = this.x - 20;
            yBackRotorAxis = this.y + 10;
            c.lineTo(xBackRotorAxis, yBackRotorAxis);
        }
        c.strokeStyle = this.innercolor;
        c.stroke();


        // small circle at tail's end
        //
        c.beginPath();
        c.arc(xBackRotorAxis, yBackRotorAxis, 2, 0, Math.PI * 2, false);
        c.fillStyle=this.innercolor;
        c.fill();

        c.beginPath();
        c.moveTo(this.x, this.y + 10);
        c.strokeStyle = this.innercolor;
        c.lineTo(this.x - 3, this.y + 19);
        c.stroke();

        c.beginPath();
        c.moveTo(this.x, this.y + 10);
        c.strokeStyle = this.innercolor;
        c.lineTo(this.x + 3, this.y + 19);
        c.stroke();

        // foot rail
        //
        c.beginPath();
        c.moveTo(this.x - 6, this.y + 19);
        c.strokeStyle = this.innercolor;
        c.lineTo(this.x + 6, this.y + 19);
        c.stroke();
    }
}

class Cannon extends VisualArtefact {
    constructor(canvasWidth, canvasHeight) {
        super();
        this.x = canvasWidth / 2;
        this.y = canvasHeight - 10;
        this.xHead = canvasWidth / 2 + 10;
        this.yHead = canvasHeight - 20;
        this.headWidth = 5;
        this.headHeight = 15;
        this.baseWidth = 25;
        this.baseheight = 25;
        this.stepLenght = 17;
    }

    moveLeft(canvasWidth) {
        this.x -= this.stepLenght;
        this.xHead -= this.stepLenght;

        // reappears at the right side of the canvas
        //
        if (this.x < 0) {
            this.x = canvasWidth - 10;
            this.xHead = canvasWidth;
        }
    }

    moveRight(canvasWidth) {
        this.x += this.stepLenght;
        this.xHead += this.stepLenght;

        // reappears at the left side of the canvas
        //
        if (this.x > canvasWidth) {
            this.x = 10;
            this.xHead = 20;
        }
    }

    draw(context) {
        
        // drawing cannon's base
        //
        drawRectangle(context, this.x, this.y, this.baseWidth, this.baseheight, this.innercolor);

        // drawing cannon's head
        //
        drawRectangle(context, this.xHead, this.yHead, this.headWidth, this.headHeight, this.innercolor);
    }
}

class Bullet extends VisualArtefact {
    constructor(xCannonHead, yCannonHead) {
        super();
        this.x = xCannonHead + 3;
        this.y = yCannonHead;
        this.radius = 1;
    }

    moveUp() {
        this.y -= 10;
    }

    draw(context) {
        drawCircle(context, this.x, this.y, this.radius, this.innercolor);
    }
}
