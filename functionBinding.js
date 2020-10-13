//Losing "this"
let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
setTimeout(user.sayHi, 1000); // Hello, undefined!

//Solution 1 : a wrapper
let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
 
  setTimeout(function() {
    user.sayHi(); // Hello, John!
}, 1000);

//or
setTimeout(() => user.sayHi(), 1000); // Hello, John!


let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  setTimeout(() => user.sayHi(), 1000);
  // ...the value of user changes within 1 second
  user = {
    sayHi() { alert("Another user in setTimeout!"); }
  };
  // Another user in setTimeout!


//Solution 2: bind

  let user = {
    firstName: "John"
  };
  function func() {
    alert(this.firstName);
  }
  let funcUser = func.bind(user);
  funcUser(); // John



  let user = {
    firstName: "John"
  };
  function func(phrase) {
    alert(phrase + ', ' + this.firstName);
  }
  // bind this to user
  let funcUser = func.bind(user);
  funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)

  //with object method
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  let sayHi = user.sayHi.bind(user); // (*)
    // can run it without an object
  sayHi(); // Hello, John!
  setTimeout(sayHi, 1000); // Hello, John!
    // even if the value of user changes within 1 second
    // sayHi uses the pre-bound value which is reference to the old user object
  user = {
    sayHi() { alert("Another user in setTimeout!"); }
  };



  let user = {
    firstName: "John",
    say(phrase) {
      alert(`${phrase}, ${this.firstName}!`);
    }
  };
  let say = user.say.bind(user);
  say("Hello"); // Hello, John ("Hello" argument is passed to say)
  say("Bye"); // Bye, John ("Bye" is passed to say)


//Partial functions
//let bound = func.bind(context, [arg1], [arg2], ...);

function mul(a, b) {
    return a * b;
  }
let double = mul.bind(null, 2);

  alert( double(3) ); // = mul(2, 3) = 6
  alert( double(4) ); // = mul(2, 4) = 8
  alert( double(5) ); // = mul(2, 5) = 10