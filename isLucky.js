function isLucky(n){
    string = n.toString().split('')
    const halfWay = Math.floor(string.length - 1) / 2;
    let first = 0;
    let second = 0;

    string.forEach((element, index) => {
        if(index < halfWay){
            first += parseInt(element);
        } else if( index > halfWay){
            second += parseInt(element)
        }
    })

    return first === second;
}

console.log(isLucky('1230'));
console.log(isLucky('2112004'));
console.log(isLucky('1240'));
console.log(isLucky('124'));