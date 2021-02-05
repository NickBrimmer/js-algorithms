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