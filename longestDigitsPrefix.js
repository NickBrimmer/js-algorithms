function longestDigitsPrefix(inputString) {
    let final = []
    const chars = inputString.trim().split('');

    for (let i = 0; i < chars.length; i++) {
        const current = chars[i];
        console.log(current);

        if (isNaN(current) || current === " ") {
            return final.join('')
        }
        else final.push(current)
    }

    return final.join('');
}

console.log(longestDigitsPrefix("123aa1"));