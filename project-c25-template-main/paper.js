class paper {
    constructor(x,y,r){
        var options = {
            isStatic: false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, r, options);
        this.r = r; 
        this.image = loadImage("paper.png");
        
        World.add(world, this.body);
    }
    display()
	{
			
		var paperpos=this.body.position;		

		push()
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER)
		//fill(255)
		imageMode(CENTER);
		
		image(this.image, 0,0,4*this.r, 4*this.r);
		pop()
	}

    //display(){
    //    push()
	//	ellipseMode(RADIUS);
    //   imageMode(CENTER);
    //    circle(this.body.position.x,this.body.position.y,this.radius);
	//	pop()
    //} 
}