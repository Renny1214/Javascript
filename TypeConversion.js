//Most of the time, operators and functions automatically connect the values given to them to the right type.
// but there are times we need to convert a value to expected type.

//SRING CONVERSION (whne we need string form of a value.)
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string


//NUMERIC CONVERSION
//Numeric conversion happens in mathematical functions and expressions automatically.
alert( "6" / "2" ); // 3, strings are converted to numbers
   //To convert explicitely
   let str = "123";
   alert(typeof str); // string
   
   let num = Number(str); // becomes a number 123
   
   alert(typeof num); // number

   //If the string is not a valid number, the result of such a conversion is NaN
   let age = Number("an arbitrary string instead of a number");
   alert(age); // NaN, conversion failed

   //Examples
   alert( Number("   123   ") ); // 123
   alert( Number("123z") );      // NaN (error reading a number at "z")
   alert( Number(true) );        // 1
   alert( Number(false) );       // 0


//BOOLEAN CONVERSION
//It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value)
/*The conversion rule:

Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.*/
   alert( Boolean(1) ); // true
   alert( Boolean(0) ); // false

   alert( Boolean("hello") ); // true
   alert( Boolean("") ); // false