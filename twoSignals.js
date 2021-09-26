// HackerRank challenge for job application with Docusign.
// Given two arrays of numbers, when they have the same value at the same position, it makes a 
// "signal." Only when the aligned values are greater than the previous does it get added as a 
// "signal." Return the amount of times it creates a signal.

const arr1 = [1, 2, 3, 4, 1, 3, 6, 5];
const arr2 = [5, 4, 3, 4, 1, 4, 6, 2];

function updateTimes(signalOne, signalTwo) {
	const maxEqual = [];
	let twoCount = 0;

	for (i = 0; i < signalOne.length; i++) {
		if (
			signalOne[i] === signalTwo[twoCount] &&
			signalOne[i] > Math.max(maxEqual)
		) {
			maxEqual.push(signalOne[i]);
			twoCount++;
		} else {
			twoCount++;
		}
		// console.log(Math.max(...maxEqual));
	}
	return maxEqual.length;
}

console.log(updateTimes(arr1, arr2));