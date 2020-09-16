//ADD / REMOVE ITEMS
/*
arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.
*/
  let arr = ["I", "go", "home"];
  delete arr[1]; // remove "go"
  alert( arr[1] ); // undefined
  // now arr = ["I",  , "home"];
  alert( arr.length ); // 3

//SLICE
arr.splice(index, [ deleteCount, elem1, elemN])

let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]


let arr = ["I", "study", "JavaScript", "right", "now"];
  // remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
alert( arr ) // now ["Let's", "dance", "right", "now"]

let arr = ["I", "study", "JavaScript", "right", "now"];
  // remove 2 first elements
let removed = arr.splice(0, 2);
alert( removed ); // "I", "study" <-- array of removed elements

let arr = ["I", "study", "JavaScript"];
  // from index 2 , delete 0 , then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
alert( arr ); // "I", "study", "complex", "language", "JavaScript"

//SLICE
arr.slice([start], [end]);

let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
alert( arr.slice(-2) ); // s,t (copy from -2 till the end)


//CONCAT
arr.concat(arg1, arg2,);

let arr = [1, 2];

  // create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4
  // create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
  // create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

  //to add an object into an array
  let arr = [1, 2];
  let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
  };
  alert( arr.concat(arrayLike) ); // 1,2,something,else


//ITERATE : forEach
arr.forEach(function(item, index, array) {
  // ... do something with item
});

  // for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});


//SEARCHING IN ARRAY
/*
arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from) – same, but looks for from right to left.
arr.includes(item, from) – looks for item starting from index from, returns true if found.
*/

 //indexOf/lastIndexOf and includes
 let arr = [1, 0, false];
 alert( arr.indexOf(0) ); // 1
 alert( arr.indexOf(false) ); // 2
 alert( arr.indexOf(null) ); // -1

 alert( arr.includes(1) ); // true

 //find and findIndex
 let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
  });

  let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  let user = users.find(item => item.id == 1);
  alert(user.name); // John

  //filter
  let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
  });


  let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  // returns array of the first two users
  let someUsers = users.filter(item => item.id < 3);
  alert(someUsers.length); // 2


//TRANSFORM AN ARRAY

//map
let result = arr.map(function(item, index, array) {
    // returns the new value instead of item
});
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

//sort(fn)
let arr = [ 1, 2, 15 ];
  // the method reorders the content of arr 
arr.sort();
alert( arr );  // 1, 15, 2 ,The items are sorted as strings by default.


function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  let arr = [ 1, 2, 15 ];
  arr.sort(compareNumeric);
  alert(arr);  // 1, 2, 15

  //or
  arr.sort( (a, b) => a - b );

//reverse
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1

//split
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
alert(arr); // Bilbo, Gandalf

let str = "test";
alert( str.split('') ); // t,e,s,t

//join
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';'); // glue the array into a string using ;
alert( str ); // Bilbo;Gandalf;Nazgul


//Array.isArray
alert(typeof {}); // object
alert(typeof []); // same

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true



//EXAMPLES

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];
// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);
  alert(soldiers.length); // 2
  alert(soldiers[0].age); // 20
  alert(soldiers[1].age); // 23


//1.
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

//2.
function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  alert( filtered ); // 3,1 (matching values)
  alert( arr ); // 5,3,8,1 (not modified)

//3.
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  let arr = [5, 3, 8, 1];
  filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  alert( arr ); // [3, 1]

//4.
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr );

//5.
function copySorted(arr) {
    return arr.slice().sort();
  }
  let arr = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr);
  alert( sorted );
  alert( arr );

//6.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(item => item.name);
alert( names ); // John, Pete, Mary

//7.
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };

  let arr = [ john, pete, mary ];
  alert( getAverageAge(arr) ); // 28