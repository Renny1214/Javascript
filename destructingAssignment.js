/*Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as
 sometimes that’s more convenient. Destructuring also works great with complex functions that have a lot of 
 parameters, default values, and so on. */

 //ARRAY DESTRUCTING

   // we have an array with the name and surname
  let arr = ["Ilya", "Kantor"]
  // destructuring assignment
  // sets firstName = arr[0]
  // and surname = arr[1]
  let [firstName, surname] = arr;
  alert(firstName); // Ilya
  alert(surname);  // Kantor

  let [firstName, surname] = "Ilya Kantor".split(' ');

  //Ignore elements using commas
  let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
  alert( title ); // Consul

  //Works with any iterable on the right-side
  let [a, b, c] = "abc"; // ["a", "b", "c"]
  let [one, two, three] = new Set([1, 2, 3]);

  //Assign to anything at the left-side
  let user = {};
  [user.name, user.surname] = "Ilya Kantor".split(' ');
  alert(user.name); // Ilya

  //Looping with .entries()
  let user = {
    name: "John",
    age: 30
  };
      // loop over keys-and-values
  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, then age:30
  }

  //Same from map
  let user = new Map();
  user.set("name", "John");
  user.set("age", "30");
  for (let [key, value] of user) {
    alert(`${key}:${value}`); // name:John, then age:30
  }

  //Swap variable trick
  let guest = "Jane";
  let admin = "Pete";
    // Swap values: make guest=Pete, admin=Jane
  [guest, admin] = [admin, guest];
  alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

  //The rest'...'
  let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
  alert(name1); // Julius
  alert(name2); // Caesar
     // Note that type of `rest` is Array.
  alert(rest[0]); // Consul
  alert(rest[1]); // of the Roman Republic
  alert(rest.length); // 2


//DEFAULT VALUES

let [firstName, surname] = [];
alert(firstName); // undefined
alert(surname); // undefined

  //If we want a “default” value to replace the missing one, we can provide it using =:
   let [name = "Guest", surname = "Anonymous"] = ["Julius"];
   alert(name);    // Julius (from array)
   alert(surname); // Anonymous (default used)


//OBJECT DESTRUCTING
  let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200 


  let {height, width, title} = { title: "Menu", height: 200, width: 100 }


  let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  // { sourceProperty: targetVariable }
  let {width: w, height: h, title} = options;
  // width -> w
  // height -> h
  // title -> title
  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200


  //For potentially missing properties we can set default values using "=", like this
  let options = {
    title: "Menu"
  };
  let {width = 100, height = 200, title} = options;
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200


  //Combining both
  let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  // only extract title as a variable
  let { title } = options;
  alert(title); // Menu


  //The rest pattern '...'
  let options = {
    title: "Menu",
    height: 200,
    width: 100
  };
  // title = property named title
  // rest = object with the rest of properties
  let {title, ...rest} = options;
  // now title="Menu", rest={height: 200, width: 100}
  alert(rest.height);  // 200
  alert(rest.width);   // 100


//NESTED DESTRUCTING

 let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // destructuring assignment split in multiple lines for clarity
  let {
    size: { // put size here
      width,
      height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
  } = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut


//SMART FUNCTION PARAMETERS

  let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  function showMenu({
    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
  }) {
    alert( `${title} ${w} ${h}` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
  }
  showMenu(options);


  
  function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
    alert( `${title} ${width} ${height}` );
  }
  showMenu(); // Menu 100 200