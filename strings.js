//Quotes
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

function sum(a, b) {
    return a + b;
}
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList); // a list of guests, multiple lines


//SPECIAL CHARACTERS
  // \n
     let guestList = "Guests:\n * John\n * Pete\n * Mary";
     alert(guestList); // a multiline list of guests
  // \t --> tab
  // \b --> backspace
  // \' \" --> quotes   and many more

  alert( 'I\'m the Walrus!' ); // I'm the Walrus!
  alert( `I'm the Walrus!` ); // I'm the Walrus!
  alert( `The backslash: \\` ); // The backslash: \

//STRING LENGTH
alert( `My\n`.length ); // 3
   //Please note that str.length is a numeric property, not a function. There is no need to add parenthesis after it.


//ACCESSING CHARACTERS

  let str = `Hello`;
  // the first character
  alert( str[0] ); // H
  alert( str.charAt(0) ); // H
  // the last character
  alert( str[str.length - 1] ); // o


  let str = `Hello`;
  alert( str[1000] ); // undefined
  alert( str.charAt(1000) ); // '' (an empty string)


  for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
  }


//STRINGS ARE IMMUTABLE
//Strings can’t be changed in JavaScript. It is impossible to change a character.
let str = 'Hi';
str[0] = 'h'; // error
alert( str[0] ); // doesn't work

let str = 'Hi';
str = 'h' + str[1]; // replace the string
alert( str ); // hi


//CHANGING THE CASE
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface


//SEARCHING FOR A SUBSTRING
str.indexOf("abc" ,2);


let str = 'Widget with id';
alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

//with second parameter
let str = 'Widget with id';
alert( str.indexOf('id', 2) ) // 12

//for all occurences
let str = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

str.lastIndexOf(substr, position) // --> There is also a similar method str.lastIndexOf(substr, position) that searches from the end of a string to its beginning.

//problem
let str = "Widget with id";
if (str.indexOf("Widget")) {
    alert("We found it"); // doesn't work!
}

if (str.indexOf("Widget") != -1) {
    alert("We found it"); // works now!
}

//INCLUDES,  STARTSWITH , ENDSWITH
str.includes(substr, pos);

alert( "Widget with id".includes("Widget") ); // true
alert( "Hello".includes("Bye") ); // false

alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"


//GETTING A SUBSTRING
str.slice(start, [end]); //Returns the part of the string from start to (but not including) end.

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

let str = "stringify";
alert( str.slice(2) ); // 'ringify', from the 2nd position till the end

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // 'gif'



str.substring(start, [ end]) //Returns the part of the string between start and end.
//This is almost the same as slice, but it allows start to be greater than end.

let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)




str.substr(start ,[ length])
let str = "stringify";
alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters

let str = "stringify";
alert( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters


//COMPARING STRINGS
alert( 'a' > 'Z' ); // true
alert( 'Österreich' > 'Zealand' ); // true

alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90

alert( String.fromCodePoint(90) ); // Z

/*
Returns a negative number if str is less than str2.
Returns a positive number if str is greater than str2.
Returns 0 if they are equivalent
*/

alert( 'Österreich'.localeCompare('Zealand') ); // -1
