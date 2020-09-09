//we need to create many similar objects, like multiple users or menu items and so on.
//That can be done using constructor functions and the "new" operator.


//CONSTRUCTOR FUNCTION
/*
They are named with capital letter first.
They should be executed only with "new" operator.
*/
function User()
{
    this.name = name;
    this.isAdmin = false;
};
let user = new User("john");   //let user = {name:"john", isAdin :false };
alert(user.name); //abc
alert(user.isAdmin); //false


//CONSTRUCTOR MODE TEST : new.target
function User()
{
    alert(new.target);
}
user(); //undefined
new User(); //function User{ ... };


//RETURN FROM CONSTRUCTOR
/*constructors do not have a return statement.
If return is called with an object, then the object is returned instead of this.
If return is called with a primitive, it’s ignored.*/

function BigUser()
{
    this.name = "abc";
    return {name= "xyz"}; // <-- returns this
}
alert(new BigUser.name); //xyz

function SmallUser()
{
    name = "abc";
    return; // <-- returns this
}
alert(new SmallUser.name); //abc

//METHODS IN CONSTRUCTOR
function User(name)
{
    this.name = name;
    this.sayHi = function()
    {
       alert("my name is: "+this.name);
    }
};

let john = new User("john");
john.sayHi(); //My name is : john

//extra
function Calculator() {
    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  let calculator = new Calculator();
  calculator.read();
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );




  function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  }
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);