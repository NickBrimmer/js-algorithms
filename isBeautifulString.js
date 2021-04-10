function isBeautifulString(string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('').sort((a, b) => a - b)
    string = string.split('').sort((a, b) => a - b).join('')
    const chars = string.split(/[a-z]*([a-z])\1([a-z])\2[a-z]*/)
    console.log(chars);
    const count = {}

    for (let i = 0; i < string.length; i++) {

        if (count[string[i]] === undefined) {
            count[string[i]] = 1;
        } else {
            count[string[i]]++
        }
    }

    for (let i = 0; i < string.length; i++) {


        if (count[string[i]] < count[string[i + 1]]) {
            return false
        } else {
            return true
        }
    }
}

console.log(isBeautifulString("aabbb"));


var newstring = "A11B22C33D44E555";

var result = newstring.split(/(?=\D)/);

console.log(result);