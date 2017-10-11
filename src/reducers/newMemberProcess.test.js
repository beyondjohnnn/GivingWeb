import newMemberProcessReducer from './newMemberProcess'

describe('New member process', () => {
	let defaultState

	beforeEach(() => {
		defaultState = {
	    tab: 'basics',
	    file: '',
	    imagePreviewUrl: '',
	    name: '',
	    goal: '',
	    location: '',
	    story: {
	      reasonForUse: '',
	      story: '',
	      futureGoals: ''
	    }
		}
	});

	it('EDIT_NEW_MEMBER_NAME: should change name property to value of action.name', () => {
		const action = {
			type: "EDIT_NEW_MEMBER_NAME",
			name: "theName"
		}
		const result = newMemberProcessReducer(defaultState, action)
		defaultState.name = action.name
		expect(result).toEqual(defaultState)
	})


})
