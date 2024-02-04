/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // Edge case: if length of s is less than t, return empty string
    if (s.length < t.length) {
        return "";
    }

    // Store the count of characters needed to form the target string t
    const charCount = new Map();
    for (const ch of t) {
        charCount.set(ch, (charCount.get(ch) || 0) + 1);
    }

    // Initialize the variables
    let targetCharsRemaining = t.length;
    let minWindow = [0, Number.POSITIVE_INFINITY]; // Initialize minWindow as a tuple [start, end]
    let startIndex = 0;

    // Iterate through the string s using two pointers (start and end)
    for (let endIndex = 0; endIndex < s.length; endIndex++) {
        const ch = s[endIndex];
        if (charCount.has(ch) && charCount.get(ch) > 0) {
            targetCharsRemaining--;
        }
        charCount.set(ch, (charCount.get(ch) || 0) - 1);

        // Check if all characters in target string t are found in the current window
        if (targetCharsRemaining === 0) {
            // Move the start pointer until the window is no longer valid
            while (true) {
                const charAtStart = s[startIndex];
                if (charCount.has(charAtStart) && charCount.get(charAtStart) === 0) {
                    break;
                }
                charCount.set(charAtStart, (charCount.get(charAtStart) || 0) + 1);
                startIndex++;
            }

            // Update the minimum window if the current window is smaller
            if (endIndex - startIndex < minWindow[1] - minWindow[0]) {
                minWindow = [startIndex, endIndex];
            }

            // Move the start pointer to the right and adjust the counts
            charCount.set(s[startIndex], (charCount.get(s[startIndex]) || 0) + 1);
            targetCharsRemaining++;
            startIndex++;
        }
    }

    // Return the minimum window substring
    return minWindow[1] >= s.length ? "" : s.slice(minWindow[0], minWindow[1] + 1);    
};
