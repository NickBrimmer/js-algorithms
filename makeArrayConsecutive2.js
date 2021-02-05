function makeArrayConsecutive2(statues) {
    statues = statues.sort((a,b) => a-b);
    console.log(statues);
    const last = statues[statues.length - 1]
    const first = statues[0]
    let count = 0;

    for(let i = first; i < last; i++) { 
        if(statues.indexOf(i) === -1){
            count++;
        }
    }
    
    return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([4, 2, 7, 18]));
