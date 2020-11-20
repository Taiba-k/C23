class Box {
    constructor()
    {

        var options={
            restitution:1
        }
        this.body=Bodies.rectangle(200,100,50,50,options);
        World.add(world,this.body);
        this.width=50;
        this.height=50;
    }
    display()
    {
 var pos=this.body.position
rectMode(CENTER)
fill(255)
rect(pos.x,pos.y,this.width,this.height)
    }
}