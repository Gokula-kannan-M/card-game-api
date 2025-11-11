let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// console.log(cards);
console.log(cardsEl.textContent);

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  // console.log(cardsEl.textContent);

  for (i = 0; i < cards.length; i++) {
    // console.log(cards[i]);
    // cardsEl.textContent += cards[i] + " ";
    cardsEl.textContent = cardsEl.textContent + cards[i] + " ";
  }
  // console.log(cardsEl.textContent);

  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You won Blackjack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack == false) {
    let card = getRandomCard();
    // sum = sum + card;
    sum += card;
    // console.log(sum);
    cards.push(card);
    // console.log(cards);
    renderGame();
  }
}

// let hasCompletedCourse = true;
// let giveCertificate = true;

// if (hasCompletedCourse === true && giveCertificate === true) {
//   generateCertificate();
// }

// function generateCertificate() {
//   console.log("generating certificate");
// }

// let hasSolvedChallenges = false;
// let hasHint = true;

// if (hasSolvedChallenges === false && hasHint === false) {
//   console.log("displaying the solution");
// }

// if the person loves action movie and Tom cruise movie
// console log ("mission impossible loading")
// else console log ("other action films are displayed")

// let likesAction = true;
// let likesTomMovies = true;

// if (likesAction === true && likesTomMovies === false) {
//   console.log("loading Mission impsble");
// } else {
//   console.log("other action films are displayed");
// }

// let likesAction = true;
// let likesTomMovies = true;

// if (likesAction === true || likesTomMovies === false) {
//   console.log("loading Mission impsble");
// } else {
//   console.log("other action films are displayed");
// }

// let fruits = ["apple", "orange"];

// console.log(fruits);

// // fruits.push("kiwi", "banana");

// // console.log(fruits);

// // fruits.pop();
// // console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift("i am added now");
// console.log(fruits);

let person = {
  name: "john",
  id: 123,
  job: "dev",
  present: true,
};

console.log(person);
console.log(person.name);
console.log(person.id);
console.log(person.hello);
