var ground,groundImg



function preload() {
    //load the images here
    groundimg=loadImage("garden.png")
}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
    ground=createSprite(600,600);
    ground.addImage(groundImg);


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
