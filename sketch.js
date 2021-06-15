var gameState = 0;
var game 
var level1ButtonImg , level2ButtonImg
var girlImg , boyImg ;

function preload()
{
	level1ButtonImg = loadImage("images/level1.png");
	level2ButtonImg = loadImage("images/level2.png");
	girlImg = loadImage("images/emma.png");
	boyImg = loadImage("images/john .png");
	
}

function setup() {
	createCanvas(windowWidth , windowHeight);
game = new Game();

	
  
}


function draw() {
 if(gameState === 0){
	 game.start();
 }
 if(gameState === 1){
	 game.play();
 }
 if(gameState === 2){
	 game.end();
 }
 drawSprites()
}



