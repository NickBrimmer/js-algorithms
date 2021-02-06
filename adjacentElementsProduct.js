function adjacentElementsProduct(array){
    let highestProd = array[0] * array[1];

    for(let i = 0; i < array.length; i++){
        product = array[i] * array[i+1];

        highestProd = product > highestProd ? product : highestProd;
    }

    return highestProd;
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
