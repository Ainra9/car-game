class Game {
    constructor(){

    }
    readgameState(){
database.ref("gameState").on("value",function(data){
gState = data.val()

})
    }
    updategameState(){
database.ref("/").update({
    gameState:gState
})
    }
    async start(){
        if(gState == 0){
            var playerCountref = await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                pCount = playerCountref.val()
                playerobj.readplayerCount()
            }
            formobj.display()
        }
        car1 = createSprite(200,100)
        car1.addImage(car1Image)
        car2 = createSprite(220,100)
        car2.addImage(car2Image)
        car3 = createSprite(240,100)
        car3.addImage(car3Image)
        car4 = createSprite(260,100)
        car4.addImage(car4Image)
        cars = [car1,car2,car3,car4]

    }
    play(){
      playerobj.getplayerdetails() 
      playerobj.getcarsattheend()
      if(allPlayer!==undefined){
          image(trackImage,0,-4*height,width,5*height)
          var x = 200
          var y = 0
          var index = 0
          for(var player in allPlayer){
          x = x+200
          y = displayHeight-allPlayer[player]["distance"]
          cars[index].x = x
          cars[index].y = y
          index = index+1
          if(index == playerobj.index){
              camera.x = displayWidth/2
              camera.y = y
              fill("red")
              ellipse(x,y,60,60)
          }
          }
          if(playerobj.distance>=3480 && gState == 1){
              gState = 2
              carsattheend = carsattheend+1
              playerobj.rank = carsattheend
              playerobj.updatecarsattheend()
              playerobj.updateplayerdetails()
          }
          if(keyDown("up")&& playerobj.index !==0&& gState == 1){
playerobj.distance = playerobj.distance+50
playerobj.updateplayerdetails()
          }
          drawSprites();
      }
    }
}