let turn = 0;
let pick;

let squares = document.querySelectorAll('td');
squares.forEach(function(square) {
  square.addEventListener('click', function(evt){
    if (this.innerHTML !== "") return;
    if (turn % 2 === 0) {
      this.innerHTML = "X";
    } else {
      this.innerHTML = "O";
    }
    turn++;
    checkWinner();
  })
});

function checkWinner() {

}
