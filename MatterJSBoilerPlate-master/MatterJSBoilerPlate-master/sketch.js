
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)

	line1 = new Line(600,650,20,80);
	line2 = new Line(432,650,20,80);
	line3 = new Line(515,680,150,20);

	paper = new Paper(50,500,25)


	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);
  
  ground.display();

  line1.display();
  line2.display();
  line3.display();

  paper.display();
}



