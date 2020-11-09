let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
});

/*
The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. In terms of the analogy above: the executor is the “singer”.

Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

resolve(value) — if the job finished successfully, with result value.
reject(error) — if an error occurred, error is the error object.
So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt it calls resolve if it was successful or reject if there was an error.

The promise object returned by the new Promise constructor has these internal properties:

state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.
*/

let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
});

let promise = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

//* There can be only a single result or an error
let promise = new Promise(function(resolve, reject) {
    resolve("done");
    reject(new Error("…")); // ignored
    setTimeout(() => resolve("…")); // ignored
});
//*Immediately calling resolve/reject
let promise = new Promise(function(resolve, reject) {
    // not taking our time to do the job
    resolve(123); // immediately give the result: 123
});


//Consumers: then, catch, finally
//then
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  // resolve runs the first function in .then
  promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
);
  //If we’re interested only in successful completions, then we can provide only one function argument to .then:
let promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
  }); 
promise.then(alert); // shows "done!" after 1 second

//catch(If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same)
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  // .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second

//finally
new Promise((resolve, reject) => {
    /* do something that takes time, and then call resolve/reject */
  })
    // runs when the promise is settled, doesn't matter successfully or not
    .finally(() => "stop loading indicator")
    // so the loading indicator is always stopped before we process the result/error
.then(result => "show result", err => "show error")
 
   //For instance, here the result is passed through finally to then:
   new Promise((resolve, reject) => {
      setTimeout(() => resolve("result"), 2000)
   })
    .finally(() => alert("Promise ready"))
    .then(result => alert(result)); // <-- .then handles the result
 
   //And here there’s an error in the promise, passed through finally to catch:
   new Promise((resolve, reject) => {
    throw new Error("error");
   })
    .finally(() => alert("Promise ready"))
    .catch(err => alert(err));  // <-- .catch handles the error object



//Example: loadScript
function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
      document.head.append(script);
    });
}
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...'));