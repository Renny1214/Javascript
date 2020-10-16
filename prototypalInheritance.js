/*
In programming, we often want to take something and extend it.
For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.
Prototypal inheritance is a language feature that helps in that.
*/

//[[Prototype]]
/*
The prototype is a little bit “magical”. When we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, such thing is called “prototypal inheritance”. Many cool language features and programming techniques are based on it.
*/
let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
rabbit.__proto__ = animal;

let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal; // (*)
  // we can find both properties in rabbit now:
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true


//So if animal has a lot of useful properties and methods, then they become automatically available in rabbit. Such properties are called “inherited”.
let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
// walk is taken from the prototype
rabbit.walk(); // Animal walk


//The prototype chain can be longer:
let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
let longEar = {
    earLength: 10,
    __proto__: rabbit
};
  // walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)

/*There are only two limitations:
The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
The value of __proto__ can be either an object or null. Other types are ignored.
*/



//Writing doesnt use prototype
let animal = {
    eats: true,
    walk() {
      /* this method won't be used by rabbit */
    }
};
let rabbit = {
    __proto__: animal
};
rabbit.walk = function() {
    alert("Rabbit! Bounce-bounce!");
};
rabbit.walk(); // Rabbit! Bounce-bounce!


let user = {
    name: "John",
    surname: "Smith",
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
};
let admin = {
    __proto__: user,
    isAdmin: true
};
alert(admin.fullName); // John Smith (*)
  // setter triggers!
admin.fullName = "Alice Cooper"; // (**)
alert(admin.fullName); // Alice Cooper , state of admin modified
alert(user.fullName); // John Smith , state of user protected


//The value of "this"
  // animal has methods
let animal = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
};
let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};
  // modifies rabbit.isSleeping
rabbit.sleep();
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)


//for ... in loop
let animal = {
    eats: true
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
  // Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps
  // for..in loops over both own and inherited keys
for(let prop in rabbit) alert(prop); // jumps, then eats

/*If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.
So we can filter out inherited properties (or do something else with them):*/
let animal = {
    eats: true
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
  
    if (isOwn) {
      alert(`Our: ${prop}`); // Our: jumps
    } else {
      alert(`Inherited: ${prop}`); // Inherited: eats
    }
}
