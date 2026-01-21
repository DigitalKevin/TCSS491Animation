class Character {
    constructor(game) {
        this.game = game;
        this.x = 375;
        this.y = 450;
        this.scale = 2.5;
        this.state = "IDLE";
        this.speed = 200;
        this.animations = {
            IDLE: new Animator(ASSET_MANAGER.getAsset("./IDLE.png"), 0, 0, 96, 96, 10, 0.15, 0, true),
            RUN: new Animator(ASSET_MANAGER.getAsset("./RUN.png"), 0, 0, 96, 96, 16, 0.08, 0, true),
            ATTACK: new Animator(ASSET_MANAGER.getAsset("./ATTACK1.png"), 0, 0, 96, 96, 7, 0.1, 0, true)
        };
    }

    setState(state) {
        if (this.state !== state) {
            this.state = state;
            this.animations[state].elapsedTimeS = 0;
        }
    }

    update() {
        if (this.state === "RUN") {
            this.x += this.speed * this.game.clockTick;
            if (this.x > this.game.ctx.canvas.width) {
                this.x = -this.animations.RUN.width * this.scale;
            }
        }
    }

    draw(ctx) {
        this.animations[this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
    }
}
