function Clock(){
  
  this.display = true

  this.drawBG = function(){
    document.body.style.background = 'rgb(0,24,52)'
    background(0,24,52);
  }

  this.makeBackground = function(){
    if(this.display){
      this.makeBackgroundLines()
      this.makeDashedLines()
      this.drawClockBorder()
      this.makeClockText()
    }
  }

  this.makeHourHand = function(t){
    this.makeHand(t,9)
  }

  this.makeMinuteHand = function(t){
    this.makeHand(t,6)
  }

  this.makeSecondHand = function(t){
    this.makeHand(t,3)
  }

  this.makeMillisecondHand = function(t){
    if(this.display){
      push()
      calcAngle = (t*360)+90
      ang = atan2(sin(calcAngle),cos(calcAngle));
      translate(width / 2, height / 2);
      fill(43,82,179)
      rotate(ang);
      rect(-170, 0, 20, 2);
      if(t%9 == 0){
        fill(133,209,138)
        triangle(-183, -5, -183, 5, -194, 0);
      }
      pop()
    }
  }

  this.makeHand = function(t,w){
    if(this.display){
      push()
      calcAngle = (t*360)+90
      a = atan2(sin(calcAngle),cos(calcAngle));
      translate(width / 2, height / 2);
      fill(255,154,0)
      rotate(a);
      rect(-80, 0, 100, w);
      fill(255,89,13)
      rect(-160, 0, 50, 1);
      fill(255,89,13)
      triangle(-183, -5, -183, 5, -194, 0);
      pop()
    }
  }

  this.makeBackgroundLines = function(a = 0){
    if(a > 36){
      return;
    }
    push()
    calcAngle = (a*10)+90
    ang = atan2(sin(calcAngle),cos(calcAngle));
    translate(width / 2, height / 2);
    fill(1,39,88)
    rotate(ang);
    rect(-105, 0, 150, 2);
    if(a%9 == 0){
      fill(133,209,138)
      triangle(-183, -5, -183, 5, -194, 0);
    }
    pop()
    this.makeBackgroundLines(++a)
  }

  this.makeDashedLines = function(a = 30){
    if(a > 120){
      return;
    }
    push()
    calcAngle = (a*3)+90
    ang = atan2(sin(calcAngle),cos(calcAngle));
    translate(width / 2, height / 2);
    fill(43,82,179)
    rotate(ang);
    rect(-125, 0, 1, 3);
    pop()
    this.makeDashedLines(++a)
  }

  this.drawClockBorder = function(){
    stroke(52,146,229)
    strokeWeight(2)
    fill(0,0,0,0)
    circle(width/2,height/2,400)
  }
  
  this.drawCenterCircle = function(){
    if(this.display){
      stroke(52,146,229)
      strokeWeight(0)
      fill(255,208,14)
      circle(width/2,height/2,50)
    }
  }

  this.makeClockText = function(){
    strokeWeight(0)
    textSize(20);
    fill(52,146,229);
    text('12', width/2, 30);
    text('3', width - 30, height/2);
    text('6', width/2, height - 30);
    text('9', 30, height/2);
  }

}