import { undefinedToNull } from "./undefined-to-null";

describe('undefinedToNull', () => {
    it('should convert undefined to null in an array', () => {
        const input = [undefined, 'a', undefined, 'b', undefined];
        const expected = [null, 'a', null, 'b', null];
        const actual = undefinedToNull(input);
        expect(actual).toEqual(expected);
    });

    it('should convert undefined to null in an object', () => {
        const input = { a: undefined, b: 'a', c: undefined, d: 'b', e: undefined };
        const expected = { a: null, b: 'a', c: null, d: 'b', e: null };
        const actual = undefinedToNull(input);
        expect(actual).toEqual(expected);
    });
});