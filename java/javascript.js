var varCount = 60;
var qCountDown = questions.length;
var qCount = 0;
var rightFoot = 0;
var wrongFoot = 0;
var clockStarted = false;
var numberOfQuestions = questions.length;
var answerP = document.createElement("p");

console.log(clockStarted);
console.log(questions.length);
console.log(questions[1].c);

// put the next question on the screen
function nextQuestion() {
    console.log(qCountDown);
    theQuestion.textContent = "";
    theResult.textContent = "";
    qRemain.textContent = qCountDown;
    // found this on stack overflow
    while (theAnswer.firstChild) {
        theAnswer.removeChild(theAnswer.lastChild);
    }
    if (qCountDown > 0) {
        getQuestion();
    }
}

// determine the users answer to the question
function getAnswers(event) {
    console.log(event.target);
    var dataAnswer = event.target.getAttribute("data-answer")
    var dataChoice = event.target.getAttribute("data-choice");
    console.log(dataAnswer);
    if (dataChoice === dataAnswer || dataAnswer === "all") {
        theResult.textContent = "you are correct!";
        rightFoot++;
        varCount = varCount + 5;
        right.textContent = rightFoot;
        nextQuestion();
    } else {
        theResult.textContent = "incorrect!";
        wrongFoot++;
        varCount = varCount - 10;
        wrong.textContent = wrongFoot;
        nextQuestion();
    }

}

// get the questions and answers from the object
function getQuestion() {
    event.preventDefault;
    console.log(qCount + " qCount - qetQuestion - top");
    var dataAnswer = questions[qCount].ans;
    theQuestion.textContent = questions[qCount].q;
    answerP = document.createElement("p");
    answerP.id = "dump";
    answerP.innerHTML = '<button type="button" class="btn btn-primary btn-sm" data-choice="a" data-answer="' + dataAnswer + '"> ' + questions[qCount].a + ' </button>';
    theAnswer.append(answerP);
    answerP = document.createElement("p");
    answerP.id = "dump";
    answerP.innerHTML = '<button type="button" class="btn btn-primary btn-sm" data-choice="b" data-answer="' + dataAnswer + '"> ' + questions[qCount].b + ' </button>';
    theAnswer.append(answerP);
    answerP = document.createElement("p");
    answerP.id = "dump";
    answerP.innerHTML = '<button type="button" class="btn btn-primary btn-sm" data-choice="c" data-answer="' + dataAnswer + '"> ' + questions[qCount].c + ' </button>';
    theAnswer.append(answerP);
    console.log(qCount + " qCount - qetQuestion - bottom");
    qCount++;
    qCountDown--;
}

function startTheClock() {
    getQuestion();
    var startInterval = setInterval(function (event) {
        clockStarted = true;
        timeRemaining.textContent = varCount;
        varCount--;
        if (varCount < 0) {
            clearInterval(startInterval);
            clockStarted = false;
        }
    }, 1000);
    console.log("the clock? " + clockStarted);
    varCount = 60;
    startButton.removeEventListener("click", startTheClock);
}

startButton.addEventListener("click", startTheClock);
theAnswer.addEventListener("click", function (event) {
    getAnswers(event);
}
);