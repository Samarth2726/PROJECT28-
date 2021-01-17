class Mango{
    constructor(x,y,width,height) {
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.rectangle(x, y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image = loadImage("images(project28)/Plucking mangoes/mango.png");
        World.add(world, this.body);
    }
    display() {
        push();
        imageMode(CENTER);
        image(this.image, this.x,this.y, this.width, this.height);
        pop();
      }
    
}