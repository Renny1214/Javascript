//variables

//online shopping has cart,goods,customers this all information is neede to be stored somewhere and we store it in varibles.
// a variable is "named storage" for data
let message;
//to put in some data
let message = "hello"; //(will give error. why? found out below)

//define  multiple variables in one line, 
let user ="abc" , age="20" , text="hello";

//some people use var its old school
//values can be changed
let a = 10;
a=20;
alert(a);  //will give 20 as output

//we can copy data
message1 = message;
alert(message1);   //will print hello

//declaring same variable will give error
// answer to the above question . javascipt doesnt allow declaring variables twice.

//VARIABLE NAMING
/* 1. Name must contain only letters, numbers or symbols ($,_);
   2. First character must not be a digit.
   */

// multiple word declaration = myNameIsRenny
var $ =1;
var _= 2;
alert($+_);  // will alert 3.


//case matters .( apple is different from Apple);
// Non latin words are allowed, not recomended.
// reserved names - let class return function

//CONSTANTS (unchanging variables)
const myBirthday = "26.02.1999";
 
// uppercase constants (difficult to remember values)
const COLOR_RED = "#009";
let color = COLOR_RED;
alert(color);  // will give #009

// * functional languages like scala and erlang doesnt allow changing variable names.


