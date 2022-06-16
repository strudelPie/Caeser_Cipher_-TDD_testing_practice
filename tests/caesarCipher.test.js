import { caesarCipher } from "../scripts/caesarCipher.js";

test('Wraps from z to a', () => {
    expect(caesarCipher('X', 4)).toBe('B');
});

test('Is case-sensitive', () =>{
    expect(caesarCipher('Heartstopper', 4)).toBe('Lievxwxsttiv');
});

test('Handles punctuation', () => {
    expect(caesarCipher('Wow, Heartstopper!', 9)).toBe('Fxf, Qnjacbcxyyna!');
});