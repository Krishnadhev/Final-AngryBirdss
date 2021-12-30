class Bird {
    constructor(x,y,w,h) {
        var bird_features = {
            isStatic : false,
            restitution : 1,
            friction : 1,
          }
        this.bird = Bodies.rectangle(x,y,w,h,bird_features)
  World.add(myWorld,this.bird)
  this.w =w
  this.h =h
  this.angry=loadImage("bird.png")
  
    }

 display() {
    //this.bird.position.x=mouseX
    //this.bird.position.y=mouseY
   push()
    translate (this.bird.position.x,this.bird.position.y)
    rotate (this.bird.angle)

    imageMode(CENTER)
    image (this.angry,0,0,this.w,this.h)
    pop()

}
}