function hasTargetSum(array, target) {
  // Write your algorithm here
  let arrayObj = {};
  for (const num of array) {
    const complement = target - num;
    if (complement in arrayObj) return true;
    arrayObj[num] = true;
      }
    return false;
}


/* 
  Write the Big O time complexity of your function here
  O(n) 
*/

/* 
  Add your pseudocode here
 declare a function that takes an array of numbers and a target number
 and iterates through the array to find two numbers that together represent
 the target number, and returns true when true and false otherwise.
  
  
*/

/*
  Add written explanation of your solution here
  iterate through the array 
   for the current number identify a complement that adds to the target
   check if any key on our obj is the complement
   if so return true otherwise add that number to the object
   else return false if get to end of array
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
}

module.exports = hasTargetSum;
