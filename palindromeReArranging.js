function palindromeRearranging(input) {
    const chars = input.split('')
    let object = {}

    for (let i = 0; i < input.length; i++) {
        const current = input[i]

        if (object[current] === undefined) {
            object[current] = 1;
        } else {
            object[current]++
        }

    }
    console.log(object);


    for (const keys in object) {
        if ((object[keys] % 2 === 1) > 1) {
            return false;
        }
    }

    return true;
}

console.log(palindromeRearranging('aabbcd'));
// console.log(palindromeRearranging('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc'));
// console.log(palindromeRearranging('abbcabb'));
// console.log(palindromeRearranging('zyyzzzzz'));