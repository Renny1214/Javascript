//That class is built-in, but here’s its approximate code so we can understand what we’re extending:
/*Internally, we’ll use JSON.parse. If it receives malformed json, then it throws SyntaxError. But even if json is syntactically correct, that doesn’t mean that it’s a valid user, right? It may miss the necessary data. For instance, it may not have name and age properties that are essential for our users.

Our function readUser(json) will not only read JSON, but check (“validate”) the data. If there are no required fields, or the format is wrong, then that’s an error. And that’s not a SyntaxError, because the data is syntactically correct, but another kind of error. We’ll call it ValidationError and create a class for it. An error of that kind should also carry the information about the offending field.

Our ValidationError class should inherit from the built-in Error class.
*/
  // The "pseudocode" for the built-in Error class defined by JavaScript itself
  class Error {
    constructor(message) {
      this.message = message;
      this.name = "Error"; // (different names for different built-in error classes)
      this.stack = "data about error"; // non-standard, but most environments support it
    }
   }



class ValidationError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "ValidationError"; // (2)
    }
}
function test() {
    throw new ValidationError("Whoops!");
}
try {
    test();
} catch(err) {
    alert(err.message); // Whoops!
    alert(err.name); // ValidationError
    alert(err.stack); // a list of nested calls with line numbers for each
}


//Let’s try to use it in readUser(json):
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  // Usage
function readUser(json) {
    let user = JSON.parse(json);
      if (!user.age) {
      throw new ValidationError("No field: age");
    }
    if (!user.name) {
      throw new ValidationError("No field: name");
    }
    return user;
}
  // Working example with try..catch
try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      alert("Invalid data: " + err.message); // Invalid data: No field: name
    } else if (err instanceof SyntaxError) { // (*)
      alert("JSON Syntax Error: " + err.message);
    } else {
      throw err; // unknown error, rethrow it (**)
    }
}
    //*The try..catch block in the code above handles both our ValidationError and the built-in SyntaxError from JSON.parse



//FURTHER INHERITANCE
/*
The ValidationError class is very generic. Many things may go wrong. The property may be absent or it may be
 in a wrong format (like a string value for age). Let’s make a more concrete class PropertyRequiredError, 
 exactly for absent properties. It will carry additional information about the property that’s missing.
*/
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
}
class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.name = "PropertyRequiredError";
      this.property = property;
    }
}
  // Usage
function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }
   return user;
}
  // Working example with try..catch
try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      alert("Invalid data: " + err.message); // Invalid data: No property: name
      alert(err.name); // PropertyRequiredError
      alert(err.property); // name
    } else if (err instanceof SyntaxError) {
      alert("JSON Syntax Error: " + err.message);
    } else {
      throw err; // unknown error, rethrow it
    }
}