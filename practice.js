const thisArr = [7, 32, 32, 85, 0, 46, 21, 98652, 890, 47, 74];

const merge = (leftArr, rightArr) => {
	const output = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
		const leftEl = leftArr[leftIndex];
		const rightEl = rightArr[rightIndex];

		if (leftEl < rightEl) {
			output.push(leftEl);
			leftIndex++;
		} else {
			output.push(rightEl);
			rightIndex++;
		}
	}

	return [
		...output,
		...leftArr.slice(leftIndex),
		...rightArr.slice(rightIndex)
	]
}

const mergeSort = arr => {
	if (arr.length <= 1) {
		return arr;
	}

	const middleIndex = Math.floor(arr.length / 2);
	const leftArr = arr.slice(0, middleIndex);
	const rightArr = arr.slice(middleIndex);

	return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort(thisArr));