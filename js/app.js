'use strict';
var audioPlayer = document.getElementById('soundtrack');

function playAudio(){
  audioPlayer.play();
}

function pauseAudio(){
  audioPlayer.pause();
}

playAudio();
pauseAudio();

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height-30;
var dx = Math.random();
var dy = -(Math.random() / 2);
var ballRadius = 10;
var count = 0;
var maybe = ()=>Math.floor(Math.random()*2);
function drawBall() {
  ctx.beginPath();
  ctx.rect(x, y, ballRadius,ballRadius);
  ctx.fillStyle = '#FF6600';
  ctx.fill();
  ctx.closePath();
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
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







