/*
There are two kinds of object properties.
The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.
The second type of properties is something new. It’s accessor properties. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.
*/

//GETTERS AND SETTERS
   // syntax
   let obj = {
      get propName() {
      // getter, the code executed on getting obj.propName
      },
    set propName(value) {
      // setter, the code executed on setting obj.propName = value
      }
   };


    let user = {
    name: "John",
    surname: "Smith",
      get fullName() {
         return `${this.name} ${this.surname}`;
      }
    };
    alert(user.fullName); // John Smith

    //fullName has only a getter. If we attempt to assign user.fullName=, there will be an error:
    let user = {
        get fullName() {
          return `...`;
        }
      };
    user.fullName = "Test"; // Error (property has only a getter)

    //Let’s fix it by adding a setter for user.fullName:
    let user = {
        name: "John",
        surname: "Smith",
      
        get fullName() {
          return `${this.name} ${this.surname}`;
        },
      
        set fullName(value) {
          [this.name, this.surname] = value.split(" ");
        }
      };
      // set fullName is executed with the given value.
      user.fullName = "Alice Cooper";
      alert(user.name); // Alice
      alert(user.surname); // Cooper


//ACCESSOR DESCRIPTORS
//For accessor properties, there is no value or writable, but instead there are get and set functions.

let user = {
    name: "John",
    surname: "Smith"
  };
  Object.defineProperty(user, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
});
alert(user.fullName); // John Smith
for(let key in user) alert(key); // name, surname

//If we try to supply both get and value in the same descriptor, there will be an error:
// Error: Invalid property descriptor.
Object.defineProperty({}, 'prop', {
    get() {
      return 1
    },
   value: 2
});


//SMARTER GETTERS/SETTERS
let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };
  
  user.name = "Pete";
  alert(user.name); // Pete
  
  user.name = ""; // Name is too short...