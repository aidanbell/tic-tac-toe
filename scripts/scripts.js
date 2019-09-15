let turn = 0;
let pick;
let winner = "";
let squareArray = [];
let result = "";

init();

function init() {
  let squares = document.querySelectorAll('td');
  squares.forEach(function(square) {
    squareArray.push(square.id);
    square.addEventListener('click', function(evt){
      if (this.innerHTML !== "" || winner !== "") return;
      if (turn % 2 === 0) {
        this.innerHTML = "X";
      } else {
        this.innerHTML = "O";
      }
      turn++;
      checkWinner();
    })
  });
}

function checkWinner() {
    checkWinnerX();
    checkWinnerY();
    checkWinnerDL();
    checkWinnerDR();
    if (winner !== "") {
      document.getElementById('msg').innerHTML = winner + " won the game!";
    }
}

function checkWinnerX() {

  for (y = 0; y < 3; y++) {
    let result = "";
    for (x = 0; x < 3; x++) {
      let i = 's' + y + '-' + x;
      result += document.getElementById(i).innerHTML;
      if (result === 'XXX') {
        winner = "X";
        return;
      } else if (result === 'OOO') {
        winner = "O"
        return;
      }
    }
  }
}

function checkWinnerY() {
  for (x = 0; x < 3; x++) {
    let result = "";
    for (y = 0; y < 3; y++) {
      let i = 's' + y + '-' + x;
      result += document.getElementById(i).innerHTML;
      if (result === 'XXX') {
        winner = "X";
        return;
      } else if (result === 'OOO') {
        winner = "O"
        return;
      }
    }
  }
}

function checkWinnerDL() {
  let y = 0;
  let x = 0;
  let result = "";
  for (x = 0; x < 3; x++) {
    let i = 's' + y + '-' + x;
    result += document.getElementById(i).innerHTML;
    if (result === 'XXX') {
      winner = "X";
      return;
    } else if (result === 'OOO') {
      winner = "O"
      return;
    } else {
      y++;
    }
  }
}

function checkWinnerDR() {
  let x = 0;
  for (y = 2; y > 0; y--) {
    let i = 's' + y + '-' + x;
    result += document.getElementById(i).innerHTML;
    if (result === 'XXX') {
      winner = "X";
      return;
    } else if (result === 'OOO') {
      winner = "O"
      return;
    } else {
      x++;
    }
  }
}

console.log(squareArray);
