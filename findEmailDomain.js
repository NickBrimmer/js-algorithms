function findEmailDomain(address) {
    return address.substring(address.indexOf('@'));
}

console.log(findEmailDomain('nickbrimmer@gmail.com'));