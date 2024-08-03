/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};

    for (let str of strs) {
        // Sort the string to create the key
        let sortedStr = str.split('').sort().join('');

        // If the key doesn't exist in the map, create an array for it
        if (!map[sortedStr]) {
            map[sortedStr] = [];
        }

        // Push the original string into the appropriate group
        map[sortedStr].push(str);
    }

    // Convert the values of the map to an array of arrays
    return Object.values(map);
};

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
