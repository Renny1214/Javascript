//The "extends" keyword
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }
let animal = new Animal("My animal");  
class Rabbit extends Animal {    //class Rabbit that inherits from Animal
    hide() {
      alert(`${this.name} hides!`);
    }
  }
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!


//Overriding a method
/*
Classes provide "super" keyword for that.
super.method(...) to call a parent method.
super(...) to call a parent constructor (inside our constructor only).
*/
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }}
class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
    }}
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White rabbit hides!


//Overidding constructor

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }}
class Rabbit extends Animal {
   constructor(name, earLength) {
      this.speed = 0;
      this.name = name;
      this.earLength = earLength;
   }}
  // Doesn't work!
let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.
    
    //*Constructors in inheriting classes must call super(...), and (!) do it before using this.
class Animal {
    constructor(name) {
          this.speed = 0;
          this.name = name;
        }
      }
    class Rabbit extends Animal {
        constructor(name, earLength) {
          super(name);
          this.earLength = earLength;
        }
}
      // now fine
let rabbit = new Rabbit("White Rabbit", 10);
alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10



//Overridinng class fields :  a tricky note
class Animal {
    showName() {  // instead of this.name = 'animal'
      alert('animal');
    }
    constructor() {
      this.showName(); // instead of alert(this.name);
    }
}
class Rabbit extends Animal {
    showName() {
      alert('rabbit');
    }}
new Animal(); // animal
new Rabbit(); // rabbit