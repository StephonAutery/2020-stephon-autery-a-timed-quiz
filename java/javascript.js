
// create the data objects
var questions = [
    {
        q: "in what year did the US civil war begin?",
        a: "1861",
        b: "1865",
        c: "2016",
        ans: "a"
    },
    {
        q: "what public office did Abraham Lincoln hold before becoming President?",
        a: "senator",
        b: "postal clerk",
        c: "recorder",
        ans: "a"
    },
    {
        q: "who is Luke's father?",
        a: "Darth Vader",
        b: "Anakin Skywakler",
        c: "Donald Trump",
        ans: "a"
    },
    {
        q: "what was the US slave population at the beginning of the US civil war?",
        a: "20,000",
        b: "5,000 but only in the south",
        c: "12 million",
        ans: "c"
    },
    {
        q: "which amendment to the constitution of the United States abolished slavery in the United States?",
        a: "the 2nd Amendment",
        b: "the 13th Amendment",
        c: "the 28th Amendment",
        ans: "b"
    },
    {
        q: "what is the pay gap between white men and women in the US",
        a: "latin women earn 58% of what white men earn",
        b: "black women earn 65% of what white men earn",
        c: "white women earn 82% of what white men earn",
        ans: "all"
    }
]

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
var clockStarted = false;
// --------------------------------------------

console.log(clockStarted);
console.log(questions.length);
console.log(questions[3].c);
console.log(" ------------ ");

function gameOver() {
    theQuestion.textContent = "";
    timeRemaining.textContent = "";
    theMessage.innerHTML = "<hr><h3>you're a winner, let's have Tacos!</h3>";
    theResult.innerHTML = '<hr><h4><p>right:&nbsp;' + rightFoot + '&nbsp;wrong:&nbsp;' + wrongFoot + '&nbsp;</p></h4>';
    console.log(rightFoot + " <- ritghtFoot");
    console.log(wrongFoot + " <- wrongFoot");
    qRemain.textContent = "";
    right.textContent = "";
    wrong.textContent = "";
    while (theAnswer.firstChild) {
        theAnswer.removeChild(theAnswer.lastChild);
    }
    varCount = 0;
    rightFoot = 0;
    wrongFoot = 0;
    varCount = 0;
    qCount = 0;
    qCountDown = questions.length;
    startButton.addEventListener("click", theClock);
}
// put the next question on the screen
function nextQuestion() {
    theQuestion.textContent = "";
    while (theAnswer.firstChild) {
        theAnswer.removeChild(theAnswer.lastChild);
    }
    getQuestion();
}

// determine the users answer to the question
function getAnswers(event) {
    console.log(event.target);
    var dataAnswer = event.target.getAttribute("data-answer")
    var dataChoice = event.target.getAttribute("data-choice");
    if (dataChoice === dataAnswer || dataAnswer === "all") {
        theResult.innerHTML = "<h3>you are correct!</h3>";
        qRemain.textContent = qCountDown;
        rightFoot++;
        right.textContent = rightFoot;
    } else {
        theResult.innerHTML = "<h3>incorrect!</h3>";
        qRemain.textContent = qCountDown;
        wrongFoot++;
        wrong.textContent = wrongFoot;
        varCount = varCount - 10;
    }
    qCount++;
    qCountDown--;
    if (qCountDown === 0) {
        qCount = 0;
        varCount = 0;
    }
    nextQuestion();
}

// get the questions and answers from the object
function getQuestion() {
    var dataAnswer = questions[qCount].ans;
    theQuestion.innerHTML = '<hr><h5><p>&nbsp;' + questions[qCount].q; + '&nbsp;</p></h5>'
    answerP = document.createElement("p");
    answerP.id = "dump";
    answerP.innerHTML = '<hr><button type="button" class="btn btn-primary btn-sm" data-choice="a" data-answer="' + dataAnswer + '"> ' + questions[qCount].a + ' </button>';
    theAnswer.append(answerP);
    answerP = document.createElement("p");
    answerP.id = "dump";
    answerP.innerHTML = '<button type="button" class="btn btn-primary btn-sm" data-choice="b" data-answer="' + dataAnswer + '"> ' + questions[qCount].b + ' </button>';
    theAnswer.append(answerP);
    answerP = document.createElement("p");
    answerP.id = "dump";
    answerP.innerHTML = '<button type="button" class="btn btn-primary btn-sm" data-choice="c" data-answer="' + dataAnswer + '"> ' + questions[qCount].c + ' </button>';
    theAnswer.append(answerP);
}

// start the clock and set variables
function theClock() {
    varCount = 50;
    theResult.textContent = "";
    theMessage.textContent = "";
    qCountDown = questions.length;
    clockStarted = true;
    getQuestion();
    var ticTok = setInterval(function (event) {
        timeRemaining.textContent = varCount;
        qRemain.textContent = qCountDown;
        console.log(varCount + " <- theClock");
        varCount--;
        if (varCount < 0) {
            clockStarted = false;
            clearInterval(ticTok);
            gameOver();
        }
    }, 1000);
    startButton.removeEventListener("click", theClock);
}

startButton.addEventListener("click", theClock);

theAnswer.addEventListener("click", function (event) {
    event.stopPropagation;
    getAnswers(event);
}
);