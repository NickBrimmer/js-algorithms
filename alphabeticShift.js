function alphabeticShift(inputString) {
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]
    let chars = inputString.split("")

    for (let i = 0; i < chars.length; i++) {
        let current = chars[i];

        if (chars[i] === "z") { chars[i] = "a" }
        else {
            const position = alphabet.indexOf(chars[i]);
            chars[i] = alphabet[position + 1]
        }

    }

    return chars.join('')
}

console.log(alphabeticShift("crazy"))
console.log(alphabeticShift("a"))
console.log(alphabeticShift("aaaabbbccd"))
console.log(alphabeticShift("fuzzy"))