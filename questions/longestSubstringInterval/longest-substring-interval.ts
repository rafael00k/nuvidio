export function lengthOfLongestSubstring(s: string): number {
    let longestInterval = 0;
    let startPosition = 0;
    let end = 0;
    const set = new Set();

    while (end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end]);
            
            longestInterval = Math.max(longestInterval, end - startPosition + 1);
            end++;
        } else {
            set.delete(s[startPosition]);
            startPosition++;
        }
    }

    return longestInterval;
}