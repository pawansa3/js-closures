
/*

Syntax of closures functions

function OuterFunction(arguments){
	var someVariables = somevalues
	return InnerFunction(arguments) {
		// perform some operation
		someVariables++		
		return someVariables
	}
}

*/

function makeCounter(noun) {
	var count = 0;
	return function() {
		count++;
		return console.log(`${count} ${noun}`);
	}
}
