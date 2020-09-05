//A switch statement can replace multiple if checks.
//syntax(The switch has one or more case blocks and an optional default.)
switch(x) {
    case 'value1':  // if (x === 'value1')
      alert();
      break;
  
    case 'value2':  // if (x === 'value2')
      alert();
      break;
  
    default:
        alert();
  }
//example
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
//If there is no break then the execution continues with the next case without any checks.
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}
 //will print 3 alerts
 alert( 'Exactly!' );
 alert( 'Too big' );
 alert( "I don't know such values" );

//GROUPING OF CASE
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
  //Now both 3 and 5 show the same message.
    //The ability to “group” cases is a side-effect of how switch/case works without break. 
    //Here the execution of case 3 starts from the line (*) and goes through case 5, because there’s no break.
    
//TYPE MATTERS
  //Let’s emphasize that the equality check is always strict. The values must be of the same type to match.
  let arg = prompt("Enter a value?");
  switch (arg) {
    case '0':
    case '1':
      alert( 'One or zero' );
      break;
  
    case '2':
      alert( 'Two' );
      break;
  
    case 3:
      alert( 'Never executes!' );
      break;
    default:
      alert( 'An unknown value' );
  }

/*For 0, 1, the first alert runs.
For 2 the second alert runs.
But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.
*/