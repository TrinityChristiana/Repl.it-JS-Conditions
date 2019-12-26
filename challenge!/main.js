/*
Here's a little code to get you started...
*/

//Array to test user input for currentMonth 
const monthArray = [
	"January", 
	"February", 
	"March", 
	"April", 
	"May", 
	"June", 
	"July", 
	"August", 
	"September", 
	"October",
	"November", 
    "December"
]

//capitalize words
let capitalize = (word) => {
    if (word){
      let capWord = word[0].toUpperCase() + word.slice(1, word.length);
      return capWord;
    }
    
};

// Gets and validates user input for hemisphere variable
let getHemisphere = () => {
    let hemisphere = window.prompt("Which hemisphere do you live in, Northern or Southern?");
    hemisphere = capitalize(hemisphere);
    while (hemisphere != ("Northern" || "Southern")){
        hemisphere = window.prompt("Which hemisphere do you live in, Northern or Southern? Please use correct spelling!")
        hemisphere = capitalize(hemisphere);
    }
    return hemisphere;
};


// Gets and validates user input for currentMonth variable
let getCurrentMonth = () => {
    let currentMonth = window.prompt("What month is it?");

    currentMonth = capitalize(currentMonth);

    while (monthArray.indexOf(currentMonth) === -1){
        currentMonth = window.prompt("What month is it? Please make sure month is spelled right.");
        currentMonth = capitalize(currentMonth);
    }

    return currentMonth;
};

// Gets and validates user input for temperature variable
let getTemperature = () => {
    let temperature = window.prompt("What is the current temperature?");

    while (isNaN(temperature)){
        temperature = window.prompt("What is the current temperature? Please input a number");
    }
    return temperature;
};

const hemisphere = getHemisphere();
const currentMonth = getCurrentMonth();
const temperature = getTemperature();

if (hemisphere === "Northern") {
  switch (currentMonth){
    case "October":
    case "November":
    case "December":
    case "January":
    case "February":
    case "March":
      if(temperature > 13){
        window.alert("Global warming must be real.");
      } else if(temperature < 13 && temperature > -6){
        window.alert("Can we go skiing today?")
      } else if (temperature < -6){
        window.alert("So much for global warming.");
      }
    break;
    case "April":
    case "May":
    case "June":
    case "July":
    case "August":
    case "September":
      if(temperature > 35){
        window.alert("I didn't know we lived on the Sun!");
      } else if(temperature < 35 && temperature > 23){
        window.alert("Let's go to the beach.")
      } else if (temperature < -6){
        window.alert("So much for global warming" );
      }
  }
} else if (hemisphere === "Southern"){
  switch (currentMonth){
    case "April":
    case "May":
    case "June":
    case "July":
    case "August":
    case "September":
      if(temperature > 13){
        window.alert("Global warming must be real.");
      } else if(temperature < 13 && temperature > -6){
        window.alert("Can we go skiing today?")
      } else if (temperature < -6){
        window.alert("So much for global warming.");
      }
    break;
    case "October":
    case "November":
    case "December":
    case "January":
    case "February":
    case "March":
      if(temperature > 35){
        window.alert("I didn't know we lived on the Sun!");
      } else if(temperature < 35 && temperature > 23){
        window.alert("Let's go to the beach.")
      } else if (temperature < -6){
        window.alert("So much for global warming" );
      }
    break;
  }
  
}

