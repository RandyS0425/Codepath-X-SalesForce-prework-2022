//Global const
const clueHoldTime = 1000; 
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

// Global Variables
var pattern = [2,2,4,3,2,1,2,4];
var progress = 0;
var gamePlaying = false; 
var tonePlaying = false;
var volume = 0.5; 

function startGame() {
  progress =0;
  gamePlaying = true;
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");
  
}

function stopGame() {
  gamePlaying = false; 
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("startBtn").classList.add("hidden");
}

//  Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
  stopTone()
  },len)
}

function startTone (btn) {
  if (!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.25)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton (btn) {
  document.getElementById("button" + btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single cue: " + pattern[i] + "in" + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i])
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}



