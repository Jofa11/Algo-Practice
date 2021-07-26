// Using objects makes it O(n) vs nested loop is O(n**2)

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
    // add 1 or initialize counter with 1
	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
    // console.log(frequencyCounter1);
    // console.log(frequencyCounter2);
    // Check if number from 1 is squared in 2
	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
        // Do the values correspond
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}

console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));
