const goldRadio = document.getElementById("gold");
const silverRadio = document.getElementById("silver");
const resultDiv = document.getElementById("result");

const metalWeight = document.getElementById("metal-weight");
const fine = document.getElementById("fine");
const purity = document.getElementById("pure-metal-weight");

function handleRadioSelection() {
  const u = document.getElementsByClassName("unit");

  if (goldRadio.checked) {
    u[0].innerText = "grams";
    u[1].innerText = "grams";
    document.body.style.background = "#ffd700";
  } else {
    document.body.style.background = "#c0c0c0";
    u[0].innerText = "KG";
    u[1].innerText = "KG";
  }
}

function calculatePurity() {
  const mw = document.getElementById("metal-weight").value;
  const f = document.getElementById("fine").value;

  if (!isNaN(mw) && !isNaN(f)) {
    document.getElementById("pure-metal-weight").value = (mw * f) / 100;
  } else {
    document.getElementById("pure-metal-weight").value = 0;
  }
}

// Attach the event listener to each radio button
goldRadio.addEventListener("change", handleRadioSelection);
silverRadio.addEventListener("change", handleRadioSelection);
fine.addEventListener("input", calculatePurity);
metalWeight.addEventListener("input", calculatePurity);
purity.addEventListener("input", calculatePurity);
