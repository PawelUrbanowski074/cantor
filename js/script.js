console.log("Internetowy kantor walut");

let formElement = document.querySelector(".js-form");

let pln = document.querySelector(".js-pln");
let eur = document.querySelector(".js-eur");
let usd = document.querySelector(".js-usd");
let toGive = document.querySelector(".js-toGive");

let buyPln = document.querySelector(".js-buyPln");
let buyEur = document.querySelector(".js-buyEur");
let buyUsd = document.querySelector(".js-buyUsd");
let toGet = document.querySelector(".js-toGet");

let EURO = 4.54;
let USD = 3.79;
let exchangeValue = 0;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    if (eur.checked & buyPln.checked) {
        giveCurrency = "eurPln";
    } else if (usd.checked & buyPln.checked) {
        giveCurrency = "usdPln";
    } else if (pln.checked & buyEur.checked) {
        giveCurrency = "plnEur";
    } else if (usd.checked & buyEur.checked) {
        giveCurrency = "usdEur";
    } else if (pln.checked & buyUsd.checked) {
        giveCurrency = "plnUsd";
    } else if (eur.checked & buyUsd.checked) {
        giveCurrency = "eurUsd";
    } else {
        giveCurrency = "other";
    }

    switch (giveCurrency) {
        case "eurPln":
            exchangeValue = toGive.value * EURO;
            break;
        case "usdPln":
            exchangeValue = toGive.value * USD;
            break;
        case "plnEur":
            exchangeValue = toGive.value / EURO;
            break;
        case "usdEur":
            exchangeValue = toGive.value * USD / EURO;
            break;
        case "plnUsd":
            exchangeValue = toGive.value / USD;
            break;
        case "eurUsd":
            exchangeValue = toGive.value * EURO / USD;
            break;
        case "other":
            exchangeValue = toGive.value * 1.00;
            break;
    }

    toGet.innerText = +exchangeValue.toFixed(2);

    if (buyPln.checked) {
        toGet.innerText += " PLN";
    } else if (buyEur.checked) {
        toGet.innerText += " EUR";
    } else {
        toGet.innerText += " USD";
    }
});

formElement.addEventListener("reset", (event) => {
    toGet.innerText = "Brak";
});