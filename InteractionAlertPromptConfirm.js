//ALERT
   //It shows a message and waits for the user to press “OK”.
      alert("hello");
      /*The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.*/

//PROMPT
   //it is generally used to ask question, has 2 parameters, title and default.
     /*title - The text to show the visitor.
       default - An optional second parameter, the initial value for the input field. - it is optional*/
       result = prompt(title,[optional_value]);
       age = propmt ("age",20);
       alert(`your age is ${age}`);

//CONFIRM
    //The function confirm shows a modal window with a question and two buttons: OK and Cancel.
       // The result is true if OK is pressed and false otherwise.
            result = confirm("qusetion");
            let isBoss = confirm("Are you the boss?");
            alert( isBoss ); // true if OK is pressed