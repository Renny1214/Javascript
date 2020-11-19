/*
Export and import statements that we covered in previous chapters are called “static”. The syntax is very simple and strict.
First, we can’t dynamically generate any parameters of import.
The module path must be a primitive string, can’t be a function call. This won’t work
*/

// import ... from getModuleName(); // Error, only from "string" is allowed

/*
if(...) {
    import ...; // Error, not allowed!
  }
  
  {
    import ...; // Error, we can't put import in any block
  }
*/


//The import() expression

let modulePath = prompt("Which module to load?");

import(modulePath)
  .then(/*obj => <module object>*/)
  .catch(/*err => <loading error, e.g. if no such module>*/)


//USING AWAIT FUNCTION

  // 📁 say.js
  export function hi() {
     alert(`Hello`);
  }
  export function bye() {
    alert(`Bye`);
  }

  let {hi, bye} = await import('./say.js');
  hi();
  bye();


//USING DEFAULT EXPORT
    
   // 📁 say.js
   export default function() {
      alert("Module loaded (export default)!");
   }

   let obj = await import('./say.js');
   let say = obj.default;
       // or, in one line: let {default: say} = await import('./say.js');
   say();