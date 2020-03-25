console.log(clockStarted);
console.log(questions.length);
console.log(questions[3].c);
console.log(" ------------ ");

// --------------------------------------------
// end the game, reset ever
// --------------------------------------------
function gameOver() {
    if (rightFoot > wrongFoot) {
        theMessage.innerHTML = "<hr><h3>you're a winner, let's have Tacos!</h3>";
    } else {
        theMessage.innerHTML = "<hr><h3>better luck next time.</h3>"
    }
    $(".sometimes").hide();
    $("#save-your-score").show();
    theQuestion.textContent = "";
    timeRemaining.textContent = "";
    theResult.innerHTML = '<hr><p class="col-4">|&nbsp;right:&nbsp;' + rightFoot + '&nbsp;</p><p class="col-4">|&nbsp;wrong:&nbsp;' + wrongFoot + '&nbsp;</p>';
    qRemain.textContent = "";
    right.textContent = "";
    wrong.textContent = "";
    while (theAnswer.firstChild) {
        theAnswer.removeChild(theAnswer.lastChild);
    }
    yourScore = rightFoot;
    varCount = 0;
    rightFoot = 0;
    wrongFoot = 0;
    varCount = 0;
    qCount = 0;
    qCountDown = questions.length;
    startButton.addEventListener("click", theClock);
}
//  removes the current question from the screen
function nextQuestion() {
    theQuestion.textContent = ""; // empty the text string for the question
    while (theAnswer.firstChild) { // check to see if the div id=theAnswer still has kids
        theAnswer.removeChild(theAnswer.lastChild); // if there's a kid keep remove it
    }
    getQuestion(); // get the next question
}

// determine the users answer to the question
function getAnswers(event) {
    console.log(event.target);
    var dataAnswer = event.target.getAttribute("data-answer")
    var dataChoice = event.target.getAttribute("data-choice");
    if (dataChoice === dataAnswer || dataAnswer === "all") {
        theResult.innerHTML = "<h3>you are correct!</h3>";
        qRemain.innerHTML = '<class="col text-danger">' + qCountDown; +  '...';
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
    theQuestion.innerHTML = '<hr><h5><p>' + questions[qCount].q; + '&nbsp;</p></h5>'
    answerP = document.createElement("p");
    answerP.id = "dump";
    answerP.innerHTML = '<hr><button type="button" class="btn btn-primary btn-sm" data-choice="a" data-answer="' + dataAnswer + '"> ' + questions[qCount].a + ' </button>';
    theAnswer.append(answerP);
    answerP = document.createElement("p");
    answerP.id = "dump";
    answerP.innerHTML = '<button type="button" class="text-wrap btn btn-primary btn-sm" data-choice="b" data-answer="' + dataAnswer + '"> ' + questions[qCount].b + ' </button>';
    theAnswer.append(answerP);
    answerP = document.createElement("p");
    answerP.id = "dump";
    answerP.innerHTML = '<button type="button" class="btn btn-primary btn-sm" data-choice="c" data-answer="' + dataAnswer + '"> ' + questions[qCount].c + ' </button>';
    theAnswer.append(answerP);
}

// start the clock and set variables
function theClock() {
    varCount = 50;
    $(".sometimes").show();
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

// $("#myModal").on('hidden.bs.modal', function(event){
//     event.preventDefault();
//     console.log($("#initials").val());
//     console.log(localStorage.getItem(name));    
//     var initials = $("#initials").val();
//     localStorage.setItem("name", initials);

// });


$("#myModal").on('hidden.bs.modal', function (event) {
    event.preventDefault();
    $("#save-score").on("click", function (event) {
        var initials = $("#initials").val();
        localStorage.setItem(initials, yourScore);
    });
});

$("#myModal").on('hidden.bs.modal', function (event) {
    event.preventDefault();
    $("#clear-score").on("click", function (event) {
        console.log(event.target);
        localStorage.clear();
    });
});


$(".sometimes").hide();
$("#save-your-score").hide();

startButton.addEventListener("click", theClock);

theAnswer.addEventListener("click", function (event) {
    event.stopPropagation;
    getAnswers(event);
}
);