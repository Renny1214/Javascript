/*
The nullish coalescing operator ?? provides a short syntax for selecting a first “defined” variable from the list.

The result of a ?? b is:

a if it’s not null or undefined,
b, otherwise.
*/
x = a??b;
x = (a !== null && a !== undefined) ? a : b; //similar to this

//example
let firstName = null;
let lastName = null;
let nickName = "renny";

// show the first not-null/undefined value
alert(firstName ?? lastName ?? nickName ?? "renny"); // Supercoder


//COMPARISON WITH ||
/* The important difference is that:

|| returns the first truthy value.
?? returns the first defined value */
height = height ?? 100; //sets height to 100 if not defined;


let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

//PRECEDENCE
//The precedence of the ?? operator is rather low: 5
//So ?? is evaluated after most other operations, but before = and ?.
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

//it’s forbidden to use ?? together with && and || operators.
let x = 1 && 2 ?? 3; // Syntax error


