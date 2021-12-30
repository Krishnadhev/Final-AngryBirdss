const  Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld , myEngine , box1 , box2, box3, box4, box5, ground, pig1, pig2, ramp1, ramp2, ramp3, ramp4
var bird, backgroundImage, connection, platform, array
function preload() {
  decidebackgroundimage()

}
function setup() {
  createCanvas(1200,400);
  myEngine= Engine.create();
  myWorld = myEngine.world;
  box1 = new Box(1000,350,50,50)
  box2 = new Box(870,350,50,50)
  box3 = new Box(1000,280,50,50)
  ground = new Ground(600,390,1200,10)
  pig1 =new Pig(935,350,50,50)
  ramp1 =new Ramp(935,320,20,200,PI/2)
  box4 = new Box(870,280,50,50)
  box5 = new Box(900,200,50,50)
  pig2 = new Pig(935,300,50,50)
  ramp2 = new Ramp(935,240,20,200,PI/2)
  ramp3 = new Ramp(900,200,20,100,PI/4)
  ramp4 = new Ramp(920,200,20,100,-PI/4)
  bird = new Bird(175,45,50,50)
  connection = new Connection(bird.bird,{x:175,y:45})
  platform = new Ground(100,285,200,200)
  var arr= [17,27,37,47,57]
  console.log(arr[3])
  arr.push(100)
  console.log(arr)
  arr.push(120)
  console.log(arr)
  arr.pop()
  console.log(arr)
  
  
}

function draw() {
  if(backgroundImage) {
    background(backgroundImage);  
  }
  
  Engine.update(myEngine)
  box1.display()
  box2.display()
  ground.display()
  pig1.display()
  ramp1.display()
  box3.display()
  box4.display()
  box5.display()
  pig2.display()
  ramp2.display()
  ramp3.display()
  ramp4.display()
  bird.display()
  connection.display()
  platform.display()
  
}

function mouseDragged() {
  Matter.Body.setPosition(bird.bird,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  connection.broken()
  Matter.Body.applyForce(bird.bird,bird.bird.position,{x:0.33,y:0.33})
}
async function decidebackgroundimage() {
  var response=await fetch("http://worldclockapi.com/api/json/est/now")
  var dataresponse=await response.json()
  var datetime=dataresponse.currentDateTime
  var hour = datetime.slice(11,13)
  console.log(hour)
  if(hour>=5&&hour<=15) {
    backgroundImage=loadImage("bg.png")
  }
  else{
    backgroundImage=loadImage("bg2.jpg")
  }
}




