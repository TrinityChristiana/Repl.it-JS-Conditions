Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Switch-Statement

# Many Possible Values
So far you've worked with boolean values. A variable has a value of true or false. Many times, though, a variable can have many possible values. Consider that you want to do a different task depending on what day of the week it is. You would create a variable named `dayOfTheWeek` that will contain one of seven possible values. Depending on which day, you want to be reminded which daily task you want to perform.

A **switch** statement in JavaScript is perfect for this. Otherwise you would need to create seven different if/then statements.

```js
const dayOfTheWeek = "Tuesday";

// The switch statement is followed by the variable that should be 
// evaluated. Then, the case statement that corresponds to the variable's
// value will be executed.
switch (dayOfTheWeek) {
 case "Monday":
   console.log("Vacuum the downstairs");
   break;

 case "Tuesday":
   console.log("Take out the trash");
   break;

 case "Wednesday":
   console.log("Go to pottery class");
   break;

 case "Thursday":
   console.log("Take the kids to swimming practice");
   break;

 case "Friday":
   console.log("Order pizza for family night");
   break;

 case "Saturday":
   console.log("Buy groceries");
   break;

 case "Sunday":
   console.log("Do the crossword puzzle");
   break;
}
```