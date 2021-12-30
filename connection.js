class Connection {
    constructor(x,y) {
     var connection_features = {
         bodyA:x,
         pointB:y,
         stiffness:0.04,
         length:10

     }
     this.connection=Constraint.create(connection_features)
     World.add(myWorld,this.connection)

     
     this.sling1=loadImage("sling1.png")
     this.sling2=loadImage("sling2.png")
     this.sling3=loadImage("sling3.png")
    }
    display() {
     image (this.sling1,175,20)
     image (this.sling2,145,10)
        if(this.connection.bodyA!=null) {
            var a =this.connection.bodyA.position
            var b =this.connection.pointB
            stroke (48,22,8)
            strokeWeight(5)
           line(a.x+20,a.y,b.x+20,b.y)
           line(a.x-20,a.y,b.x-20,b.y)
        }
       
    }
    broken() {
        this.connection.bodyA=null
    }
}