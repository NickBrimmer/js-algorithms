function arrayMaxConsecutiveSum(inputArray, k) {
    let newArray = []

    for (let i = 0; i < inputArray.length - 1; i++) {
        current = inputArray[i] + inputArray[i + 1]
        console.log(current);
        newArray.push(current)
    }

    return Math.max(...newArray)
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6]));