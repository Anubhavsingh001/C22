const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bg;
var tower,towerImg
var cannon;
var angle


function preload() {
 bg=loadImage("assets/background.gif")
 towerImg=loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var ground_options={
    isStatic:true
  }
 ground = Bodies.rectangle(600,595,1200,5
  ,ground_options);
 World.add (world,ground)

 tower=Bodies.rectangle(100,360,160,320,ground_options);
 World.add(world,tower);
  angle =20
 cannon= new Cannon(120,110,130,100,angle)

}

function draw() {
  background(189);
  image (bg,0,0,1200,600)
  Engine.update(engine);

  rectMode(CENTER);
  fill("black");
  rect (ground.position.x,ground.position.y,width*2,5)
  
  push ()
   imageMode(CENTER)
   image (towerImg,tower.position.x,tower.position.y,160,320);
  pop ()
   cannon.display()
}
