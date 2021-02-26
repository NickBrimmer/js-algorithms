function circleOfNumbers(n, firstNumber) {
    let newArray = []
    let i = 0;
    while (i < n) {
        newArray.push(i)
        i++
    }

    const first = newArray.splice(0, firstNumber);
    newArray.push(...first)

    console.log(newArray);

    let final = newArray[newArray.length / 2];

    return final;
};

console.log(circleOfNumbers(10, 2));
