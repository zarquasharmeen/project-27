const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;

var rope1,rope2,rope3,rope4,rope5;

var bobDiameter=50;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(300,500);
	bob2=new Bob(350,500);
	bob3=new Bob(400,500);
	bob4=new Bob(450,500);
	bob5=new Bob(500,500);
	

	roof=new Roof(400,100,300,50);

	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2.4,0);
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1.2,0);
	rope3=new Rope(bob3.body,roof.body,-bobDiameter*0,0);
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1.2,0);
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2.4,0);
	

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
  //console.log(bob1.position.x);
  
  bob1.display();
bob2.display();

bob3.display();
bob4.display();

bob5.display();


 roof.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
 
 
 


  drawSprites();
 
}

function keyPressed() 
{

	if (keyCode===37) 
 {

	 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:5,y:-40})
	 
 }
	
}