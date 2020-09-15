let john = { name: "John" };
// the object can be accessed, john is the reference to it
// overwrite the reference
john = null;
// the object will be removed from memory


// if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.
let john = { name: "John" };
let array = [ john ];
john = null; // overwrite the reference
   // john is stored inside the array, so it won't be garbage-collected
   // we can get it as array[0]


// if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.
let john = { name: "John" };
let map = new Map();
map.set(john, "...");
john = null; // overwrite the reference
   // john is stored inside the map,
   // we can get it by using map.keys()


//WEAKMAP --> The first difference from Map is that WeakMap keys must be objects, not primitive values:
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok"); // works fine (object key)
   // can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object


let john = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john, "...");
john = null; // overwrite the reference
   // john is removed from memory!


//WEAKSET --> 

/*It is analogous to Set, but we may only add objects to WeakSet (not primitives).
An object exists in the set while it is reachable from somewhere else.
Like Set, it supports add, has and delete, but not size, keys() and no iterations.
*/
let visitedSet = new WeakSet();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again
  // visitedSet has 2 users now
  // check if John visited?
alert(visitedSet.has(john)); // true
  // check if Mary visited?
alert(visitedSet.has(mary)); // false
john = null;
  // visitedSet will be cleaned automatically