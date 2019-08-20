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

class Flyer extends VisualArtefact {
    constructor() {
        super();
        this.y = 20;
        this.radius = 2;
        this.speed = 20;
    }

    moveRight() {
        this.x += 3;
    }

    resetX() {
        this.x = 0;
    }

    draw(context) {
        drawCircle(context, this.x, this.y, this.radius, this.innercolor);
    }
}

class Canon extends VisualArtefact {
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
    }

    moveLeft() {
        this.x -= 7;
        this.xHead -= 7;
    }

    moveRight() {
        this.x += 7;
        this.xHead += 7;
    }

    draw(context) {
        
        // drawing canon's base
        //
        drawRectangle(context, this.x, this.y, this.baseWidth, this.baseheight, this.innercolor);

        // drawing canon's head
        //
        drawRectangle(context, this.xHead, this.yHead, this.headWidth, this.headHeight, this.innercolor);
    }
}
