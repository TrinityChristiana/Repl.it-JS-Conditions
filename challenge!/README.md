Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Challenge

## Challenge: Global Weather Report

You are going to use the window.prompt() method to ask your customer three questions.

1. Which hemisphere do you live in, Northern or Southern?
2. What month is it?
3. What is the current temperature?

You are going to use conditionals to give your customer feedback based on the answers.

If the customer lives in the northern hemisphere, and the month is October, November, December, January, or March here is what you should tell the user for different temperature ranges.

- Greater than 13, display "Global warming must be real."
- Less than 13, but greater than -6, display "Can we go skiing today?"
- Less than -6, display "So much for global warming."

If the customer lives in the northern hemisphere, and the month is April, May, June, July, August, or September here is what you should tell the user for different temperature ranges.

- Greater than 35, display "I didn't know we lived on the Sun!"
- Less than 35, but greater than 23, display "Let's go to the beach."
- Less than -6, display "So much for global warming"  
  
If the customer lives in the southern hemisphere, switch the months, but use the same messages for the temperature ranges.

Example:
The following statement will display a prompt to the user, and then the  variable hemisphere will contain the string "Northern" or "Southern" 

const hemisphere = window.prompt("Which hemisphere do you live in, Northern or Southern?")

MORE READING:
https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt