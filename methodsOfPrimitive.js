/*
A primitive
Is a value of a primitive type.
There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

An object
Is capable of storing multiple values as properties.
Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.
*/


//A PRIMITIVE AS AN OBJECT
let str = "Hello";
alert( str.toUpperCase() ); // HELLO

let n = 1.23456;
alert( n.toFixed(2) ); // 1.23

//HIGHLY UNRECOMMENDED
alert( typeof 0 ); // "number"
alert( typeof new Number(0) ); // "object"!

let zero = new Number(0);
if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}


//*NULL/UNDEFINED HAVE NO METHODS
//The special primitives null and undefined are exceptions. They have no corresponding “wrapper objects” and provide no methods. In a sense, they are “the most primitive”.
alert(null.test); // error
