// document.getElementById("count-el").innerText = 5;

// let count = 0;
// count = count + 1;

// console.log(count);

// // // // // assignment 1

// let myAge = 30;
// let dogAge = 7;
// let myDogAge = myAge * dogAge;
// console.log(myDogAge);

// game assignment

// init count as 0
// listen to clicks on the button
// increment the count varible when the button is click
// change the count-el in html to reflect new count

// function increment() {
// 	console.log("The button was clicked");
// }

// setting up race

// function countdown() {
// 	console.log(5);
// 	console.log(4);
// 	console.log(3);
// 	console.log(2);
// 	console.log(1);
// }

// countdown();

// // go
// // race
// // race finished

// countdown();

// function jerseyNumber() {
// 	console.log(42);
// }

// jerseyNumber();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function lapTime() {
// 	let totalTime = lap1 + lap2 + lap3;
// 	console.log(totalTime);
// }
// lapTime();

// let lapsCompleted = 0;

// function increment() {
// 	// to update variable include the variable then old variable
// 	lapsCompleted = lapsCompleted + 1;
// }

// increment();
// increment();
// increment();
// console.log(lapsCompleted);

let countEl = document.getElementById("count-el");

// grab the save-el paragraph and store it in a variable
let saveEl = document.getElementById("save-el");

console.log(countEl);

let count = 0;

function increment() {
	count += 1;
	countEl.innerText = count;
}

function save() {
	// creeate a variable the containes both the counter and dash seperator
	let counter = count + " - ";
	// render the variable in the saveEl using inner text
	// console.log(saveEl.innerText);
	saveEl.innerText += counter;
	console.log(count);
}

save();
