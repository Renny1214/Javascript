//we have a sequence of asynchronous tasks to be performed one after another — for instance, loading scripts. 
//Promises provide a couple of recipes to do that.
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // (*)
  }).then(function(result) { // (**)
    alert(result); // 1
    return result * 2;
  }).then(function(result) { // (***)
    alert(result); // 2
    return result * 2;
  }).then(function(result) {
    alert(result); // 4
    return result * 2;
});

//this is not chaining
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

//RETURNINNG PROMISES(A handler, used in .then(handler) may create and return a promise.)
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  }).then(function(result) {
    alert(result); // 1
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  }).then(function(result) { // (**)
    alert(result); // 2 
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  }).then(function(result) {
     alert(result); // 4
});


//EXAMPLE: loadScript
loadScript("/article/promise-chaining/one.js")
  .then(script => loadScript("/article/promise-chaining/two.js"))
  .then(script => loadScript("/article/promise-chaining/three.js"))
  .then(script => {
    // scripts are loaded, we can use functions declared there
    one();
    two();
    three();
});