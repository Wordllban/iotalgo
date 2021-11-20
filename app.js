/*

time complexity: O(stringLength + subStringLength)
space complexity: O(subString) cause of prefix table 

*/


function buildPrefixTable(s) {
    const table = [0];
    let i = 1;         // index in string - suffix
    let j = 0;         // length of repeating prefix and suffix

    while( i < s.length) {
        if(s[i]===s[j]) {
            j += 1;
            table[i] = j
            i += 1;
        } else if (j > 0) {
            j = table[j - 1];
        } else { // j = 0
            table[i] = 0;
            i += 1;
        }
    }

    return table
}

function searchSubString(string, substring) {
    // edge case: substring = "" -> 0
    if(substring === "") return 0;

    const prefixTable = buildPrefixTable(substring);
    let i = 0;         // index in string
    let j = 0;         // index in substring

    while( i < string.length && j < substring.length) {
        if(string[i] === substring[j]) {
            i += 1;
            j += 1;
        } else if(j> 0) {
            j = prefixTable[j-1];
        } else { // j = 0
            i += 1;
        }
    }

    return j === substring.length ? "Starting position of substring is: " + (i - j) : -1;
}

console.log(searchSubString("aabaabaaab", "aabaaab"));