function areEquallyStrong(a, b, c, d) {
    yrStr = Math.max(a, b);
    yourWk = Math.min(a, b);
    fStr = Math.max(c, d);
    fWk = Math.min(c, d);

    return (a + b) === (c + d) && (yrStr === fStr && yourWk === fWk)
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(10, 15, 5, 20));