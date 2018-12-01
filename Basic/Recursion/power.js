// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp){
    // terminating condition
    if(exp === 0) return 1;
    // recursive call
    return base * power(base, exp-1);
}
