//emoty array
let arr = new Array();
let arr = [];

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"] --> replace an element
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"] --> add new element
alert( fruits.length ); // 3  count

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
     // get the object at index 1 and then show its name
     alert( arr[1].name ); // John
     // get the function at index 3 and run it
     arr[3](); // hello

    
//Methods pop/push, shift/unshift 
  //Methods that work with the end of the array:
    //POP  --> Extracts the last element of the array and returns it
    let fruits = ["Apple", "Orange", "Pear"];
    alert( fruits.pop() ); // remove "Pear" and alert it
    alert( fruits ); // Apple, Orange

    //PUSH --> Append the element to the end of the array
    let fruits = ["Apple", "Orange"];
    fruits.push("Pear");
    alert( fruits ); // Apple, Orange, Pear

  //Methods that work with the beginning of the array
    //SHIFT --> Extracts the first element of the array and returns it
    let fruits = ["Apple", "Orange", "Pear"];
    alert( fruits.shift() ); // remove Apple and alert it
    alert( fruits ); // Orange, Pear

    //UNSHIFT --> Add the element to the beginning of the array
    let fruits = ["Orange", "Pear"];
    fruits.unshift('Apple');
    alert( fruits ); // Apple, Orange, Pear

//*Methods push/pop run fast, while shift/unshift are slow.

//LOOPS
let arr = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

let fruits = ["Apple", "Orange", "Plum"];  // iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

let arr = ["Apple", "Orange", "Pear"];
for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}

//ABOUT LENGTH
let arr = [1, 2, 3, 4, 5];
arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]
arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return


//NEW ARRAY()
let arr = new Array("Apple", "Pear", "etc");

 //If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.
let arr = new Array(2); // will it create an array of [2] ?
alert( arr[0] ); // undefined! no elements.
alert( arr.length ); // length 2

//MULTIDIMENSIONAL ARRAY
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
alert( matrix[1][1] ); // 5, the central element

//toString

let arr = [1, 2, 3];
alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"


//SOME FUNCTIONS
function sumInput() {
    let numbers = [];
    while (true) {
      let value = prompt("A number please?", 0);
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}
alert( sumInput() );



function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  alert( getMaxSubSum([1, 2, 3]) ); // 6
  alert( getMaxSubSum([-1, -2, -3]) ); // 0