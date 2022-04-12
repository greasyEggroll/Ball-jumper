const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var radius = 50;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,

	}

	ball = Bodies.circle(100,100, radius/2, ball_options)
	World.add(world,ball)
	groundObj = new ground(width/2,670,width,20)
	leftSide = new ground(400,600,20,120)
	rightSide = new ground(700,600,20,120)
	Engine.run(engine);

  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.postion,{x:50, y:-50})
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius)
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
}



