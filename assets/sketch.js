function setup() {
  var canvas = createCanvas(500, 500);
  var div = document.getElementById('clock')
  canvas.parent(div)
  window.clock = new Clock();
  
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  imageMode(CENTER)
}

function draw() {
  clock.drawBG();
  clock.makeBackground()
  clock.makeMillisecondHand(calcMilli())
  clock.makeSecondHand(calcSec())
  clock.makeMinuteHand(calcMin())
  clock.makeHourHand(calcHour())
  clock.drawCenterCircle()
}

function calcHour(){  
  h = (new Date()).getHours();
  h = (h > 12)? h-12 : h
  h = h + calcMin();
  return h/12
}

function calcMin(){  
  m = (new Date()).getMinutes() + calcSec();
  return m/60
}

function calcSec(){  
  s = (new Date()).getSeconds() + calcMilli()
  return (s/60)
}

function calcMilli(){  
  m = (new Date()).getMilliseconds();
  return m/1000
}
