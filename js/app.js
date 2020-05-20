'use strict';

var canvas = document.getElementById('myCanvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
ctx.imageSmoothingQuality = 'high';
var blue = document.getElementById('blue');
var blueFlip = document.getElementById('blueFlip');
var spotted = document.getElementById('spotted');
var spottedFlip = document.getElementById('spottedFlip');
var red = document.getElementById('red');
var redFlip = document.getElementById('redFlip');
var yellow = document.getElementById('yellow');
var yellowFlip = document.getElementById('yellowFlip');
var purple = document.getElementById('purple');
var purpleFlip = document.getElementById('purpleFlip');
var fH = blue.height;
var fW = blue.width;
var x = canvas.width/2;
var y = canvas.height/2;
var x1 = canvas.width/3;
var y1 = canvas.height/3;
var x2 = canvas.width/4;
var y2 = canvas.height/4;
var x3 = canvas.width/5;
var y3 = canvas.height/5;
var x4 = canvas.width/6;
var y4 = canvas.height/6;
var ballRadius = 10;
var test = true;
var test1 = true;
var test2 = true;
var test3 = true;
var test4 = true;
var choices = [[true,false,false,false,false]];
var fishSwitch = false;
/////////////////////////////////////////////////////Draws each fish every 20ms/////////////////////////////////////////////////////////
var count = 0;
var dx = Math.random();
var dy = -(Math.random());
var dx1 = -(Math.random());
var dy1 = Math.random();
var dx2 = Math.random();
var dy2 = -(Math.random());
var dx3 = -(Math.random());
var dy3 = Math.random();
var dx4 = Math.random();
var dy4 = Math.random();
////////////////////////////////// maybe function returns 1 or 0///////////
var maybe = ()=>Math.floor(Math.random()*2);
////runs every 20 ms////

function makeFish(redFish, blueFish, spotFish, yellowFish, purpleFish){
  debugger;
  ctx.clearRect(0, 0, canvas.width, canvas.height);///clears canvas to start
  if(blueFish){
    if(Math.sign(dx)===1){// returns 1 or -1
      ctx.drawImage(blue,0,0,fW,fH,x,y,fW/2,fH/2);
    }else{
      ctx.drawImage(blueFlip,0,0,fW,fH,x,y,fW/2,fH/2);
    }
    x += dx;
    y += dy;
    /// hitbox on fish
    if(x + dx > canvas.width-300 || x + dx < 0) {
      dx = -dx;
    }
    if(y + dy > (canvas.height/100) *55 || y + dy < -150) {
      dy = -dy;
    }
  }
  if(spotFish){
    if(Math.sign(dx1)===1){
      ctx.drawImage(spotted,0,0,fW,fH,x1,y1,fW/2,fH/2);
    }else{
      ctx.drawImage(spottedFlip,0,0,fW,fH,x1,y1,fW/2,fH/2);
    }
    x1 += dx1;
    y1 += dy1;
    if(x1 + dx1 > canvas.width-300 || x1 + dx1 < 0) {
      dx1 = -dx1;
    }
    if(y1 + dy1 > (canvas.height/100) *55 || y1 + dy1 < -150) {
      dy1 = -dy1;
    }
  }
  if(redFish){
    if(Math.sign(dx2)===1){
      ctx.drawImage(red,0,0,fW,fH,x2,y2,fW/2,fH/2);
    }else{
      ctx.drawImage(redFlip,0,0,fW,fH,x2,y2,fW/2,fH/2);
    }
    x2 += dx2;
    y2 += dy2;
    if(x2 + dx2 > canvas.width-300 || x2 + dx2 < 0) {
      dx2 = -dx2;
    }
    if(y2 + dy2 > (canvas.height/100) *55 || y2 + dy2 < -150) {
      dy2 = -dy2;
    }
  }
  if(yellowFish){
    if(Math.sign(dx3)===1){
      ctx.drawImage(yellow,0,0,fW,fH,x3,y3,fW/2,fH/2);
    }else{
      ctx.drawImage(yellowFlip,0,0,fW,fH,x3,y3,fW/2,fH/2);
    }
    x3 += dx3;
    y3 += dy3;
    if(x3 + dx3 > canvas.width-300 || x3 + dx3 < 0) {
      dx3 = -dx3;
    }
    if(y3 + dy3 > (canvas.height/100) *55 || y3 + dy3 < -150) {
      dy3 = -dy3;
    }
  }
  if(purpleFish){
    if(Math.sign(dx4)===1){
      ctx.drawImage(purple,0,0,fW,fH,x4,y4,fW/2,fH/2);
    }else{
      ctx.drawImage(purpleFlip,0,0,fW,fH,x4,y4,fW/2,fH/2);
    }
    x4 += dx4;
    y4 += dy4;
    if(x4 + dx4 > canvas.width-300 || x4 + dx4 < 0) {
      dx4 = -dx4;
    }
    if(y4 + dy4 > (canvas.height/100) *55 || y4 + dy4 < -150) {
      dy4 = -dy4;
    }
  }
  count++;
  if(count>5000){
    count = 0;
    if(maybe()>0){
      dx = Math.random();
      dy = -(Math.random()) / 2;
      dx1 = Math.random();
      dy1 = -(Math.random()) / 2;
      dx2 = Math.random();
      dy2 = -(Math.random()) / 2;
      dx3 = Math.random();
      dy3 = -(Math.random()) / 2;
      dx4 = Math.random();
      dy4 = -(Math.random()) / 2;
    } else{
      dx = -(Math.random());
      dy = Math.random() / 2;
      dx1 = -(Math.random());
      dy1 = Math.random() / 2;
      dx2 = -(Math.random());
      dy2 = Math.random() / 2;
      dx3 = -(Math.random());
      dy3 = Math.random() / 2;
      dx4 = -(Math.random());
      dy4 = Math.random() / 2;
    }
  }
  requestAnimationFrame(makeFish(redFish, blueFish, spotFish, yellowFish, purpleFish));
}




canvas.addEventListener('click', function(){
  console.log(event);
  ctx.beginPath();
  ctx.rect(event.clientX,event.clientY,10,10);
  ctx.fillStyle = '#000000';
  ctx.fill();
  ctx.closePath();
});


var addFish = document.getElementById('add-fish');
addFish.addEventListener('submit', function(){
  choices = [];
  event.preventDefault();
  var blueFish = event.target[0].checked;
  var spottedFish = event.target[1].checked;
  var redFish = event.target[2].checked;
  var yellowFish = event.target[3].checked;
  var purpleFish = event.target[4].checked;
  choices.push([blueFish, spottedFish, redFish, yellowFish, purpleFish]);

});

var modal = document.getElementById('modal');

var span = document.getElementById('close');
span.addEventListener('click', closeModal );
var rock2 = document.getElementById('rock2');
rock2.addEventListener('click', openModal);

function closeModal(){
  // display to none
  modal.style.display = 'none';
  blurContent.removeAttribute('class', 'blur');
  fishSwitch = true;
  window.requestAnimationFrame(makeFish(choices[0][0], choices[0][1], choices[0][2], choices[0][3], choices[0][4]),1000);
}
function openModal(){
  modal.style.display = 'block';
  blurContent.setAttribute('class', 'blur');
}
var blurContent = document.getElementById ('blur');

span.onclick = function() {
  modal.style.display = 'none';
};


if(!localStorage.getItem('userFish')){
  window.requestAnimationFrame(makeFish(choices[0][0], choices[0][1], choices[0][2], choices[0][3], choices[0][4]),1000);
  openModal();
}




/////////////////////////////////HELPER//////////////////////////////////////



