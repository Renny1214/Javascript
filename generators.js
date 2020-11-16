//Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.


//GENERATOR FUNCTIONS
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

//Generator functions behave differently from regular ones. When such function is called, it doesn’t run its code. Instead it returns a special object, called “generator object”, to manage the execution.
  function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  // "generator function" creates "generator object"
  let generator = generateSequence();
  alert(generator); // [object Generator]

/*
The main method of a generator is next(). When called, it runs the execution until the nearest yield <value> statement (value can be omitted, then it’s undefined). Then the function execution pauses, and the yielded value is returned to the outer code.
The result of next() is always an object with two properties:
    value: the yielded value.
    done: true if the function code has finished, otherwise false.
*/
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}
let generator = generateSequence();
let one = generator.next();
alert(JSON.stringify(one)); // {value: 1, done: false}
let two = generator.next();
alert(JSON.stringify(two)); // {value: 2, done: false}
let three = generator.next();
alert(JSON.stringify(three)); // {value: 3, done: true}


//GENERATORS ARE ITERABLE
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}
let generator = generateSequence();
for(let value of generator) {
    alert(value); // 1, then 2
}
   /*It’s because for..of iteration ignores the last value, when done: true. So, if we want all results to be shown by for..of, we must return them with yield*/
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
let generator = generateSequence();
for(let value of generator) {
    alert(value); // 1, then 2, then 3
} 
   /*As generators are iterable, we can call all related functionality, e.g. the spread syntax ...*/
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
let sequence = [0, ...generateSequence()];
alert(sequence); // 0, 1, 2, 3


//GENERATOR COMPOSITION
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
function* generatePasswordCodes() {
    // 0..9
    yield* generateSequence(48, 57);
    // A..Z
    yield* generateSequence(65, 90);
    // a..z
    yield* generateSequence(97, 122);
}
let str = '';
for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}
alert(str); // 0..9A..Za..z


//"yield" is a two-way street
function* gen() {
    let ask1 = yield "2 + 2 = ?";
    alert(ask1); // 4
    let ask2 = yield "3 * 3 = ?"
    alert(ask2); // 9
}
let generator = gen();
alert( generator.next().value ); // "2 + 2 = ?"
alert( generator.next(4).value ); // "3 * 3 = ?"
alert( generator.next(9).done ); // true


//generator.throw
function* gen() {
    try {
      let result = yield "2 + 2 = ?"; // (1)
      alert("The execution does not reach here, because the exception is thrown above");
    } catch(e) {
      alert(e); // shows the error
    }
  } 
let generator = gen();
let question = generator.next().value;
generator.throw(new Error("The answer is not found in my database")); // (2)