function sortByHeight(a) {
    let newArray = []
    
    for(let i = 0; i < a.length; i++){
        const current = a[i];
        
        if(current !== -1){
            newArray.push(current)
        }
    }
    newArray = newArray.sort((a,b) => a - b);

    let index = 0;
    for(let i = 0; i < a.length; i++){

        if(a[i] !== -1){
            a[i] = newArray[index];
            index++;
        }
    }

    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));