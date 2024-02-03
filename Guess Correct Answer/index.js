var result;
var score = 0;
var time = 0;
var isPlaying = false;

// Start game
function start() {
  isPlaying = true;
  document.getElementById("startBtn").disabled = true;

  document.getElementById("notice").style.visibility = "hidden";

  document
    .getElementById("startBtn")
    .setAttribute("class", "inactiveBackground");

  document.getElementById("stopBtn").disabled = false;
  document.getElementById("stopBtn").style.backgroundColor = "red";

  // Start quiz
  generateQuiz();
}

// Stop game
function stop() {
  isPlaying = false;
  document.getElementById("startBtn").disabled = false;

  document.getElementById("notice").style.visibility = "visible";

  document.getElementById("startBtn").setAttribute("class", "activeBackground");

  document.getElementById("stopBtn").disabled = true;
  document.getElementById("stopBtn").style.backgroundColor = "";

  document.getElementById("scoreLists").innerHTML +=
    "<li>Your score is " + score + "</li>";

  // Clear screen
  allClear();
}

// Question Start
function generateQuiz() {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);

  var operatorRand = Math.floor(Math.random() * 4);

  var question = document.getElementById("quest");
  switch (operatorRand) {
    case 0:
      result = num1 + num2;
      question.innerText = num1 + " + " + num2 + " = ";
      break;
    case 1:
      result = num1 - num2;
      question.innerText = num1 + " - " + num2 + " = ";
      break;
    case 2:
      result = num1 * num2;
      question.innerText = num1 + " * " + num2 + " = ";
      break;
    case 3:
      result = Math.round(num1 / num2);
      question.innerText = num1 + " / " + num2 + " = ";
      break;
  }

  // Set correct answer in one of the cards
  var card = document.getElementsByClassName("card");
  var correctCard = Math.floor(Math.random() * 3);
  console.log("correct card is ", correctCard);

  card[correctCard].innerText = result;

  // Get the last digit of the result and length of the result
  var lastDigit = result % 10;
  var tempResult = result;
  var countLength = 0;
  while (tempResult != 0 && tempResult !== -1) {
    tempResult = Math.floor(tempResult / 10);
    countLength++;
  }

  // Set incorrect answers in other two cards
  for (var i = 0; i < 3; i++) {
    card[i].style.backgroundColor = "deepskyblue";
    if (i !== correctCard) {
      // Set false answers ending with the same last digit
      var falseNum;
      switch (countLength) {
        case 0:
          falseNum = Math.floor(Math.random() * 9 + 1);
          break;
        case 1:
          falseNum = Math.floor(Math.random() * 9 + 1);
          break;
        case 2:
          falseNum = Math.floor(Math.random() * 9 + 1) * 10;
          break;
        case 3:
          falseNum = Math.floor(Math.random() * 9 + 1) * 100;
          break;
        case 4:
          falseNum = Math.floor(Math.random() * 9 + 1) * 1000;
          break;
      }
      card[i].innerText = falseNum + lastDigit;
    }
  }
}

// checking answer
function checkAns(num) {
  // prevent clicking cards from working before start
  if (isPlaying) {
    var userPick = document.getElementsByClassName("card")[num].innerText;
    if (userPick == result) {
      score += 10;
    } else {
      score -= 10;
    }
    document.getElementById("score").innerText = "Score : " + score;

    time++;
    document.getElementById("time").innerText = "Time : " + time;

    generateQuiz();
  }
}

// screen clear
function allClear() {
  document.getElementById("cardOne").innerText = "";
  document.getElementById("cardTwo").innerText = "";
  document.getElementById("cardThree").innerText = "";

  document.getElementById("quest").innerText = " = ";

  document.getElementById("score").innerText = "Score : ";
  document.getElementById("time").innerText = "Time : ";

  for (var i = 0; i < 3; i++) {
    document.getElementsByClassName("card")[i].style.backgroundColor = "gray";
  }

  score = 0;
  time = 0;
}
