const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var g;
var ball;
var slingShot;
var fruit;

var score=0;

function preload(){
  backgroundImg = loadImage("background.png");
 fruit=loadImage("melon.png");
 g=loadImage("basket.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
  //Challenge1:
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
//challenge 2
  slingShot = new Slingshot(this.ball,{x:100,y:100});

}
function draw() {
  background(backgroundImg); 

  fill("lightgreen");
  textSize(25);
  text("Score: "+score, 750,50);
  
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  g.scale=.025;

  if(ball.isTouching(g)){
    score=score+1;
  }

  if(ball.isTouching(ground)){
    score=score-1;
  }

  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);
  image(g,450,270)

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}