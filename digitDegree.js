function digitDegree(n) {
    let count = 0;
    let currentNumber = n;

    if (n <= 9) {
        return count;
    } else {
        while (true) {

            count++
            currentNumber = getDigit(currentNumber)

            if (currentNumber <= 9) break;
        }

    }
    return count;
}

function getDigit(num) {
    const nums = num.toString().split('').map((element) => parseInt(element));

    return nums.reduce((a, b) => a + b);
}


console.log(digitDegree(100));
console.log(digitDegree(92));