class Runner {
    constructor(canvas, context) {
        this.cannon = canvas;
        this.context = context;
        this.flyers = {};
        this.bullets = {};
        this.cannon = new Cannon(canvas.width, canvas.height);
        this.loopCount = 0;
    }

    start() {
        var flyer1 = new Flyer();
        this.registerFlyer(flyer1);
    }

    loop(self) {
        self.context.clearRect(0, 0, canvas.width, canvas.height);

        // updating flyers coordinates
        //
        for (var key in self.flyers) {
            var flyer = self.flyerById(key);
            
            if( flyer.x < canvas.width) {
                flyer.moveRight();
            }else{
                flyer.resetX();
            }
        }

        // drawing flyers
        //
        for (var key in self.flyers) {
            var flyer = self.flyerById(key);
            flyer.draw(self.context);
        }

        // drawing cannon
        //
        self.cannon.draw(self.context);

        self.loopCount += 1;
    }

    moveCannonLeft(self) {
        self.cannon.moveCannonLeft();
    }

    moveCannonRight(self) {
        self.cannon.moveRight();
    }

    registerFlyer(obj) {
        this.flyers[obj.id] = obj;
    }

    registerBullet(obj) {
        this.bullets[obj.id] = obj;
    }

    flyerById(id) {
        return this.flyers[id];
    }
}
