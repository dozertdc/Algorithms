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

// without map 
function isUniqueNoDataStructures(input){

    for(var i=0; i<input.length; i++){
        for(var j=i+1;j<input.length; j++){
            if(input[i] === input[j]){
                return false;
            }
        }
    }
    return true;

}

console.log('pancakes');
console.log(isUnique('pancakes'));
console.log('able');
console.log(isUnique('able'));
