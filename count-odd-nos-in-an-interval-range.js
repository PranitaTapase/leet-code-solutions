//Programming Skills Day-1 Easy


var countOdds = function(low, high) {
    let count = 0;
    for(let i = low; i<= high ; i++ ){
        if(i%2 !== 0) count++;
    }
    return count;
};
