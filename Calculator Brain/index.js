var result;

// For Start
function start() {
  document.getElementById("startBtn").disabled = true;
  document.getElementById("stopBtn").disabled = false;

  document.getElementById("fillAns").disabled = false;

  document.getElementById("startBtn").setAttribute("class", "inactiveBtn");
  document.getElementById("stopBtn").style.backgroundColor = "red";
  document.getElementById("showQuest").style.color = "black";
  generateQuiz();
}

// For Stop
function stop() {
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;

  document.getElementById("fillAns").disabled = true;

  document.getElementById("startBtn").setAttribute("class", "activeBtn");
  document.getElementById("stopBtn").style.backgroundColor = "";
  document.getElementById("stopBtn").setAttribute("class", "inactiveBtn");
  document.getElementById("historyLists").innerText = "";
  document.getElementById("showQuest").innerText = "=>";
  document.getElementById("showQuest").style.color = "red";
}

// Start Quiz
function generateQuiz() {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);
  var operator = Math.floor(Math.random() * 4);
  var operatorSign;
  switch (operator) {
    case 0:
      operatorSign = "+";
      result = num1 + num2;
      break;
    case 1:
      operatorSign = "-";
      result = num1 - num2;
      break;
    case 2:
      operatorSign = "*";
      result = num1 * num2;
      break;
    case 3:
      operatorSign = "/";
      result = Math.round(num1 / num2);
      document.getElementById("fillAns").placeholder = "Fill Only Nearest Integer";
      break;
  }
  document.getElementById("showQuest").innerText =
    num1 + " " + operatorSign + " " + num2 + " => ";
  document.getElementById("fillAns").value = "";
}

// Validation
function checkAnswer() {
  var userInput = document.getElementById("fillAns").value;
  if (userInput) {
    document.getElementById("fillAns").placeholder = "";
    showResult(userInput);
    // start again quiz
    generateQuiz();
  } else {
    alert("You Need To Fill Your Answer");
  }
}

// Wrong or Correct
function showResult(userInput) {
  if (result == userInput) {
    document.getElementById("historyLists").innerHTML += "<li>Correct</li>";
  } else {
    document.getElementById("historyLists").innerHTML += "<li>Wrong</li>";
  }
}
