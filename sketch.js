const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,stopper, player

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

 var box = createSprite(100, 200, 30, 30);
 var stopper = createSprite(400, 200, 50, 50)
 stopper.velocityX = 0;
 stopper.velocityY = 20;
 var player = createSprite(90, 200, 50, 50)
 player.x = mouseX;
 player.Y = mouseY;
}

function draw(){
    background(0);
    if (player.isTouching(box)) {
        box.velocityX = 40
    }
    if (box.isTouching(stopper)) {
        box.velocityX = 0
        Text("lost", 200, 200)
        player.x = 1000
        player.y = 1000
    }
    if (player.isTouching(stopper)) {
        box.velocityX = 0
        Text("lost", 200, 200)
        player.x = 1000
        player.y = 1000
    }
    Engine.update(engine);
    drawSprites();
}