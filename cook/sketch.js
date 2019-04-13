//variables
var loc1 = 55;
var loc2 = 105;
var clicked1 = 240;
var clicked2 = 160;
var cooks = 0;
var upgrade = 1;
var r = 100;
var perSecond = 0;
var perSecondPrint = 0;
var songseconds = 0;
var settingD;

//Settings variables
var settingX = 1000;
var settingY = 1000;
var settingXX = 540;
var settingYY = 5;

//Upgrade variables
//random1
var U1x = 1000;
var U1y = 1000;
var U1U = 1;
var nonce = 6;
var randomMouseX = 1000;
var randomMouseY = 1000;

//first
var U1 = 50;
var U11 = 25;
var U111 = 1;
//second
var U2 = 500;
var U22 = 50;
var U222 = 14;


//images
let cookie;
let cookie2;
let cookie3;
let milk;
let box;
let wood;
let upgradeIcon;
let cursor;
let oven;
let settings;
let volumeIcon;
let redX;

//sounds
let click;
let song;

var slider;
var volume = 1;

function preload(){
//images
cookie = loadImage("cookie.png");
milk = loadImage("milk.jpg");
cookie2 = loadImage("coo.png");
cookie3 = loadImage("coo2.png");
box = loadImage("boxbox.png");
wood = loadImage("wood.jpg");
cursor = loadImage("cursor.png");
oven = loadImage("oven..png");
upgradeIcon = loadImage("ugrado.png");
settings = loadImage("settings.png");
volumeIcon = loadImage("volumee.png");
redX = loadImage("red.png");

//sounds
click = loadSound("Nommm.mp3");
song = loadSound("madtingsTrack.mp3");
}


function setup() {
  createCanvas(600, 600);
  song.loop();
  
}

function draw() { 
  background(milk);
  image(box,0,27,355,372);
  image(box,0,33,355,300);
  image(box,0,305,355,70);
  image(wood,32,312,292,57);
  image(cookie,loc1,loc2,clicked1,clicked2);
  image(cookie,30,322,60,40);
  textSize(60);
  fill(0);
  textFont('Forte');
  text("Cook Clicker",18,63);
  fill(200,140,94);
  text("Cook Clicker",15,60);
  fill(0);
  textSize(25);
  text("= "+round(cooks),80,350);
  
  //Cookies per click
  fill(255);
  rect(28,373,299,32);
  fill(0);
  textFont('Arial');
  textSize(18);
  text("Cookies per click = "+upgrade, 33,395);
  
  //Cookies per second
  fill(255);
  rect(28,405,299,32);
  fill(0);
  text("Cookies per second = "+perSecondPrint, 33,426);
  cooks = cooks + perSecond;
  
  //Settings
  image(settings,settingXX,settingYY,50,50);
  rect(settingX + 29,settingY + 310,298,127);
  //29,310
  image(wood,settingX + 33,settingY + 314,290,119);
  //33,314
  textFont('Impact');
  textSize(30);
  fill(0);
  text("Settings",settingX + 126,settingY + 341);
  fill(100,100,100);
  text("Settings",settingX + 125,settingY + 340);
  image(volumeIcon,settingX + 60,settingY + 347,30,30);
  ellipse(settingX+115,settingY+360,20,20);
  fill(120,100,100);
  ellipse(settingX+140,settingY+360,20,20);
  fill(130,100,100);
  ellipse(settingX+165,settingY+360,20,20);
  fill(140,100,100);
  ellipse(settingX+190,settingY+360,20,20);
  fill(150,100,100);
  ellipse(settingX+215,settingY+360,20,20);
  fill(160,100,100);
  ellipse(settingX+240,settingY+360,20,20);  
  image(redX,settingX+285,settingY+320,30,30);
  
  
  //Upgrades text
  fill(0);
  rect(335,60,255,505);
  image(wood,340,66,245,45);
  textSize(40);
  fill(0);
  text("Upgrades",387,104);
  fill(212,175,55)
  text("Upgrades",385,103);
  
  //All The Upgrades
  //Upgrade 1
  image(wood,340,116,245,45);
  textSize(30);
  fill(0);
  text("Clicker",352,152);
  fill(255);
  text("Clicker",350,150);
  image(cursor,455,120,25,35);
  textSize(20);
  fill(0);
  text("costs ",502,135);
  text(U1,512,155);
  fill(255);
  text("costs ",500,133);
  text(U1,510,152);
  
  //Upgrade 2
  image(wood,340,166,245,45);
  textSize(30);
  fill(0);
  text("Oven",352,202);
  fill(255);
  text("Oven",350,200);
  image(oven,448,170,35,40);
  textSize(20);
  fill(0);
  text("costs ",502,185);
  text(U2,512,205);
  fill(255);
  text("costs ",500,183);
  text(U2,510,202);
  
  
  //Upgrade 3
  image(wood,340,216,245,45);
  
  
  //Upgrade 4
  image(wood,340,266,245,45);
  
  
  //Upgrade 5
  image(wood,340,316,245,45);
  
  
  //Upgrade 6
  image(wood,340,366,245,45);
  
  
  //Upgrade 7
  image(wood,340,416,245,45);
  
  
  //Upgrade 8
  image(wood,340,466,245,45);
  
  
  //Upgrade 9
  image(wood,340,516,245,45);
  
  //RandomUpgrade
  textFont('Ariel');
  fill(255);
  rect(28,437,299,127);
  image(upgradeIcon,U1x,U1y,50,50);
  rect(randomMouseX,randomMouseY,200,100);
  textSize(17);
  fill(0);
  text("Costs 500:",randomMouseX+5,randomMouseY+20) 
  text("Increases clickers gained",randomMouseX+25,randomMouseY+40);
  text("from a purchase by 1!",randomMouseX+46,randomMouseY+60);
  image(cursor,randomMouseX+25,randomMouseY+45,35,50);
  dd = dist(mouseX,mouseY,U1x+25,U1y+25);
  
  if (dd < 25){
    randomMouseX = mouseX;
    randomMouseY = mouseY - 100;
  } else {
    randomMouseX = 1000;
    randomMouseY = 1000;
  }
  
  if(cooks > nonce) {
    U1x = 35;
    U1y = 443;
    nonce = nonce + 1000000000000000000000000000000000000000000000000000;
  }
   print(settingD);
   print(settingX);
  }

  function mousePressed() {
    d = dist(mouseX,mouseY,loc1+120,loc2+80);
    x = mouseX;
    y = mouseY;
    //clicking cookie
    if (d<64){ 
      clicked1 = 216;
      clicked2 = 144;
      loc1 = 65;
      loc2 = 112;
      cooks = cooks + upgrade;
      click.play();
    }
    
    //Settings
    settingD = dist(mouseX,mouseY,settingXX+25,settingYY+25);
    settingDD = dist(mouseX,mouseY,settingX+305,settingY+340);
    if (settingD < 25){
      settingX = 0;
      settingY = 0;
    }
    if (settingDD < 25){
      settingX = 1000;
      settingY = 1000;
    }
    
    setting1 = dist(mouseX,mouseY,settingX+115,settingY+360);
    setting2 = dist(mouseX,mouseY,settingX+140,settingY+360);
    setting3 = dist(mouseX,mouseY,settingX+165,settingY+360);
    setting4 = dist(mouseX,mouseY,settingX+190,settingY+360);
    setting5 = dist(mouseX,mouseY,settingX+215,settingY+360);
    setting6 = dist(mouseX,mouseY,settingX+240,settingY+360);
    if (setting1 < 10){
      song.setVolume(0)
    }
    if (setting2 < 10){
      song.setVolume(0.2)
    }
    if (setting3 < 10){
      song.setVolume(0.4)
    }
    if (setting4 < 10){
      song.setVolume(0.6)
    }
    if (setting5 < 10){
      song.setVolume(0.8)
    }
    if (setting6 < 10){
      song.setVolume(1)
    }
    
    
    //Random Upgrade 1
    dd = dist(mouseX,mouseY,U1x+25,U1y+25);
    if (cooks > 499){
      if (dd < 25){
        cooks = cooks - 500
        U1U = U1U + 1;
        U1x = 1000;
        U1y = 1000;
        
      }
    }
    
    //Upgrade 1
    if (cooks > U1-1) {
      if (mouseX > 340 && mouseX < 585){
        if (mouseY > 116 && mouseY < 161){
          upgrade = upgrade + U1U;
          cooks = cooks - U1;
          U1 = U1 + U11;
          U11 = U11 + U111;
        }
      }
    }
    
    //Upgrade 2
    if (cooks > U2-1) {
      if (mouseX > 340 && mouseX < 585){
        if (mouseY > 166 && mouseY < 211){
          cooks = cooks - U2;
          U2 = U2 + U22;
          U22 = U22 + U222;
          perSecond = perSecond + 0.0173;
          perSecondPrint = perSecondPrint + 1;
        }
      }
    }
  }
  
  function mouseReleased() {
    //release cookie click
    clicked1 = 240;
    clicked2 = 160;
    loc1 = 55;
    loc2 = 105;
  }
