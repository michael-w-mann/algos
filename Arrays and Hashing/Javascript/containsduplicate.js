// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
create a cache
iterate through the array
check to see if the element in that array is in the cache
if not, put it in
if it is, return true 
if we iterate through entire array and not hit true, return false

TC = he function iterates through the entire array once, so the time complexity is O(n), where n is the length of the input array nums.
SC = 
*/
var containsDuplicate = function(nums) {
    const cache = {};
    for (let i = 0; i < nums.length; i++){
        if (cache[nums[i]] !== undefined) return true;         
        cache[nums[i]] = i;
        console.log(cache);
    }
    return false;
};

const arr1 = [1,2,3,4,5]
const arr2 = [1,2,3,4,1]

console.log(containsDuplicate(arr2))