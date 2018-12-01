// Time Complexity 0(n) 
function areThereDuplicates() {
  let collection = {}
  // loop through unspecificied amount of arguments
  for(let val in arguments){
    // fill collection up with values add 1 or set to 1
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    // return true if any are more than 1 it shows dupes
    if(collection[key] > 1) return true
  }
  // if no dupes return false
  return false;
}
