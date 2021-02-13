function arrayMaximalAdjacentDifference(inputArray) {
    let diff = 0;

    for (let i = 0; i < inputArray.length; i++) {
        newDiff = Math.abs(inputArray[i] - inputArray[i + 1])

        diff = newDiff > diff ? newDiff : diff;

        console.log(diff);
    }

    return diff;
}

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
// console.log(arrayMaximalAdjacentDifference([1, 1, 1, 1]));
// console.log(arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2]));
console.log(arrayMaximalAdjacentDifference([10, 11, 13]));