class Ground {
    constructor(x,y,w,h) {
        var body_features = {
            isStatic : true
          }
        this.body = Bodies.rectangle(x,y,w,h,body_features)
  World.add(myWorld,this.body)
  this.w =w
  this.h =h
    }
   display() {
     fill ("brown")
     rectMode(CENTER)
     rect (this.body.position.x,this.body.position.y,this.w,this.h)

   }
}