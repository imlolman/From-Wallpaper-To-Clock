function Clock(){

  this.display = true
  
  this.drawBG = function(){
    document.body.style.background = 'rgb(204,0,1)'
    background(204,0,1);
  }

  this.makeBackground = function(){
    if(this.display){
      this.drawClockBorder()
      this.makeClockText()
    }
  }

  this.makeHourHand = function(t){
    if(this.display){
      push()
      calcAngle = (t*360)+90
      a = atan2(sin(calcAngle),cos(calcAngle));
      translate(width / 2, height / 2);
      fill(255)
      rotate(a);
      rect(-52, 0 , 120, 10, 100);
      fill(204,0,1)
      rect(-52, 0 , 110, 3, 10);
      pop()
    }
  }

  this.makeMinuteHand = function(t){
    if(this.display){
      push()
      calcAngle = (t*360)+90
      a = atan2(sin(calcAngle),cos(calcAngle));
      translate(width / 2, height / 2);
      fill(255)
      rotate(a);
      rect(-75, 0 , 150, 5, 100);
      fill(204,0,1)
      rect(-75, 0 , 140, 1, 100);
      pop()
    }
  }

  this.makeSecondHand = function(t){
    if(this.display){
      push()
      calcAngle = (t*360)+90
      a = atan2(sin(calcAngle),cos(calcAngle));
      translate(width / 2, height / 2);
      fill(255)
      rotate(a);
      rect(-90, 0 , 190, 2, 100);
      pop()
    }
  }

  this.makeMillisecondHand = function(t){

  }

  this.drawClockBorder = function(){
    stroke(255)
    strokeWeight(4)
    fill(0,0,0,0)
    circle(width/2,height/2,400)
    
    strokeWeight(1)
    circle(width/2,height/2,390)
  }
  
  this.drawCenterCircle = function(){
    if(this.display){
      strokeWeight(0)
      fill(204,0,1)
      circle(width/2,height/2,8)
    }
  }

  this.makeClockText = function(){
    strokeWeight(0)
    textSize(20);
    fill(255);
    text('12', width/2, 30);
    text('3', width - 30, height/2);
    text('6', width/2, height - 30);
    text('9', 30, height/2);
  }

}