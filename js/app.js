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
var fish = new Image();
fish.src = 'img/fish.png';
var fishFlip = new Image();
fishFlip.src = 'img/fishflip.png';
ctx.imageSmoothingEnabled = false;
ctx.imageSmoothingQuality = 'high';
var fH = fish.height;
var fW = fish.width;
var x = canvas.width/2;
var y = canvas.height-100;
var ballRadius = 10;

var NewFish = function(img,flipImg){
  this.dx= Math.random();
  this.dy= -(Math.random());
  this.img=img;
  this.flipImg=flipImg;
  this.count=0;
  fishies.push(this);
};
NewFish.prototype.maybe = ()=>Math.floor(Math.random()*2);

NewFish.prototype.draw = function(){
  setInterval(function(){
    debugger;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(Math.sign(this.dx)===1){
      ctx.drawImage(this.flipImg,0,0,fW,fH,x,y,fW/2,fH/2);
    }else{
      ctx.drawImage(this.img,0,0,fW,fH,x,y,fW/2,fH/2);
    }
    console.log(this.count);
    x += this.dx;
    y += this.dy;
    if(x + this.dx > canvas.width-ballRadius || x + this.dx < ballRadius) {
      this.dx = -this.dx;
    }
    if(y + this.dy > canvas.height-ballRadius || y + this.dy < ballRadius) {
      this.dy = -this.dy;
    }
    this.count++;
    if(this.count>10000){
      this.count = 0;
      if(this.maybe()>0){
        this.dx = Math.random();
        this.dy = Math.random() / 2;
      } else{
        this.dx = -(Math.random());
        this.dy = -(Math.random() / 2);
      }
    }
  },20);
};
var test = new NewFish(fish,fishFlip);







