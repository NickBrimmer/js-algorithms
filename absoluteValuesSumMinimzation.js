function absoluteValuesSumMinimization(a) {

    console.log((a.length - 1) / 2);

    if (a.length % 2 === 1) {
        return a[(a.length - 1) / 2];
    } else {
        return a[Math.floor((a.length - 1) / 2)]
    }
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 3]));