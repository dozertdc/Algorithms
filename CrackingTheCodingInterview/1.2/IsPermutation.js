// not efficient, but a good starting point to understand the problem
// O(n log n)
function isPermutation(string1, string2) {
    // if they are not equal length they cannot be permutations
    if(string1.length !== string2.length){return false;}
    // sort string 1
    string1 = string1.split('').sort().join('');
    console.log(string1);
    // sort string 2
    string2 = string2.split('').sort().join('');
    console.log(string2);
    // compare sorted ans return the boolean
    return string1 === string2;
}

console.log(isPermutation('abcabc', 'cabcab'));
console.log(isPermutation('abcd', 'efgh'));

// O(n)
function isPermutation2(string1, string2) {
    if(string1.length !== string2.length){return false;}
    // create hash maps
    string1Counts = {};
    string2Counts = {};
    for(var i=0; i<string1.length; i++){
        // if value not in hash map add it with count of 1
        if(string1Counts[string1[i]]==null){
            string1Counts[string1[i]] = 1;
        }else{
            // if it is already in map add to count
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


// O(n)
// made second version more readable
function isPermutation3(string1, string2) {
    if(string1.length !== string2.length){return false;}
    string1Counts = {};
    string2Counts = {};
    // more readable looping structure
    for(let letter of string1){
        string1Counts[letter] = string1Counts[letter] ? string1Counts[letter]+1 : 1;
    }
    for(let letter of string2){
        if(!string1Counts[letter]){
            return false;
        }else{
            string1Counts[letter] = string1Counts[letter] - 1;
        }
    }
    return true;
}
