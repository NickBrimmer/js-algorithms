function checkPalindrome(str) {
    return str === [...str].reverse().join();
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('aaabaa'));
console.log(checkPalindrome('aabbaa'));