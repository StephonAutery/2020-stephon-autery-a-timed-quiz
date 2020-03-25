// --------------------------------------------
// set all pointers
// --------------------------------------------
var timeRemaining = document.getElementById("time-remaining");
var theQuestion = document.getElementById("question");
var theAnswer = document.getElementById("answer");
var theResult = document.getElementById("result");
var right = document.getElementById("right");
var wrong = document.getElementById("wrong");
var qRemain = document.getElementById("remaining");
var startButton = document.getElementById("start");
var theMessage = document.getElementById("message");
var answerP = document.createElement("p");
var qCountDown = questions.length;
var varCount = 50;
var qCount = 0;
var rightFoot = 0;
var wrongFoot = 0;
var yourScore = 0;
var clockStarted = false;