document.addEventListener('DOMContentLoaded', function () {
    let price = 700;
    let fromCurrency = 'USD';
    let toCurrency = "EUR";

    fetch('https://api.exchangeratesapi.io/latest?base=' + fromCurrency)
        .then(response => response.json(),)
        .then(data => {

            console.log(data);
            const rate = Math.round(data.rates.EUR, 4);
            document.querySelector('body').innerHTML = `${price} ${fromCurrency} = ${rate} ${toCurrency}. `;

        });
});
