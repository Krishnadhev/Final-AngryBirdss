class Ramp {
    constructor(x,y,w,h,p) {
        var ramp_features = {
            isStatic : false,
            restitution : 1,
            friction : 1,
          }
        this.ramp = Bodies.rectangle(x,y,w,h,ramp_features)
        Matter . Body.setAngle(this.ramp,p)
  World.add(myWorld,this.ramp)
  this.w =w
  this.h =h
 this.wood2=loadImage("wood2.png")

    }

 display() {
   push()
    translate (this.ramp.position.x,this.ramp.position.y)
    rotate (this.ramp.angle)

    imageMode(CENTER)
    image (this.wood2,0,0,this.w,this.h)
    pop()

}
}