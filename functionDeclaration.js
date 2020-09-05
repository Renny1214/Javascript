let sayHi = function() {
    alert( "Hello" );
  };

function sayHi() {
    alert( "Hello" );
 }
alert( sayHi ); // shows the function code

//We can copy a function to another variable
function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) copy
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)


//CALLBACK FUNCTIONS
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  /*
  ask(question, yes, no) with three parameters:
   - question --> Text of the question
   - yes --> Function to run if the answer is “Yes”
   - no --> Function to run if the answer is “No”
  The function should ask the question and, depending on the user’s answer, call yes() or no():
  ask("Do you agree?", showOk, showCancel);
  */

  //The arguments showOk and showCancel of ask are called callback functions or just callbacks.
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );