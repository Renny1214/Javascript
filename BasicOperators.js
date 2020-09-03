//UNIARY / BINARY / OPERAND
/*  An operand – is what operators are applied to.   5*2 = Here 5 and 2 are opearnds.
    Uniary - An operator is unary if it has a single operand. x= -x;
    Binary - An operator is binary if it has two operands.. x-y;
    */


//MATHS
/* + , - , * , / , ** , %   */
        alert(1+2);
        alert(2-1);
        alert(2*2);
        alert(2/2);
     //  ** - Exponentiation - The exponentiation operator a ** b multiplies a by itself b times.
         alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 times)
         alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
         alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)
     //  % - Remainder -  The result of a % b is the remainder of the integer division of a by b.
         alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
         alert( 8 % 3 ); // 2, a remainder of 8 divided by 3


//STRING CONCATENATION WITH +
    //if the binary + is applied to strings, it merges (concatenates) them:
         let s = "my" + "string";
         alert(s); // mystring
    //if any of the operands is a string, then the other one is converted to a string too.
         alert( '1' + 2 ); // "12"
         alert( 2 + '1' ); // "21"
    //The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.
         alert( 6 - '2' ); // 4, converts '2' to a number
         alert( '6' / '2' ); // 3, converts both operands to numbers


//NUMERIC CONVERSION, UNIARY +
    //The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
        // No effect on numbers
             let x = 1;
             alert( +x ); // 1

             let y = -2;
             alert( +y ); // -2

        // Converts non-numbers
             alert( +true ); // 1
             alert( +"" );   // 0


//OPERATOR PRECEDENCE
    /*   17  unary plus	    +
         17	unary negation	-
         16	exponentiation	**
         15	multiplication	*
         15	division	/
         13	addition	+
         13	subtraction	-
         …	…	…
         3	assignment	=
         …	…	…   */

    
//ASSIGNMENT
  //It has a low priority.
       let x = 2 * 2 + 1;
       alert( x ); // 5

    
//ASSIGNMENT  = RETURNS A VALUE
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0


//CHAINING ASSIGNMENT
  //Chained assignments evaluate from right to left.
  let a, b, c;

  a = b = c = 2 + 2;
  
  alert( a ); // 4
  alert( b ); // 4
  alert( c ); // 4

  //OR

  c = 2 + 2;
  b = c;
  a = c;


//MODIFY-IN-PLACE
let n = 2;    let n =2;
n = n + 5;    n += 5;
n = n * 2;    n *=2;

//INCREMENT / DECREMENT
  //Increment ++ increases a variable by 1:
  let counter = 2;
  counter++;        // works the same as counter = counter + 1, but is shorter
  alert( counter ); // 3
  //Decrement -- decreases a variable by 1:
  let counter = 2;
  counter--;        // works the same as counter = counter - 1, but is shorter
  alert( counter ); // 1


  //If the result of increment/decrement is not used, there is no difference in which form to use:
      let counter = 0;
      counter++;
      ++counter;
      alert( counter ); // 2, the lines above did the same
  //If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
      let counter = 0;
      alert( ++counter ); // 1
  //If we’d like to increment a value but use its previous value, we need the postfix form:
      let counter = 0;
      alert( counter++ ); // 0


//BITWISE OPERATOR
/*
   AND ( & )
   OR ( | )
   XOR ( ^ )
   NOT ( ~ )
   LEFT SHIFT ( << )
   RIGHT SHIFT ( >> )
   ZERO-FILL RIGHT SHIFT ( >>> )
*/


//COMMA
  //The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
     let a = (1 + 2, 3 + 4);
     alert( a ); // 7 (the result of 3 + 4)