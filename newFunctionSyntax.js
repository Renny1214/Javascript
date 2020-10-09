let func = new Function ([arg1, arg2, ...argN], functionBody);


let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3

//And here there’s a function without arguments, with only the function body:
let sayHi = new Function('alert("Hello")');
sayHi(); // Hello

//CLOSURE
/*Usually, a function remembers where it was born in the special property [[Environment]]. It references the Lexical Environment from where it’s created (we covered that in the chapter Variable scope, closure).
But when a function is created using new Function, its [[Environment]] is set to reference not the current Lexical Environment, but the global one.*/


function getFunc() {
    let value = "test";
  
    let func = new Function('alert(value)');
  
    return func;
  }
getFunc()(); // error: value is not defined