//Protected properties are usually prefixed with an underscore _.
class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
      if (value < 0) throw new Error("Negative water");
      this._waterAmount = value;
    }
    get waterAmount() {
      return this._waterAmount;
    }
    constructor(power) {
      this._power = power;
    }  
  }
   // create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
   // add water
coffeeMachine.waterAmount = -10; // Error: Negative water


//Read-only "power"
/*
For power property, let’s make it read-only. It sometimes happens that a property must be set at creation time only, and then never modified.
That’s exactly the case for a coffee machine: power never changes.
To do so, we only need to make getter, but not the setter
*/

class CoffeeMachine {
    constructor(power) {
      this._power = power;
    }
    get power() {
      return this._power;
    }
  }
  // create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W
coffeeMachine.power = 25; // Error (no setter)


//Private #waterLimit"
/*
Privates should start with #. They are only accessible from inside the class.
For instance, here’s a private #waterLimit property and the water-checking private method #checkWater
*/
class CoffeeMachine {
    #waterLimit = 200;
  
    #checkWater(value) {
      if (value < 0) throw new Error("Negative water");
      if (value > this.#waterLimit) throw new Error("Too much water");
    }
}
let coffeeMachine = new CoffeeMachine();
   // can't access privates from outside of the class
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error