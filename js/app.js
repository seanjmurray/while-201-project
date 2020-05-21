'use strict';

var canvas = document.getElementById('myCanvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');
var addFish = document.getElementById('add-fish');
ctx.imageSmoothingEnabled = false;
ctx.imageSmoothingQuality = 'high';
var modal = document.getElementById('modal');
var blurContent = document.getElementById('blur');
var rock2 = document.getElementById('rock2');
var span = document.getElementById('close');
var andChips=[];
var imgArray =[
  document.getElementById('blue'),
  document.getElementById('spotted'),
  document.getElementById('red'),
  document.getElementById('yellow'),
  document.getElementById('purple')
];
var imgFlipArray = [
  document.getElementById('blueFlip'),
  document.getElementById('spottedFlip'),
  document.getElementById('redFlip'),
  document.getElementById('yellowFlip'),
  document.getElementById('purpleFlip')
];

var fH = blue.height;
var fW = blue.width;

var xArray = [
  canvas.width / 2,
  canvas.width / 3,
  canvas.width / 4,
  canvas.width / 5,
  canvas.width / 6
];
var yArray = [
  canvas.height / 2,
  canvas.height / 3,
  canvas.height / 4,
  canvas.height / 5,
  canvas.height / 6
];

var choices = [
  [true, false, false, false, false]
];
var count = 0;

var dxArray = [
  Math.random(),
  -(Math.random()),
  Math.random(),
  -(Math.random()),
  Math.random()
];

var dyArray = [
  -(Math.random()),
  Math.random(),
  -(Math.random()),
  Math.random(),
  Math.random()
];

var myReq;

function FishFrier(img,imgFlip,x,y,dx,dy){
  this.img=img;
  this.imgFlip=imgFlip;
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  andChips.push(this);
}
function friday(){
  for(var i=0;i<imgArray.length;i++){
    new FishFrier(imgArray[i],imgFlipArray[i],xArray[i],yArray[i],dxArray[i],dyArray[i]);
  }
}
friday();


////////////////////////////////// maybe function returns 1 or 0///////////
var maybe = () => Math.floor(Math.random() * 2);

function makeFish(obj,arrayIndex) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ///clears canvas to start
  for(var i=0;i<obj.length;i++){
    if (arrayIndex[i]) {
      if (Math.sign(obj[i].dx) === 1) { // returns 1 or -1
        ctx.drawImage(obj[i].img, 0, 0, fW, fH, obj[i].x, obj[i].y, fW / 2, fH / 2);
      } else {
        ctx.drawImage(obj[i].imgFlip, 0, 0, fW, fH, obj[i].x, obj[i].y, fW / 2, fH / 2);
      }
      obj[i].x += obj[i].dx;
      obj[i].y += obj[i].dy;
      /// hitbox on fish
      if (obj[i].x + obj[i].dx > canvas.width - 300 || obj[i].x + obj[i].dx < 0) {
        obj[i].dx = -obj[i].dx;
      }
      if (obj[i].y + obj[i].dy > (canvas.height / 100) * 55 || obj[i].y + obj[i].dy < -150) {
        obj[i].dy = -obj[i].dy;
      }
    }
    if (count > 5000) {
      count = 0;
      if (maybe() > 0) {
        obj[i].dx = Math.random();
        obj[i].dy = -(Math.random()) / 2;
      } else {
        obj[i].dx = -(Math.random());
        obj[i].dy = Math.random() / 2;
      }
    }
  }
  count++;
  myReq = requestAnimationFrame(draw);
}

function draw() {
  makeFish(andChips,choices[0]);
}

var finder;
function followMe(){
  finder = [event.clientY-175,event.clientX];
  canvas.removeEventListener('click',followMe);
  fishFinder(andChips,choices[0]);
  setTimeout(addEvent,3000);
}

function addEvent(){
  canvas.addEventListener('click', followMe);
}

addEvent();

var caught;
function fishFinder(obj,arrayIndex) {
  var count = 0;
  caught = setInterval(function(){
    window.cancelAnimationFrame(myReq);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i=0;i<obj.length;i++){
      if (arrayIndex[i]) {
        var dist = Math.sqrt(Math.pow(obj[i].x-finder[1],2)+Math.pow(obj[i].y-finder[0],2));
        obj[i].x += ((finder[1]-obj[i].x)/dist);
        obj[i].y += ((finder[0]-obj[i].y)/dist);
        if (Math.sign(finder[1]-obj[i].x) === 1) { // returns 1 or -1
          ctx.drawImage(obj[i].img, 0, 0, fW, fH, obj[i].x, obj[i].y, fW / 2, fH / 2);
        } else {
          ctx.drawImage(obj[i].imgFlip, 0, 0, fW, fH, obj[i].x, obj[i].y, fW / 2, fH / 2);
        }
        /// hitbox on fish
        if (obj[i].x + obj[i].dx > canvas.width - 300 || obj[i].x + obj[i].dx < 0) {
          obj[i].dx = -obj[i].dx;
        }
        if (obj[i].y + obj[i].dy > (canvas.height / 100) * 55 || obj[i].y + obj[i].dy < -150) {
          obj[i].dy = -obj[i].dy;
        }
      }
      count++;
      if(count>750){
        clearInterval(caught);
        draw();
        return;
      }
    }},15);
}



addFish.addEventListener('submit', function () {
  choices = [];
  event.preventDefault();
  var blueFish = event.target[0].checked;
  var spottedFish = event.target[1].checked;
  var redFish = event.target[2].checked;
  var yellowFish = event.target[3].checked;
  var purpleFish = event.target[4].checked;
  choices.push([blueFish,spottedFish,redFish, yellowFish, purpleFish]);
  var stringFish = JSON.stringify(choices);
  localStorage.setItem('userFish', stringFish);
  window.cancelAnimationFrame(myReq);
  window.requestAnimationFrame(draw);
  closeModal();
});


span.addEventListener('click', closeModal);
rock2.addEventListener('click', openModal);

function openModal() {
  modal.style.display = 'block';
  blurContent.setAttribute('class', 'blur');
}
function closeModal() {
  modal.style.display = 'none';
  blurContent.removeAttribute('class', 'blur');
}


if (!localStorage.getItem('userFish')) {
  openModal();
} else {
  var frozenFish = localStorage.getItem('userFish');
  frozenFish = JSON.parse(frozenFish);
  choices = frozenFish;
  window.requestAnimationFrame(draw);
}



/////////////////////////////////HELPER//////////////////////////////////////