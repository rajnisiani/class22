var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var r1,r2,r3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	r1 = Bodies.rectangle(400,640,200,10)
	World.add(world, r1);

	r2 = Bodies.rectangle(300,610,10,100)
	World.add(world, r2);

	r3 = Bodies.rectangle(500,610,10,100)
	World.add(world, r3);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	


	Engine.run(engine);
}


function draw() {
  background(0);
  rectMode(CENTER);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  if(keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false);
	}	
	rectMode(CENTER);
	rect(r1.position.x,r1.position.y,200,10)
	rectMode(CENTER);
	rect(r2.position.x,r2.position.y,10,100)
	rectMode(CENTER);
	rect(r3.position.x,r3.position.y,10,100)
 
  Engine.update(engine);
}
