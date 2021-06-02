



var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var ground, Invisibleground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400);
 monkey=createSprite(50,340,20,25);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;

  
  ground = createSprite(200,390,800,10);
  ground.velocityX = -6;
  ground.x=ground.width/2; 
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible=false;
  
}


function draw() {
background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time :" + survivalTime,100,50);
  
  if(keyDown("space")){
    monkey.velocityY=-12;
    
  }
  
  monkey.velocityY= monkey.velocityY + 0.5;
      
  
  if (ground.x < 50){
      ground.x=200;
    }
 
 
  
  
  monkey.collide(ground);
  food();
  obstacleGroup();

  
  drawSprites();
}

function food (){
  if(frameCount % 80 === 0){
    banana = createSprite(400,200,10,10);
    banana.scale=0.1;
    banana.velocityX=-8;
    banana.addImage(bananaImage);
    banana.lifetime = 400/8;
  }
}

function obstacleGroup(){
  if(frameCount % 100 === 0){
    obstacle = createSprite(400,360,20,20);
    obstacle.scale=0.3;
    obstacle.velocityX=-10;
    obstacle.addImage(obstacleImage);
  }
}






