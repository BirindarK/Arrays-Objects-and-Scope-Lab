/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

let england = unitedKingdom.find(england => england.name === "England");
england.touristAttractions = ["Big Ben", "London Eye"]
console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

let wales = unitedKingdom.find(wales => wales.capital === "Swansea");
wales.capital = "Cardiff"
console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

let northernIrelandKeys = Object.keys(unitedKingdom.find(northernIrelandKeys => northernIrelandKeys.capital === "Belfast"));
console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the population of Wales, and say which is bigger.
 */

let scotland = unitedKingdom.find(scotland => scotland.capital === "Edinburgh");

if(scotland.population > wales.population){
  console.log("Scotland's population is bigger than Wales' population");
} else {
  console.log("Wales' population is bigger than Scotland's population");
}