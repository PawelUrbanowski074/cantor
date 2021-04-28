{
    const welcome = () => {
        console.log("Internetowy kantor walut");
    }
    welcome();

    const whatIsChecked = (buyPln, buyEur, buyUsd) => {
        const pln = document.querySelector(".js-pln");
        const eur = document.querySelector(".js-eur");
        const usd = document.querySelector(".js-usd");

        if (eur.checked & buyPln.checked) {
            return "eurPln";
        } else if (usd.checked & buyPln.checked) {
            return "usdPln";
        } else if (pln.checked & buyEur.checked) {
            return "plnEur";
        } else if (usd.checked & buyEur.checked) {
            return "usdEur";
        } else if (pln.checked & buyUsd.checked) {
            return "plnUsd";
        } else if (eur.checked & buyUsd.checked) {
            return "eurUsd";
        } else {
            return "other";
        }
    }

    const calculateResult = (amount, giveCurrency) => {
        const rateEUR = 4.54;
        const rateUSD = 3.79;

        switch (giveCurrency) {
            case "eurPln":
                return amount * rateEUR;
            case "usdPln":
                return amount * rateUSD;
            case "plnEur":
                return amount / rateEUR;
            case "usdEur":
                return amount * rateUSD / rateEUR;
            case "plnUsd":
                return amount / rateUSD;
            case "eurUsd":
                return amount * rateEUR / rateUSD;
            case "other":
                return amount * 1.00;
        }
    }

    const addCurrencyText = (buyPln, buyEur, buyUsd) => {
        if (buyPln.checked) {
            return " PLN";
        } else if (buyEur.checked) {
            return " EUR";
        } else if (buyUsd.checked) {
            return " USD";
        }
    }

    const formElement = document.querySelector(".js-form");
    const toGet = document.querySelector(".js-toGet");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const buyPln = document.querySelector(".js-buyPln");
        const buyEur = document.querySelector(".js-buyEur");
        const buyUsd = document.querySelector(".js-buyUsd");
        const toGive = document.querySelector(".js-toGive");
        const amount = toGive.value;

        const giveCurrency = whatIsChecked(buyPln, buyEur, buyUsd);
        const exchangeValue = calculateResult(amount, giveCurrency);
        
        toGet.innerText = +exchangeValue.toFixed(2) + addCurrencyText(buyPln, buyEur, buyUsd);
    }
    const onFormReset = () => {
        toGet.innerText = "Brak";
    }

    formElement.addEventListener("submit", onFormSubmit);
    formElement.addEventListener("reset", onFormReset);
}