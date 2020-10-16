let animal = {
    eats: true
  };
  function Rabbit(name) {
    this.name = name;
  }
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
alert( rabbit.eats ); // true

//Default F.prototype, constructor property
  //Every function has the "prototype" property even if we don’t supply it.
  function Rabbit() {}
    // by default:
    // Rabbit.prototype = { constructor: Rabbit }
  alert( Rabbit.prototype.constructor == Rabbit ); // true


  function Rabbit() {}
   // by default:
   // Rabbit.prototype = { constructor: Rabbit }
  let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}
  alert(rabbit.constructor == Rabbit); // true (from prototype)


//We can use constructor property to create a new object using the same constructor as the existing one.
function Rabbit(name) {
    this.name = name;
    alert(name);
  }
let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new rabbit.constructor("Black Rabbit");


//if we replace the default prototype as a whole, then there will be no "constructor" in it.
function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false

  //to solve this
   function Rabbit() {}
     // Not overwrite Rabbit.prototype totally
     // just add to it
   Rabbit.prototype.jumps = true
     // the default Rabbit.prototype.constructor is preserved


   Rabbit.prototype = {
        jumps: true,
        constructor: Rabbit
   };
   // now constructor is also correct, because we added it