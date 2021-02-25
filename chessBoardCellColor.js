function chessBoardCellColor(cell1, cell2) {
    const firstLetter = (cell1[0]);
    const firstNumber = cell1[1];
    const secondLetter = cell2[0];
    const secondNumber = cell2[1];

    return firstLetter.charCodeAt() % 2 === secondLetter.charCodeAt() % 2 &&
        firstNumber % 2 === secondNumber % 2;
}

console.log(chessBoardCellColor("A1", "C3"));
console.log(chessBoardCellColor("B1", "C3"));
console.log(chessBoardCellColor("B2", "D4"));
console.log(chessBoardCellColor("A5", "E7"));
console.log(chessBoardCellColor("A1", "B2"));