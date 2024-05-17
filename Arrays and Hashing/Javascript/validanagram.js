// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * create a cache for s
 * iterate through s
 * add each letter to the cache, incrementing the quatity if there are duplicate letters
 * create cache for t
 * iterate through t
 * add each letter to the cache, incrementing the quatity if there are duplicate letters
 * if these cache values are the same, return true, else return false
 * 
 * TC = O(n)
 * SC = O(n)
 */


var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const sCache = {};
    const tCache = {};
    
    for (let i = 0; i < s.length; i++){
        if (sCache[s[i]] === undefined) {
            sCache[s[i]] = 1;
        } else {
            sCache[s[i]]++;
        }
        if (tCache[t[i]] === undefined) {
            tCache[t[i]] = 1;
        } else {
            tCache[t[i]]++;
        }
    }
    // console.log("sCache: ", sCache)
    // console.log("tCache: ", tCache)

    for (key in sCache){
        if (sCache[key] !== tCache[key]) return false;
    }
    return true;

};

console.log(isAnagram("tarp", "prat"))