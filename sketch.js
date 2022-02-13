
function preload(){
  trackImage=loadImage("path.png");
  boys=loadAnimation("Runner-1.png","Runner-2.png");
}


function setup(){
  var Barrier;
  var Barrier1;
  createCanvas(400,400);
  //create sprites here
  

  tracks=createSprite(200,200);
  tracks.addImage(trackImage);
  tracks.velocityY=4;

  Barrier=createSprite(20,200,50,100);
  Barrier.visible=false;
  Barrier1=createSprite(380,200,50,100);
  Barrier1.visible=false;
  

  boy=createSprite(200,200,800,700);
  boy.addAnimation("running",boys);
  boy.scale=0.1;
  
  
}

function draw() {
  background(0);

  if(tracks.y>400){
    tracks.y=height/2;
  }

  boy.collide(Barrier);
  boy.collide(Barrier1);
  
  boy.x=mouseX;

  
  
  drawSprites()

}
