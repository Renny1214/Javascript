// objects are used to store keyed collections of various data and more complex entities. 
//An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
let user = new Object();  //object constructor
user= {}; //object literal


//LITERALS AND TEMPLATES

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};

//Properties value are accessible using dot notation
// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

//set values
user.isAdmin = true;

//delete
delete user.age;

//multivalue property names
let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };

  //*Object with const can be changed
  const user = {
    name: "John"
  };
  
  user.name = "Pete"; // (*)
  
  alert(user.name); // Pete

  //It might seem that the line (*) would cause an error, but no. The const fixes the value of user, but not its contents.
  //The const would give an error only if we try to set user=... as a whole.

//SQUARE BRACKETS
// this would give a syntax error
              // user.likes birds = true   --> syntax error

  //The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed).
  let user = {};

  // set
  user["likes birds"] = true;

  // get
  alert(user["likes birds"]); // true

  // delete
  delete user["likes birds"];


  let key = "likes birds";
  // same as user["likes birds"] = true;
  user[key] = true;

   //Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property
   let user = {
      name: "John",
      age: 30
    };
    let key = prompt("What do you want to know about the user?", "name");
    // access by variable
    alert( user[key] ); // John (if enter "name")


//COMPUTED PROPERTIES
//We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.apple ); // 5 if fruit="apple"
//The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};
// take property name from the fruit variable
bag[fruit] = 5;

//PROPERTY VALUE SHORTHAND
function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  let user = makeUser("John", 30);
  alert(user.name); // John

  //In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.
  function makeUser(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
      // ...
    };
  }

//PROPERTIES NAME LIMITATIONS
// a variable cannot have a name equal to one of language-reserved words like “for”, “let”, “return” etc.
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  alert( obj.for + obj.let + obj.return );  // 6
   
   //In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).
   //other types are automatically converted to strings.

   let obj = {
    0: "test" // same as "0": "test"
   };
  // both alerts access the same property (the number 0 is converted to string "0")
  alert( obj["0"] ); // test
  alert( obj[0] ); // test (same property)
   //*There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

//Property existence test, “in” operator
let user = {};
alert( user.noSuchProperty === undefined ); // true means "no such property"

let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

  //why do we need in if we have undefined??
  let obj = {
    test: undefined
  };
  alert( obj.test ); // it's undefined, so - no such property?
  alert( "test" in obj ); // true, the property does exist!


//The “for…in” loop
for (key in object) {
    // executes the body for each key among object properties
}

  let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }

//Ordered like an object
//in caseof integer it gets sorted 
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    alert(code); // 1, 41, 44, 49
  }

  //in case of non integer it does not
  let user = {
    name: "John",
    surname: "Smith"
  };
  user.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in user) {
    alert( prop ); // name, surname, age
  }

  //or
  let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in codes) {
    alert( +code ); // 49, 41, 44, 1
  }

  //some functions
  //1
   function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }


  //2
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  alert(sum); // 390

  //3
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }