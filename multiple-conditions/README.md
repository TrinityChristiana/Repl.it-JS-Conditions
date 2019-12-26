Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Multiple-Conditions

# Checking the Value of More Than One Variable
In a software application, there are many times where you may need to check more than one condition for one branch of your logic to run, or a different one. What do we mean by branch or logic? Here's a traditional image to visualize a logic branch.

![Image of logic branch](https://storage.googleapis.com/replit/images/1530894986076_5a8dc06bc067afe91be51acc41752b22.pn)



# Real-World Scenario
Let's discuss a situation in which two conditions must be met for a certain branch of your logic to run.

You're back in your car, deciding where to eat. If your brother, Chad, is with you, and is the only passenger, he always says he's fine eating at a taco truck, but if Mom and Dad are also in the car, then he would rather eat sushi. The condition of when you are alone still stand.

```js
const alone = false;
const bradIsWithMe = true;
const parentsAreWithMe = true;

if (alone) {
    console.log("Eating fast food");
} else if (bradIsWithMe && parentsAreWithMe) {
    console.log("Eating sushi tonight");
} else if (bradIsWithMe && !parentsAreWithMe) {
    console.log("Eating at the taco truck");
}
``` 

The first condition of checking if you are alone is still a single condition. If that evaluates to **true** then you're eating fast food. Now though, there are additional variables in play. You need to determine if Brad is with you, and also if your parents are with you because where you end up eating depends on those two variables.

When you need to check if one condition is true and another condition is true, you can use two ampersand symbols next to each other. They are JavaScript code for a logical **AND** operation. Using **&&** means that both conditions must be true in order for the code in that branch of logic to run.

Another character that you see in the final condition check is the exclamation point (or "**bang**" in developer language) before the variable is used to determine if it is **NOT** true. In that final condition, the English translation is, "If Brad is with me, and my parents are not with me."