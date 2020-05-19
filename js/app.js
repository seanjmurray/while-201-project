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
var x2 = canvas.width/4;
var y2 = canvas.height-200;
var x3 = canvas.width/5;
var y3 = canvas.height-500;
var ballRadius = 10;
var test = true;
var test1 = true;
var test2 = true;
var test3 = true;

function draw(){
  var count = 0;
  var dx = Math.random();
  var dy = -(Math.random());
  var dx1 = -(Math.random());
  var dy1 = Math.random();
  var dx2 = Math.random();
  var dy2 = -(Math.random());
  var dx3 = -(Math.random());
  var dy3 = Math.random();
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
    if(test2){
      if(Math.sign(dx2)===1){
        ctx.drawImage(fishFlip,0,0,fW,fH,x2,y2,fW/2,fH/2);
      }else{
        ctx.drawImage(fish,0,0,fW,fH,x2,y2,fW/2,fH/2);
      }
      x2 += dx2;
      y2 += dy2;
      if(x2 + dx2 > canvas.width-50 || x2 + dx2 < 50) {
        dx2 = -dx2;
      }
      if(y2 + dy2 > canvas.height-50 || y2 + dy2 < 50) {
        dy2 = -dy2;
      }
    }
    if(test3){
      if(Math.sign(dx3)===1){
        ctx.drawImage(fishFlip1,0,0,fW,fH,x3,y3,fW/2,fH/2);
      }else{
        ctx.drawImage(fish1,0,0,fW,fH,x3,y3,fW/2,fH/2);
      }
      x3 += dx3;
      y3 += dy3;
      if(x3 + dx3 > canvas.width-50 || x3 + dx3 < 50) {
        dx3 = -dx3;
      }
      if(y3 + dy3 > canvas.height-50 || y3 + dy3 < 50) {
        dy3 = -dy3;
      }
    }
    count++;
    if(count>10000){
      count = 0;
      if(maybe()>0){
        dx = Math.random();
        dy = Math.random() / 2;
        dx1 = Math.random();
        dy1 = Math.random() / 2;
        dx2 = Math.random();
        dy2 = Math.random() / 2;
        dx3 = Math.random();
        dy3 = Math.random() / 2;
      } else{
        dx = -(Math.random());
        dy = -(Math.random() / 2);
        dx1 = -(Math.random());
        dy1 = -(Math.random() / 2);
        dx2 = -(Math.random());
        dy2 = -(Math.random() / 2);
        dx3 = -(Math.random());
        dy3 = -(Math.random() / 2);
      }
    }
  },20);
}
setTimeout(draw,1000);

canvas.addEventListener('click', function(){
  console.log(event);
  ctx.beginPath();
  ctx.rect(event.clientX,event.clientY,10,10);
  ctx.fillStyle = '#000000';
  ctx.fill();
  ctx.closePath();
});





/////////////////////////////////HELPER//////////////////////////////////////



