// not efficient, but a good starting point to understand the problem
function isPermutation(string1, string2) {
    if(string1.length !== string2.length){return false;}
    string1 = string1.split('').sort().join('');
    string2 = string2.split('').sort().join('');
    return string1 === string2;
}

console.log(isPermutation('abcabc', 'cabcab'));
console.log(isPermutation('abcd', 'efgh'));
