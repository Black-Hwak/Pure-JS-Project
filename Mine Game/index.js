var mine, num1, num2;
var p1, p2, p3, p4, p5, p6, p7, p8;
var isGameOver = false;
var count = 36;

// Start Building Mine
function mineBuild() {
  num1 = Math.floor(Math.random() * 6 + 1);
  num2 = Math.floor(Math.random() * 6 + 1);
  mine = num1 + "" + num2;
  console.log("mine num is ",mine);

  nearMine();
}

// Build Numbers Near Mine
function nearMine() {
  p1 = num1 - 1 + "" + (num2 - 1);
  p2 = num1 - 1 + "" + num2;
  p3 = num1 - 1 + "" + (num2 + 1);
  p4 = num1 + "" + (num2 - 1);
  p5 = num1 + "" + (num2 + 1);
  p6 = num1 + 1 + "" + (num2 - 1);
  p7 = num1 + 1 + "" + num2;
  p8 = num1 + 1 + "" + (num2 + 1);
}

// Checking Mine When Got Clicked
function checkMine(obj) {
  var userPick = obj.id;
  gameOver(userPick);

  if (!isGameOver && !obj.style.backgroundColor) {
    document.getElementById("btnClickSound").play();
    if (
      userPick == p1 ||
      userPick == p2 ||
      userPick == p3 ||
      userPick == p4 ||
      userPick == p5 ||
      userPick == p6 ||
      userPick == p7 ||
      userPick == p8
    ) {
      document.getElementById(userPick).style.backgroundColor = "red";
    } else {
      document.getElementById(userPick).style.backgroundColor = "deepskyblue";
    }
    checkGameWin();
  }
}

// Game Over
function gameOver(userPick) {
  if (userPick == mine) {
    gameEnd("gameOverSound", "red");

    document.getElementById("32").innerText = "G";
    document.getElementById("33").innerText = "A";
    document.getElementById("34").innerText = "M";
    document.getElementById("35").innerText = "E";

    document.getElementById("42").innerText = "O";
    document.getElementById("43").innerText = "V";
    document.getElementById("44").innerText = "E";
    document.getElementById("45").innerText = "R";

    document.getElementById(userPick).innerText = "BOOM";
  }
}

function checkGameWin() {
  count--;
  if (count == 1) {
    gameEnd("gameWinningSound", "deepskyblue");

    document.getElementById("11").innerText = "W";
    document.getElementById("22").innerText = "I";
    document.getElementById("33").innerText = "N";
    document.getElementById("44").innerText = "N";
    document.getElementById("55").innerText = "E";
    document.getElementById("66").innerText = "R";

    document.getElementById("15").innerHTML =
      '<span style="color: red;">&#9829;</span>';
    document.getElementById("16").innerHTML =
      '<span style="color: red;">&#9829;</span>';
    document.getElementById("26").innerHTML =
      '<span style="color: red;">&#9829;</span>';

    document.getElementById("51").innerHTML =
      '<span style="color: red;">&#9829;</span>';
    document.getElementById("61").innerHTML =
      '<span style="color: red;">&#9829;</span>';
    document.getElementById("62").innerHTML =
      '<span style="color: red;">&#9829;</span>';
  }
}

// Game End Reusable whether win or lose
function gameEnd(soundType, bgColor) {
  isGameOver = true;
  // Preventing unconditional state change and lose voice repeating
  mine = "";
  document.getElementById(soundType).play();

  for (var i = 0; i < 36; i++) {
    document.getElementsByClassName("cell")[i].style.backgroundColor = bgColor;
  }
}

// Restarting The Game
function restart() {
  for (var i = 0; i < 36; i++) {
    document.getElementsByClassName("cell")[i].style.backgroundColor = "";
    document.getElementsByClassName("cell")[i].innerText = "";
  }
  isGameOver = false;
  count = 36;
  mineBuild();
}
