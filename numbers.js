//WAYS TO WRITE NUMBERS
let billion = 1000000000;

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
alert( 7.3e9 );  // 7.3 billions (7,300,000,000)
   //In other words, "e" multiplies the number by 1 with the given zeroes count.
   1e3 = 1 * 1000
   1.23e6 = 1.23 * 1000000

// let’s write something very small. Say, 1 microsecond (one millionth of a second):
let ms = 0.000001;
let ms = 1e-6; // six zeroes to the left from 1
   //In other words, a negative number after "e" means a division by 1 with the given number of zeroes:
        // -3 divides by 1 with 3 zeroes
        1e-3 = 1 / 1000 (0.001)
        // -6 divides by 1 with 6 zeroes
        1.23e-6 = 1.23 / 1000000 (0.00000123)


//HEX , BINARY AND OCTAL NUMBERS
    //Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things.
        alert( 0xff ); // 255
        alert( 0xFF ); // 255 (the same, case doesn't matter)
    //Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes
        let a = 0b11111111; // binary form of 255
        let b = 0o377; // octal form of 255
        alert( a == b ); // true, the same number 255 at both sides


//toString(base)
    //The method num.toString(base) returns a string representation of num in the numeral system with the given base.
    let num = 255;
    alert( num.toString(16) );  // ff
    alert( num.toString(2) );   // 11111111

    //we can write it this way
    alert( 123456..toString(36) ); // 2n9c
    (123456).toString(36);


//ROUNDING
Math.floor(3.1); //3  //Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil(3.1); //4   //Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round(3.1); //3  //Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4 and -1.1 becomes -1.
Math.trunc(3.1); //3  //Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

   //we have 1.2345 and want to round it to 2 digits, getting only 1.23.
   //1. Multiply-and-divide
        let num = 1.23456;
        alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
   //2. toFixed(n)
        let num = 12.34;
        alert( num.toFixed(1) ); // "12.3"

        let num = 12.36;
        alert( num.toFixed(1) ); // "12.4"

        let num = 12.34;
        alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits


//IMPRECISE CALCULATIONS
alert( 1e500 ); // Infinity
alert( 0.1 + 0.2 == 0.3 ); // false
alert( 0.1 + 0.2 ); // 0.30000000000000004


//TESTS: isFinite and isNaN
    /*Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
       NaN represents an error.*/

    //isNaN(value) converts its argument to a number and then tests it for being NaN:
    alert( isNaN(NaN) ); // true
    alert( isNaN("str") ); // true

    //isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:
    alert( isFinite("15") ); // true
    alert( isFinite("str") ); // false, because a special value: NaN
    alert( isFinite(Infinity) ); // false, because a special value: Infinity


//parseInt and parseFloat
alert( +"100px" ); // NaN
   //They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. The function parseInt returns an integer, whilst parseFloat will return a floating-point number
   alert( parseInt('100px') ); // 100
   alert( parseFloat('12.5em') ); // 12.5
   alert( parseInt('12.3') ); // 12, only the integer part is returned
   alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading


//OTHER MATH FUNCTIONS
Math.random();  //Returns a random number from 0 to 1 (not including 1)
alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)

Math.max(a, b, c) / Math.min(a, b, c);  //Returns the greatest/smallest from the arbitrary number of arguments.
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

Math.pow(n, power);  //Math.pow(n, power)
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024











