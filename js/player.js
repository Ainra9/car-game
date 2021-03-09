class Player {
   constructor(){
this.index = 0
this.distance = 0
this.name = ""
this.rank = 0
   }
   readplayerCount(){
database.ref("playerCount").on("value",function(data){
   pCount = data.val()
})
   }
   updateplayerCount(){
      database.ref("/") .update({
         playerCount:pCount
      })
   }
   updateplayerdetails(){
 database.ref("players/player"+this.index).update({
    name:this.name,
    distance:this.distance,
    rank:this.rank
 })
   }
   getplayerdetails(){
      database.ref("players").on("value",function(data){
allPlayer = data.val()
console.log(allPlayer)
      })
   }
   getcarsattheend(){
      database.ref("carsattheend").on("value",function(data){
         carsattheend = data.val()
      })
   }
   updatecarsattheend(){
      database.ref("/").update({
         carsattheend: carsattheend
      })
   }
}
