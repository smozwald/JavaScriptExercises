function add (a, b) {
	return parseInt(a) + parseInt(b);
}

function subtract (a,b) {
	return parseInt(a) - parseInt(b);
}

function sum (array) {
	let total = 0;
	if (array.length < 1) {
		return total;
	}
	for (let i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total;
}

function multiply (array) {
	let total = 1;
	if (array.length < 1) {
		return total;
	}
	for (let i = 0; i < array.length; i++) {
		total *= array[i];
	}
	return total;
}

function power(a,b) {
	base = a;
	for (let i = 0; i < b-1; i++) {
		a *= base;
		console.log(i);
	}
	return a;
}

function factorial(a) {
	if (a <= 1) {
		return 1
	} else {
		return (a * factorial(a-1));
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}