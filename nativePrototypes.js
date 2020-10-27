//Object.prototype
let obj = {};
alert( obj ); // "[object Object]" ?
  /* Where’s the code that generates the string "[object Object]"? That’s a built-in toString method, but where is it? The obj is empty!
     …But the short notation obj = {} is the same as obj = new Object(), where Object is a built-in object constructor function, with its own prototype referencing a huge object with toString and other methods.
  */

 let obj = {};
 alert(obj.__proto__ === Object.prototype); // true
 alert(obj.toString === obj.__proto__.toString); //true
 alert(obj.toString === Object.prototype.toString); //true


//other built-in prototypes
let arr = [1, 2, 3];
   // it inherits from Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true
   // then from Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true
   // and null on the top.
alert( arr.__proto__.__proto__.__proto__ ); // null

let arr = [1, 2, 3]
alert(arr); // 1,2,3 <-- the result of Array.prototype.toString


//changing native prototype(Native prototypes can be modified. For instance, if we add a method to String.prototype, it becomes available to all strings)
String.prototype.show = function() {
    alert(this);
  };
"BOOM!".show(); // BOOM!