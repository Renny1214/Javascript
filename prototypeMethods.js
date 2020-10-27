/*
The modern methods are:

Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.
*/


let animal = {
    eats: true
  };
  // create a new object with animal as a prototype
let rabbit = Object.create(animal);
alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // true
Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

//Object.create has an optional second argument: property descriptors. We can provide additional properties to the new object there, like this:
let animal = {
    eats: true
  };
let rabbit = Object.create(animal, {
    jumps: {
      value: true
    }
});
alert(rabbit.jumps); // true