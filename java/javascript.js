console.log(questions.length);
console.log(questions[1].c);


var varCount = 60;
var qCount = 0;
var clockStarted = false;
var numberOfQuestions = questions.length;
var answerP = document.createElement("p");

// determine the users answer to the questiono.
function showAnswer(event) {
    console.log(event.target);
    // questions.findIndex(``)
}

// get the questions and answers from the object
function getQuestions() {
    console.log(qCount + " qCount");
    var dataAnswer = questions[qCount].ans;

    theQuestion.textContent = questions[qCount].q;
    answerP = document.createElement("p");
    answerP.innerHTML = '<button  type="button" class="btn btn-primary btn-sm" data-index="a" data-answer="' + dataAnswer + '"> ' + questions[qCount].a + ' </button>';
    answer.append(answerP);
    answerP = document.createElement("p");
    answerP.innerHTML = '<button  type="button" class="btn btn-primary btn-sm" data-index="b" data-answer="' + dataAnswer + '"> ' + questions[qCount].b + ' </button>';
    answer.append(answerP);
    answerP = document.createElement("p");
    answerP.innerHTML = '<button  type="button" class="btn btn-primary btn-sm" data-index="c" data-answer="' + dataAnswer + '"> ' + questions[qCount].c + ' </button>';
    answer.append(answerP);
    console.log(qCount + " qCount");
    qCount++;
}

function startTheClock() {
    getQuestions();
    var startInterval = setInterval(function (event) {
        timeRemaining.textContent = varCount;
        varCount--;
        if (varCount < 0) {
            clearInterval(startInterval);
        }
    }, 1000);
    clockStarted = false;
    varCount = 60;
    startButton.removeEventListener("click", startTheClock);
}

startButton.addEventListener("click", startTheClock);
theAnswer.addEventListener("click", function (event) {
    showAnswer(event);
}
);