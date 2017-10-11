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

	it('EDIT_NEW_MEMBER_GOAL: should change goal property to value of action.amount', () => {
		const action = {
			type: "EDIT_NEW_MEMBER_GOAL",
			amount: 100
		}
		const result = newMemberProcessReducer(defaultState, action)
		defaultState.goal = action.amount
		expect(result).toEqual(defaultState)
	})

	it('EDIT_NEW_MEMBER_LOCATION: should change location property to value of action.location', () => {
		const action = {
			type: "EDIT_NEW_MEMBER_LOCATION",
			location: "Riften"
		}
		const result = newMemberProcessReducer(defaultState, action)
		defaultState.location = action.location
		expect(result).toEqual(defaultState)
	})

	it(`EDIT_NEW_MEMBER_REASON: should change story.reasonForUse property to
		value of action.value`, () => {
		const action = {
			type: "EDIT_NEW_MEMBER_REASON",
			value: "this is text"
		}
		const result = newMemberProcessReducer(defaultState, action)
		defaultState.story.reasonForUse = action.value
		expect(result).toEqual(defaultState)
	})

	it(`EDIT_NEW_MEMBER_STORY: should change story.story property to
		value of action.value`, () => {
		const action = {
			type: "EDIT_NEW_MEMBER_STORY",
			value: "this is text"
		}
		const result = newMemberProcessReducer(defaultState, action)
		defaultState.story.story = action.value
		expect(result).toEqual(defaultState)
	})

	it(`EDIT_NEW_MEMBER_FUTURE_GOALS: should change story.futureGoals property to
		value of action.value`, () => {
		const action = {
			type: "EDIT_NEW_MEMBER_FUTURE_GOALS",
			value: "this is text"
		}
		const result = newMemberProcessReducer(defaultState, action)
		defaultState.story.futureGoals = action.value
		expect(result).toEqual(defaultState)
	})

	it('TO_STORY_TAB: should change tab property to story', () => {
		const action = {
			type: "TO_STORY_TAB",
		}
		const result = newMemberProcessReducer(defaultState, action)
		defaultState.tab = "story"
		expect(result).toEqual(defaultState)
	})
})
