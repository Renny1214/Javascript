let user = {
    name: "John",
    age: 30
};
user.sayHi = function()
{
    alert("hello");
}
user.sayHi();

//A function that is the property of an object is called its method.
// Here we’ve got a method sayHi of the object user.
function sayHi()
{
    alert("hello");
}
user.sayHi = sayHi();
user.sayHi();

//METHOD SHORTHAND
user={
    sayHi: function(){
        alert("hello");
    }
};

user={
    sayHi()
    {
        alert("hello");
    }
};

//"THIS" in methods
//to access the object, a method can use the this keywoed
let user={
    name:"abc",
    age:30,
    sayHi(){
        alert(this.name);  // alert(user.name);
    }
};
user.sayHi(); //John


//"THIS" is not bound
let user = {name:"john"};
let admin = {name:"admin"};

function sayHi()
{
    alert(this.name);
}

user.f = sayHi();
admin.f = sayHi();

user.f(); //john  (this==user)
admin.f(); //admin  (this==admin)
admin['f'](); //admin

//caling without an object: this==undefined
function sayHi()
{
    alert(this);
}
sayHi(); //undefined

//Arrow functions have no "this"
//Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

let user = {
    name:"abc",
    sayHi(){
        let arrow = () => alert(this.name);
    }
};
user.sayHi(); //abc
