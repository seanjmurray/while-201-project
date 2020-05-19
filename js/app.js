'use strict';
var audioPlayer = document.getElementById('soundtrack');

function playAudio(){
  audioPlayer.play();
}

function pauseAudio(){
  audioPlayer.pause();
}
var fishies = [];
var canvas = document.getElementById('myCanvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
ctx.imageSmoothingQuality = 'high';
var fish = document.getElementById('fish');
var fishFlip = document.getElementById('flipFish');
var fish1 = document.getElementById('fish1');
var fishFlip1 = document.getElementById('flipFish1');
var fH = fish.height;
var fW = fish.width;
var x = canvas.width/2;
var y = canvas.height-100;
var x1 = canvas.width/3;
var y1 = canvas.height-400;
var ballRadius = 10;
var test = true;
var test1 = true;

function draw(){
  var count = 0;
  var dx = Math.random();
  var dy = -(Math.random());
  var dx1 = -(Math.random());
  var dy1 = Math.random();
  var maybe = ()=>Math.floor(Math.random()*2);
  setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(test){
      if(Math.sign(dx)===1){
        ctx.drawImage(fishFlip,0,0,fW,fH,x,y,fW/2,fH/2);
      }else{
        ctx.drawImage(fish,0,0,fW,fH,x,y,fW/2,fH/2);
      }
      x += dx;
      y += dy;
      if(x + dx > canvas.width-50 || x + dx < 50) {
        dx = -dx;
      }
      if(y + dy > canvas.height-50 || y + dy < 50) {
        dy = -dy;
      }
    }
    if(test1){
      if(Math.sign(dx1)===1){
        ctx.drawImage(fishFlip1,0,0,fW,fH,x1,y1,fW/2,fH/2);
      }else{
        ctx.drawImage(fish1,0,0,fW,fH,x1,y1,fW/2,fH/2);
      }
      x1 += dx1;
      y1 += dy1;
      if(x1 + dx1 > canvas.width-50 || x1 + dx1 < 50) {
        dx1 = -dx1;
      }
      if(y1 + dy1 > canvas.height-50 || y1 + dy1 < 50) {
        dy1 = -dy1;
      }
    }
    console.log('dx',dx,'dy',dy,'dx1',dx1,'dy1',dy1);
    console.log(count);
    count++;
    if(count>1000){
      count = 0;
      if(maybe()>0){
        dx = Math.random();
        dy = Math.random() / 2;
        dx1 = Math.random();
        dy1 = Math.random() / 2;
      } else{
        dx = -(Math.random());
        dy = -(Math.random() / 2);
        dx1 = -(Math.random());
        dy1 = -(Math.random() / 2);
      }
    }
  },20);
}

canvas.addEventListener('click', function(){
  console.log(event);
  ctx.beginPath();
  ctx.rect(event.clientX,event.clientY,10,10);
  ctx.fillStyle = '#000000';
  ctx.fill();
  ctx.closePath();
});





/////////////////////////////////HELPER//////////////////////////////////////



