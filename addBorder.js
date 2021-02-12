function addBorder(picture) {
    const wallLength = picture[0].length + 2;
    let wall = "";
    
    for(let i = 0; i < wallLength; i++){
        wall = wall.concat('*')
    }

    for(let i = 0; i < picture.length; i++){
        picture[i] = "*".concat(picture[i], "*")
    }

    picture.push(wall)
    picture.unshift(wall)
    

    return picture;
}

console.log(addBorder(["abc", "ded"]));


function addBorderTwo(picture){
    return [e="*".repeat(p[0].length+2)].concat(p.map(i=>"*"+i+"*"),e)
}

console.log(addBorderTwo(['abc', 'def']));