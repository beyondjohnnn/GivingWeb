import navigationReducer from './../../reducers/navigation'

describe('Navigation Reducer', () => {
	let defaultState

	beforeEach(() => {
		defaultState = {dropdownVisible: false}
	});

	it('should toggle value of "dropdownVisible" when action "TOGGLE_DROPDOWN" is passed', () => {
		const action = {
			type: "TOGGLE_DROPDOWN"
		}
		let newState
		let expectedState

		newState = navigationReducer(defaultState, action)
		expectedState = {
			dropdownVisible: true
		}
		expect(newState).toMatchObject(expectedState)

		newState = navigationReducer(newState, action)
		expectedState = {
			dropdownVisible: false
		}
		expect(newState).toMatchObject(expectedState)
	})

})
