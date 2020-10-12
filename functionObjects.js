//In JavaScript, functions are objects.

//THE "name" PROPERTY
function sayHi() {
    alert("Hi");
  }
alert(sayHi.name); // sayHi


let sayHi = function() {
    alert("Hi");
  };
alert(sayHi.name); // sayHi (there's a name!)


let user = {
    sayHi() {
      // ...
    },
    sayBye: function() {
      // ...
    }
}
alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

//THE "length" PROPERTY
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2


//CUSTOM PROPERTIES
function sayHi() {
    alert("Hi");
  
    // let's count how many times we run
    sayHi.counter++;
  }
sayHi.counter = 0; // initial value
  
sayHi(); // Hi
sayHi(); // Hi
  
alert( `Called ${sayHi.counter} times` ); // Called 2 times