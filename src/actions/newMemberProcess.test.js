import * as actions from './newMemberProcess'

describe('New member process action creators', () => {

	it(`editNewMemberName: returns an object with properties type (set to
		EDIT_NEW_MEMBER_NAME) and name (set to given argument)`, () => {

		const result = actions.editNewMemberName("name")
		const expected = {
			type: "EDIT_NEW_MEMBER_NAME",
			name: "name"
		}
		expect(result).toEqual(expected);
	})

	it(`editNewMemberGoalAmount: returns an object with properties type (set to
		EDIT_NEW_MEMBER_GOAL) and amount (set to given argument)`, () => {

		const result = actions.editNewMemberGoal(100)
		const expected = {
			type: "EDIT_NEW_MEMBER_GOAL",
			amount: 100
		}
		expect(result).toEqual(expected);
	})

	it(`editNewMemberLocation: returns an object with properties type (set to
		EDIT_NEW_MEMBER_LOCATION) and location (set to given argument)`, () => {

		const result = actions.editNewMemberLocation("Riften")
		const expected = {
			type: "EDIT_NEW_MEMBER_LOCATION",
			location: "Riften"
		}
		expect(result).toEqual(expected);
	})

	it(`moveToStoryTab: returns an object with properties type (set to TO_STORY_TAB)`, () => {

		const result = actions.moveToStoryTab("Riften")
		const expected = {
			type: "TO_STORY_TAB"
		}
		expect(result).toEqual(expected);
	})

})
