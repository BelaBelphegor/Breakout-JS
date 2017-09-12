class Player
{
    constructor(game, center)
    {
        this.c = game.c;
        this.center = center;
        this.heigth = 20;
        this.width = 100;
        this.speed = 5;
        // x, y, heigth, width
    }

    update()
    { 
        if (this.c.inputter.isDown(this.c.inputter.LEFT_ARROW))
	    {
            this.center.x = this.center.x - this.speed;
        }
        if (this.c.inputter.isDown(this.c.inputter.RIGHT_ARROW))
	    {  
		    this.center.x = this.center.x + this.speed;
        }
        if (this.center.x + this.width / 2 >= 800)
            this.center.x = 800 - this.width / 2;
        if (this.center.x <= this.width / 2)
            this.center.x = this.width / 2;
    }

    draw(ctx)
    {
        ctx.fillStyle = "#F8EA50";
	    ctx.fillRect(this.center.x - this.width / 2, this.center.y - this.heigth / 2, this.width, this.heigth);
    }
}
