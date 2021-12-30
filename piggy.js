class Pig {
    constructor(x,y,w,h) {
        var pig_features = {
            isStatic : false,
            restitution : 1,
            friction : 1,
          }
        this.pig = Bodies.rectangle(x,y,w,h,pig_features)
  World.add(myWorld,this.pig)
  this.w =w
  this.h =h
  this.enemy=loadImage("enemy.png")
 this.a=255
    }

 display() {
   if(this.pig.speed<=3) {
    push()
    translate (this.pig.position.x,this.pig.position.y)
    rotate (this.pig.angle)

    imageMode(CENTER)
    image (this.enemy,0,0,this.w,this.h)
    pop()
   }
   else {
     World.remove(myWorld,this.pig)
     push()
     tint(255,this.a)
     image(this.enemy,this.pig.position.x,this.pig.position.y,this.w,this.h)
     this.a=this.a-5
     pop()
   }
   

}
}
