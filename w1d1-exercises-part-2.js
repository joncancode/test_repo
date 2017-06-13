function jediName (firstName, lastName) {

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



var nameOfMonth = "February";
switch (nameOfMonth) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log(`${nameOfMonth} has 31 days`);
    break;
  case "February":
    console.log(`${nameOfMonth} has 28 or 29 days`);
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log(`${nameOfMonth} has 30 days`);
    break;
  default:
    console.log("please give a valid month");
}



function fizzBuzz(countTo) {

var result = [] 
let i = 1
while (i < countTo) {
switch (countTo) {
  case countTo % 15 === 0:
    result.push("fizzBuzz");
    break;
  case countTo % 5 === 0:
    result.push("Buzz");
    break;
  case countTo % 3 === 0:
    result.push("fizz");
    break;
  default:
    result.push(countTo);
}
}
}
fizzBuzz(44);




function RockPaperScissors(userChoice){
    var computer = 1 + Math.floor((Math.random()*3));
    if (computer === 1) {
    	computer = "rock"
    }
     if (computer === 2) {
    	computer = "paper"
    }
    if (computer === 3) {
    	computer = "scissors"
    }

    if (userChoice === "paper" && computer == "scissors") {
    	console.log(`You chose ${userChoice} and the computer chose ${computer} - you lose`)
    }
   if (userChoice === "paper" && computer == "rock") {
    	console.log(`You chose ${userChoice} and the computer chose ${computer} - you win`)
    }
    if (userChoice === "paper" && computer == "paper") {
    	console.log(`You chose ${userChoice} and the computer chose ${computer} - you tied`)
    }
   if (userChoice === "rock" && computer == "scissors") {
    	console.log(`You chose ${userChoice} and the computer chose ${computer} - you win`)
    }
   if (userChoice === "rock" && computer == "paper") {
    	console.log(`You chose ${userChoice} and the computer chose ${computer} - you lose`)
    }
    if (userChoice === "rock" && computer == "rock") {
    	console.log(`You chose ${userChoice} and the computer chose ${computer} - you tied`)
    }
    if (userChoice === "scissors" && computer == "paper") {
    	console.log(`You chose ${userChoice} and the computer chose ${computer} - you win`)
    }
    if (userChoice === "scissors" && computer == "rock") {
    	console.log(`You chose ${userChoice} and the computer chose ${computer} - you lose`)
    }
    if (userChoice === "scissors" && computer == "scissors") {
    	console.log(`You chose ${userChoice} and the computer chose ${computer} - you tied`)
    }
}

RockPaperScissors("paper")
