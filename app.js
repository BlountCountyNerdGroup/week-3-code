// if you don't remember, any lines starting with // are a comment and do not do anything

// prompt() is one of the ways we ask a question to the user
var turnOnCar = prompt("Turn on the car?");

// if you're wondering the || means "or". So we're asking if turnOnCar is "Yes" OR "Yeah"
if (turnOnCar == "Yes" || turnOnCar == "Yeah") {
    console.log("Engine turning on...");

    // this calls the function we defined on line 20
    getLocation();

    // we can call it again if we want to without having to type out much
    getLocation();

} else if (turnOnCar == "No") {
    console.log("The car is off");
} else {
    console.log("Not sure what you mean");
}

// this is what's called a function. A function is just reusable code, so everytime we type
// getLocation() it does everything within the curly brackets in our function definition (lines 24-34)
function getLocation() {
    var whereToDrive = prompt("Where do you want to drive to? \n1. Library \n2. Cola factory \n3. Surprise me");

    if (whereToDrive == "Library") {
        console.log("Driving to the library!")
    } else if (whereToDrive == "Cola factory") {
        console.log("Driving to the factory!")
    } else if (whereToDrive == "Surprise me") {
        console.log("Driving somewhere random!");
    }
}

// if you want, you can add more if statements to make it more realistic
// Or you could add more functions to the code like you could create a function 
// called setSpeedOfCar() and you could ask the user what speed they want the car to go at
// you would probably have to create a variable to store the speed of the car