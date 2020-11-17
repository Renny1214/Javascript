//Export before declarations
  // export an array
  export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // export a constant
  export const MODULES_BECAME_STANDARD_YEAR = 2015;
  // export a class
  export class User {
    constructor(name) {
      this.name = name;
    }
  }

//*No semicolons after export class/function
export function sayHi(user) {
    alert(`Hello, ${user}!`);
}  // no ; at the end


//Export apart from declarations
  // say.js
  function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  export {sayHi, sayBye}; // a list of exported variables


//Impoort *
   // 📁 main.js
    import * as say from './say.js';
    say.sayHi('John');
    say.sayBye('John');


//Import "as"
  // 📁 main.js
   import {sayHi as hi, sayBye as bye} from './say.js';
   hi('John'); // Hello, John!
   bye('John'); // Bye, John!


//Export "as"
  // 📁 main.js
   import * as say from './say.js';
   say.hi('John'); // Hello, John!
   say.bye('John'); // Bye, John!


//Export default
   // 📁 user.js
   export default class User { // just add "default"
     constructor(name) {
       this.name = name;
    }
   }
   // 📁 main.js
    import User from './user.js'; // not {User}, just User
    new User('John');

    //*There may be only one export default per file.
    