class Player
{
    constructor(game, x, y)
    {
        this.c = game.c;
        this.x = x;
        this.y = y;
        this.heigth = 20;
        this.width = 100;
        this.speed = 5;
        // x, y, heigth, width
    }

    update()
    { 
        if (this.c.inputter.isDown(this.c.inputter.LEFT_ARROW))
	    {
            this.x = this.x - this.speed;
        }
        if (this.c.inputter.isDown(this.c.inputter.RIGHT_ARROW))
	    {  
		    this.x = this.x + this.speed;
        }
        if (this.x >= 800 - this.width)
            this.x = 800 - this.width;
        if (this.x <= 0)
            this.x = 0;
    }

    draw(ctx)
    {
        ctx.fillStyle = "#F8EA50";
	    ctx.fillRect(this.x, this.y, this.width, this.heigth);
    }
}
