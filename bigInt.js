/*BigInt is a special numeric type that provides support for integers of arbitrary length.
A bigint is created by appending n to the end of an integer literal or by calling the function BigInt that creates bigints from strings, numbers etc.
*/
const bigint = 1234567890123456789012345678901234567890n;
const sameBigint = BigInt("1234567890123456789012345678901234567890");
const bigintFromNumber = BigInt(10); // same as 10n


//MATH OPERATOR
//Can mostly be used as regular numbers
alert(1n + 2n); // 3
alert(5n / 2n); // 2

alert(1n + 2); // Error: Cannot mix BigInt and other types

   //We should explicitly convert them if needed: using either BigInt() or Number(), like this
   let bigint = 1n;
   let number = 2;
    // number to bigint
   alert(bigint + BigInt(number)); // 3
    // bigint to number
   alert(Number(bigint) + number); // 3


//CONVERSIONS
alert( 2n > 1n ); // true
alert( 2n > 1 ); // true

alert( 1 == 1n ); // true
alert( 1 === 1n ); // false


//BOOLEAN OPERATIONS
/*
When inside if or other boolean operations, bigints behave like numbers.
For instance, in if, bigint 0n is falsy, other values are truthy
*/
if (0n) {
    // never executes
}
alert( 1n || 2 ); // 1 (1n is considered truthy)
alert( 0n || 2 ); // 2 (0n is considered falsy)