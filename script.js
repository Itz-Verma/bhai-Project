const goldRadio = document.getElementById("gold");
const silverRadio = document.getElementById("silver");
const resultDiv = document.getElementById("result");

const metalWeight = document.getElementById("metal-weight");
const fine = document.getElementById("fine");
const purity = document.getElementById("pure-metal-weight");

const metalPrice = document.getElementById("price");
const metalCost = document.getElementById("amount");
function handleRadioSelection() {
  const u = document.getElementsByClassName("unit");
  const p = document.getElementById("price");

  if (goldRadio.checked) {
    u[0].innerText = "GRAMS";
    u[1].innerText = "GRAMS";
    p.placeholder = "Enter gold price of 10grams";
    document.body.style.background = "#ffd700";
  } else {
    document.body.style.background = "#c0c0c0";
    u[0].innerText = "KG";
    u[1].innerText = "KG";
    p.placeholder = "Enter Silver price of 1KG";
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

function calculateMetalPrice() {
  const mp = document.getElementById("price").value;
  const mc = document.getElementById("amount");
  const pmw = document.getElementById("pure-metal-weight").value;

  if (!isNaN(mp) && !isNaN(pmw)) {
    mc.value = (pmw * mp) ;
  } else {
    mc.value = 0;
  }

}
// Attach the event listener to each radio button
goldRadio.addEventListener("change", handleRadioSelection);
silverRadio.addEventListener("change", handleRadioSelection);
fine.addEventListener("input", calculatePurity);
metalWeight.addEventListener("input", calculatePurity);
purity.addEventListener("input", calculatePurity);
