const testArr = [25, 100, 50, 50];
const thisArr = [4,5,20,40,60,80,100];
const thatArr = [4,5,2,2,3,4,5,1];

function numPlayers(k, scores) {
    const n = scores.length;
    if (n < 1 || n > Math.pow(10, 5) || n < k) {
        return -1;
    }

    const sortedScores = scores.sort((a,b) => b-a);
    const arr = [];
    
    let rank = 0;
    let repeat = 0;

    for (let i = 0; i < sortedScores.length; i++) {
        if (sortedScores[i] < 0 || sortedScores[i] > 100) {
            return -1;
        }
        
        if (sortedScores[i] !== sortedScores[i-1] && rank+1 <= k) {
            repeat = 0;
            rank++;
            arr.push(rank);
        } else if (sortedScores[i] === sortedScores[i-1] && rank+1 <= k) {
            repeat++;
            rank++
            arr.push(rank-repeat);
        }

    }
    console.log(arr);
    return arr.length;
}

console.log(numPlayers(3, thatArr));