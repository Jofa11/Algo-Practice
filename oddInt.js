// Given an array of integers, find the one that appears an odd number of times

// The first thing we are going to do is loop through arr.

// On the first line inside the for-loop, we use the filter() method to create a new array containing all the values that match the current iterated value. We also use the length method to help us obtain the number of duplicates for that particular number in arr.

// We assign this number to the count variable.

// We use the if statement to check if count is an odd number. If it is, we stop the loop by returning the number.
// If the loop finishes, we return -1 to say there is no such number with an odd number of duplicates in the array.

function findOdd(arr) {
	for (let i = 0; i < arr.length; i++) {
		const count = arr.filter((value) => value === arr[i]).length;
		if (count % 2 == 1) {
			return arr[i];
		}
	}
	return -1;
}