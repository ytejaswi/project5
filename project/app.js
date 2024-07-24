const input = document.querySelector("input");
const guess = document.querySelector(".guess");
const btn = document.querySelector(".button");
const chanceDisplay = document.querySelector(".chances");

let chance = 10;

let random = Math.floor(Math.random() * 100);

function randomNum() {
  chance--;
  const value = parseInt(input.value, 10);

  if (value === random) {
    guess.textContent = "Congratulations";
  } else if (value > random && value < 100) {
    guess.textContent = "Your number is high";
  } else if (value < random && value >= 0) {
    guess.textContent = "Your number is low";
  } else {
    guess.textContent = "Please enter a valid number between 0 and 100.";
  }

  chanceDisplay.textContent = `Chances remaining ${chance}`;

  if (chance <= 0) {
    btn.disabled = true;
    guess.textContent += "ran out of chances";
  }
}

btn.addEventListener("click", randomNum);
