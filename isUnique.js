function isUnique(str) {
    const chars = str.split('').sort();

    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) !== i) return false
    }

    return true
}

console.log(isUnique('abcdefg'));
console.log(isUnique('abcdefgg'));
console.log(isUnique('abccdeg'));
console.log(isUnique('abc'));
console.log(isUnique('a'));