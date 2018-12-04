// Time Complexity of 0(n) loop through once
function getAverage(list) {
    // total sum and amount of elements in list
    int sum = 0, count = list.length;
    for (var i = 0; i < count; i++) {
        sum += list[i];
    }
    // calculate average
    return sum/count;
}
