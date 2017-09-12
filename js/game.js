class Game
{
    constructor()
    {
        this.c = new Coquette(this, "breakout-js", 800, 600, "#1F084F")
        this.push_entities(new Ball(400, 300, 25));
	    this.push_entities(new Player(this, 400, 20));
    }

    push_entities(object)
    {
        this.c.collider.createEntity(object);
        this.c.entities._entities.push(object);
    }
}
