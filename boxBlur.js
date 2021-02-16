
function boxBlur(image) {
    const res = [];

    for (let y = 0; y < image.length - 2; y++) {
        const line = [];

        for (let x = 0; x < image[y].length - 2; x++) {
            let sum = 0;
            let count = 0;

            for (let a = y; a < y + 3; a++) {
                for (let b = x; b < x + 3; b++) {
                    sum += image[a][b];
                    count++;
                }
            }
            line.push(Math.floor(sum / count));
        }
        res.push(line);
    }

    return res;
}

console.log(boxBlurTwo([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]));



function boxBlurTwo(I) {
    var B = I.slice(1, -1).map(e => e.slice(1, -1))

    console.log(B);

    //Replace every element with the average
    // of its neighbors
    return B.map((row, i) =>
        row.map((elem, j) => {
            var sum = 0
            for (var x = 0; x < 3; ++x)
                for (var y = 0; y < 3; ++y)
                    sum += I[i + x][j + y]
            return sum / 9 | 0
        })
    )
}

console.log(boxBlurTwo([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]));




function boxBlurThree(image) {
    var blured = [];
    for (var i = 1; i < image.length - 1; i++) {
        var row = [];
        for (var j = 1; j < image[i].length - 1; j++) {
            var average = image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1];
            average += image[i][j - 1] + image[i][j] + image[i][j + 1];
            average += image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1];
            row.push(Math.floor(average / 9));
        }
        blured.push(row);
    }
    return blured;
}

console.log(boxBlurThree([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]));