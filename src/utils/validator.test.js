
import { isStringValid } from './validator'

describe('Validator', () => {

	it('should be able to check if a string is valid', () => {
    expect(isStringValid("string")).toBe(true)
	})

  it('should be able to check if a string is not valid (null input)', () => {
    expect(isStringValid(null)).toBe(false)
	})

  it('should be able to check if a string is not valid (empty string)', () => {
    expect(isStringValid("")).toBe(false)
	})

});
