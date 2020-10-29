//The instanceof operator allows to check whether an object belongs to a certain class. It also takes inheritance into account

//The instanceof operator

 //It returns true if obj belongs to the Class or a class inheriting from it.
class Rabbit {}
let rabbit = new Rabbit();
   // is it an object of Rabbit class?
alert( rabbit instanceof Rabbit ); // true

 //It also works with constructor functions:
   // instead of class
function Rabbit() {}

alert( new Rabbit() instanceof Rabbit ); // true

 //…And with built-in classes like Array:
let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true



class Animal {}
class Rabbit extends Animal {}
let rabbit = new Rabbit();
alert(rabbit instanceof Animal); // true
// rabbit.__proto__ === Rabbit.prototype
// rabbit.__proto__.__proto__ === Animal.prototype (match!)