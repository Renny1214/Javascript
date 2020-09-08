//Memory management in JavaScript is performed automatically and invisibly to us. 

//REACHABILITY
    // “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.
      // user has a reference to the object
      let user = {
        name: "John"
      };

      user = null;
      //Now John becomes unreachable. There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.

//TWO REFERENCES
// user has a reference to the object
  let user = {
    name: "John"
  };
  
  let admin = user;
  user = null;
     //Then the object is still reachable via admin global variable, so it’s in memory. If we overwrite admin too, then it can be removed.

//INTERLINKED OBJECTS
function marry(man,women)
{
    women.husband = man;
    man.wife = women;
    return
    {
        father = man,
        mother = women
    }
}
let family=marry({
  name : "john"
},
{
  name : "ann"
});
//Function marry “marries” two objects by giving them references to each other and returns a new object that contains them both.
delete family.father;
delete family.mother.husband;
//So, John is now unreachable and will be removed from the memory with all its data that also became unaccessible.

//UNREACHABLE ISLAND
//It is possible that the whole island of interlinked objects becomes unreachable and is removed from the memory.
family = null;

//*The basic garbage collection algorithm is called “mark-and-sweep”.



