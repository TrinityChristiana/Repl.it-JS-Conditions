Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Nested-Conditions

## Nested Conditions
When a logical branch contains yet another logical branch, you will write code that checks a condition within a condition. That sounds confusing, so consider the following example.

For this exercise, you are going to rate pain on a scale of 1-10.

When you get aches and pains in your body, the location of the pain changes your tolerance of it.  For example, if pain is in your leg or arm, then you can tolerate a pain level of 6 or less. However, if the pain is in your head, foot, or back, you can only tolerate a pain level of 4 or less. If the pain is above the tolerance level for the location, then you should take a pain medication.

The code to represent this kind of pain tolerance system would look like this.

```js
const painLevel = 5;
const painLocation = "back";

switch (painLocation) {
    case "leg":
    case "arm":
        if (painLevel >= 7) {
            console.log("Take some pain reliever!");
        } else {
            console.log("This is fine!");
        }
        break;

    case "head":
    case "foot":
    case "back":
        if (painLevel >= 5) {
            console.log("Time for some maximum strength Tylenol.");
        } else {
            console.log("I can push through the pain.");
        }
        break;
}
```

You may have noticed that, unlike the last exercise, each **case** block of code does not have a **break** statement. Some of the values of `painLocation` have been grouped together because the logic for those groups are identical. Then when the logic is written for all of the grouped values, you can put a **break** statement to let JavaScript know that it's the end of that group.