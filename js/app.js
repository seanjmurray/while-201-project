'use strict';

var canvas = document.getElementById('myCanvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');
var fish = new Image();
fish.src = './img/fish.png';
var fishFlip = new Image();
fishFlip.src = './img/fishflip.png';
ctx.imageSmoothingEnabled = false;
ctx.imageSmoothingQuality = 'high';
var fH = fish.height;
var fW = fish.width;
var x = canvas.width/2;
var y = canvas.height-100;
var dx = Math.random();
var dy = -(Math.random() / 2);
var ballRadius = 10;
var count = 0;
var maybe = ()=>Math.floor(Math.random()*2);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(!fish.complete || !fishFlip.complete){
    setTimeout(function(){
      draw();
    },50);
  }
  if(Math.sign(dx)===1){
    ctx.drawImage(fishFlip,0,0,fW,fH,x,y,fW/2,fH/2);
  }else{
    ctx.drawImage(fish,0,0,fW,fH,x,y,fW/2,fH/2);
  }
  console.log('here');
  x += dx;
  y += dy;
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  count++;
  if(count>10000){
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





