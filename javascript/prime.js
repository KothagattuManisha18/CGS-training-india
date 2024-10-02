function primeFactors(n) {
    let factors = [];
    while (n % 2 === 0) {
        factors.push(2);
        n = Math.floor(n / 2);
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = Math.floor(n / i);
        }
    }
    if (n > 2) {
        factors.push(n);
    }
    return factors;
}

function sumPrimeFactors(arr) {
    let result = [];
    arr.forEach(num => {
        let factors = primeFactors(num);
        let sumFactors = factors.reduce((acc, val) => acc + val, 0);
        result.push(sumFactors);
    });
    return result;
}

let numbers = [11, 24, 30];
let sums = sumPrimeFactors(numbers);
console.log(sums);