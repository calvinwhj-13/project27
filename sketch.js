const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constrain = Matter.Constraint;

var roof;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
  
function setup() {
	var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
 
	roof = new celling(400,100,600,50);

	ball1 = circle(160,320,60);
	ball2 = circle(280,320,60);
	ball3 = circle(400,320,60);
	ball4 = circle(520,320,60);
	ball5 = circle(640,320,60);
	
	rope1 = new rope(roof.body,ball1.body,240,0);
	rope2 = new rope(roof.body,ball2.body,120,0);
	rope3 = new rope(roof.body,ball3.body,0,0);
	rope4 = new rope(roof.body,ball4.body,-120,0);
	rope5 = new rope(roof.body,ball5.body,-240,0);

}

function draw() {
	background("black")
	Engine.update(engine);
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
	if(keyDown("space")) {
		ball5.x = 590;
		ball5.y = 270;
	}

}