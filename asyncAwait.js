//There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

//ASYNC FUNCTIONS
async function f() {
    return 1;
  }
f().then(alert); // 1

async function f() {
    return Promise.resolve(1);
  }
f().then(alert); // 1


//AWAIT (The keyword await makes JavaScript wait until that promise settles and returns its result.)
async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise; // wait until the promise resolves (*)
    alert(result); // "done!"
  }
f();


//*Cant use in regular functions
function f() {
    let promise = Promise.resolve(1);
    let result = await promise; // Syntax error
}

//An example with async/await
async function showAvatar() {
    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    img.remove();
    return githubUser;
  }
showAvatar();


//Async class methods
class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }
new Waiter()
    .wait()
    .then(alert); // 1



//ERROR HANDLING
//If a promise resolves normally, then await promise returns the result. But in the case of a rejection, it throws the error, just as if there were a throw statement at that line.
async function f() {
    await Promise.reject(new Error("Whoops!"));
}

async function f() {
    throw new Error("Whoops!");
}

   //We can catch that error using try..catch, the same way as a regular throw:
async function f() {
    try {
      let response = await fetch('http://no-such-url');
    } catch(err) {
      alert(err); // TypeError: failed to fetch
    }
}
f();


//In the case of an error, the control jumps to the catch block. We can also wrap multiple lines:
async function f() {
    try {
      let response = await fetch('/no-user-here');
      let user = await response.json();
    } catch(err) {
      // catches errors both in fetch and response.json
      alert(err);
    }
  }
f();
