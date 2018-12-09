function getSum(list){
    in sum = 0;
    for(var i=0; i<list.length; i++){
        sum += list[i];
    }
    return sum;
}

function getAverage(list){
   return getSum(list)/list.length
}
