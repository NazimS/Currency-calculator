// Valyuta deyisme 
let curr1 = document.querySelector(".curr1");
let curr2 = document.querySelector(".curr2");
let currdigit1 = document.querySelector(".currdigit1");
let currdigit2 = document.querySelector(".currdigit2");
let cstable__input = document.querySelector(".cstable__input");
let currSelect = document.querySelector("#currSelect");
let selectedCurr = 1;
let dollar = 1;
let euro = 1;
let azn = 1;
let amount = 100;

// bosluqdusa 1 emsalini cevirsin eks halda inputda qeyd olunani
cstable__input.addEventListener("input", (e) => {
  amount = parseFloat(e.target.value);
  if(e.target.value == ""){
    convertCurrency(1);
  }else{
    convertCurrency(amount);
  }
});
// valyutani secende deyismek
currSelect.addEventListener("change", (e) => {
  selectedCurr = e.target.value;
  convertCurrency(amount)
  writeCurrText(selectedCurr);
});

//cedvelde valyuta metnlerini deyismek
function writeCurrText(selectedCurr) {
  if (selectedCurr == 1.7) {
    (curr1.textContent = "AZN")((curr2.textContent = "EUR"));
  } else if (selectedCurr == 1.77) {
    (curr1.textContent = "AZN")((curr2.textContent = "USD"));
  } else {
    (curr1.textContent = "USD")((curr2.textContent = "EUR"));
  }
}

// valyutani deyismek
function convertCurrency(amount) {
  if(selectedCurr == 1.7){
    azn = amount * selectedCurr
    euro = amount * 0.97
    currdigit1.innerHTML = azn.toFixed(2)
    currdigit2.innerHTML = euro.toFixed(2)
  }else if(selectedCurr==1.77){
    azn = amount * selectedCurr
    dollar = amount * 1.03
    currdigit1.innerHTML = azn.toFixed(2)
    currdigit2.innerHTML = dollar.toFixed(2)
  }else{
    euro = amount * 0.56
    dollar = amount / 1.7
    currdigit1.innerHTML = dollar.toFixed(2)
    currdigit2.innerHTML = euro.toFixed(2)
  }
}