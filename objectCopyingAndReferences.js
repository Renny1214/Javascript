//One of the fundamental differences of objects vs primitives is that they are stored and copied “by reference”.
// Primitive values: strings, numbers, booleans – are assigned/copied “as a whole value”.

let message = "Hello!";
let phrase = message;

//A variable stores not the object itself, but its “address in memory”, in other words “a reference” to it.
let user = {
    name: "John"
};

//When an object variable is copied – the reference is copied, the object is not duplicated.
let user = { name: "John" };
let admin = user; // copy the reference
   //Now we have two variables, each one with the reference to the same object:

let user = { name: 'John' };
let admin = user;
admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference


//COMPARISON BY REFERENCE
//The equality == and strict equality === operators for objects work exactly the same.

//Two objects are equal only if they are the same object.
let a = {};
let b = a; // copy the reference
alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

//And here two independent objects are not equal, even though both are empty:
let a = {};
let b = {}; // two independent objects
alert( a == b ); // false


//CLONING AND MERGING (Object.assign)
  let user = {
    name: "John",
    age: 30
  };
  let clone = {}; // the new empty object
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  alert( user.name ); // still John in the original object

  //or (Object.assign(dest, [src1, src2, src3...]))
  /*
  The first argument dest is a target object.
  Further arguments src1, ..., srcN (can be as many as needed) are source objects.
  It copies the properties of all source objects src1, ..., srcN into the target dest. In other words, properties of all arguments starting from the second are copied into the first object.
  The call returns dest.
  */

    let user = { name: "John" }; 
    let permissions1 = { canView: true };
    let permissions2 = { canEdit: true };
    // copies all properties from permissions1 and permissions2 into user
    Object.assign(user, permissions1, permissions2);
    // now user = { name: "John", canView: true, canEdit: true }


    //If the copied property name already exists, it gets overwritten:
    let user = { name: "John" };
    Object.assign(user, { name: "Pete" });
    alert(user.name); // now user = { name: "Pete" }


    //We also can use Object.assign to replace for..in loop for simple cloning:
    let user = {
        name: "John",
        age: 30
    };
    let clone = Object.assign({}, user);


//NESTED CLONING
let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
};
alert( user.sizes.height ); // 182

  //it’s not enough to copy clone.sizes = user.sizes, because the user.sizes is an object, it will be copied by reference. So clone and user will share the same sizes

  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user.sizes === clone.sizes ); // true, same object
  
  // user and clone share sizes
  user.sizes.width++;       // change a property from one place
  alert(clone.sizes.width); // 51, see the result from the other one