let rates = document.querySelectorAll(".rating .rates span");
let submit = document.querySelector(".submit");
let finalRateCont = document.querySelector(".selected-rating span");
let rateScore;
getRate(rates);

submit.onclick = setRate;
function getRate(rates) {
  rates.forEach((rate) => {
    rate.addEventListener("click", () => {
      rates.forEach((el) => {
        if (el.classList.contains("clicked")) {
          el.classList.remove("clicked");
        }
      });
      rate.classList.add("clicked");
      rateScore = rate.innerHTML;
    });
  });
}

function setRate() {
  if (rateScore == null) return;
  undisplayRatingPage();
  displayThankuPage();
  finalRateCont.innerHTML = rateScore;
}

function displayThankuPage() {
  document.querySelector(".thank-you").classList.remove("display-none");
}

function undisplayRatingPage() {
  document.querySelector(".rating").classList.add("display-none");
}
