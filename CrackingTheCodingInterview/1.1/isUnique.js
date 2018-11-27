function isUnique(input){

    hashMap = {};
    inputLength = input.length;
    for(var i=0; i<inputLength; i++){
        if(hashMap[input[i]]==null){
            hashMap[input[i]] = true;
        }else{
            return false;
        }
    }
    return true;

}

console.log('pancakes');
console.log(isUnique('pancakes'));
console.log('able');
console.log(isUnique('able'));
