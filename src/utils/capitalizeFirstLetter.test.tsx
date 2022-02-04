import { } from "@testing-library/react"
import capitalizeFirstLetter from './capitalizeFirstLetter'

describe('capitalizeFirstLetter', () => {
    test('returns a string with the first letter capitalized', () => {

        const inputString = 'pokemon';
        const expectedValue = 'Pokemon';
        const actualValue = capitalizeFirstLetter(inputString);
        expect(actualValue).toEqual(expectedValue);
    })
})