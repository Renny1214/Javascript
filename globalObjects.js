//The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.

alert("Hello");
// is the same as
window.alert("Hello");

var gVar = 5;
alert(window.gVar); // 5 (became a property of the global object)

let gLet = 5;
alert(window.gLet); // undefined (doesn't become a property of the global object)


//If a value is so important that you’d like to make it available globally, write it directly as a property:

  // make current user information global, to let all scripts access it
   window.currentUser = {
    name: "John"
   };
  
  // somewhere else in code
   alert(currentUser.name);  // John
  
  // or, if we have a local variable with the name "currentUser"
  // get it from window explicitly (safe!)
   alert(window.currentUser.name); // John