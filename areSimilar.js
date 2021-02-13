function areSimilar(a, b) {
    a = JSON.stringify(a.sort((x,y) => x-y))
    b = JSON.stringify(b.sort((x,y) => x-y))
    
    console.log(a);
    console.log(b);

    return a === b;
}

// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([832, 570, 148, 998, 533, 561, 455, 147, 894, 279], [832, 998, 148, 570, 533, 561, 894, 147, 455, 279]));


function areSimilarTwo(a, b) {
    var i = 0,
        length = a.length,
        diff = [];
    
    for( ;i<length;i++){
        // If corresponding elements in a and b are not equal, push their 
        // position to diff array to be used later.
        if(a[i] !== b[i]){
            diff.push(i);
        }
    }
    console.log(diff);
    
    // If there are no differences then the arrays are similar.
    if(diff.length === 0){
        return true
    }
    
    // If there are 2 differences, check to see if you would be able to swap the
    // elements to make the arrays equal.
    if(diff.length === 2){
        if(a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]){
            return true;
        }
    }
    
    // If previous conditionals didn't return true, the arrays must not be similar.
    return false
}

console.log(areSimilarTwo([832, 570, 148, 998, 533, 561, 455, 147, 894, 279], [832, 998, 148, 570, 533, 561, 894, 147, 455, 279]));
console.log(areSimilarTwo([6,3,4, 1], [6, 1 ,3,4]));
