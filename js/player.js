class Player
{
    constructor(game, x, y)
    {
        this.c = game;
        this._x = x;
        this._y = y;
        // x, y, heigth, width
    }

    get x()
    {
        return this._x;
    }

    set x(x)
    {
        if (endehorsdelecran)
        {
            direquex est egal a la taille de lecran
        }
        this._x = x;
    }

    update()
    {
        // si la fleche est appuye 
        if (this.c.inputter.isDown(this.c.inputter.LEFT_ARROW))
		{
        }
        if (this.c.inputter.isDown(this.c.inputter.LEFT_ARROW))
		{
        }
    }

    draw(ctx)
    {
        // regarder google canvas fill rect
    }
}