function yearOfBirth(age) {
	
	if (age < 0) {
		throw new Error("age cannot be negative")
	}
	if (isNaN(age)) {
		throw new Error("age must be a number")
	}
	return new Date().getFullYear() - age
}

function displayAge(age) {
	try {
		console.log(`You were born in ${yearOfBirth(age)}`)
	} catch(err) {
		console.log(`There is an error: ${err.message}`);
	}
}

function nameOfPerson(name) {
	if (typeof name === 'string') {
		console.log("all is good")
	} else {
		console.log("didn't work")
	}
}

nameOfPerson("guy")

console.log(yearOfBirth("15"));


function whoAmI(name, age) {
    const yearOfBirth = new Date().getFullYear() - age;

    console.log(`Hi my name is ${name} and I'm ${age} years old`);
}
	

whoAmI("Bob", 22);