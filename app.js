// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};
// Declaration of functions:
const fromEuroToDollar = (eur) => {
    return eur*oneEuroIs["USD"]
}
const fromDollarToYen = (usd) => {
    return (usd / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}
const fromYenToPound = (jpy) => {
    return (jpy / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}

// Export the function to be used on other files 
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }; 
