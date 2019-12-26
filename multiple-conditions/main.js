const pastaIsMyFavorite = false;
const restaurantHasLasagna = false;

/*
  Write an if statment, with multiple conditions that uses console.log to display the 
  statement, "I will have the lasagna" if pasta is your favorite food, and the restaurant
  has lasagna on the menu. If either of those conditions are are false, use console.log
  to display the statement, "I will have the spaghetti".
*/

if (pastaIsMyFavorite && restaurantHasLasagna) {
  console.log("I will have the lasagna");
} else if (!pastaIsMyFavorite || !restaurantHasLasagna) {
  console.log("I will have the spaghetti");
}