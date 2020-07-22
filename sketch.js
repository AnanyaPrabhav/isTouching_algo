var mRect, fRect;

function setup(){
createCanvas(1000, 600);

	mRect = createSprite(250, 400, 70, 70);
  fRect = createSprite(500, 400, 50, 50);
  
  mRect.shapeColor = "lime";
  fRect.shapeColor = "lime";
}

function draw(){
  background("black");
  
  mRect.x = World.mouseX;
  mRect.y = World.mouseY;
	
  if(fRect.x - mRect.x < mRect.width/2+fRect.width/2
    &&mRect.x - fRect.x < mRect.width/2+fRect.width/2
    &&fRect.y - mRect.y < mRect.height/2+fRect.height/2
    &&mRect.y - fRect.y < mRect.height/2+fRect.height/2){
      mRect.shapeColor = "red";
      fRect.shapeColor = "red";
}else{
  mRect.shapeColor = "lime";
  fRect.shapeColor = "lime";
}

	drawSprites();
}