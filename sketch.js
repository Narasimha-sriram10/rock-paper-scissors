var rock;
var paper;
var scissors ;
var com;
var player;
var rockimage,paperimage,scissorsimage;
var computershape=0;
var playershape=0;
var gamestate="serve";
function preload (){
  rockimage=loadImage("rock.png");
  paperimage=loadImage("paper.png");
  scissorsimage=loadImage("scrissors.png");
  computerimage=loadImage("computer.jpg");
  playerimage=loadImage("player.jpg");
}

function setup() {
  createCanvas(600, 600);
  rock = createSprite(100,184,20,20)
  rock.addImage ("rock",rockimage)
  
  
  paper = createSprite(300,184,20,20)
  paper.addImage("paper",paperimage)
  
  scissors = createSprite(500,192,20,20)
  scissors.addImage("scissors",scissorsimage)
com = createSprite(200,390,20,20)
com.addImage("computer",computerimage)
com .scale=0.3;
com.addImage("rock",rockimage)
com.addImage("paper",paperimage)
com.addImage("scissors",scissorsimage)

player = createSprite(400,390,20,20)
player.addImage("player",playerimage)
player.scale =0.1;
player.addImage("rock",rockimage)
player.addImage("paper",paperimage)
player.addImage("scissors",scissorsimage)
}

function draw() {
  background(220);
  drawSprites();
  text(mouseX+","+mouseY,50,50);
  if(mousePressedOver(rock)||touches.lenght>0){
player.changeImage("rock",rockimage)
player.scale=1;
playershape=1;
    touches=[];
  }
  if(mousePressedOver(paper)||touches.lenght>0){
player.changeImage("paper",paperimage)
player.scale=1;
playershape=2;
    touches=[];
  }
  if(mousePressedOver(scissors)||touches.length>0){
    player.changeImage("scissors",scissorsimage)
    player.scale=1;
    playershape=3;
    touches=[];

  }
if(mousePressedOver(rock)||mousePressedOver(paper)||mousePressedOver(scissors)||touches.length>0){
  gamestate="play";
var computernum=Math.round(random(1,3));
if(computernum===1){
com.changeImage("rock",rockimage)
com.scale=1;
computershape=1;
  touches=[];
}
if(computernum===2){
com.changeImage("paper",paperimage)
com.scale=1;
computershape=2;
}
if(computernum===3){
  com.changeImage("scissors",scissorsimage)
  com.scale=1;
  computershape=3;
}
}
if(computershape===playershape&&gamestate==="play"){
  textSize(40);
text("draw",210,25);

}
else if(computershape===1&&playershape===2){
text ("computer wins",281,511)
}
else if(computershape===1&&playershape===3){
text ("computer wins",281,511)
}
else if(computershape===2&&playershape===1){
text ("player wins",281,511)
}
else if(computershape===2&&playershape===3){
text ("player wins",281,511)
}
else if(computershape===3&&playershape===1){
text ("player wins",281,511)
}
else if(computershape===3&&playershape===2){
text ("computer wins",281,511)
}
}

                                
