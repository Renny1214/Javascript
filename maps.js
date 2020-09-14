//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
/*Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3

//Map can also use objects as keys.
let john = { name: "John" };
// for every user, let's store their visits count
let visitsCountMap = new Map();
// john is the key for the map
visitsCountMap.set(john, 123);
alert( visitsCountMap.get(john) ); // 123


//CHAINING (Every map.set call returns the map itself, so we can “chain” the calls)
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

//ITERATION OVER MAP
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    alert(entry); // cucumber,500 (and so on)
  }
 

  //*The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object


//Object.entries: Map from Object

// array of [key, value] pairs
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);
alert( map.get('1') ); // str1

 //OR

//So we can create a map from an object like this
let obj = {
    name: "John",
    age: 30
};
let map = new Map(Object.entries(obj));
alert( map.get('name') ); // John


//Object.fromEntries: Object from Map
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
// now prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
let obj = Object.fromEntries(map.entries()); // make a plain object (*)
// done!
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2

let obj = Object.fromEntries(map); // omit .entries()
