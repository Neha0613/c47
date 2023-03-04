var thief, thiefJump, thiefSlide, thiefIdle, thiefShoot, thiefDead, thiefRun, thiefR, thiefIdleR, thiefRunR
var knight, knightDead, knightIdle, knightAttack, knightAttackR, knightDeadR, knightIdleR
var crystal, pinkCrystal, goldCrystal, greenCrystal, blueCrystal
var wall1
var wall2


function preload() {
thiefRun = loadAnimation ("assets/run1.png", "assets/run2.png", "assets/run3.png", "assets/run4.png", "assets/run5.png", 
"assets/run6.png", "assets/run7.png", "assets/run8.png")

thiefRunR = loadAnimation ("assets/runr1.png", "assets/runr2.png", "assets/runr3.png", "assets/runr4.png", "assets/runr5.png", 
"assets/runr6.png", "assets/runr7.png", "assets/runr8.png")

thiefIdle = loadAnimation ("assets/idle1.png", "assets/idle2.png", "assets/idle3.png", "assets/idle4.png", "assets/idle5.png")

thiefIdleR = loadAnimation ("assets/idler1.png", "assets/idler2.png", "assets/idler3.png", "assets/idler4.png", "assets/idler5.png")

thiefJump = loadAnimation ("assets/jump1.png", "assets/jump2.png", "assets/jump3.png", "assets/jump4.png", "assets/jump5.png",
"assets/jump6.png", "assets/jump7.png", "assets/jump8.png", "assets/jump9.png", "assets/jump10.png")

thiefSlide = loadAnimation ("assets/slide1.png","assets/slide2.png","assets/slide3.png","assets/slide4.png","assets/slide5.png")

thiefShoot = loadAnimation ("assets/shoot1.png","assets/shoot2.png","assets/shoot3.png")

thiefDead = loadAnimation ("assets/dead1.png","assets/dead2.png","assets/dead3.png","assets/dead4.png","assets/dead5.png",
"assets/dead6.png","assets/dead7.png","assets/dead8.png","assets/dead9.png","assets/dead10.png")

knightDead = loadAnimation ("assets/knightd1.png","assets/knightd2.png","assets/knightd3.png","assets/knightd4.png",
"assets/knightd5.png","assets/knightd6.png","assets/knightd7.png","assets/knightd8.png","assets/knightd9.png","assets/knightd10.png")

knightIdle = loadAnimation ("assets/knighti1.png","assets/knighti2.png","assets/knighti3.png","assets/knighti4.png",
"assets/knighti5.png","assets/knighti6.png","assets/knighti7.png","assets/knighti8.png","assets/knighti9.png","assets/knighti10.png")

knightIdleR = loadAnimation ("assets/knightir1.png","assets/knightir2.png","assets/knightir3.png","assets/knightir4.png",
"assets/knightir5.png")

knightAttack = loadAnimation ("assets/attack1.png","assets/attack2.png","assets/attack3.png","assets/attack4.png",
"assets/attack5.png","assets/attack6.png", "assets/attack7.png","assets/attack8.png", "assets/attack9.png", "assets/attack10.png")

knightAttackR = loadAnimation ("assets/attackr1.png","assets/attackr2.png","assets/attackr3.png","assets/attackr4.png",
"assets/attackr5.png","assets/attackr6.png", "assets/attackr7.png","assets/attackr8.png", "assets/attackr9.png", "assets/attackr10.png")

pinkCrystal = loadImage ("assets/pinkcrystal.png")
goldCrystal = loadImage ("assets/goldcrystal.png")
greenCrystal = loadImage ("assets/greencrystal.png")
blueCrystal = loadImage ("assets/bluecrystal.png")
}


function setup() 
{
  createCanvas(1500,1000);
  thief=createSprite (400,400,1,1)
  thief.addAnimation("idle", thiefIdle)
  thief.addAnimation("dead", thiefDead)
  thief.addAnimation("shoot", thiefShoot)
  thief.addAnimation("slide", thiefSlide)
  thief.addAnimation("jump", thiefJump)
  thief.addAnimation("running", thiefRun)
  thief.scale = 0.25

  
  thiefR=createSprite (1200,400,1,1)
  thiefR.addAnimation("idler", thiefIdleR)
  //thiefR.addAnimation("deadr", thiefDeadR)
  //thiefR.addAnimation("shootr", thiefShootR)
  //thiefR.addAnimation("slider", thiefSlideR)
  //thiefR.addAnimation("jumpr", thiefJumpR)
  thiefR.addAnimation("runningr", thiefRunR)
  thiefR.scale = 0.25

  knight=createSprite (300,200,1,1)
  knight.addAnimation("kattack", knightAttack)
  knight.addAnimation("kidle", knightIdle)
  knight.addAnimation("kdead", knightDead)
  knight.scale = 0.2

  knightR=createSprite (1200,200,1,1)
  //knightR.addAnimation("kattackr", knightAttackR)
  knightR.addAnimation("kidler", knightIdleR)
  //knightR.addAnimation("kdeadr", knightDeadR)
  knightR.scale = 0.2

}

function draw() 
{
background(51);


if (keyDown("w")){
  thief.y=thief.y-5
}

if (keyDown("s")){
  thief.y=thief.y+5
}

if (keyDown("a")){
  thief.x=thief.x-5
}

if (keyDown("d")){
  thief.x=thief.x+5
}


wall()
crystals()
keyPressed()
keyReleased()
drawSprites()
}

function keyPressed(){
  if (keyCode==(UP_ARROW)){
    thiefR.y=thiefR.y-5
    thiefR.changeAnimation("runningr",thiefRunR)
  }
  if (keyCode==(DOWN_ARROW)){
    thiefR.y=thiefR.y+5
    thiefR.changeAnimation("runningr",thiefRunR)
  }
  
  if (keyCode==(LEFT_ARROW)){
    thiefR.x=thiefR.x-5
    thiefR.changeAnimation("runningr",thiefRunR)
  }
  
  if (keyCode==(RIGHT_ARROW)){
    thiefR.x=thiefR.x+5
    thiefR.changeAnimation("runningr",thiefRunR)
  }
}

function keyReleased(){
  if (keyCode==(UP_ARROW)){
    thiefR.changeAnimation("idler",thiefIdleR)  
  }
  if (keyCode==(DOWN_ARROW)){
    thiefR.changeAnimation("idler",thiefIdleR)  
  }
  
  if (keyCode==(LEFT_ARROW)){
    thiefR.changeAnimation("idler",thiefIdleR)  
  }
  
  if (keyCode==(RIGHT_ARROW)){
    thiefR.changeAnimation("idler",thiefIdleR)  
  }
}


function wall(){
  if (frameCount%80 === 0){
    wall1 = createSprite(500,1000,20,250) 
    wall1.shapeColor= "blue"
    wall1.velocityY = -5
    wall2 = createSprite(1000,1000,20,250) 
    wall2.shapeColor= "blue"
    wall2.velocityY = -5
  }
}

function crystals(){
  if (frameCount%40 === 0){
    crystal = createSprite(Math.round(random(550,900)),1000,40,40)
    crystal.velocityY = -5
    var rand = Math.round(random(1,4))
    switch(rand){
      case 1: crystal.addImage(pinkCrystal)
      break;
      case 2: crystal.addImage(greenCrystal)
      break;
      case 3: crystal.addImage(goldCrystal)
      break;
      case 4: crystal.addImage(blueCrystal)
      break;
    }
    crystal.scale = 0.15
  }
}

