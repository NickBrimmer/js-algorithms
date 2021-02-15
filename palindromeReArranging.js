function palindromeRearranging(input) {
    let object = {}
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        const current = input[i]

        if (object[current] === undefined) {
            object[current] = 1;
        } else {
            object[current]++
        }

    }
    console.log(object);


    for (const item in object) {
        if (object[item] % 2 === 1) {
            count += 1
        }
    }

    return count <= 1;
}

console.log(palindromeRearranging('aabbcd'));
// console.log(palindromeRearranging('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc'));
// console.log(palindromeRearranging('abbcabb'));
// console.log(palindromeRearranging('zyyzzzzz'));