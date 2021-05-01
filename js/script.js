{
    const welcome = () => {
        console.log("Internetowy kantor walut");
    }
    welcome();

    const whatInRadio = (radio) => {
        switch (radio) {
            case "zloty":
                return "pln";
            case "euro":
                return "eur";
            case "dolar":
                return "usd";
        }
    }

    const calculateResult = (amount, giveCurrency, radioSell, radioBuy) => {
        const rateEUR = 4.54;
        const rateUSD = 3.79;

        if (radioSell === radioBuy) {
            return amount * 1.00;
        }
        else {
            switch (giveCurrency) {
                case "eur pln":
                    console.log("jestem", amount * rateEUR);
                    return amount * rateEUR;
                case "usd pln":
                    return amount * rateUSD;
                case "pln eur":
                    return amount / rateEUR;
                case "usd eur":
                    return amount * rateUSD / rateEUR;
                case "pln usd":
                    return amount / rateUSD;
                case "eur usd":
                    return amount * rateEUR / rateUSD;
            }
        }
    }

    const formElement = document.querySelector(".js-form");
    const toGet = document.querySelector(".js-toGet");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const toGive =  document.querySelector(".js-toGive").value;
        const radioSell = document.querySelector('input[name=sell]:checked').value;
        const radioBuy = document.querySelector('input[name=buy]:checked').value;

        const giveCurrency = whatInRadio(radioSell) + " " + whatInRadio(radioBuy);
        const exchangeValue = calculateResult(toGive, giveCurrency, radioSell, radioBuy);

        toGet.innerText = +exchangeValue.toFixed(2) + " " + whatInRadio(radioBuy).toUpperCase();
    }
    const onFormReset = () => {
        toGet.innerText = "Brak";
    }

    formElement.addEventListener("submit", onFormSubmit);
    formElement.addEventListener("reset", onFormReset);
}