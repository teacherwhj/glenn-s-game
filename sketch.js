const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pc, name, ground;
var bgImage1, arrow, arrowImg;
var table;
var bgroung;
var gameState=1;



function preload() {
  //bgImage1=loadImage()
  bg();
  arrow1=loadImage('sprites/1234.png');
 }

function setup() {
 var canvas = createCanvas(1200, 500);

  engine = Engine.create();
  world = engine.world;

 ground = new Ground(600, height, 2000, 10);
 
  pc = new Pc(130, 438);
  table = new Shoting(300,300)
  
  name1= createInput('Enter Name Here');
  name1.position(250,300);
  button1=createButton('NEXT');
  button1.position(300,335);
  button1.style('width','150px');
  
  
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    Matter.Body.setVelocity(pc.body, { x: -5, y: 25 })
  }
  if (keyCode === RIGHT_ARROW) {

    Matter.Body.setVelocity(pc.body, { x: +5, y: 25 })


  }
}

function draw() {

  //background(0,200,255) 
  if (bg1)
  background(bg1);

  
  Engine.update(engine);
  pc.display();

  ground.display();

  //table.display();

  if (gameState===1){
   bg();
   arrowImg = createSprite(80, 300)
  arrowImg.addImage(arrow1);
  var player = name1.value();
 
  textSize(25);
  fill('black');
  textSize(40)
  text("Welcom to Glitz the gAme !!", 250, 40);
  text("Enter your NickName", 150, 160);
 }
  button1.mousePressed(()=>{
  console.log("stage 2")
  gameState=2
  name1.hide();
  //button1.hide();
  bg();
 if (gameState===2){

 }
  
})

  drawSprites();
}
function bg (){
  console.log(gameState)
if (gameState===1)
{
console.log("in stage 1")
   bgroung="sprites/background.jpg"
}
if (gameState===2)
{
console.log("in second stage")
bgroung="sprites/background1.jpg"
}
 
 bg1=loadImage(bgroung)
  };

