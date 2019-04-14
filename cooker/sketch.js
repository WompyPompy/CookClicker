var nar = 0;
var bX1 = 0;
var bXX1 = 0;
var bX2 = 901;
var bXX2 = 901;
var gX1 = -275;
var guyX = 375;
var guyY = 420;
var intro = 300;
let tim;

let backgroundo;
let guy;
let grass;
let grass2;
let bin;
let gate;
let tutorial;

function preload() {
  backgroundo = loadImage("don.png");
  guy = loadImage("guy.png");
  grass = loadImage("grass.png");
  grass2 = loadImage("grass2.png");
  bin = loadImage("Bin.png");
  gate = loadImage("Gate.png");
  tutorial = loadImage("tutorial.png");
}

function setup() {
  createCanvas(900, 600);
  frameRate(120);
  tim = new boy();
}

function draw() {
  background(200);
  image(backgroundo,bX1,0,902,600);
  image(backgroundo,bX2,0,902,600);
  image(gate,gX1,250,500,400);
  
  tim.move();
  tim.show();
  
  image(bin, bX2,257,700,350);
  image(grass2,bXX1,40,901,600);
  image(grass2,bXX2,40,901,600);
  image(grass,bX1,17,901,600);
  image(grass,bX2,17,901,600);

  image(tutorial,intro,200,300,125);
  
  
  if (bX1 < -900){
    bX1 = 900;
  }
  if (bXX1 < -900){
    bXX1 = 900;
  }
  if (bX2 < -900){
    bX2 = 900;
  }
  if (bXX2 < -900){
    bXX2 = 900;
  }
  
  if (bX1 > 900){
    bX1 = -900;
  }
  
  if (bXX1 > 900){
    bXX1 = -900;
  }
  
  if (bX2 > 900){
    bX2 = -900;
  }
  
  if (bXX2 > 900){
    bXX2 = -900;
  }
  
  
  if (guyX == 575 || guyX == 576){
    guyX = guyX - 2;
  }
  
  if (guyX == 175 || guyX == 174){
    guyX = guyX +2;  
  }
  
  if (guyX == 573){
    bX1 = bX1 -2;
    bXX1 = bXX1 -1.25;
    bX2 = bX2 -2;
    bXX2 = bXX2 -1.25;
    gX1 = gX1 -2;
    nar = nar +1;
    intro = 1000;
  }
     
  if (nar > -151 ){
    if (guyX == 177){
      bX1 = bX1 +2;
      bXX1 = bXX1 +1.25;
      bX2 = bX2 +2;
      bXX2 = bXX2 +1.25;
      gX1 = gX1 +2;
      intro = 1000;

      nar = nar - 1;
    }
  }
     
  
  
  
  
}
  class boy {
    constructor(){
   
   }
   
   
   move(){
     if(keyIsDown(LEFT_ARROW)){
       guyX = guyX -2;
       guyY = guyY + random(-1,1);
     }
  
     if (keyIsDown(RIGHT_ARROW)) {
       guyX = guyX +2;
       guyY = guyY + random(-1,1);
     }
     
   }
   
   
   
   show(){
     image(guy,guyX,guyY,150,150);
   }
 }

  
  
  


