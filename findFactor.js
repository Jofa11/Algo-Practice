

function pthFactor(n, p) {
    const arr = [];
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    
    if (p > arr.length) {
        return 0;
    } else {
        return arr[p-1];
    }
}

console.log(pthFactor(20, 3));