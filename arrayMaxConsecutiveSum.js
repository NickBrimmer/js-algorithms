function arrayMaxConsecutiveSum(inputArray, k) {
    let newArray = []
    let totals = []

    for (let i = 0; i < inputArray.length; i++) {
        let sum = 0;

        if (inputArray[i + k - 1]) {
            const string = inputArray.slice(i, (i + k))


            newArray.push(string)
        }
    }
    
    for(let i = 0; i < newArray.length; i++){
        let sum = 0;
        newArray[i].forEach((element) => {
            sum += element
        })
        totals.push(sum)
    }
    return Math.max(...totals)
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([1, 3, 4, 2, 4, 2, 4], 4));
