class Game {
    constructor(){
        this.level1Button = createSprite(width/2 + 300,height/2+200);
        this.level1Button.scale = 0.5;
        this.level2Button = createSprite(width/2+300,height/2+100);
        this.level2Button.visible = false;
        this.john  = createSprite(width/2-300, height/2+200);
        this.john.addImage(boyImg);
        this.john.scale = 0.5;
        this.emma = createSprite(width/2 , height/2 + 200);
        this.emma.addImage(girlImg);
        this.level1Button.addImage(level1ButtonImg);
        this.level2Button.addImage(level2ButtonImg);
        this.characterPicked = false;
        this.character = "girl";

    }
start(){
    if(gameState === 0){
    
    textSize(40)
    fill("red")
    text("WELCOME TO SCAVENGER - HUNT ",width/2-400 , height/2-200)
    textSize(20)
    fill("blue")
    text(" A girl/boy named emma/john were studying about recycling in their chapter of science \n so they started thinking about this and  wanted to try to apply this in their real life \n they tried to do so but didn't received any much response.\n so they wrote a tagline for their work 'DON'T BE A PUCK ! RECYCLE UR JUNK !!'\n they want your support to make the world Better \n will you join them ?",width/2-500 , height/2-100)
    if(mousePressedOver(this.john)){
        this.characterPicked = true ; 
        this.character = "boy";
    }
    else if (mousePressedOver(this.emma)){
        this.characterPicked = true ;
        this.character = "girl";

    }
    if(mousePressedOver(this.level1Button)){
        gameState = 1;
        this.john.visible = false ;
        this.emma.visible = false;
        this.level1Button.visible = false;
    }
}
}  
play(){
    text ("WELCOME TO THE RECYCLING STATE",width/2 , height/2);

}  
end(){

}    
}