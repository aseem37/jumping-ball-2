
var block1, block2, block3, block4;
var movingSprite;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

   
    block1=createSprite(100,580,180,30);
    block1.shapeColor="red";

    block2=createSprite(300,580,180,30);
    block2.shapeColor="green";

    block3=createSprite(500,580,180,30);
    block3.shapeColor="blue";

    block4=createSprite(700,580,180,30);
    block4.shapeColor="yellow";

    

}

function draw() {
    background(rgb(10,10,10))
   
    if(movingSprite.x<0){
      music.stop()
        movingSprite.velocityX=3
    }else if(movingSprite.x>800){
      music.stop()
        movingSprite.velocityX=-3
    }
   
  if(movingSprite.isTouching(block4)){
    music.play()
    movingSprite.shapeColor="yellow";
    movingSprite.bounceOff(block4);
    
  }
  
  else if(movingSprite.isTouching(block3)){
    music.stop()
    movingSprite.shapeColor="blue";
    bounceOff(movingSprite,block3)
   
  }
    
else if(movingSprite.isTouching(block2)){
    music.stop()
    movingSprite.shapeColor="green";
    bounceOff(movingSprite,block2)
  }
  
  else if(movingSprite.isTouching(block1)){
    music.stop()
    movingSprite.shapeColor="red";
    movingSprite.bounceOff(block1)
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;
  }

  if (movingSprite.y<0){
    music.stop()
    movingSprite.velocityY=3
  }

  
   
    drawSprites()
}
