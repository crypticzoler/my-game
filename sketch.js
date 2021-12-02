var bg,bgimg
var ss,ss1
var alien,ss2,ss3,ss4,ss5,ss6,ufo
var aliengroup,lasergroup
var score = 0
var gameState = 'play'

function preload(){
   bgimg = loadImage("assets/bg1.jpg")
   ss2 = loadImage("assets/ss2.png")
   ss3 = loadImage("assets/ss3.png")
   ss4 = loadImage("assets/ss4.png")
   ss5 = loadImage("assets/ss5.png")
   ss1 = loadImage("assets/ss1.png")
   ss6 = loadImage("assets/ss6.png")
   ufo = loadImage('assets/ufo.png')
}

function setup() {
  createCanvas(1500,700);
  bg = createSprite(750,350,1500,700)
  bg.addImage(bgimg)
  ss = createSprite(100,350)
  ss.addImage(ss1)

  aliengroup = new Group()
  lasergroup = new Group()
}

function draw() {
  
  background(0);
  drawSprites();
  if (gameState==='play'){
   if(keyDown("W")){
     ss.y-=5
   }
  if(keyDown("s")){
   ss.y+=5 
  }
  spawnAliens()


  }


  else if (gameState === 'end') {
    
    
  }
  
  
 
} 
function spawnAliens(){
  if(frameCount%150==0){
    var rand = Math.round(random(100,600))
   alien = createSprite(1500,rand,10,10)
   alien.velocityX=-4 
   var randimg = Math.round(random(1,6))
  }
}
