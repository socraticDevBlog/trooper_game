class Runner {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.flyers = {};
        this.bullets = {};
        this.cannon = new Cannon(canvas.width, canvas.height);
        this.pointDisplay = new PointsDisplay();
        this.points = 15;
    }

    loop(self) {
        const BULLET_SPEED = 10;
        const HIT_FLYER_REWARD = 10;
        const PENALTY = 5; 

        // clears the whole canvas
        //
        self.context.clearRect(0, 0, canvas.width, canvas.height);
        
        // spawn a new flyer when none 
        //
        if (dictLength(self.flyers) == 0) {
            var aFlyer = new Flyer();
            this.registerFlyer(aFlyer);
        }
        
        // updating flyers coordinates
        //
        for (var key in self.flyers) {
            var flyer = self.flyerById(key);
            
            if (flyer.x < canvas.width) {
                flyer.moveRight();
            }else{
                flyer.reset();
                this.points -= PENALTY;
            }
        }
        
        // updating bullets coordinates
        //
        for (var key in self.bullets) {
            var bullet = self.bulletbyId(key);
            
            if (bullet.y > 0) {
                bullet.y -= BULLET_SPEED;
            }else{
                delete self.bullets[key];
            }
            
            // checking if bullet hit a flyer
            //
            for (var flyerId in self.flyers) {
                var flyer = self.flyerById(flyerId);
                
                if (this.isHit(bullet, flyer)) {
                    this.points += HIT_FLYER_REWARD;
                    delete self.flyers[flyer.id];
                }
            }
        }
        
        // drawing flyers
        //
        for (var key in self.flyers) {
            var flyer = self.flyerById(key);
            flyer.draw(self.context);
        }
        
        // drawing bullets
        //
        for (var key in self.bullets) {
            var bullet = self.bulletbyId(key);
            bullet.draw(self.context);
        }
        
        // drawing cannon
        //
        self.cannon.draw(self.context);

        // updating points
        //
        if (this.points > 0) {
            self.pointDisplay.refreshPoints(self.context, self.points);
        }else {
            self.pointDisplay.gameOver(self.context);
        }
    }

    moveCannonLeft(self, canvasWidth) {
        self.cannon.moveLeft(canvasWidth);
    }

    moveCannonRight(self, canvasWidth) {
        self.cannon.moveRight(canvasWidth);
    }

    registerFlyer(obj) {
        this.flyers[obj.id] = obj;
    }

    fire(self) {
       const BULLET_COST = 1;

        if (this.points <= 0) {
            return;
        }

        var bullet = new Bullet(self.cannon.xHead, self.cannon.yHead);
        self.registerBullet(bullet);
        self.points -= BULLET_COST;
    }

    registerBullet(obj) {
        this.bullets[obj.id] = obj;
    }

    flyerById(id) {
        return this.flyers[id];
    }

    bulletbyId(id) {
        return this.bullets[id];
    }

    isHit(bullet, flyer) {
        
        // target is hit if bullet x,y is within a tolerance of 2 points
        //
        var near = (bullet.x >= flyer.x - 2) && (bullet.x <= flyer.x + 2);

        if (near) {
            return near && (bullet.y >= flyer.y - 2) && (bullet.y <= flyer.y + 2);
        }else{
            return false;
        }
    }
}
