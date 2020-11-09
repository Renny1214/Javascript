//Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler. That’s very convenient in practice.
//As you can see, the .catch doesn’t have to be immediate. It may appear after one or maybe several .then.
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
.catch(error => alert(error.message));


//Implicit try...catch (The code of a promise executor and promise handlers has an "invisible try..catch" around it. If an exception happens, it gets caught and treated as a rejection.)
new Promise((resolve, reject) => {
    resolve("ok");
  }).then((result) => {
    throw new Error("Whoops!"); // rejects the promise
}).catch(alert); // Error: Whoops!
   //(This happens for all errors, not just those caused by the throw statement. For example, a programming error:)
new Promise((resolve, reject) => {
    resolve("ok");
  }).then((result) => {
    blabla(); // no such function
}).catch(alert); // ReferenceError: blabla is not defined


//Rethrowing
/*
As we already noticed, .catch at the end of the chain is similar to try..catch. We may have as many .then handlers as we want, and then use a single .catch at the end to handle errors in all of them.

In a regular try..catch we can analyze the error and maybe rethrow it if it can’t be handled. The same thing is possible for promises.

If we throw inside .catch, then the control goes to the next closest error handler. And if we handle the error and finish normally, then it continues to the next closest successful .then handler.
*/

// the execution: catch -> then
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
  }).catch(function(error) {
    alert("The error is handled, continue normally");
}).then(() => alert("Next successful handler runs"));


// the execution: catch -> catch
new Promise((resolve, reject) => {
   throw new Error("Whoops!");
}).catch(function(error) { // (*)
  if (error instanceof URIError) {
      // handle it
    } else {
      alert("Can't handle such error");
      throw error; // throwing this or another error jumps to the next catch
    }
  }).then(function() {
    /* doesn't run here */
  }).catch(error => { // (**)
    alert(`The unknown error has occurred: ${error}`);
    // don't return anything => execution goes the normal way
});