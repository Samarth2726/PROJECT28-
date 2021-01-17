const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,treeImg;
var boy , boyImg;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
var rope;

function preload()
{
	treeImg = loadImage("images(project28)/Plucking mangoes/tree.png")
	boyImg = loadImage("images(project28)/Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1360, 650);


	engine = Engine.create();
	world = engine.world;     

	//Create the Bodies Here.

	
	boy = createSprite(280,500,10,10);
	boy.addImage(boyImg);
	boy.scale = 0.1

	stone = new Stone(210,440,100,0100);
	
	mango1= new Mango(940,280,80,80)
	mango2= new Mango(1100,320,80,80)
	mango3= new Mango(1250,320,80,80)
	mango4= new Mango(1040,170,80,80)
	mango5= new Mango(1170,200,80,80)


	tree = createSprite(1080,340,10,10);
	tree.addImage(treeImg);
	tree.scale=0.4;

	rope = new Rope(boy,stone.Body,-10,-10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  rope.display();

}
