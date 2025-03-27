// Test conversion from Euro to Dollar
test("One EUR should be 1.07 USD", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');


    const eur = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

// Test conversion from Dollar to Yen
test("One USD should be 146.26168224299065 JPY ", function() {

    const { fromDollarToYen } = require('./app.js');
    const usd = fromDollarToYen(10);
    const expected = 10 * 146.26168224299065; 
     expect(fromDollarToYen(10)).toBe(1462.6168224299065); 
})

// Test conversion from JPY to GBP
test("One JPY should be 0.005559105431309905 GBP ", function() {
 
    const { fromYenToPound } = require('./app.js');
    const jpy = fromYenToPound(1000);
    const expected = 1000 * 5.559105431309905; 
    expect(fromYenToPound(1000)).toBe(5.559105431309905); 
})
