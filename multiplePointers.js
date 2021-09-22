// Given an array of ordered numbers, return the first two numbers that sum 0
// This solution uses two pointers for the index and a while loop. It is more efficient than a nested for loop
function sumZero(arr) {
	// pointers of index
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

function uniqueValues(arr) {
    if (arr.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
    return i + 1;
}

const thisArr = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7];

console.log(uniqueValues(thisArr));

// console.log(sumZero([-3424, -2391, -1020, -303, -92, -23, -17, -9, 9]));
