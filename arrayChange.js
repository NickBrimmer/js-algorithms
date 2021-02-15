function arrayChange(a) {
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] >= a[i + 1]) {


            count += (a[i] - a[i + 1]) + 1
            a[i + 1] = a[i + 1] + (a[i] - a[i + 1] + 1)
        }
    }


    return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([-1000, 0, -2, 0]));
console.log(arrayChange([2, 1, 10, 1]));
console.log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]));
console.log(arrayChange([3122, -645, 2616, 13213, -8069]));