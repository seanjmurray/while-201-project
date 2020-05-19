'use strict';

function colorProfile(){
  var currentTime = new Date().getHours();
  if (6 <= currentTime && currentTime < 11){
    document.body.style.backgroundColor = '#00caff';
    document.body.style.backgroundImage = 'radial-gradient(circle at top right, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%';
  }
  if (11 <= currentTime && currentTime < 16){
    document.body.style.background = '#00b4ff';
    document.body.style.backgroundImage = 'radial-gradient(circle at top, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%';
  }
  if (16 <= currentTime && currentTime < 21){
    document.body.style.backgroundColor = '#0096d5';
    document.body.style.backgroundImage = 'radial-gradient(circle at top left, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%';
  }
  if (21 <= currentTime && currentTime < 6){
    document.body.style.backgroundColor = '#24222f';
    document.body.style.backgroundImage = 'radial-gradient(circle at top, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%';
  }
}

colorProfile();

