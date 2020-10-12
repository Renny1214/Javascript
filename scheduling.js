/*
setTimeout allows us to run a function once after the interval of time.
setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
*/

//setTimeout
let timerId = setTimeout(func|code, [delay], [arg1], [arg2])

function sayHi() {
    alert('Hello');
  }
setTimeout(sayHi, 1000);


function sayHi(phrase,who)
{
   alert(phrase +" " +who);
}
setTimeout(sayHi,1000);

setTimeout("alert('Hello')", 1000);

setTimeout(() => alert('Hello'), 1000);


//CANCELLING WITH clearTimeout
//A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.
let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)


//setInterval
let timerId = setInterval(func|code, [delay], [arg1], [arg2])

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);


//NESTED setTimeout

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
}, 2000);

/*
let delay = 5000;

let timerId = setTimeout(function request() {
  ...send request...

  if (request failed due to server overload) {
    // increase the interval to the next run
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay);  */



//ZERO DELAY setTimeout  (setTimeout(func, 0), or just setTimeout(func))
//So the function is scheduled to run “right after” the current script.
setTimeout(() => alert("World"));
alert("Hello");



//FUNCTION

function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  // usage:
  printNumbers(5, 10);