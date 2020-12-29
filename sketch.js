var ghost,ghostwalk;
function preload() {
  ghostwalk=loadAnimation("ghost1.png","ghost2.png","ghost3.png")

}

function setup(){
createCanvas(400,400);
ghost=createSprite(200,200,10,10);
 ghost.addAnimation("scare",ghostwalk)
}

function draw(){
  background('red')
drawSprites();
  
}
