class Ball
{
	// Ici on ecrit les bailles pour ajouter des attributs
	constructor(x, y, size)
	{
		this.speed = 3;
		this.dir_x = -1;
		this.dir_y = 1;
		this.x = x;
		this.y = y;
		this.size = size;	
	}

	update()
	{

	}

	draw(ctx)
	{
		ctx.fillStyle = "#F05BD5";
		ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
	}
}
