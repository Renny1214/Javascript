//JSON.stringify  (JSON.stringify to convert objects into JSON.)

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
  alert(typeof json); // we've got a string!
  
  alert(json);
  /* JSON-encoded object:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "wife": null
  }
  */


  // a number in JSON is just a number
  alert( JSON.stringify(1) ) // 1
  // a string in JSON is still a string, but double-quoted
  alert( JSON.stringify('test') ) // "test"
  alert( JSON.stringify(true) ); // true
  alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]


  let user = {
    sayHi() { // ignored
      alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
  };
  alert( JSON.stringify(user) ); // {} (empty object)



  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };
  alert( JSON.stringify(meetup) );
  /* The whole structure is stringified:
  {
    "title":"Conference",
    "room":{"number":23,"participants":["john","ann"]},
  }
  */


  //No cicrcular reference allowed (Here, the conversion fails, because of circular reference: room.occupiedBy references meetup, and meetup.place references room)
 let room = {
    number: 23
  };
  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };
  meetup.place = room;       // meetup references room
  room.occupiedBy = meetup; // room references meetup
  JSON.stringify(meetup); // Error: Converting circular structure to JSON

//EXCLUDING AND TRANSFORMING : REPLACER

 let room = {
    number: 23
  };
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };
  room.occupiedBy = meetup; // room references meetup
  alert( JSON.stringify(meetup, ['title', 'participants']) );
  // {"title":"Conference","participants":[{},{}]}


  let room = {
    number: 23
  };
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };
  room.occupiedBy = meetup; // room references meetup
  alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
  /*
  {
    "title":"Conference",
    "participants":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */


//Formatting space
JSON.stringify(value, replacer, space)

  //The space argument is used exclusively for a nice output.
  let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };
  alert(JSON.stringify(user, null, 2));
  /* two-space indents:
  {
    "name": "John",
    "age": 25,
    "roles": {
      "isAdmin": false,
      "isEditor": true
    }
  }
  */
  
  /* for JSON.stringify(user, null, 4) the result would be more indented:
  {
      "name": "John",
      "age": 25,
      "roles": {
          "isAdmin": false,
          "isEditor": true
      }
  }
  */


//CUSTOM "toJSON"
  let room = {
    number: 23
  };
  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
  };
  alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "date":"2017-01-01T00:00:00.000Z",  // (1)
      "room": {"number":23}               // (2)
    }
  */


 let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };
  let meetup = {
    title: "Conference",
    room
  };
  alert( JSON.stringify(room) ); // 23
  alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "room": 23
    }
  */


//JSON.parse
let value = JSON.parse(str, [reviver]);

// stringified array
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert( numbers[1] ); // 1

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user = JSON.parse(userData);
alert( user.friends[1] ); // 1