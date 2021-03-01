// You are given a string of text. The goal of the function is to return an array containing all of the words in that string. The array should omit all punctuation and other non-alphanumeric characters.

let strText =
	'The milkman brought donuts, cheese (along with milk), and a bottle of whiskey to 10 houses.';

function getWords(text) {
    // Use .replace() and regex to convert characters to a space
	let x = text.replace(/[^A-Za-z0-9]+/g, ' ');
    // Use .trim() to remove whitespace created by replace and split to create array
	let newArr = x.trim().split(' ');
	return newArr;
}

console.log(getWords(strText));