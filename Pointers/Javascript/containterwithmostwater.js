// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
establish a left and right pointer
find the area, which is the lower of each pointers height * the space between them
if the left pointer is lower than the right, move it up one
if right pointer is lower, move it down one
keep iterating through until the pointers meet, calculating area each time and updating a variable
once pointers meet, exit the loop and return the height variable

TC= O(n)
SC= O(1)
 */

var maxArea = function(arr) {
    let left = 0; 
    let right = arr.length-1;
    let maxH = 0;
    while (left !== right){
        let area = Math.min(arr[left], arr[right]) * (right - left);
        // console.log("area: ", area);

        if (area > maxH) maxH = area;

        arr[left] > arr[right] ? right-- : left++;
    }
    return maxH;
};

const arr1 = [1,3,6,21,2,4,6,2,1]

console.log(maxArea(arr1))

