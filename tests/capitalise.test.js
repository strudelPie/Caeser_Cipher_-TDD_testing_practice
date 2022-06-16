import { capitaliseString } from '../scripts/capitalise.js'

test('Returns first letter capitalised', () => {
    expect(capitaliseString('heartstopper')).toBe('Heartstopper');
});