import navigationReducer from './../helpSomeone'

describe('CharityTile', () => {
	let defaultState

	beforeEach(() => {
		defaultState = {
			members: [],
			current_member: {
				donations: [],
				comments: [],
				info: '',
				name: 'Charlie'
			}
		}
	});

	it('should return default state when passed undefined and no action type', () => {
		const result = navigationReducer(undefined, {})
		const expected = defaultState
		expect(result).toMatchObject(expected)
	})
})
