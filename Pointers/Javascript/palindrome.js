// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}

iterate through the string
create a pointer at the beginning and one at the end
only iterate to halfway point of string
if those characters don't match, return false
if you get all the way through, return true

TS = O(n)
SC = O(1)

 */
var isPalindrome = function(str) {
    let s = str.toLowerCase();

    s = s.replace(/[^a-z0-9]/g, '');

    // console.log(s)
    for (let i = 0; i < Math.max(s.length / 2); i++){
        let p1 = s[i];
        let p2 = s[s.length - i - 1]; 
        // console.log("p1: ", p1);
        // console.log("p2: ", p2)

        if (p1 != p2) return false;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("soup"))