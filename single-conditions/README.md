Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Single-Conditions

# Conditions

Conditions are used by software developers when the value of a variable can be one of many possible ones, and the instructions to follow will be different given a certain value. Much like the decisions that you make on a daily basis, you decide to do something different when there are certain conditions.

If you are hungry, and you are driving by yourself, you decide to eat quickly at a fast food restaurant. However, if you have your family with you, you decide to eat at a casual dining restaurant.

For a software developer, this kind of everyday logic would look like this:

```javascript
const numberOfPassengers = 4;

if (numberOfPassengers > 1) {
    // Condition evaluated true
    alert("We will eat at Sushi Tomo tonight.");
} else {
    // Condition evaluated false
    alert("I will eat at Burger King tonight.");
}
```