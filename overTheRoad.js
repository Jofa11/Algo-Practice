// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

// 1  6
// 3  4
// 5  2

// Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// Given your house number address and length of street n, give the house number on the opposite side of the street.

function overTheRoad(address, n) {
	// find how many steps to get to address, odd and even
	let steps = 0;

	if (address % 2 === 1) {
		steps = (address - 1) / 2;
		// traverse steps on opposite side
		return n * 2 - steps * 2;
	} else {
		steps = (n * 2 - address) / 2;
		// traverse steps on opposite side
		return steps * 2 + 1;
	}
}

// Yay! My solution worked.

// Here's a much better solution from other Code Warriors
function overTheRoad(address, n) {
	return n * 2 + 1 - address;
}