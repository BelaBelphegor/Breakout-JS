class Ball
{
	// Ici on ecrit les bailles pour ajouter des attributs
	constructor()
	{
		this.speed = 3;
		this.dir_x = -1;
		this.dir_y = 1;
		this.x = 0;
		this.y = 0;
		this.size = 10;
	}

	constructor(x, y, size)
	{
		this.speed = 3;
		this.dir_x = -1;
		this.dir_y = 1;
		this.x = x;
		this.y = y;
		this.size = size;	
	}
}
