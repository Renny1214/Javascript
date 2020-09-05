//THE "WHILE" LOOP
while (condition) {
    // code
    // so-called "loop body"
  }
//example
  let i = 0;
  while (i < 3) { // shows 0, then 1, then 2
    alert( i );
    i++;
  }
   
  //A single execution of the loop body is called an iteration.

  let i = 3;
  while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
    alert( i );
    i--;
  }

//THE "DO..WHILE" LOOP
  //This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy.
do {
    // loop body
  } while (condition);
//example
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);


//THE "FOR" LOOP
for (begin; condition; step) {
    // ... loop body ...
}
    //exapmle
    for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
        alert(i);
    }

    //inline variable declaration
    for(let i=0;i<5;i++)
      {
          alert(i);
      }
      alert(i); // this will give error;
    
    //skipping parts (any part from the for loop can be missed)
    let i = 0; // we have i already declared and assigned
    for (; i < 3; i++) { // no need for "begin"
        alert( i ); // 0, 1, 2
    }
    let i = 0;
    for (; i < 3;) {  //step is missed
         alert( i++ );
    }
    for(;;)    //infinite loop
    {
        alert(i);
    }

//BREAKING THE LOOP
   //we can force the exit at any time using the special break directive.
   let sum = 0;

   while (true) {
   
     let value = +prompt("Enter a number", '');
   
     if (!value) break; // (if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.)
   
     sum += value;
   
   }
   alert( 'Sum: ' + sum );


   //continuation to the next iteration
   for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
  }

  //*No break/continue to the right side of ‘?’ */
     // (i > 5) ? alert(i) : continue; // continue isn't allowed here


//LABELS FOR CONTINUE/BREAK
 // we need to break out from multiple nested loops at once.
 outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
  alert('Done!');

  //*Labels do not allow to “jump” anywhere
  break label; // doesn't jumps to the label below

  label: for (;;){};

  //A call to break/continue is only possible from inside a loop and the label must be somewhere above the directive.

