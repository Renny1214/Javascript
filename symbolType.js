//A “symbol” represents a unique identifier.
// A value of this type can be created using Symbol()
let id = Symbol();

//Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they are different values. The description is just a label that doesn’t affect anything.
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false

//Symbols don’t auto-convert to a string
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string
   //If we really want to show a symbol, we need to explicitly call .toString() on it.
   let id = Symbol("id");
   alert(id.toString()); // Symbol(id), now it works
   //Or get symbol.description property to show the description only:
   let id = Symbol("id");
   alert(id.description); // id

//“Hidden” properties
//Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.
let user = { // belongs to another code
    name: "John"
  };
let id = Symbol("id");
user[id] = 1;
alert( user[id] ); // we can access the data using the symbol as the key

//if there was string
  let user = { name: "John" };
  // Our script uses "id" property
  user.id = "Our id value";
  // ...Another script also wants "id" for its purposes...
  user.id = "Their id value"
  // Boom! overwritten by another script!

  //symbols in object literal
  let id = Symbol("id");
  let user = {
  name: "John",
  [id]: 123 // not "id": 123
  };


  //Symbols are skipped by for…in
  let id = Symbol("id");
  let user = {
   name: "John",
   age: 30,
   [id]: 123
  };
  for (let key in user) alert(key); // name, age (no symbols)
  // the direct access by the symbol works
  alert( "Direct: " + user[id] );
  

  // Object.assign copies both string and symbol properties
  let id = Symbol("id");
  let user = {
    [id]: 123
  };
  let clone = Object.assign({}, user);
  alert( clone[id] ); // 123

 
//GLOBAL SYMBOLS (different parts of our application want to access symbol "id" meaning exactly the same property.)
//To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol.

// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created
// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");
// the same symbol
alert( id === idAgain ); // true

//Symbol.keyFor
//For global symbols, not only Symbol.for(key) returns a symbol by name, but there’s a reverse call: Symbol.keyFor(sym), that does the reverse: returns a name by a global symbol.
// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id


