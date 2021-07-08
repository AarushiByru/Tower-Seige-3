const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot;
var polygon_img;
var ball;
var box;
var score = 0;

function preload(){
  polygon_img=loadImage("polygon.png");
}


function setup() {
  createCanvas(900,400);
  
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390, 300, 250, 10);
  stand2 = new Stand(700, 200, 200, 10);

  //first tower
  //first row of boxes
  
  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  //box8 = new Box(510,275,30,40);

  //second row of boxes

  box9 = new Box(330, 235, 30, 40);
  box10 = new Box(360, 235, 30, 40);
  box11 = new Box(390,235,30,40);
  box12 = new Box(420,235,30,40);
  box13 = new Box(450,235,30,40);
  //box14 = new Box(315,235,30,40);

  //third row of boxes

  box15 = new Box(360,195,30,40);
  box16 = new Box(390,195,30,40);
  box17 = new Box(420, 195, 30, 40);
  // = new Box(450, 215, 30, 40);

  box18 = new Box(390,155,30,40);
 
  //second tower

  //first row
  boxes1 = new Box(640,175,30,40);
  boxes2 = new Box(670,175,30,40);
  boxes3 = new Box(700,175,30,40);
  boxes4 = new Box(730,175,30,40);
  boxes5 = new Box(760,175,30,40);
  //boxes6 = new Box(790,175,30,40);

  //second row

  boxes7 = new Box(670,145, 30, 40);

  boxes8 = new Box(700,145,30,40);
  boxes9 = new Box(730,145,30,40);

  //third row

  boxes10 = new Box(700, 115,30,40);

  //ball holder with slings
 ball = Bodies.circle(50,200,20);
 World.add(world,ball);

 slingshot = new Slingshot(this.ball,{x:100,y:200});

}

 
function draw() {
  background(255,255,255);  
  
  ground.display();

  stand1.display();
  stand2.display();
  text("SCORE : "+ score,750,40)
  fill("lightblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  //box8.display();
  fill("pink")
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  //box14.display();
  fill("turquoise");
  box15.display();
  box16.display();
  box17.display();

  fill("grey");
  box18.display();  

  fill("lightblue");
  boxes1.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
  boxes5.display();

  fill("turquoise");
  boxes7.display();
  boxes8.display();
  boxes9.display();

  fill("pink");
  boxes10.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  //box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  //box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();

  boxes1.score();
  boxes2.score();
  boxes3.score();
  boxes4.score();
  boxes5.score();
  //boxes6.score();
  boxes7.score();
  boxes8.score();
  boxes9.score();
  
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
  
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.ball)
  }
}
