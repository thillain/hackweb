var name = "Richard";

function showName () {
	var name = "Jack"; // local variable; only accessible in this showName function
	console.log (name); // Jack
}
console.log (name); // Richard: the global variable