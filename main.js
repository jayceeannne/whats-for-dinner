//Global Variables
var sides = [
  "mozzarella sticks",
  "hot cheetos",
  "hot funyuns",
  "gushers",
  "mini churros",
  "cheese curds",
];
var mains = [
  "chicken chow mein",
  "ramen",
  "spaghetti and meatballs",
  "shredded beef tacos",
  "fideo soup",
];
var desserts = [
  "chocolate chip cookie",
  "lava cake",
  "apple donuts",
  "banana nut bread",
  "snickerdoodle cookie",
];

//querySelector
var sideButton = document.querySelector("#side");
var mainButton = document.querySelector("#main-dish");
var dessertButton = document.querySelector("#dessert");
var entireMealButton = document.querySelector("#entire-meal");
var letscookButton = document.querySelector("#lets-cook-button");
var cookingPotImg = document.querySelector(".cook-pot");
var clearButton = document.querySelector(".clear-button");
var youShouldMake = document.querySelector(".you-should-make");
var returnedFood = document.querySelector(".returned-food");

//eventListeners:
letscookButton.addEventListener("click", showTheDish);
clearButton.addEventListener("click", clear);


//functions:
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizedDish() {
  if (entireMealButton.checked) {
    var side = sides[getRandomIndex(sides)];
    var main = mains[getRandomIndex(mains)];
    var dessert = desserts[getRandomIndex(desserts)];
    returnedFood.innerHTML = `${main} with a side of ${side} and  ${dessert} for dessert!`;
  } else if (sideButton.checked) {
    returnedFood.innerHTML = sides[getRandomIndex(sides)];
  } else if (mainButton.checked) {
    returnedFood.innerHTML = mains[getRandomIndex(mains)];
  } else if (dessertButton.checked) {
    returnedFood.innerHTML = desserts[getRandomIndex(desserts)];
  }
  return returnedFood;
}

function showTheDish() {
  cookingPotImg.classList.add("hidden");
  youShouldMake.classList.remove("hidden");
  if (entireMealButton.checked ||
    sideButton.checked ||
    mainButton.checked ||
    dessertButton.checked
  ) {
    returnedFood.classList.remove("hidden");
    randomizedDish();
  } else {
    returnedFood.classList.add("hidden");
  }
}

function clear() {
  returnedFood.innerHTML = "";
  clearButton.classList.remove("hidden");
  returnedFood.classList.add("hidden");
  cookingPotImg.classList.remove("hidden");
//   clearButton.classList.remove("hidden");
}
