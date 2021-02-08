function allLongestStrings(input) {
    let longestLength = 0;

    for(let i = 0; i < input.length; i++){
        longestLength = input[i].length > longestLength ? input[i].length : longestLength;
    }

    return input.filter(a => a.length === longestLength)
}

////////////////////////////// V1 below

function allTheLongestStrings(strings){
    let count = {};
    let longestLength = 0;
    let longestStrings = [];

    for(let i = 0; i < strings.length; i++){
        const current = strings[i];

        if(count[current] === undefined){
            count[current] = current.length;

            longestLength = current.length > longestLength ? current.length : longestLength;
        }
    }

    for(let i = 0; i < strings.length; i++){
        const current = strings[i];

        if(current.length === longestLength){
            longestStrings.push(current)
        }
    }

    return longestStrings;
}

console.log(allTheLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));