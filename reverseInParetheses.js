function reverseInParens(input) {
    const chars = input.split('')

    if (chars.indexOf('(') === -1) {
        return input.split('').reverse().join('')
    }

    if (chars.indexOf('(') !== chars.lastIndexOf('(')) {

        if (chars.indexOf(')') > chars.lastIndexOf('(')) {
            let section2A = input.slice(input.indexOf('(') + 1, input.lastIndexOf('(')).split('').reverse().join('');
            let section2B = input.slice(input.lastIndexOf('(') + 1, input.indexOf(')'));

            let sectionOne = input.slice(0, input.indexOf('('));
            let sectionTwo = section2B + section2A;


            let sectionThree = input.slice(input.lastIndexOf(')') + 1);
            return sectionOne + sectionTwo + sectionThree
        } else {

            return (input.slice(0, input.indexOf('('))) + (input.slice(input.indexOf('(') + 1, input.indexOf(')')).split('').reverse().join(''))
                + (input.slice(input.indexOf(')') + 1, input.lastIndexOf('('))) + (input.slice(input.lastIndexOf('(') + 1, input.lastIndexOf(')')).split('').reverse().join(''))
        }
    }

    if (chars.indexOf('(') === chars.lastIndexOf('(')) {

        return (input.slice(0, input.indexOf('('))) + ((input.slice(input.indexOf('(') + 1, input.indexOf(')')).split('').reverse().join('')))
            + input.slice(input.indexOf(')') + 1)
    }

    return ''

}


console.log(reverseInParens('bar'))
console.log(reverseInParens('foo(bar)baz'));
console.log(reverseInParens('foo(bar)baz(blim)'));
console.log(reverseInParens('foo(bar(baz))blim'));