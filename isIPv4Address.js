
function addressIP(inputString) {
    const chars = inputString.split('.');

    if (chars.length !== 4) return false

    for (let i = 0; i < chars.length; i++) {
        const current = chars[i];

        if (current === '' || isNaN(current) || parseInt(current) < 0 || parseInt(current) > 255 || current === "00" ||
            current === "01" ||
            current === "02" ||
            current === "03" ||
            current === "04" ||
            current === "05" ||
            current === "06" ||
            current === "07" ||
            current === "08" ||
            current === "09")
            return false
    }
    return true
}

console.log(addressIP('192.168.0.1'));
console.log(addressIP('255.255.255.255'));
console.log(addressIP('280.100.92.101'));
console.log(addressIP('255.100.81.160.172'));
console.log(addressIP('1..0.1'));
console.log(addressIP('17.233.00.131'));