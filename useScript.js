/*
New features were added to the language while old functionality didn’t change.
That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript’s creators got stuck in the language forever.
To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict".
*/

"use script" 
'use script'
// this code works th emodern way

//Ensure that "use script" is at the top
//There is no way to cancel use script

//somentimes need to use it this way
(function()
{
    'use script'
    //code here
})()
