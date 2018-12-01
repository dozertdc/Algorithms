// Time Complexity is o(n)
function sameFrequency(num1, num2){
  // convert to strings
  num1 = num1.toString();
  num2 = num2.toString();
  // if not the same length then cannot have same frequency
  if(num1.length !== num2.length) return false;
  // create hashmap of counts of first number
  num1Counts = {};
  for(let num of num1){
      num1Counts[num] = num1Counts[num] ? num1Counts[num]+1 : 1;
  }
  // decrement value associated with key when the number
  // comes up in number 2
  for(let num of num2){
      if(!num1Counts[num]){
          return false;
      } else {
          num1Counts[num] = num1Counts[num] - 1;
      }
  }
  return true;
}
