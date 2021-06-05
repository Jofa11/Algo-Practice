function quickSort(array) {
	if (array.length <= 1) {
		return array;
	}

	const pivot = array[array.length - 1];
	const leftArr = [];
	const rightArr = [];

	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] < pivot) {
			leftArr.push(array[i]);
		} else {
			rightArr.push(array[i]);
		}
	}
	// Refactor
	// for (const el of array.slice(0, array.length - 1)) {
	// 	el < pivot ? leftArr.push(el) : rightArr.push(el);
	// }
	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// test array
const testArr = [
	1,
	4,
	2,
	8,
	345,
	123,
	43,
	32,
	5643,
	63,
	123,
	43,
	2,
	55,
	1,
	234,
	92,
];

console.log(quickSort(testArr));

const quickSort = array => {
	if (array.length <= 1) {
		return array;
	}

	const pivot = array[array.length - 1];
	const leftArr = [];
	const rightArr = [];

	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] < pivot) {
			leftArr.push(array[i]);
		} else {
			rightArr.push(array[i]);
		}
	}

	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}