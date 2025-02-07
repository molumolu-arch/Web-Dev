console.log( extractCurrencyValue('$120') === 120 ); // true

function  extractCurrencyValue(money) {
    return Number(money.slice(1))
}