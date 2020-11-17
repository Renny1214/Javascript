//What is module?
/*
A module is just a file. One script is one module. As simple as that.
Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:
    export keyword labels variables and functions that should be accessible from outside the current module.
    import allows the import of functionality from other modules
*/
// 📁 sayHi.js
export function sayHi(user) {
    alert(`Hello, ${user}!`);
}
// 📁 main.js
import {sayHi} from './sayHi.js';
alert(sayHi); // function...
sayHi('John'); // Hello, John!


//Core module functions

//1. Always "use strict"
<script type="module">
  a = 5; // error
</script>

//2. Module level scope
    //Each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts.

//3. A module code is evaluated only the first time when imported
   // 📁 alert.js
   alert("Module is evaluated!");
   // Import the same module from different files
     // 📁 1.js
       //import `./alert.js`; // Module is evaluated!
    // 📁 2.js
       //import `./alert.js`; // (shows nothing)

//4. In a module," this" is undefined
/*
<script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script>
*/
