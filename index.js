var randomNumber1 = Math.ceil(Math.random() * 6);

var diceImage = `images/dice${randomNumber1}.png`

var finalImage = document.querySelector(".img1").setAttribute("src", diceImage);

var randomNumber2 = Math.ceil(Math.random() * 6)

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


// if (randomNumber1 === randomNumber2) {
//   document.querySelector(".title").innerHTML = "Draw!";
// }
// else if (randomNumber1 > randomNumber2) {
//   document.querySelector(".title").innerHTML = "💰Player 1 Wins!💰";
// }
// else {
//   document.querySelector("h1").innerHTML = "💰Player 2 Wins!💰";
// }
function winner (player1, player2) {

  if (player1 === player2) {
    document.querySelector(".title").innerHTML = "Draw Bitches!";
  }
  if (player1 > player2) {
    document.querySelector(".title").innerHTML = "💰Player 1 Wins Bitch!💰";
  }
  if (player1 < player2) {
    document.querySelector("h1").innerHTML = "💰Player 2 Wins Bitch!💰";
  }
}
winner(randomNumber1, randomNumber2)


//
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "💰Player 1 Wins!💰";
// }
// else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").innerHTML = "💰Player 1 Wins!💰";
// }
// else {
//   document.querySelector("h1").innerHTML = "💰Player 1 Wins!💰";
// }
