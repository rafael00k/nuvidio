import { mergeObjects } from "./merge-objects";

describe('mergeObjects', () => {
    it('should merge two objects', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const obj2 = { b: 4, c: 5, d: 6 };
        const expected = { a: 1, b: 4, c: 5, d: 6 };
        const actual = mergeObjects(obj1, obj2);
        expect(actual).toEqual(expected);
    });

    it('should merge two objects with nested objects', () => {
        const obj1 = { a: 1, b: { c: 2, d: 3 }, e: 4 };
        const obj2 = { b: { c: 5, d: 6 }, e: 7, f: 8 };
        const expected = { a: 1, b: { c: 5, d: 6 }, e: 7, f: 8 };
        const actual = mergeObjects(obj1, obj2);
        expect(actual).toEqual(expected);
    });

    it('should merge two objects with nested arrays', () => {
        const obj1 = { a: 1, b: [2, 3], c: 4 };
        const obj2 = { b: [5, 6], c: 7, d: 8 };
        const expected = { a: 1, b: [2, 3, 5, 6], c: 7, d: 8 };
        const actual = mergeObjects(obj1, obj2);
        expect(actual).toEqual(expected);
    });

    it('should merge two objects with nested arrays and objects', () => {
        const obj1 = { a: 1, b: { c: [2, 3], d: 4 }, e: 5 };
        const obj2 = { b: { c: [5, 6], d: 7 }, e: 8, f: 9 };
        const expected = { a: 1, b: { c: [2, 3, 5, 6], d: 7 }, e: 8, f: 9 };
        const actual = mergeObjects(obj1, obj2);
        expect(actual).toEqual(expected);
    });
})