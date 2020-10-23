
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxleftSprite=createSprite(450, 610, 20,100);
	 boxleftSprite.shapeColor=color(255,0,0);
	  boxBase=createSprite(550, 650, 200,20);
	   boxBase.shapeColor=color(255,0,0);
		boxrightSprite=createSprite(650 , 610, 20,100); 
		boxrightSprite.shapeColor=color(255,0,0);

	paperObject = new paper(200, 450, 40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW)
	 { Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-55});
	 } }




