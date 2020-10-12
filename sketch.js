
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, tree;

function preload()
{
	
}

function setup() {
	createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,550,1000,50);
	tree = new Tree(200,400,100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  ground.display();
  tree.display();
  
  drawSprites();
}



