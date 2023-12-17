const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen  = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar *146.261682;
    // Retornamos el valor en dólares
    return valueInYen;
}
const fromYenToPound  = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen *0.0055591;
    // Retornamos el valor en dólares
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound  };
