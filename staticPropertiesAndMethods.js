//We can also assign a method to the class function itself, not to its "prototype". Such methods are called static.
class User {
    static staticMethod() {
      alert(this === User);
    }
  }
User.staticMethod(); // true


//That actually does the same as assigning it as a property directly:
class User { }
User.staticMethod = function() {
  alert(this === User);
};
User.staticMethod(); // true


//static properties
class Article {
    static publisher = "Ilya Kantor";
  }
alert( Article.publisher ); // Ilya Kantor


//Inheritance of static properties and methods
class Animal {
    static planet = "Earth";
  
    constructor(name, speed) {
      this.speed = speed;
      this.name = name;
    }
  
    run(speed = 0) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    static compare(animalA, animalB) {
      return animalA.speed - animalB.speed;
    }
  
  }
  
  // Inherit from Animal
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }
  
  let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
  ];
  
  rabbits.sort(Rabbit.compare);
  
  rabbits[0].run(); // Black Rabbit runs with speed 5.
  
  alert(Rabbit.planet); // Earth