// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 // Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
make a cache    
iterate through the array
add each element to the array with their number of frequencies
take that k, and find the value with the highest frequency
when found, delete from cache and push to new array
decrement K
if k > 0, repeat the process

TS = O(n)
SC = O(n)
 */
var topKFrequent = function(nums, k) {
    const freqCache = {};

    for (let i = 0; i < nums.length; i++){
        if (freqCache[nums[i]] === undefined){
            freqCache[nums[i]] = 1;
        } else {
            freqCache[nums[i]]++;
        }
    }
    // console.log(freqCache)
    // console.log(Object.entries(freqCache)

    const freqArr = Object.entries(freqCache)

    freqArr.sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        }
        return b[0] - a[0];
    });

    console.log(freqArr)
    const result = [];
    for (let i = 0; i <= k - 1; i++){
        if (freqArr[i] == undefined) break;
        result.push(parseInt(freqArr[i][0]));
    }    

    return result;

};



const arr1 = [1,1,1,1,12,2,3,5,4,6,76,8,8,6,5,4,3,2,3,4,5,6,76]
const arr2 = [1,1,2,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4]


console.log(topKFrequent(arr1, 2))