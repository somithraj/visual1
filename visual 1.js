var movingrectangle;
var fixedrectangle;

function setup() {
  createCanvas(400,400);
  movingrectangle=createSprite(200,200,80,50);
  movingrectangle.shapeColor = "pink";
  fixedrectangle=createSprite(200,200,50,80);
  fixedrectangle.shapeColor = "pink";
}

function draw() {
  background(200,220,20); 
  movingrectangle.x=mouseX
  movingrectangle.y=mouseY

 
  
    movingrectangle.shapeColor = "green";
    fixedrectangle.shapeColor = "green";
  

  
  drawSprites();
}