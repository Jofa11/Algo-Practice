// Given a string, return object with key value count of alpha numeric characters

// charCount("hello");
// {
//     h: 1,
//     e: 1,
//     l: 2,
//     o: 1
// }

// function charCount(str) {
// 	// make object to return at end
// 	const result = {};
// 	// loop over string, for each character...
// 	for (let i = 0; i < str.length; i++) {
// 		let char = str[i].toLowerCase();
// 		// if character is something else (space, period, etc.) don't do anything
// 		if (/[a-z0-9]/.test(char)) {
// 			// if the char is a number/letter AND is a key in object, add one to count
// 			if (result[char] > 0) {
// 				result[char]++;
// 				// if the char is a number/letter AND not in object, add it to object and set value to 1
// 			} else {
// 				result[char] = 1;
// 			}
// 		}
// 	}

// 	// return object at end
// 	return result;
// }

// Refactored
function charCount(str) {
	const obj = {};
	for (let char of str) {
		if (isAlphaNumeric(char)) {
			char = char.toLowerCase();
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

// Function to use charCode instead of regex as it performs better
function isAlphaNumeric(char) {
	let code = char.charCodeAt(0);
	if (
		!(code > 47 && code < 58) && // numeric (0-9)
		!(code > 64 && code < 91) && // upper alpha (A-Z)
		!(code > 96 && code < 123) // lower alpha (a-z)
	) {
		return false;
	}
	return true;
}

console.log(charCount('Hi there!'));
