var count = 0;

function birdCounter() {
	count++;
	return console.log(count + ' birds');
}

function dogCounter() {
	count++;
	return console.log(count + ' dogs');
}

/*
Issues with these functions
Both functions are using same variable present in the global scope and modifying it's value

solution can be to use separate variable for each function which could consume lot of memory and more coding when we have 100's of function like this

best solution is js closures functions

*/
