/*

Write the code, each line for an action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

*/


// Hello object
var user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name

// Check for emptiness
let schedule = {};

function isEmpty(obj) {
  for(var key in obj) {
      return true
    }
      return false
}


alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


// sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

var sumAmount = 0;

for(let key in salaries) {
  sumAmount += salaries[key]
}

// Multiply numeric properties by 2
function multiplyNumeric(obj) {
     for (let key in obj) {
       if (typeof obj[key] == 'number') {
         obj[key] *= 2;
       }
     } return menu
   }

multiplyNumeric(menu);
