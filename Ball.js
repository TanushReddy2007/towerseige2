class Ball{
    constructor(x,y,radius){
        
        var options = {
            restitution:0.3,
            friction:0.5,
            density:0.5
            
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.height=height;
        
        World.add(world, this.body);

    }
    display(){
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        
        
        
        
        ellipse(0,0,  this.radius);
        pop();
        
    }
}