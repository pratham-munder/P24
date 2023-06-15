
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var left, right ,bottom, ground, paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);
	left = new Ground(500,640,20,60);
	right = new Ground(650,640,20,60);
    var options = {
		isStatic: false, density: 0.5, friction: 0.5, restitution: 0.3
	}


	paper = Bodies.circle(130,640,30 ,options);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  ground.show()
  left.show()
  right.show()
  ellipse(paper.position.x,paper.position.y,30,30);
  
  drawSprites();

  //console.log(mouseX)
  //console.log(mouseY)
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,{x:0,y:0},{x:85,y:-85});
	}

}



