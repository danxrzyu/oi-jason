var caminho,menino,left,right;
var caminhoImg,meninoImg;

function preload(){
  caminhoImg=loadImage("path.png")
  meninoImg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  caminho=createSprite(200,200);
  caminho.addImage(caminhoImg)

  caminho.scale=1.2
  
  menino=createSprite(180,340,30,30)
  menino.addAnimation("jake",meninoImg)
  menino.scale=0.08
  
  left=createSprite(0,0,100,800);
  left.visible=false
  right=createSprite(410,0,100,800);
  right.visible=false
}

function draw() {
  background(0);
  caminho.velocityY=4
  menino.x=World.mouseX;
  edges=createEdgeSprites()
  menino.collide(edges[3])
  menino.collide(left)
  menino.collide(right)
  if(caminho.y > 400) {
    caminho.y = height/2 
  }
  drawSprites();
}
