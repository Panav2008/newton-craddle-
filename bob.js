class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0.5,
			density:1.2,
			}
		this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(x, y, this.r/2, options)
       	World.add(world, this.body);

	}
	display(){
	         var paperpos=this.body.position;
           
			//push();
			//translate(paperpos.x, paperpos.y);
			ellipseMode(CENTER)
         //   paperpos(this.paper,0,this.r,this.x,this.y);
//			strokeWeight(3);
			fill("white")
		ellipse(paperpos.x,paperpos.y,this.r, this.r);
           //pop()
			
	}
}

