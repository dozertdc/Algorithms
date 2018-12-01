function sameFrequency(num1, num2){
  num1 = num1.toString();
  num2 = num2.toString();
  if(num1.length !== num2.length) return false;
  num1Counts = {};
  for(let num of num1){
      num1Counts[num] = num1Counts[num] ? num1Counts[num]+1 : 1;
  }
  for(let num of num2){
      if(!num1Counts[num]){
          return false;
      } else {
          num1Counts[num] = num1Counts[num] - 1;
      }
  }
  return true;
}
