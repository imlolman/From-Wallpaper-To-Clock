function Clock(){

  this.display = true
  this.img = loadImage('lefthorn.svg');

  this.drawBG = function(){
    document.body.style.background = 'rgb(31,61,87)'
    background(31,61,87);
    // image(this.img, 0, 0, 300, 200);
  }

  this.makeBackground = function(){
    if(this.display){
      this.drawClockBorder()
      this.drawClockAlarmToggle()
      this.makeClockLines()
    }
  }

  this.makeHourHand = function(t){
    if(this.display){
      push()
      calcAngle = (t*360)+90
      a = atan2(sin(calcAngle),cos(calcAngle));
      translate(width / 2, height / 2);
      fill(123,152,178)
      rotate(a);
      rect(-25, 0 , 50, 12, 100);
      pop()
    }
  }

  this.makeMinuteHand = function(t){
    if(this.display){
      push()
      calcAngle = (t*360)+90
      a = atan2(sin(calcAngle),cos(calcAngle));
      translate(width / 2, height / 2);
      fill(123,152,178)
      rotate(a);
      rect(-35, 0 , 70, 8, 100);
      pop()
    }
  }

  this.makeSecondHand = function(t){
    if(this.display){
      push()
      calcAngle = (t*360)+90
      a = atan2(sin(calcAngle),cos(calcAngle));
      translate(width / 2, height / 2);
      fill(123,152,178)
      rotate(a);
      rect(-40, 0 , 80, 4, 100);
      pop()
    }
  }

  this.makeMillisecondHand = function(t){

  }

  this.drawClockBorder = function(){
    image(this.img, 120, 150, 450, 360);
    push()
    scale(-1.0, 1.0)
    image(this.img, -width + 120, 150, -450, 360);
    pop()
    stroke(123,152,178)
    strokeWeight(25)
    fill(0,0,0,0)
    circle(width/2,height/2,250)
  }
  
  this.drawCenterCircle = function(){
    if(this.display){
      strokeWeight(0)
      fill(123,152,178)
      circle(width/2,height/2,40)
    }
  }

  this.makeClockLines = function(a = 0){
    if(a > 12){
      return;
    }
    push()
    calcAngle = (a*30)+90
    ang = atan2(sin(calcAngle),cos(calcAngle));
    translate(width / 2, height / 2);
    fill(123,152,178)
    rotate(ang);
    rect(-95, 0, 20, 10,2);
    if(a%3 == 0){
      rect(-95, 0, 25, 15,2);
    }
    pop()
    this.makeClockLines(++a)
  
  }

  this.drawClockAlarmToggle = function(){
    strokeWeight(0)
    fill(123,152,178)
    rect(width/2,80,50, 20, 20)
    rect(width/2,92,20, 30)
  }

}