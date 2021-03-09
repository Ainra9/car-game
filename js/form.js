class Form {
    constructor(){
      this.input = createInput("enter your name")
      this.button = createButton("submit")
      this.title = createElement("h2")
      this.title.html("multi player car game")
      this.welcome = createElement("h4")
      this.welcome.html("welcome")
    }
 display() {
     this.input.position(displayWidth/2,240)
     this.button.position(displayWidth/2,260)
     this.title.position(displayWidth/2,30)
     this.button.mousePressed(()=>{
       pCount = pCount+1
       playerobj.index=pCount
       playerobj.name=this.input.value()
       playerobj.updateplayerCount()
       playerobj.updateplayerdetails()
       this.input.hide()
       this.button.hide()
       this.welcome.position(displayWidth/2,240)
     })
 }
}






















