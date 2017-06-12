function jediName (firstName, lastName) {

//firstName.slice(0, 1);
//lastName.slice(0, 2);

console.log(`${lastName.slice(0, 3)}${firstName.slice(0, 2)}`)

}

jediName("Bill", "Gates");




function beyond(num) {

	if (num > 0) {
	console.log("To infinity");
} 
	if (num < 0) {
	console.log("To negative infinity");
}

	if (num === 0) {
	console.log("Staying home");
}
	if (num !== 0) {
	console.log("and Beyond");
}

}

beyond(-88);



function decode (string){

	if (string[0] === "a") {
		console.log(string[1])
	}
	if (string[0] === "b") {
		console.log(string[2])
	}
	if (string[0] === "c") {
		console.log(string[3])
	}
	if (string[0] === "d") {
		console.log(string[4])
	} 
	else { 
		console.log(" ")
	}
}

decode("craft")
decode("block")
decode("argon")
decode("meter")
decode("bells")
decode("brown")
decode("croon")
decode("droop")















