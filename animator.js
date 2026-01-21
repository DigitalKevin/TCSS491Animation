class Animator {
    constructor(spriteSheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, loop) {
        Object.assign(this, { spriteSheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, loop });
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y, scale = 1) {
        this.elapsedTime += tick;

        if (this.loop && this.elapsedTime > this.totalTime) {
            this.elapsedTime -= this.totalTime;
        }

        if (!this.loop && this.isDone()) {
            return;
        }

        const frame = this.currentFrame();
        const sx = this.xStart + frame * (this.width + this.framePadding);

        ctx.drawImage(
            this.spriteSheet,
            sx, this.yStart,
            this.width,
            this.height,
            x, y,
            this.width * scale,
            this.height * scale
        );
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
}