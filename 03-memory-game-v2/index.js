let cards = ["A", "B", "C", "D", "E", "F"];

function shuffle() {
  // TODO: duplicate cards
  // TODO: shufle all the cards
  console.log(shuffledCards);
}
// למשוך את השולחן משחק
let board = document.getElementById("game-table");
// לייצר את הכרטיס
let my_card = document.createElement("div");
// להכניס את תוכן הכרטיס
my_card.innerText = "A";
// להוסיף שם לclass
my_card.className = "card";

// לייצר את הכרטיס
let my_card2 = document.createElement("div");
// להכניס את תוכן הכרטיס
my_card2.innerText = "A";
// להוסיף שם לclass
my_card2.className = "card";
my_card2.onclick = flipCard;

// להכניס את הכרטיס לשולחן המשחק
board.appendChild(my_card2);
board.appendChild(my_card);


function flipCard(event) {
  // event.target.innerText = "hello";
  console.log(event.target);
  event.target.classList.add("hidden");

}


function isEqual(card1,card2){

}

function say(msg){
  console.log(msg);
}

let holdSayMsg = say

holdSayMsg("msg")

function onClick(){
  
}