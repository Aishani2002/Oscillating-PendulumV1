const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var chain,stick,ball;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stick = new Stick(100,100,50,PI/2);

    ball = new Ball(100,100);
   chain = new Chain(ball.body,stick.body);

}

function draw(){
    background(0);
    Engine.update(engine);
Text("press space to change position of ball",100,200);
Text("press s to make the ball oscillate",400,400);
    /*
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    */
   if keyDown("space"){
       ball.position.x = MouseX;
       ball.position.y = MouseY;
   }

   if (keyDown("S")){
       ball.setVelocityEach(4);
   }

    ball.display();
    
    chain.display();
    stick.display();

