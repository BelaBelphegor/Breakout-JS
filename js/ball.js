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
		if (this.x + this.speed * this.dir_x > 799 - this.size / 2 || this.x + this.speed * this.dir_x < 0 + this.size / 2)
			this.dir_x *= -1;
		if (this.y + this.speed * this.dir_y > 599 - this.size / 2 || this.y + this.speed * this.dir_y < 0 + this.size / 2)
			this.dir_y *= -1;
		this.x += this.speed * this.dir_x;
		this.y += this.speed * this.dir_y;
	}

	draw(ctx)
	{
		ctx.fillStyle = "#F05BD5";
		ctx.beginPath();
        	ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        	ctx.fill();
	}
}
