
function avoidObstacles(inputArray) {
    inputArray = inputArray.sort((a, b) => a - b);
    const largestArrayVal = inputArray[inputArray.length - 1];

    for (let i = 1; i <= largestArrayVal + 1; i++) {
        if (inputArray.every(element => element % i !== 0)) {
            return i;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([2, 3]));
console.log(avoidObstacles([1, 4, 10, 6, 2]));
console.log(avoidObstacles([1000, 999]));
console.log(avoidObstacles([19, 32, 11, 23]));


function avoidObstaclesTwo(inputArray) {
    var jump = 2;
    while (inputArray.some((obstacle) => obstacle % jump == 0)) {
        jump++;
    }
    return jump;
}

console.log(avoidObstaclesTwo([5, 3, 6, 7, 9]));
console.log(avoidObstaclesTwo([2, 3]));
console.log(avoidObstaclesTwo([1, 4, 10, 6, 2]));
console.log(avoidObstaclesTwo([1000, 999]));
console.log(avoidObstaclesTwo([19, 32, 11, 23]));

