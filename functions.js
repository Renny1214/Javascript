//Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
// built-in functions, like alert(message), prompt(message, default) and confirm(question)
function showMessage() {
    alert( 'Hello everyone!' );
  }

  function showMessage() {
    alert( 'Hello everyone!' );
  }
  
  showMessage();
  showMessage();


//LOCAL VARIABLES (A variable declared inside a function is only visible inside that function.)
function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
    alert( message );
  }
  
  showMessage(); // Hello, I'm JavaScript!
  
  alert( message ); // <-- Error! The variable is local to the function


//OUTER VARIABLES(The function has full access to the outer variable. It can modify it as well.)
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}
showMessage(); // Hello, John

//or

let userName = 'John';
function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}
alert( userName ); // John before the function call
showMessage();
alert( userName ); // Bob, the value was modified by the function


//If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:
let userName = 'John';
function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}
    // the function will create and use its own userName
showMessage();
alert( userName ); // John, unchanged, the function did not access the outer variable


//PARAMETERS(We can pass arbitrary data to functions using parameters (also called function arguments))
function showMessage(from, text) { // arguments: from, text
    alert(from + ': ' + text);
  }
  
  showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
  showMessage('Ann', "What's up?"); // Ann: What's up? (**)


//we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:
   function showMessage(from, text) {
       from = '*' + from + '*'; // make "from" look nicer
       alert( from + ': ' + text );
   }
   let from = "Ann";
   showMessage(from, "Hello"); // *Ann*: Hello
        // the value of "from" is the same, the function modified a local copy
    alert( from ); // Ann

//DEFAULT VALUES(If a parameter is not provided, then its value becomes undefined.)
  //If we want to use a “default” text in this case, then we can specify it after =:
    function showMessage(from, text = "no text given") {
       alert( from + ": " + text );
    }
    showMessage("Ann"); // Ann: no text given

    //or
    function showMessage(from, text = anotherFunction()) {
        // anotherFunction() only executed if no text given
        // its result becomes the value of text
      }


//ALTERANTIVE DEFAULT PARAMETER
    function showMessage(text) {
       if (text === undefined) {
        text = 'empty message';
       }
       alert(text);
     }
     showMessage(); // empty message

     //…Or we could use the || operator:
     // if text parameter is omitted or "" is passed, set it to 'empty'
     function showMessage(text) {
         text = text || 'empty';
   }

//RETURNING A VALUE
    function sum(a, b) {
       return a + b;
    }
  
    let result = sum(1, 2);
    alert( result ); // 3

    //OR

   function checkAge(age) {
       if (age >= 18) {
         return true;
       } else {
         return false;
       }
    }
  
  function showMovie(age) {
    if ( checkAge(age) ) {
      return true;
    }
    alert("not allowed");
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( showMovie(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }

//A function with an empty return or without it returns undefined
function doNothing() { /* empty */ }
alert( doNothing() === undefined ); // true

   function doNothing() {
      return;
    }
    alert( doNothing() === undefined ); // true


//FUNCTIONS == COMMENTS
function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      alert(i);  // a prime
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }