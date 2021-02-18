function range(a, b) {
    let count = a;
    const newArray = [];

    while (count <= b) {
        newArray.push(count);
        count++
    }
    return newArray;
};

console.log(range(1, 10));

function sum(array) {
    let total = 0;

    array.forEach(element => {
        total += element;
    })
    return total;
};

console.log(sum(range(1, 10)));