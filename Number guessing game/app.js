let joketextE1 = document.getElementById("jokeText");
let jokebuttonE1 = document.getElementById("jokeBtn");
let spinnerE1 = document.getElementById("spinner");

let options = {
  method: "GET",
};

function getrandomjoke() {
  spinnerE1.classList.remove("d-none");
  joketextE1.classList.add("d-none");

  fetch("httpS://apis.ccbp.in/jokes/random", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      let randomjoke = jsonData.value;

      spinnerE1.classList.add("d-none");
      joketextE1.classList.remove("d-none");

      joketextE1.textContent = randomjoke;
    });
}
jokebuttonE1.addEventListener("click", getrandomjoke);
