//ERROR HANDLING
try {
    alert('Start of try runs');  // (1) <--
    // ...no errors here
    alert('End of try runs');   // (2) <--
  } catch(err) {
    alert('Catch is ignored, because there are no errors'); // (3)
}


try {
    alert('Start of try runs');  // (1) <--  
    lalala; // error, variable is not defined!
    alert('End of try (never reached)');  // (2)
  } catch(err) {
    alert(`Error has occurred!`); // (3) <--
}

//* try .. catch only works for runtime error
try {
   // {{{{{{{{{{{{
}catch(e) {
    alert("The engine can't understand this code, it's invalid");
}

//*try catch qorks synchronously
try {
    setTimeout(function() {
      noSuchVariable; // script will die here
    }, 1000);
  } catch (e) {
    alert( "won't work" );
}

setTimeout(function() {
    try {
      noSuchVariable; // try..catch handles the error!
    } catch {
      alert( "error is caught here!" );
    }
}, 1000);


//ERROR OBJECT (When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch)
try {
    lalala; // error, variable is not defined!
  } catch(err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: lalala is not defined
}


//Using try..catch

let json = '{"name":"John", "age": 30}'; // data from the server
let user = JSON.parse(json); // convert the text representation to JS object
// now user is an object with properties from the string
alert( user.name ); // John
alert( user.age );  // 30

//If json is malformed, JSON.parse generates an error, so the script “dies”.
let json = "{ bad json }";
try {
  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work
} catch (e) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( e.name );
  alert( e.message );
}


//THROWING OUR OWN ERRORS
try {
    JSON.parse("{ bad json o_O }");
  } catch(e) {
    alert(e.name); // SyntaxError
    alert(e.message); // Unexpected token b in JSON at position 2
}


let error = new Error("Things happen o_O");
alert(error.name); // Error
alert(error.message); // Things happen o_O


let json = '{ "age": 30 }'; // incomplete data
try {
   let user = JSON.parse(json); // <-- no errors
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }
  alert( user.name );
} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
}

//RETHROWING
function readData() {
    let json = '{ "age": 30 }';
    try {
      // ...
      blabla(); // error!
    } catch (e) {
      // ...
      if (!(e instanceof SyntaxError)) {
        throw e; // rethrow (don't know how to deal with it)
      }
    }
}
try {
    readData();
  } catch (e) {
    alert( "External catch got: " + e ); // caught it!
}

//try.. catch.. finally
try {
    alert( 'try' );
    if (confirm('Make an error?')) BAD_CODE();
  } catch (e) {
    alert( 'catch' );
  } finally {
    alert( 'finally' );
}


//finally and return (The finally clause works for any exit from try..catch. That includes an explicit return.)
function func() {
    try {
      return 1;
  
    } catch (e) {
      /* ... */
    } finally {
      alert( 'finally' );
    }
  }
alert( func() ); // first works alert from finally, and then this one