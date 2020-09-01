//statements
alert("hello");

//Semicolon
    //(will work without semicolon - automatic semicolon insertion)
         alert("hello")
         alert("world") 
    //(but sometimes semicolonn doesn't)
         alert(2+
            3+
            1);
    //(sometimes javascript fails)
        alert("error")
        [1,2].forEach(alert)
         //(will work fine)
             alert("error solved");
             [1,2].forEach(alert);

//comments
     // for single line
         // .... //
     // for multiple lines
         /*
           ....
         */

// nsted comments are not supported
      //
      /* 
         /*
            .... 
         */
     //
