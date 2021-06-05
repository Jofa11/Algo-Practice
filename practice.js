const thisArr = [7, 32, 32, 85, -0, 46, 21, 98652, 890, 47, 74];

const bubbleSort = array => {
	const arr = array.slice();

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j+1]) {
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
			}
		}
	}
	return arr;
}