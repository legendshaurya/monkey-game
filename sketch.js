var monkey , monkey_running

var banana ,bananaImage, obstacle, obstacleImage,ground,groundImage
var bananaGroup, obstacleGroup
var score,survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
   obstacleImage = loadImage("obstacle.png");
  
}
  
function setup() {
 createCanvas(600, 400)
 
  
 monkey=createSprite (50,350,20,50)
  
 monkey.addAnimation("running",monkey_running) 

  
monkey.scale=0.1
  
 ground=createSprite(100,370,600,10) 
 ground.x=ground.width /2 
console.log(ground.x)  
  
  
 obstacleGroup=new Group
   bananaGroup=new Group 
  score=0
survivalTime=0
}



 
  



function draw() {
background("lightgreen")
  drawSprites()
  text("Score: "+ score, 500,50);
  stroke("red")
  textSize("20")
  fill("red")
  
  
  survivalTime=Math.ceil(frameCount/20)
  text("survivalTime: "+ survivalTime, 350,50);
  
  food()
  spawnObstacles()
 if(keyDown("space")&& monkey.y >=250){
    monkey.velocityY=-12
   
 }
   
 monkey.velocityY=monkey.velocityY+0.8
 
   

  
  
  
 
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach()
    score=score+5
    
  }
  
  
  monkey.collide(ground)
 
  
  
}


function food(){
if(frameCount%80===0)  {
 banana=createSprite (600,random(250,350))
  banana.addImage(bananaImage)
  banana.velocityX=-6
  banana.scale=0.09
  bananaGroup.add(banana)
}
  
} 
    
    
    
  function spawnObstacles()  {
   if(frameCount%100===0) {
   obstacle=createSprite (600,350)
     obstacle.addImage(obstacleImage)
    obstacle.velocityX=-6
    obstacle.scale=0.1
    obstacleGroup.add(obstacle)
  }
  
  } 
  
  




