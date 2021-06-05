// Reverse an integer

const reverse = (no) => {
	const text = String(no);
	const reversedText = text.split('').reverse().join('');
	return Number(reversedText);
};

// const int = 2468;

// console.log(reverse(int));