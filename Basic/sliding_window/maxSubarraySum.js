// Time Complexity 0(n)
// Sliding Window Technique
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  // Loop Through first n terms to get initial max sum
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // loop through sliding window style
  for (let i = num; i < arr.length; i++) {
    // take original sum
    // subtract first element in the test case 2 at 0
    // add next element in test case 2 at 3
    tempSum = tempSum - arr[i - num] + arr[i];
    // only replace max if tempSum is larger
    maxSum = Math.max(maxSum, tempSum);
  }
  // return ultimate max
  return maxSum;
}

// testing with array and num
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
