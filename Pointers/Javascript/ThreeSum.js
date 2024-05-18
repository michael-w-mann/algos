// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums array of numbers
 * @return {number[][]} array of arrays
okay, so all of these numbers just need to add up to the total sum of zero
establish a left, middle and right pointer
I'm thinking the middle pointer iterates through each element and a sum is taken
if sum = 0, push all three pointers into an array
if not, increment middle pointer until sum = 0
if middle = right pointer, move the left up, move the right down, and reset the middle to left + 1 and continue
 */
var threeSum = function(nums) {
    
    const resultArr = [];

    let left = 0;
    let middle = 1;
    let right = nums.length - 1;

    while (middle < right){

    console.log("left: ", nums[left])
    console.log("middle: ", nums[middle])
    console.log("right: ", nums[right])

    if (nums[left] + nums[middle] + nums[right] == 0) {
        resultArr.push([nums[left], nums[middle], nums[right]]);

    } else if (middle === right) {
        left++;
        right--;
        middle = left + 1;
    }
    else if (nums.indexOf(left + 1) === nums.indexOf(right)) return;
    return resultArr;
  }  
};

const nums1 = [1,-1,-2,3,2]

console.log(threeSum(nums1))