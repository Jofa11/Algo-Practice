// Given an arithmetic progression with a missing integer, return the missing int

const nums = [-13, -18, -28, -33, -38, -43, -48];

const findMissing = (list) => {
	let missingNum;
	const diff = Math.abs(list[list.length - 1] - list[0]) / list.length;

	for (i = 0; i < list.length - 1; i++) {
		if (Math.abs(list[i + 1] - list[i]) != diff && list[i + 1] > list[i]) {
			missingNum = list[i] + diff;
		} else if (
			Math.abs(list[i + 1] - list[i]) != diff &&
			list[i + 1] < list[i]
		) {
			missingNum = list[i] - diff;
		}
	}
	return missingNum;
};

console.log(findMissing(nums));
