//we use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

//THE IF STATEMENT
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

//for multiple lines
if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
  }

//BOOLEAN CONVERSION
// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”.
if (0) { // 0 is falsy
   alert("true");
  }
if (1) { // 1 is truthy
   alert("false");
  }

//THE ELSE CLAUSE
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

//SEVERAL CONSITIONS ELSE/IF
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

//CONDITIONAL OPERATOR (let result = condition ? value1 : value2;)
//The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

//example
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
 
//SAME AS

let accessAllowed = (age > 18) ? true : false;

//MULTIPLY
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
 /*The first question mark checks whether age < 3.
   If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon ‘":"’, checking age < 18.
   If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon ‘":"’, checking age < 100.
   If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon ‘":"’, returning 'What an unusual age!'.
    */
   
