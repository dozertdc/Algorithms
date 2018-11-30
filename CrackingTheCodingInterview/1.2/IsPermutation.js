// not efficient, but a good starting point to understand the problem
// O(n log n)
function isPermutation(string1, string2) {
    if(string1.length !== string2.length){return false;}
    string1 = string1.split('').sort().join('');
    console.log(string1);
    string2 = string2.split('').sort().join('');
    console.log(string2);
    return string1 === string2;
}

console.log(isPermutation('abcabc', 'cabcab'));
console.log(isPermutation('abcd', 'efgh'));

// O(n)
function isPermutation2(string1, string2) {
    if(string1.length !== string2.length){return false;}
    string1Counts = {};
    string2Counts = {};
    for(var i=0; i<string1.length; i++){
        if(string1Counts[string1[i]]==null){
            string1Counts[string1[i]] = 1;
        }else{
            string1Counts[string1[i]] = string1Counts[string1[i]] + 1;
        }
    }
    for(var j=0; j<string2.length; j++){
        if(!string1Counts[string2[j]]){
            return false;
        }else{
            string1Counts[string2[j]] = string1Counts[string2[j]] - 1;
        }
    }
    return true;
}

console.log(isPermutation2('abcabc', 'cabcab'));
console.log(isPermutation2('abcd', 'efgh'));
