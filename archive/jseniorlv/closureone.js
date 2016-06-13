function showName(firstname, lastname){
	var nameIntro = "Your name is";
	//this inner function has access to the outer function's variables, including the parameter
	function makeFullName(){
		return nameIntro + firstname + " " + lastname;
	}
	return makeFullName();
}
console.log(showName("Thillai","Arasu"));