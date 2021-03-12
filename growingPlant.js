function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let plantHeight = 0;
    let days = 1;

    while (plantHeight < desiredHeight) {
        plantHeight += upSpeed;

        if (plantHeight >= desiredHeight) return days;

        plantHeight -= downSpeed

        days++


    }
    return days;
}


console.log(growingPlant(100, 10, 910));
console.log(growingPlant(10, 9, 4));
console.log(growingPlant(6, 5, 10));
