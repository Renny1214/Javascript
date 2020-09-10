//ToPrimitive
   //"string" (For an object-to-string conversion, when we’re doing an operation on an object that expects a string, like alert)
      // output
         alert(obj);
      // using object as a property key
         anotherObj[obj] = 123;
   //"number" (For an object-to-number conversion, like when we’re doing maths)
      // explicit conversion
         let num = Number(obj);
      // maths (except binary plus)
         let n = +obj; // unary plus
         let delta = date1 - date2;
      // less/greater comparison
         let greater = user1 > user2; 
   //"default"
      // binary plus uses the "default" hint
         let total = obj1 + obj2;
      // obj == number uses the "default" hint
         if (user == 1) { return true };
    

//Synmbol.toPrimitive
obj[Symbol.toPrimitive] = function(hint){
    // must return a primitive value
   // hint = one of "string", "number", "default"
};
   //example
    let user = {
    name: "John",
    money: 1000,
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
    };
    // conversions demo:
    alert(user); // hint: string -> {name: "John"}
    alert(+user); // hint: number -> 1000
    alert(user + 500); // hint: default -> 1500


//toString / valueOf
   /*By default, a plain object has following toString and valueOf methods:
     The toString method returns a string "[object Object]".
     The valueOf method returns the object itself.*/

let user = {name: "John"};
alert(user); // [object Object]
alert(user.valueOf() === user); // true

  //example
  let user = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // valueOf -> 1500

   //In the absence of Symbol.toPrimitive and valueOf, toString will handle all primitive conversions.
  let user = {
    name: "John",
  
    toString() {
      return this.name;
    }
  };
  
  alert(user); // toString -> John
  alert(user + 500); // toString -> John500


//FURTHER CONVERSIONS
let obj = {
    // toString handles all conversions in the absence of other methods
    toString() {
      return "2";
    }
  };
alert(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number
    //The multiplication obj * 2 first converts the object to primitive (that’s a string "2").
    //Then "2" * 2 becomes 2 * 2 (the string is converted to number).


    
//Binary plus will concatenate strings in the same situation, as it gladly accepts a string:
let obj = {
    toString() {
        return "2";
    }
};
alert(obj + 2); // 22 ("2" + 2), conversion to primitive returned a string => concatenation