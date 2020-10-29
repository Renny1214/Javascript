//A mixin is a class containing methods that can be used by other classes without a need to inherit from it
//The simplest way to implement a mixin in JavaScript is to make an object with useful methods, so that we can easily merge them into a prototype of any class.

// mixin
let sayHiMixin = {
    sayHi() {
      alert(`Hello ${this.name}`);
    },
    sayBye() {
      alert(`Bye ${this.name}`);
}
};
// usage:
class User {
    constructor(name) {
      this.name = name;
    }
}
// copy the methods
Object.assign(User.prototype, sayHiMixin);
// now User can say hi
new User("Dude").sayHi(); // Hello Dude!


/*
Mixins can make use of inheritance inside themselves.
For instance, here sayHiMixin inherits from sayMixin
*/
let sayMixin = {
    say(phrase) {
      alert(phrase);
    }
};
let sayHiMixin = {
    __proto__: sayMixin, // (or we could use Object.create to set the prototype here)
    sayHi() {
      // call parent method
      super.say(`Hello ${this.name}`); // (*)
    },
    sayBye() {
      super.say(`Bye ${this.name}`); // (*)
    }
};
class User {
    constructor(name) {
      this.name = name;
    }}
// copy the methods
Object.assign(User.prototype, sayHiMixin);
// now User can say hi
new User("Dude").sayHi(); // Hello Dude!