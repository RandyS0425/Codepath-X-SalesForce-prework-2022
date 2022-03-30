// Global Variables

var pattern = [2,2,4,3,2,1,2,4];
var progress = 0;
var gamePlaying = false; 
var tonePlaying = false;
var volume;

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

