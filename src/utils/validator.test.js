
import { isStringValid, isMonetaryValueValid } from './validator'

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

  it('should be able to check if a number representing money is valid', () => {
    expect(isMonetaryValueValid(0)).toBe(true)
    expect(isMonetaryValueValid(10.55)).toBe(true)
    expect(isMonetaryValueValid(999999)).toBe(true)
	})

  it('should be able to check if a number representing money is not valid (null input)', () => {
    expect(isMonetaryValueValid(null)).toBe(false)
	})

  it('should be able to check if a number representing money is not valid (negative input)', () => {
    expect(isMonetaryValueValid(-1)).toBe(false)
    expect(isMonetaryValueValid(-100)).toBe(false)
    expect(isMonetaryValueValid(-999999)).toBe(false)
	})

  it('should be able to check if a number representing money is not valid (decimal to 3dp or more input)', () => {
    expect(isMonetaryValueValid(10.555)).toBe(false)
	})

});
