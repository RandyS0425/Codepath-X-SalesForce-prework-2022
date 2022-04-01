//Global const

const len = 4;
// Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false; 
var tonePlaying = false;
var volume = 0.5; 
var reset = false;
var guessCounter = 0; 
var volume = 0.5;
var currScore = 0; 
var highScore = 0;
var timeGiven = 20; 
var remainingTime =0;
var timer; 
var clueHoldTime = 1000; 
var cluePauseTime = 333;
var nextClueWaitTime = 1000;
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
updateMessage();


 document.getElementById("slow").addEventListener("click", function (){
 speed("slow");
 document.getElementById("currentSpeed").innerHTML = "Current Speed: Slow "
 });
 document.getElementById("fast").addEventListener("click", function (){
 speed("fast");
 document.getElementById("currentSpeed").innerHTML = "Current Speed: Fast"
 });
 document.getElementById("ExtraFast").addEventListener("click", function (){
 speed("ExtraFast");
 document.getElementById("currentSpeed").innerHTML = "Current Speed: Extra Fast "
 });

 function generatePattern() {
    for (let j = 0; j < len; j++) {
        pattern[j] = Math.ceil(Math.random() * 6);
   }
 }

 function startGame() {
     progress = 0;
     gamePlaying = true;
     currScore = 0; 
     generatePattern();
     document.getElementById("startBtn").classList.add("hidden");
     document.getElementById("stopBtn").classList.remove("hidden");
     document.getElementById("volumeSlider").addEventListener("change",function() {
     volume = document.getElementById("volumeSlider").value/100.0;
      console.log("Volume Updated to " + volume); 
   }, false);
      playClueSequence();
 }

function stopGame() {
    gamePlaying = false; 
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
       if (currScore > highScore) {
          highScore = currScore;
          updateMessage();
     }
      clearTimer();
  }

 function loseGame(){
    stopGame();
    alert("Game Over. You lost.");
 }

 function winGame(){
   stopGame();
   alert("Game over. You won");
}

 const freqMap = {
   1: 261.6,
   2: 329.6,
   3: 392,
   4: 466.2, 
   5: 392, 
   6: 440
 };

 function playTone(btn,len){ 
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  context.resume()
  tonePlaying = true;
  setTimeout(function(){
  stopTone();
   },len);
}

function startTone (btn) {
  if (!tonePlaying){
      context.resume()
      o.frequency.value = freqMap[btn];
      g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.25);
      context.resume()
      tonePlaying = true;
     }
}

 function stopTone(){
   g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
   tonePlaying = false;
}
 function lightButton(btn) {
   document.getElementById("button" + btn).classList.add("lit");
}

 function clearButton(btn) {
    document.getElementById("button" + btn).classList.remove("lit");
}

 function updateMessage() {
      document.getElementById("message1").innerHTML = "Press Buttons in the same pattern played to win the game. \nCurrent Score: " 
      + currScore + " | High Score: "+ highScore;
}

 function playSingleClue(btn) {
   if (gamePlaying) {
      lightButton(btn);
      playTone(btn,clueHoldTime);
      setTimeout(clearButton,clueHoldTime,btn);
  }
}

function clearTimer() {
   clearTimeout(timer);
   remainingTime = 0;
   document.getElementById("timer").innerHTML = "Remaining Time: " + remainingTime;
}
  
 function updateTimer() {
     if (remainingTime >= 0) {
         document.getElementById("timer").innerHTML = "Time remaining: " + remainingTime;
         remainingTime--;
     } else {
       loseGame();
     }
 }

function playClueSequence(){
   guessCounter = 0;
   context.resume();
   clearTimeout(timer);3
   reset = false;
   let delay = nextClueWaitTime;
   clearTimeout(timer);
   document.getElementById("timer").innerHTML = "Time remaining: " + remainingTime;
     for (let i = 0; i <= progress; i++) {
        console.log("play single cue: " + pattern[i] + "in" + delay + "ms");
        setTimeout(playSingleClue,delay,pattern[i]);
        delay += clueHoldTime
        delay += cluePauseTime;
   }
        remainingTime = timeGiven;
        timer = setTimeout(function tick () {
    if(gamePlaying) {
       updateTimer();
       timer = setTimeout(tick, 1000);
       }
     }, delay);
  }

function guess(btn){
   console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
          winGame();
      }else{
          progress++;
          currScore = progress;
          updateMessage();
          playClueSequence();
      }
      
     }else{
       guessCounter++;
     }
     }else{
         loseGame();
     }
}
  
 function speed(fast) {
    switch(fast){
      case "slow": clueHoldTime = 1000;
                   nextClueWaitTime = 1000;
       break;
      case "fast": clueHoldTime = 500; 
                  nextClueWaitTime = 500;
      break;
    default: clueHoldTime = 200;
             nextClueWaitTime = 200;
  }
  
}


