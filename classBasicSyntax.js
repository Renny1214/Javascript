class User {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      alert(this.name);
    }
}
  // Usage:
let user = new User("John");
user.sayHi();


//What is a class?
class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  // proof: User is a function
alert(typeof User); // function



class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  // class is a function
  alert(typeof User); // function
  // ...or, more precisely, the constructor method
  alert(User === User.prototype.constructor); // true
  // The methods are in User.prototype, e.g:
  alert(User.prototype.sayHi); // alert(this.name);
  // there are exactly two methods in the prototype
  alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi


//Class Expression (Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.)
let User = class {
    sayHi() {
      alert("Hello");
    }
};


// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class MyClass {
    sayHi() {
      alert(MyClass); // MyClass name is visible only inside the class
    }
  };
  new User().sayHi(); // works, shows MyClass definition
  alert(MyClass); // error, MyClass name isn't visible outside of the class



//Getters/Setters (Just like literal objects, classes may include getters/setters, computed properties etc.)
class User {
    constructor(name) {
      // invokes the setter
      this.name = name;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
}
  let user = new User("John");
  alert(user.name); // John
  user = new User(""); // Name is too short.


//Computed names[...]
class User {
    ['say' + 'Hi']() {
      alert("Hello");
    }
}
new User().sayHi();


//Class fields
class User {
    name = "John";
    sayHi() {
      alert(`Hello, ${this.name}!`);
    }
}
new User().sayHi(); // Hello, John!


class User {
    name = "John";   // name = prompt("Name, please?", "John");
  }
  let user = new User();
  alert(user.name); // John
  alert(User.prototype.name); // undefined