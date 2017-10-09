import helpSomeoneReducer from './../helpSomeone'

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
		const result = helpSomeoneReducer(undefined, {})
		expect(result).toMatchObject(defaultState)
	})

	it('should add property fetching when passed action GET_MEMBERS_PENDING', () => {
		const action = {
			type: "GET_MEMBERS_PENDING"
		}
		const result = helpSomeoneReducer(defaultState, action)
		defaultState.fetching = true
		expect(result).toMatchObject(defaultState)
	})
})
