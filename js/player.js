class Player
{
    constructor(game, x, y)
    {
        this.c = game.c;
        this._x = x;
        this._y = y;
	this.heigth = 10;
	this.width = 50;
	this.speed = 5;
        // x, y, heigth, width
    }

    get x()
    {
        return this._x;
    }

    set x(x)
    {
        if (this.x() < this.width - 1)
		this._x = + this.width - 1;
	else
		this._x = x;
    }

    update()
    { 
        if (this.c.inputter.isDown(this.c.inputter.LEFT_ARROW))
	{
		if (this.x() - this.speed < this.width)
			this.x(this.width);
		else
			this.x(this.x() - this.speed);
        }
        if (this.c.inputter.isDown(this.c.inputter.LEFT_ARROW))
	{
		if (this.x() + this.speed > 799 - this.width)
			this.x(799 - this.width);
		else
			this.x(this.x() + this.speed);
        }
    }

    draw(ctx)
    {
        ctx.fillStyle = "#F8EA50";
	ctx.fillRect(this._x, this._y, this.width, this.heigth);
    }
}
