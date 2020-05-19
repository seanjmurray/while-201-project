'use strict';
var audioPlayer = document.getElementById('soundtrack');
var audioButton = document.getElementById('audio');
var bubblesPlayer = document.getElementById('bubbleSounds');
var bubbleButton = document.getElementById('bubbles');

audioButton.addEventListener('click', function(){
  if(audioPlayer.paused){
    audioPlayer.play();
    audioButton.innerHTML = 'Pause Music';
  } else {
    audioPlayer.pause();
    audioButton.innerHTML = 'Music';
  }
});

bubbleButton.addEventListener('click', function(){
  if(bubblesPlayer.paused){
    bubblesPlayer.play();
    bubbleButton.innerHTML = 'Pause Bubbles';
  } else {
    bubblesPlayer.pause();
    bubbleButton.innerHTML = 'Bubbles';
  }
});
