// A value in Javascript is always of a certain type. We can put any type any type ina varible.
let message = "hello";
message = 1234;

//Javascript is "dynamically typed" meaning there are data types , not variables are not bound to them.

//NUMBER  (both int and float)
let n = 123;
let n1= 123.45;
    // special numeric values ---> infinite , -infinite , NaN.
        alert(1/0); // --> infinity
        alert("not a number"/2); // --> NaN



//BIGIT ( values larger than (2^53 -1) and less than -(2^53 -1))
    // ---> a bigint value is created by appending n to the end of integer.
        const bigInt = 12345678901234567890123456789012345678901234567890n;



//STRING (must be surrounded by quotes)
let str = "hello world";
   /* 3 types of quotes
      i) " "    (Simple quote)
      ii) ' '   (Simple quote)
      iii) ` `  (extending functionality - They allow us to embed variables and expressions into a string by wrapping them in ${…})
   */
    
   let name = "john";
   alert(`hello , ${name}!`); //embed a varible results hello john!
   alert(`${1+2}`); //embed a expression results 3
   //*The expression inside ${…} is evaluated and the result becomes a part of the string. We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.
   alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

   //*** There is no character type */



//BOOLEAN ( logical type )
    // yes/no or true/false or correct/incorect
       let nameChecked = true;
       let ageChecked = false;
         // boolean values also come as a result of comparison
             let isGreater = 4>1;
             alert(isGreater); //true



//NULL VALUE (it represent nothing, empty , value unknown)
    // special null value does not belong to any of these types.
    // ---> it forms a seperate type of its own which contains only the null value
       let age = null;


//UNDEFINED VALUE
    // it also stands apart. the meaning undefined is "value is not assigned"
      let age;
      alert(age); //shows undefined
    // it is possible to explicitly assign udefined
      let age = 100;
      age = undefined;
      alert(age);  // -->undefined


//OBJECTS AND SYMBOL
    // Objects --> it can store collections of data and more complex entites.
    // Symbol --> create identifiers for objects.


//TYPE OPERATOR
    //returns the type of the argument
    /* 1. As an operator type of x;
       2. As a function typeof(x);
    */
    x=5;
    typeof x;
    typeof(x);
    










   
 