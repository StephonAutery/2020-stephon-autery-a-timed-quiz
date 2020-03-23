var theClock = 60;
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
console.log(" ------------ ");



function startTheClock() {
    // -------------

    // put the next question on the screen
    function nextQuestion() {
        theQuestion.textContent = "";
        theResult.textContent = "";
        qRemain.textContent = qCountDown;
        console.log(qCountDown + " <- qCountDown " + qCount + " <- qCount " + theClock + " <- theClock");
        while (theAnswer.firstChild) {
            theAnswer.removeChild(theAnswer.lastChild);
        }
        startGlobalInterval;
        clearInterval(startInterval);
        // if (rightFoot === questions.length && theClock > 0) {
        //     qCount = 0;
        //     theClock = 0;
        //     qCountDown = questions.length;
        //     theResult.textContent = "you win!";
        //     startButton.addEventListener("click", startTheClock);
        // }
        // else if (qCount < 0) {
        //     qCount = 0;
        //     theClock = 0;
        //     qCountDown = questions.length;
        //     theResult.textContent = "game over!";
        //     startButton.addEventListener("click", startTheClock);
        // }
    }

    // determine the users answer to the question
    function getAnswers(event) {
        event.preventDefault;
        console.log(event.target);
        // console.log(event.target);
        var dataAnswer = event.target.getAttribute("data-answer")
        var dataChoice = event.target.getAttribute("data-choice");
        if (dataChoice === dataAnswer || dataAnswer === "all") {
            theResult.textContent = "you are correct!";
            rightFoot++;
            right.textContent = rightFoot;
            console.log("correct");
            nextQuestion();
        } else {
            theResult.textContent = "incorrect!";
            wrongFoot++;
            theClock = theClock - 10;
            wrong.textContent = wrongFoot;
            console.log("incorrect");
            nextQuestion();
        }
        // if (qCountDown > 0) {
        //     getQuestion();
        // }
    }

    // get the questions and answers from the object
    function getQuestion() {
        event.preventDefault;
        // console.log(qCount + " qCount - qetQuestion - top");
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
        theAnswer.addEventListener("click", function (event) {
            event.preventDefault;
            getAnswers(event);
        });
        // console.log(qCount + " qCount - qetQuestion - bottom");
        qCount++;
        qCountDown--;
    }

    // -------------   

    getQuestion();
    var startInterval = setInterval(function (event) {
        clockStarted = true;
        timeRemaining.textContent = theClock;
        theClock--;
        if (theClock < 0) {
            clearInterval(startInterval);
            clockStarted = false;
        }
    }, 1000);
    theClock = 60;
    startButton.removeEventListener("click", startTheClock);
}
let i = 0;
var startGlobalInterval = this.setInterval(function (event){
    console.log(i);
    i++;
}, 1000);

startButton.addEventListener("click", startTheClock);
