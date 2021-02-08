function allLongestStrings(input) {
    let longestLength = 0;

    for(let i = 0; i < input.length; i++){
        longestLength = input[i].length > longestLength ? input[i].length : longestLength;
    }

    return input.filter(a => a.length === longestLength)
}


console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));