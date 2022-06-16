import { capitaliseString } from './capitalise.js'

test('Returns first letter capitalised', () => {
    expect(capitaliseString('heartstopper')).toBe('Heartstopper');
});