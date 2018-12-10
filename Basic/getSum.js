// O(n) time complexity
function getSum(list){
    in sum = 0;
    // loop through list and add to sum
    for(var i=0; i<list.length; i++){
        sum += list[i];
    }
    return sum;
}

// Use the getSum method and then divide by length of list to getAverage
// Modularized compared to other solution, but for something so simple
// maybe not better unless you need the sum separately.
function getAverage(list){
   return getSum(list)/list.length
}
