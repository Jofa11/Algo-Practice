const thisArr = [7, 32, 32, 85, 0, 46, 21, 98652, 890, 47, 74];

// const arr = [1,2,3,4,5];
// const result = arr.splice(1,2,3);

// console.log(result);

// function loopArr(arr, direction, steps) {
// 	const output = [];
// 	if (direction === 'left') {
// 		for (let i = steps; i < arr.length; i++) {
// 			output.push(arr[i]);
// 		}
// 		output.push(...arr.slice(0, steps));
// 	} else if (direction === 'right') {
// 		for (let i = arr.length - steps; i < arr.length; i++) {
// 			output.push(arr[i]);
// 		}
// 		output.push(...arr.slice(0, arr.length - steps));
// 	} else {
// 		return 'invalid input';
// 	}
// 	return output;
// }

// console.log(loopArr([1,5,87,45,8,8], 'right', 2));

// function spinWords(string) {
// 	const wordsArr = string.split(' ');
// 	console.log(wordsArr);

// 	for (i = 0; i < wordsArr.length; i++) {
// 		if (wordsArr[i].length >= 5) {
// 			wordsArr[i] = wordsArr[i].split('').reverse().join('')
// 		}
// 	}

// 	return wordsArr.join(' ')
// }

// console.log(spinWords('sroirraw wollef yeH'));

// const arr1 = [1, 2, 3, 4, 1, 3, 6, 5];
// const arr2 = [5, 4, 3, 4, 1, 4, 6, 2];

// function updateTimes(signalOne, signalTwo) {
// 	const maxEqual = [];
// 	let twoCount = 0;

// 	for (i = 0; i < signalOne.length; i++) {
// 		if (
// 			signalOne[i] === signalTwo[twoCount] &&
// 			signalOne[i] > Math.max(maxEqual)
// 		) {
// 			maxEqual.push(signalOne[i]);
// 			twoCount++;
// 		} else {
// 			twoCount++;
// 		}
// 		console.log(Math.max(...maxEqual));
// 	}
// 	return maxEqual.length;
// }

// console.log(updateTimes(arr1, arr2));

