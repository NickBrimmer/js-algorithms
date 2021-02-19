function arrayReverseInPlace(a) {
    first = 0;
    last = a.length - 1;

    console.log(first);

    while (first < Math.floor(a.length / 2)) {
        temp1 = a[first];
        temp2 = a[last];

        a[first] = temp2;
        a[last] = temp1;

        first++
        last--
    }



    return a;
}

console.log(arrayReverseInPlace([1, 2, 3, 4, 5, 6]));