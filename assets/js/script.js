
import { quizQuestionsDataBase } from "../js/game_questions.js";

// GAME INSTRUCTIONS HELP MODAL // 

// Get the modal
var modal = document.getElementById("gameHelp");

// Get the button that opens the modal
var btn = document.getElementById("gameInstructions");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// QUIZ QUESTIONS ARRAY
var quizQuestions = quizQuestionsDataBase;

const startButton = document.getElementById("start-game");
startButton.addEventListener("click", startGame);
var selectedValue = null;
let correctAnswerScore = 0;
let incorrectAnswerScore = 0;

let shuffledQuestions, currentQuestionIndexNumber;

// START GAME //
function startGame(event) {
  console.log("started");
  startButton.classList.add("hide");
  document.getElementById("question").classList.remove("hide");
  shuffledQuestions = quizQuestions.sort(() => Math.random() - 0.5);
  currentQuestionIndexNumber = 0;
  document.getElementById("answer-buttons").classList.remove("hide");
  setNextQuestion();
  displayQuestion();
}

// DISPLAY NEXT QUESTION //
function displayNextQuestion(event) {
  document.getElementById("next-btn").classList.add("hide");
  document.getElementById("submit-btn").classList.remove("hide");
  displayQuestion();
}

//SET NEXT QUESTION - calls function above and pulls the question out from the shuffled questions list from the index of what question the game is on //
function setNextQuestion() {
  displayNextQuestion(shuffledQuestions[currentQuestionIndexNumber]);
}

// KEEP TRACK OF QUESTION NUMBER - when it reaches ten, the inner text prompts show results indicating the end of the 10 questions in the game played //
function questionTracker(event) {
  currentQuestionIndexNumber +=1;
  let nextQuestBtn = document.getElementById("next-btn");
  if (currentQuestionIndexNumber == 10) {
    nextQuestBtn.innerHTML = "Show Results";
  }
}

// DISPLAY QUESTION //
function displayQuestion() {
  let theQ = document.getElementById("question"); // display question
  theQ.innerHTML = shuffledQuestions[currentQuestionIndexNumber].question;
 
  let questionNumber = document.getElementById("question-number"); // display question number
  questionNumber.innerHTML = currentQuestionIndexNumber + 1;

  let a = document.getElementsByClassName("btn")[0]; // display answers in button fields
  a.innerHTML = shuffledQuestions[currentQuestionIndexNumber].answers[0].answer;
  let b = document.getElementsByClassName("btn")[1];
  b.innerHTML = shuffledQuestions[currentQuestionIndexNumber].answers[1].answer;
  let c = document.getElementsByClassName("btn")[2];
  c.innerHTML = shuffledQuestions[currentQuestionIndexNumber].answers[2].answer;
  let d = document.getElementsByClassName("btn")[3];
  d.innerHTML = shuffledQuestions[currentQuestionIndexNumber].answers[3].answer;
}

// CLICK AND TOGGLE THE ANSWER BUTTONS //
function answerSelected(event) {
  selectedValue = this.innerHTML;
}

// SELECTED ANSWER IS HIGHLIGHTED //
function answerHighlighted(event) {
 this.style.backgroundColor = "teal";
}

// RESET ALL THE BACKGROUND BUTTONS COLOR //
function resetBackgroundColor(event) {
  let buttons = document.getElementsByClassName("btn");
  for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.backgroundColor = "darkseagreen";
  }
}

// EVENT LISTENERS TO THE SELECTED ANSWERS ON ONCLICKS //
let buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i].addEventListener("click", resetBackgroundColor); // call the reset first so on every change of selected answer resets before the rest of the code runs
  button = buttons[i].addEventListener("click", answerHighlighted);
  button = buttons[i].addEventListener("click", answerSelected);
}

// CHECK ANSWER //
function checkAnswer(event) {
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
}

// SCORE COUNTER //
function countScore(event) {
  if (selectedValue === shuffledQuestions[currentQuestionIndexNumber].correctAnswer) {
    correctAnswerScore += 1;
  } else {
    incorrectAnswerScore += 1;
  }
}

// creeate variables of the submitAns and nextQuest btn 
let submitAnsBtn = document.getElementById("submit-btn");
let nextQuestBtn = document.getElementById("next-btn");

// SUBMIT ANSWER & NEXT QUESTION BUTTON //
function nextQuestionButtonDisplay(event) {
  document.getElementById("next-btn").classList.remove("hide");
  document.getElementById("submit-btn").classList.add("hide");
}

// SUBMIT ANSWER - WITH BOOLEAN LOGIC PREVENTING BUG OF NO SELECT VALUE PASSING TRUE //
function SubmitAnswer(event) {
  if (selectedValue == null) {
    return alert("Please select an answer");
  } else if (selectedValue != null) {
    checkAnswer();
    countScore();
    nextQuestionButtonDisplay();
    selectedValue = null;
    questionTracker();
  }
}

submitAnsBtn.addEventListener("click", SubmitAnswer);

// CHECK WHEN REACHED 10 QUESIIONS THAT WILL END GAME AND WILL RETURN THE SCORE //
function returnResults(event) {
  let totalScore = correctAnswerScore + incorrectAnswerScore;
  if (totalScore === 10) {
    document.getElementById("question").classList.add("hide");
    document.getElementById("answer-buttons").classList.add("hide");
    document.getElementById("next-btn").classList.add("hide");
    document.getElementById("submit-btn").classList.add("hide"); // up to here to clear and hide elements in the box
    document.getElementById("result-box").classList.remove("hide");
  }

// Create variable of userScore
 let userScore = document.getElementById("user-score");
 userScore.innerHTML = correctAnswerScore; // Display user score on the page

 let personalMessage = document.getElementById("personal-message"); // code to display message based on score performance
  if (correctAnswerScore == 0) {
    personalMessage.innerHTML = "Yikes!, Unlucky there, better luck next time!";
  } else if (correctAnswerScore < 3) {
    personalMessage.innerHTML = "oh not too bad, keep going and try to beat this score!";
  } else if (correctAnswerScore < 6) {
    personalMessage.innerHTML = "Well done, you know some random stuff!";
  } else if (correctAnswerScore < 9) {
    personalMessage.innerHTML = "Wow someone is showing off their skills!";
  } else if (correctAnswerScore == 10) {
    personalMessage.innerHTML = "Wow 100% We are in the presence of a genius. Congratulations!";
  }
}

// DISPLAY NEXT QUESTION - after submitted answer, prompt the next question //
nextQuestBtn.addEventListener("click", displayNextQuestion);
nextQuestBtn.addEventListener("click", resetBackgroundColor);
nextQuestBtn.addEventListener("click", returnResults);

// RESET VALUES //
function resetGameValues(event) {
  currentQuestionIndexNumber = 1;
  correctAnswerScore = 0;
  incorrectAnswerScore = 0;
  document.getElementById("submit-btn").classList.remove("hide"); // up to here to clear and hide elements in the box
  document.getElementById("result-box").classList.add("hide");
  document.getElementById("next-btn").innerHTML = "Next Question"; // reset the next button display for the rerunning of the game
}

// START NEW GAME //
 let startNewGameBtn = document.getElementById("start-new-game-btn");

startNewGameBtn.addEventListener("click", resetGameValues);
startNewGameBtn.addEventListener("click", startGame);