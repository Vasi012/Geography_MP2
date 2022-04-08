import {
    quizQuestionsDataBase
} from "../js/questionaire.js";

//game instructions help
var modal = document.getElementById("gameHelp");

//get the button that opens the modal
var btn = document.getElementById("gameInstructions");

//get span element that close the modal
var span = document.getElementsByClassName("close")[0];

/**
 * On click the ''personal message'' will open in block style.
 */
btn.onclick = function () {
    modal.style.display = "block";
};

/**
 * When clicked 'x' from personal message return to start game / game
 */
span.onclick = function () {
    modal.style.display = "none";
};

/**
 * This function will close the modal once clicked outside
 * of this.
 */
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


var quizQuestions = quizQuestionsDataBase;
const startButton = document.getElementById("start-game");
startButton.addEventListener("click", startGame);
var selectedValue = null;
let correctAnswerScore = 0;
let incorrectAnswerScore = 0;
let shuffledQuestions, currentQuestionIndexNumber;

/**
 * This function will start the game, by pressing ''Start'' button you will be redirected 
 * to where the game taks place.
 */
function startGame() {
    startButton.classList.add("hide");
    document.getElementById("question").classList.remove("hide");
    shuffledQuestions = quizQuestions.sort(() => Math.random() - 0.5);
    currentQuestionIndexNumber = 0;
    document.getElementById("answer-buttons").classList.remove("hide");
    setNextQuestion();
    displayQuestion();
}

/**
 * This function will display a new question after user press
 * Submit and next button.
 */
function displayNextQuestion() {
    document.getElementById("next-btn").classList.add("hide");
    document.getElementById("submit-btn").classList.remove("hide");
    resetBackgroundColor();
    displayQuestion();
}

/**
 * This function will call from data base a diferen random question
 */
function setNextQuestion() {
    displayNextQuestion(shuffledQuestions[currentQuestionIndexNumber]);
}

/**
 * This tracker will keep the number of question answered, 
 * when the answer == 10 will show personal message
 */
function questionTracker() {
    currentQuestionIndexNumber += 1;
    let nextQuestBtn = document.getElementById("next-btn");
    if (currentQuestionIndexNumber == 10) {
        nextQuestBtn.innerHTML = "Show Results";
    }
}


/**
 * This function will display the questions from questionaire to
 * each button a, b, c, d
 */
function displayQuestion() {
    let theQ = document.getElementById("question");
    theQ.innerHTML = shuffledQuestions[currentQuestionIndexNumber].question;
    let questionNumber = document.getElementById("question-number");
    questionNumber.innerHTML = currentQuestionIndexNumber + 1;
    let a = document.getElementsByClassName("btn")[0];
    a.innerHTML = shuffledQuestions[currentQuestionIndexNumber].answers[0].answer;
    let b = document.getElementsByClassName("btn")[1];
    b.innerHTML = shuffledQuestions[currentQuestionIndexNumber].answers[1].answer;
    let c = document.getElementsByClassName("btn")[2];
    c.innerHTML = shuffledQuestions[currentQuestionIndexNumber].answers[2].answer;
    let d = document.getElementsByClassName("btn")[3];
    d.innerHTML = shuffledQuestions[currentQuestionIndexNumber].answers[3].answer;
}

/**
 * When answer is selected this in innerHTML.
 */
function answerSelected() {
    selectedValue = this.innerHTML;
}

/**
 * When answer clicked, this will change his propriety from initial
 * color to teal color.
 * 
 */
function answerHighlighted() {
    this.style.backgroundColor = "teal";
}

/**
 * Once a button is presed and the user moves to next question,
 * all the answer buttons will be reseted to the initial color.
 * 
 */
function resetBackgroundColor() {
    let buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#006487";
    }
}

//event listners to the selected answer on onclicks
let buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    //let button = buttons[i].addEventListener("click", resetBackgroundColor);
    buttons[i].addEventListener("click", answerHighlighted);
    buttons[i].addEventListener("click", answerSelected);
}

/**
 * checkAnswer will check the answer if the answer is correct
 * the user will rechieve 1 correct answer if not, 1 incorrect answer.
 */
function checkAnswer() {
    let buttons = document.getElementsByClassName("btn");
    if (selectedValue === shuffledQuestions[currentQuestionIndexNumber].correctAnswer) {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent === selectedValue) {
                buttons[i].style.backgroundColor = "green";
            }
        }
    } else if (selectedValue !== shuffledQuestions[currentQuestionIndexNumber].correctAnswer) {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent === selectedValue) {
                buttons[i].style.backgroundColor = "crimson";
            } else if (buttons[i].textContent === shuffledQuestions[currentQuestionIndexNumber].correctAnswer) {
                buttons[i].style.backgroundColor = "green";
            }
        }
    }
    selectedValue = null;
}

/**
 * This function will count the score every time when a question
 * has been answer. Incorrect / correct.
 */
function countScore() {
    if (selectedValue === shuffledQuestions[currentQuestionIndexNumber].correctAnswer) {
        correctAnswerScore += 1;
    } else {
        incorrectAnswerScore += 1;
    }
}

//creeate variable of the submitAnswers and nextQuestions button
let submitAnsBtn = document.getElementById("submit-btn");
let nextQuestBtn = document.getElementById("next-btn");

/**
 * Once 'Submit' button is pressed, the next button will be present
 * directing you on to the next question.
 */
function nextQuestionsButtonDisplay() {
    document.getElementById("next-btn").classList.remove("hide");
    document.getElementById("submit-btn").classList.add("hide");
}

/**
 * This function will submit the answer 
 * by pressing 'submit' button.
 * 
 */
function submitAnswer() {
    if (selectedValue == null) {
        return alert("Please select an answer");
    } else if (selectedValue != null) {
        countScore();
        checkAnswer();
        nextQuestionsButtonDisplay();
        questionTracker();
    }
}

submitAnsBtn.addEventListener("click", submitAnswer);

/**
 * This function will return the results
 * when the test its finish.
 *
 */
function returnResults() {
    let totalScore = correctAnswerScore + incorrectAnswerScore;
    if (totalScore === 10) {
        document.getElementById("question").classList.add("hide");
        document.getElementById("answer-buttons").classList.add("hide");
        document.getElementById("next-btn").classList.add("hide");
        document.getElementById("submit-btn").classList.add("hide");
        document.getElementById("result-box").classList.remove("hide");
    }
    //variable of userScore
    let userScore = document.getElementById("user-score");
    userScore.innerHTML = correctAnswerScore;
    let personalMessage = document.getElementById("personal-message");
    if (correctAnswerScore == 0) {
        personalMessage.innerHTML = "Opps...Looks like you have to learn some geography... Try again!";
    } else if (correctAnswerScore < 3) {
        personalMessage.innerHTML = "Not to bad, but i'm sure you can do better next time!";
    } else if (correctAnswerScore < 6) {
        personalMessage.innerHTML = "Well, it's better then nothing :), try again!";
    } else if (correctAnswerScore < 9) {
        personalMessage.innerHTML = "Wow you are amazing, try again and get 10/10, let see if you can!";
    } else if (correctAnswerScore == 10) {
        personalMessage.innerHTML = "WOW 10/10 YOU ARE AWESOME. Ladies and gentelmans THE WINNER!";
    }
}

//displany Next Question
nextQuestBtn.addEventListener("click", displayNextQuestion);

nextQuestBtn.addEventListener("click", returnResults);

/**
 * This function will reset the game values
 * all the values will become now 0.
 */
function resetGameValues() {
    currentQuestionIndexNumber = 1;
    correctAnswerScore = 0;
    incorrectAnswerScore = 0;
    document.getElementById("submit-btn").classList.remove("hide");
    document.getElementById("result-box").classList.add("hide");
    document.getElementById("next-btn").innerHTML = "Next Question";
}

//start a new game
let startNewGameBtn = document.getElementById("start-new-game-btn");
startNewGameBtn.addEventListener("click", resetGameValues);
startNewGameBtn.addEventListener("click", startGame);