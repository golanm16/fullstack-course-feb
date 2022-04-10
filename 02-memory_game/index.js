let cards = ["A", "B", "C", "D", "E", "F"];

function shuffle() {
  // TODO: duplicate cards
  // TODO: shufle all the cards
  console.log(shuffledCards);
}
// למשוך את השולחן משחק
let board = document.getElementById("game-table");
// לייצר את הכרטיס
let elem = document.createElement("div");
// להכניס את תוכן הכרטיס
elem.innerText = "A";
// להוסיף שם לclass
elem.className = "card";
// להכניס את הכרטיס לשולחן המשחק
board.appendChild(elem);
