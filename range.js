function range(a, b) {
    let count = a;
    const newArray = [];

    while (count <= b) {
        newArray.push(count);
        count++
    }
    return newArray;
};

console.log(range(2, 12));