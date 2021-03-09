var ball, database;
var formobj;
var playerobj;
var gameobj
var gState,pCount;
var allPlayer;
var car1,car1Image;
var car2,car2Image;
var car3,car3Image;
var car4,car4Image;
var trackImage,cars;
var carsattheend;
function setup(){
    createCanvas(displayWidth-50,displayHeight-50);
   
    database = firebase.database()
    
   carsattheend = 0
   formobj = new Form()
   gameobj = new Game ()
   playerobj = new Player()
   gState = 0
   pCount = 0
   gameobj.readgameState()
   gameobj.start()
}
function preload(){
car1Image = loadImage("images/car1.png");
car2Image = loadImage("images/car2.png");
car3Image = loadImage("images/car3.png");
car4Image = loadImage("images/car4.png");
trackImage = loadImage("images/track.jpg");

}
function draw(){
    background("white");
    if(pCount == 4&&gState ==0){
        gState = 1
        console.log(gState)
        gameobj.updategameState()
    }
    if(gState == 1){
        gameobj.play()
    }
    drawSprites();
}




