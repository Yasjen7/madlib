// Create variables for the Mad Libs story 
const timeOfDay = "bright morning";
const shipName = "The Black Pearl";
const captainSays = "Could it be Treasure?";
const mathResult = 5 * 5;
const booleanValue = timeOfDay.includes("morning");
const person = { name: "Pepe", age: 30 };

// The Pirate Adventure Story
const story = `One ${timeOfDay}, I set sail on a pirate ship named ${shipName}. 
The endless sea stretched endlessly before us. Just then, we spotted a mysterious chest floating in the water.
 '${captainSays}' the captain exclaimed. We hauled it aboard and opened it. Did you know ${5} × ${5} equals ${mathResult}? 
 Incredible, right?`;
 
document.getElementById("madlibs-output").textContent = story;
console.log(story);