class Flyer {
    constructor() {
        this.x = 0;
        this.y = 20;
        this.id = this.uuidv4();
        this.radius = 2;
        this.speed = 20;
        this.innercolor = "#0E7A0D";
    }

    draw(canvas, context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        context.fillStyle = this.innercolor;
        context.fill();
    }

    //https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript (2019-08-19)
    //
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
