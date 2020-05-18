'use strict';
var audioPlayer = document.getElementById('soundtrack');

function playAudio(){
  audioPlayer.play();
}

function pauseAudio(){
  audioPlayer.pause();
}

var dpi = window.devicePixelRatio;

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var fish = document.getElementById('fish');
var fishFlip = document.getElementById('fishFlip');
ctx.imageSmoothingEnabled = false;
ctx.imageSmoothingQuality = 'high';
var fH = fish.height;
var fW = fish.width;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = Math.random();
var dy = -(Math.random() / 2);
var ballRadius = 20;
var count = 0;
var maybe = ()=>Math.floor(Math.random()*2);
function fix_dpi() {
  var style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
  var style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
  canvas.setAttribute('height', style_height * dpi);
  canvas.setAttribute('width', style_width * dpi);
}
fix_dpi();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawBall();
  if(Math.sign(dx)===1){
    ctx.drawImage(fishFlip,0,0,fW,fH,x,y,fW/2,fH/2);
  }else{
    ctx.drawImage(fish,0,0,fW,fH,x,y,fW/2,fH/2);
  }
  x += dx;
  y += dy;
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  count++;
  if(count>1000){
    count = 0;
    if(maybe()>0){
      dx = Math.random();
      dy = Math.random() / 2;
    } else{
      dx = -(Math.random());
      dy = -(Math.random() / 2);
    }
  }
}
setInterval(draw,20);





