// Initial amount
let initialAmount = 20000000;

// Annual growth rate (10%)
const growthRate = 0.15;

// Number of years
const numberOfYears = 20;

// Calculate and print the value for each year
for (let year = 1; year <= numberOfYears; year++) {
  // Calculate the value for the current year
  let currentValue = initialAmount * Math.pow(1 + growthRate, year);
//   let currentValue = initialAmount + (initialAmount*growthRate)

  // Print the result
  console.log(`By the end of ${year+2023}: ${currentValue.toFixed(2)}`);
// console.log(currentValue)
}