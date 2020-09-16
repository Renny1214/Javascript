/*
For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
*/

let user = {
    name: "John",
    age: 30
};
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]

let user = {
    name: "John",
    age: 30
  };
  
// loop over values
for (let value of Object.values(user)) {
    alert(value); // John, then 30
}


//TRANSFORMING OBJECTS (Objects lack many methods that exist for arrays, e.g. map, filter and others.)

/*
Use Object.entries(obj) to get an array of key/value pairs from obj.
Use array methods on that array, e.g. map.
Use Object.fromEntries(array) on the resulting array to turn it back into an object.
*/

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
alert(doublePrices.meat); // 8


//SOME FUNCTIONS
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
    return sum; // 650
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
alert( sumSalaries(salaries) ); // 650



function count(obj) {
    return Object.keys(obj).length;
}
let user = {
    name: 'John',
    age: 30
  };
alert( count(user) ); // 2

