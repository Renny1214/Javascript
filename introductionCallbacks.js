//Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. In other words, actions that we initiate now, but they finish later
// Example setTimeout function


//Let’s add a callback function as a second argument to loadScript that should execute when the script loads:
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}
  //(Now if we want to call new functions from the script, we should write that in the callback:)
   loadScript('/my/script.js', function() {
      // the callback runs after the script is loaded
      newFunction(); // so now it works
   });
  //or (That’s the idea: the second argument is a function (usually anonymous) that runs when the action is completed.)
   loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
     alert(`Cool, the script ${script.src} is loaded`);
     alert( _ ); // function declared in the loaded script
   });



//Callback in Callback
//The natural solution would be to put the second loadScript call inside the callback, like this:
loadScript('/my/script.js', function(script) {
    loadScript('/my/script2.js', function(script) {
      loadScript('/my/script3.js', function(script) {
        // ...continue after all scripts are loaded
      });
    })
});


//Handling Errors (In the above examples we didn’t consider errors. What if the script loading fails? Our callback should be able to react on that.)
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
}
   //It calls callback(null, script) for successful load and callback(error) otherwise.
   loadScript('/my/script.js', function(error, script) {
    if (error) {
      // handle error
    } else {
      // script loaded successfully
    }
    });


//PYRAMID OF DOOM
loadScript('1.js', function(error, script) {
    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', function(error, script) {
        if (error) {
          handleError(error);
        } else {
          // ...
          loadScript('3.js', function(error, script) {
            if (error) {
              handleError(error);
            } else {
              // ...continue after all scripts are loaded (*)
            }
          });
  
        }
      })
    }
});

//or

loadScript('1.js', step1);
function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}
function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}
function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...continue after all scripts are loaded (*)
  }
};