//PROPERTY FLAGS
/*Object properties, besides a value, have three special attributes (so-called “flags”):

writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
*/
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

//The returned value is a so-called “property descriptor” object: it contains the value and all the flags.
let user = {
    name: "John"
  };
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor, null, 2 ) );
  /* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
   }
  */

//If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed false.
let user = {};
Object.defineProperty(user, "name", {
  value: "John"
});
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */


//NON-WRITABLE(Let’s make user.name non-writable (can’t be reassigned) by changing writable flag:)
let user = {
    name: "John"
  };
  Object.defineProperty(user, "name", {
    writable: false
  }); 
user.name = "Pete"; // Error: Cannot assign to read only property 'name'


//NON-ENUMERABLE
let user = {
    name: "John",
    toString() {
      return this.name;
    }
  };
  // By default, both our properties are listed:
for (let key in user) alert(key); // name, toString


let user = {
    name: "John",
    toString() {
      return this.name;
    }
  };
  Object.defineProperty(user, "toString", {
    enumerable: false
  });
  // Now our toString disappears:
  for (let key in user) alert(key); // name


//NON-CONFIGURABLE (A non-configurable property can not be deleted.)
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

Math.PI = 3; // Error
// delete Math.PI won't work either

//Here user.name is non-configurable, but we can still change it (as it’s writable):
let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    configurable: false
  });
  user.name = "Pete"; // works fine
  delete user.name; // Error

//And here we make user.name a “forever sealed” constant:
let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false,
    configurable: false
  });
  // won't be able to change user.name or its flags
  // all this won't work:
  user.name = "Pete";
  delete user.name;
  Object.defineProperty(user, "name", { value: "Pete" });


//Object.defineProperties
Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
});

//Object.getOwnPropertyDescriptors
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

for (let key in user) {
    clone[key] = user[key]
  }

