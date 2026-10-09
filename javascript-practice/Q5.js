
/* Q5: Weather Activity Planner */

// Declare weather conditions
let temperature = 12;
let isRaining = false;
let windSpeed = 25;

// Recommend an activity based on weather
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if (temperature >= 15 && temperature <= 35 || windSpeed <= 20) {
    console.log("Perfect day for a walk.");
} else {
    console.log("Stay indoors with hot coffee.");
}