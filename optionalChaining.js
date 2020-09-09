//The optional chaining ?. is an error-proof way to access nested object properties, even if an intermediate property doesn’t exist.

let user = {}; // the user happens to be without address
alert(user.address.street); // Error!

//Before ?. appeared in the language, the && operator was used to work around that.
let user = {}; // user has no address
alert( user && user.address && user.address.street ); // undefined (no error)

//OPTIONAL CHAINING
//The optional chaining ?. stops the evaluation and returns undefined if the part before ?. is undefined or null.
let user = {}; // user has no address
alert( user?.address?.street ); // undefined (no error)

let user = null;
alert( user?.address ); // undefined
alert( user?.address.street ); // undefined


//SHORT-CIRCUITING
let user = null;
let x = 0;
user?.sayHi(x++); // nothing happens
alert(x); // 0, value not incremented

//OTHER CASES:?.(), ?.[]
let user1 = {
    admin() {
      alert("I am admin");
    }
  }
let user2 = {};
user1.admin?.(); // I am admin
user2.admin?.();


let user1 = {
    firstName: "John"
};
let user2 = null; // Imagine, we couldn't authorize the user
let key = "firstName";
alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined
alert( user1?.[key]?.something?.not?.existing); // undefined

//We can use ?. for safe reading and deleting, but not writing
delete user?.name; // delete user.name if user exists
user?.name = "John"; // Error, doesn't work

/*obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj?.method() – calls obj.method() if obj exists, otherwise returns undefined.
*/

