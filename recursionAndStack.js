//When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.

//normal way
function pow(x, n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
alert( pow(2, 3) ); // 8

//recursive
function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  alert( pow(2, 3) ); // 8


//RECURSIVE TRAVERSALS

let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};
// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}
alert(sumSalaries(company)); // 7700


//RECURSIVE STRUCTURES
//LINKED LIST
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
  //The list can be easily split into multiple parts and later joined back:
  let secondList = list.next.next;
  list.next.next = null;

  list.next.next = secondList;
  //For instance, to prepend a new value, we need to update the head of the list:
  let list = { value: 1 };
  list.next = { value: 2 };
  list.next.next = { value: 3 };
  list.next.next.next = { value: 4 };

  // prepend the new value to the list
  list = { value: "new item", next: list };



//TASKS
//1.  Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
      function sum(n)
      {
          if(n==1)
          {
              return 1;
          }
          else{
              return n+sum(n-1);
          }
      }

//2. calculate factorial
    function factorial(n)
    {
        if(n==1){
            return n;
        }
        else{
            return n*factorial(n-1);
        }
    }

//3. FIBONACCI NUMBERS
    function fibonacci(n)
    {
        if(n<=1)
        {
            return n;
        }
        else{
            return fibonacci(n-1)+fibonacci(n-2);
        }
    }

//4. OUTPUT OF LINKED LIST
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
  
    alert(list.value); // output the current item
  
    if (list.next) {
      printList(list.next); // do the same for the rest of the list
    }
  
  }
 printList(list);

//5. OUTPUT OF LINKED LIDT IN REVERSE ORDER
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printReverseList(list) {
  
    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
  }
  
  printReverseList(list);