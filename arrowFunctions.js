// let func = (arg1 ,arg2 ,.., argN) => Expression;

//This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.
let func = (a,b) => a+b;

//for more lines 
let func = (a,b) => {
    result = a+b;
    return result;
};

//for only one argument
let res = n => n*2;

//for no argument
let sayHi = () => alert("hi");

//create a function expression
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();


//multi arrow functions
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  alert( sum(1, 2) ); // 3


