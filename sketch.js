var ghost,ghostwalk;
function preload() {
  ghostwalk=loadAnimation("ghost1.png","ghost2.png","ghost3.png")

}

function setup(){
createCanvas(windowWidth,windowHeight);
ghost=createSprite(windowWidth/2, windowHeight/2,10,10);
 ghost.addAnimation("scare",ghostwalk)
}

function draw(){
  background('purple')
drawSprites();
  
}
