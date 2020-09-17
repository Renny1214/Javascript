//Symbol.iterator
let range = {
    from: 1,
    to: 5
  };
  // 1. call to for..of initially calls this
  range[Symbol.iterator] = function() {
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with this iterator, asking it for next values
    return {
      current: this.from,
      last: this.to,
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  // now it works!
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
}


//STRING IS ITERABLE

  for (let char of "test") {
      // triggers 4 times: once for each character
      alert( char ); // t, then e, then s, then t
  }

  let str = '𝒳😂';
  for (let char of str) {
      alert( char ); // 𝒳, and then 😂
  }


//CALLING AN ITERATOPR EXPLICITELY
 
   let str = "Hello";
   // does the same as
   // for (let char of str) alert(char);
   let iterator = str[Symbol.iterator]();
   while (true) {
      let result = iterator.next();
      if (result.done) break;
          alert(result.value); // outputs characters one by one
   }


//ITERABLES AND ARRAY-LIKES
   
   let arrayLike = { // has indexes and length => array-like
       0: "Hello",
       1: "World",
       length: 2
   };
   // Error (no Symbol.iterator)
   for (let item of arrayLike) {}


//Array.from

 let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  let arr = Array.from(arrayLike); // (*)
  alert(arr.pop()); // World (method works)


  let arr = Array.from(range);
  alert(arr); // 1,2,3,4,5 (array toString conversion works)

  //The full syntax for Array.from also allows us to provide an optional “mapping” function:
  Array.from(obj,[ mapFn, thisArg])

  let arr = Array.from(range, num => num * num);
  alert(arr); // 1,4,9,16,25

  let str = '𝒳😂';
     // splits str into array of characters
  let chars = Array.from(str);
  alert(chars[0]); // 𝒳
  alert(chars[1]); // 😂
  alert(chars.length); // 2


  //works same
  let str = '𝒳😂';
  let chars = []; // Array.from internally does the same loop
  for (let char of str) {
    chars.push(char);
  }
  alert(chars);