function jumps(flagHeight, bigJump) {
    let count = 0;

    while (flagHeight >= bigJump) {
        flagHeight = flagHeight - bigJump
        count++
    }

    while (flagHeight > 0) {
        flagHeight--
        count++
    }

    return count;
}

console.log(jumps(8, 3));