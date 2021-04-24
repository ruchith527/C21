var movimgRect, fixedRect;

function setup() {
  createCanvas(800, 400);

  movingRect = createSprite(400, 200, 60, 90);
  movingRect.shapeColor = 'black';

  fixedRect = createSprite(600, 200, 90, 50);
  fixedRect.shapeColor = 'black';

  rect1 = createSprite(100,200,90,50);
  rect1.shapeColor='black';


  rect2 = createSprite(300,200,90,50)
  rect2.shapeColor='black'

}


function draw() {   
  background('lavender');

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //algorithm for collision
  //calling a function
  if( isTouching(fixedRect,movingRect)){
    movingRect.shapeColor = 'orange';
    fixedRect.shapeColor = 'orange';
  }
  else if(isTouching(rect1,movingRect)){
    movingRect.shapeColor = 'orange';
    rect1.shapeColor = 'orange';
  }
  else if(isTouching(rect2,movingRect)){
    movingRect.shapeColor = 'orange';
    rect2.shapeColor = 'orange';
  }
  else{
    movingRect.shapeColor = 'black';
    fixedRect.shapeColor = 'black';
    rect2.shapeColor = 'black';
    rect1.shapeColor = 'black';
  }
 

  drawSprites();
}

