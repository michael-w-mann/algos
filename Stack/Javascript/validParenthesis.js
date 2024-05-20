// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
iterate through the string
if the string contains an opening bracket, push it onto the stack
if the s contains a closing bracket, pop the latest frame off the callstack
evaluate the string, if the compare string doesn't match, return false
once iterating through, if the stack is empty, return true
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++){
        console.log("stack: ", stack);
        if (s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i]);
        }
        
        if ((s[i] === ")" || s[i] === "}" || s[i] === "]")) {
            let compare = stack.pop() + s[i];
            console.log("compare: ", compare)
            // console.log("stack after pop: ", stack);
            if (compare !== "[]" && compare !== "{}" && compare !== "()") return false;
        }
    }
    return stack.length === 0;
};

const str1 = "{}{}{}()[]";
const str2 = "}}{}{}()[]"


console.log(isValid(str2))