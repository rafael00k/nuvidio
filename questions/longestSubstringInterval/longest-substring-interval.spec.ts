import { lengthOfLongestSubstring } from "./longest-substring-interval";

describe('longestSubstringInterval', () => {
    it('should return the length of the longest substring interval', () => {
        const s = 'abcabcbb';
        const expected = 3;
        const actual = lengthOfLongestSubstring(s);
        expect(actual).toEqual(expected);
    });

    it('should return the length of the longest substring interval', () => {
        const s = 'bbbbb';
        const expected = 1;
        const actual = lengthOfLongestSubstring(s);
        expect(actual).toEqual(expected);
    });

    it('should return the length of the longest substring interval', () => {
        const s = 'pwwkew';
        const expected = 3;
        const actual = lengthOfLongestSubstring(s);
        expect(actual).toEqual(expected);
    });

    it('should return the length of the longest substring interval', () => {
        const s = ' ';
        const expected = 1;
        const actual = lengthOfLongestSubstring(s);
        expect(actual).toEqual(expected);
    });
});