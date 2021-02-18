function centuryFromYear(year) {
    return Math.floor((year + 99) / 100)
}


console.log(centuryFromYear(1600));
console.log(centuryFromYear(1599));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(1602));