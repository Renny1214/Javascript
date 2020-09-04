/*
Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
Not equals. In maths the notation is ≠, but in JavaScript it’s written as a != b.
*/


//BOOLEAN IS THE RESULT
alert( 2 > 1 );  // true (correct , yes)
alert( 2 == 1 ); // false (wrong ,false)
alert( 2 != 1 ); // true (correct)

//STRING COMPARISON ( JavaScript uses “dictionary” or “lexicographical” order.)
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

     //A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode). 


//COMPARISONS OF DIFFERENT TYPES
    //When comparing values of different types, JavaScript converts the values to numbers.
    alert( '2' > 1 ); // true, string '2' becomes a number 2
    alert( '01' == 1 ); // true, string '01' becomes a number 1

    alert( true == 1 ); // true
    alert( false == 0 ); // true


//STRICT EVIDENCE
  //A regular equality check == has a problem. It cannot differentiate 0 from false:
  alert( 0 == false ); // true
  alert( '' == false ); // true

  //A strict equality operator === checks the equality without type conversion.
     // if a and b are of different types, then a === b immediately returns false without an attempt to convert them.
     alert( 0 === false ); // false, because the types are different


//COMPARISON WITH NULL AND UNDEFINED
alert( null === undefined ); // false
alert( null == undefined ); // true

/* For maths and other comparisons < > <= >=
null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.*/


//STRANGE RESULT : NULL vs 0
alert( null > 0 );  //   NULL BECOMES  0 (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // null becomes 0(3) true

   /*The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
     On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
     */

//AN INCOMPARABLE UNDEFINED
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
  
    /*Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
      The equality check (3) returns false because undefined only equals null, undefined, and no other value.
     */





