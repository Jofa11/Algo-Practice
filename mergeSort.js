// // left and right arrays are sorted
// const merge = (leftArr, rightArr) => {
// 	const output = [];
// 	let leftIndex = 0;
// 	let rightIndex = 0;

// 	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
// 		const leftEl = leftArr[leftIndex];
// 		const rightEl = rightArr[rightIndex];

// 		if (leftEl < rightEl) {
// 			output.push(leftEl);
// 			leftIndex++;
// 		} else {
// 			output.push(rightEl);
// 			rightIndex++;
// 		}
// 	}

// 	return [
// 		...output,
// 		...leftArr.slice(leftIndex),
// 		...rightArr.slice(rightIndex),
// 	];
// };

// // recursive
// const mergeSort = (array) => {
// 	if (array.length <= 1) {
// 		return array;
// 	}

// 	const middleIndex = Math.floor(array.length / 2);
// 	const leftArr = array.slice(0, middleIndex);
// 	const rightArr = array.slice(middleIndex);

// 	return merge(mergeSort(leftArr), mergeSort(rightArr));
// };

// console.log(mergeSort([1, 500, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));


// const merge = (leftArr, rightArr) => {
//     const output = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//         const leftEl = leftArr[leftIndex];
//         const rightEl = rightArr[rightIndex];

//         if (leftEl < rightEl) {
//             output.push(leftEl);
//             leftIndex++;
//         } else {
//             output.push(rightEl);
//             rightIndex++;
//         }
//     }

//     return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
// }

// // this will run recursively
// const mergeSort = (array) => {
//     // define edge/exit case
//     if (array.length <= 1) {
//         return array;
//     }

//     // split array into two arrays
//     const middleIndex = Math.floor(array.length / 2);
//     const leftArr = array.slice(0, middleIndex);
//     const rightArr = array.slice(middleIndex);

//     // call merge function with mergeSort function as arguments
//     return merge(
//         mergeSort(leftArr),
//         mergeSort(rightArr)
//     )
// }

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

    return [...output, leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};

const mergeSort = array => {
    if(array.length <= 1) {
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middleIndex);
    const rightArr = array.slice(middleIndex);

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );

}