function commonCharacterCount(str1, str2){
    let commonItems = []
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
        
        if(count.hasOwnProperty(current)){
            if(count.hasOwnProperty(current) < 2) {
                delete count[current]
                totalMatches++;

            } else {
                count[current]--
                totalMatches++
            }  
        }
        console.log(count)   
    }
    return totalMatches;
}

// console.log(commonCharacterCount('abc', 'abcdef'));
console.log(commonCharacterCount('aabcc', 'adcaa'));