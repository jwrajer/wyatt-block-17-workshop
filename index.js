const coffeeData = require(`./coffee_data.js`);

// 2. Print an array of all the drinks on the menu.

console.log(coffeeData);

const printDrinks = coffeeData.map((drink) => drink.name);

console.log(printDrinks);

// 3. Print an array of drinks that cost 5 and under.

const fiveAndUnder = coffeeData.filter(drink => drink.price <= 5);

console.log(fiveAndUnder);

// 4. Print an array of drinks that are priced at an even number.

const evenNumDrinks = coffeeData.filter(drink => drink.price % 2 === 0);

console.log(evenNumDrinks);

// 5. Print the total if you were to order one of every drink.

const drinkPrice = coffeeData.map(drink => drink.price);
const totalPrice = drinkPrice.reduce((drink, total) => drink += total);

console.log(totalPrice);

// 6. Print an array with all the drinks that are seasonal.

// const printSeasonal = (drink) => {
//   if (drink.seasonal === true) {
//     return drink.name;
//   }
// };
// const mapSeasonal = coffeeData.filter(printSeasonal);

const printSeason = coffeeData.filter(drink => drink.seasonal);


console.log(printSeason);

const addString = (drink) => {
  for (i in printSeason) {
    console.log(`${drink[i].name} with imported beans`)
  }
}
addString(printSeason);
// console.log(addString(printSeason));