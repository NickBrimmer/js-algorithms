function adjacentElementsProduct(input) {
    let minArray = [];

    for (let i = 0; i < input.length - 1; i++) {
        minArray[i] = input[i] * input[i + 1]
    }
    return Math.max(...minArray)
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
