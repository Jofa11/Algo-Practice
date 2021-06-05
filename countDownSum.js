// Starting with the sum of two parameters, print a countdown to the console (one second at a time) until the logs reach zero

const countDownSum = (intOne, intTwo) => {
	let intSum = intOne + intTwo;

	setInterval(() => {
		if (intSum >= 0) {
			console.log(intSum);
			intSum--;
		}
	}, 1000);
};

countDownSum(5, 7);
