function commonCharacterCount(str1, str2){
    let count = {}
    let totalMatches = 0;

    for(let i = 0; i < str1.length; i++){
        const current = str1[i]

        if(count[current] === undefined){
            count[current] = 1;
        } else {
            count[current]++
        }
    }

    for(let i = 0; i < str2.length; i++){
        const current = str2[i]
        
        if(count[current]){
            if(count[current] === 1) {
                delete count[current]
                totalMatches++;

            } else {
                count[current]--
                totalMatches++
            }  
        }
    }
    return totalMatches;
}

// console.log(commonCharacterCount('abc', 'abcdef'));
console.log(commonCharacterCount('aabcc', 'adcaa'));