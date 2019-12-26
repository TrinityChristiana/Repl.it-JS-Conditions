/*
  Write a switch statement that handles determining whose turn it is to clean
  the fraternity toilet. Obviously, none of the boys want to do it, so they
  decide to roll a 4-sided dice. Marshawn is assigned to 1. Mitchell is assigned
  to 2. Mark is assigned to 3. Miguel is assigned to 4.
*/

const dieRollResult = 1;

// Each case statement will reassign the value of this variable
let toiletCleaner
  

// Switch statement here
switch (dieRollResult) {
    case 1: toiletCleaner = "Marshawn";
      break;
    case 2: toiletCleaner = "Mitchell";
      break;
    case 3: toiletCleaner = "Mark";
      break;
    case 4: toiletCleaner = "Miguel";
      break;
  }

// This should display the correct frat boy's name
console.log(toiletCleaner);
