testArr = [4, 2, 1, 234, 55, 678, 2, 69, 43, 333, 1, 5, 11, 92, 5462, 3];

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

console.log(bubbleSort(testArr));
