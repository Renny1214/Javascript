//CODE BLOCKS
  //If a variable is declared inside a code block {...}, it’s only visible inside that block.
   {
    // do some job with local variables that should not be seen outside
    let message = "Hello"; // only visible in this block
    alert(message); // Hello
   }
   alert(message); // Error: message is not defined


   //We can use this to isolate a piece of code that does its own task, with variables that only belong to it:
   {
    // show message
    let message = "Hello";
    alert(message);
   }
   {
    // show another message
    let message = "Goodbye";
    alert(message);
   }

   //For if, for, while and so on, variables declared in {...} are also only visible inside:
   if (true) {
    let phrase = "Hello!";
  
    alert(phrase); // Hello!
   }
   alert(phrase); // Error, no such variable!


//NESTED FUNCTION
/*A function is called “nested” when it is created inside another function.
It is easily possible to do this with JavaScript.*/

function sayHiBye(firstName, lastName) {
    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
}


function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
let counter = makeCounter();
  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter() ); // 2


//EXTRA

//1.
function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

//2.
function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

//3.
function sum(a) {

    return function(b) {
      return a + b; // takes "a" from the outer lexical environment
    };
  
  }
alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4