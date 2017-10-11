import * as actions from './newMemberProcess'

describe('New member process action creators', () => {

	it(`editNewMemberName: returns an object with properties action (set to
		EDIT_NEW_MEMBER_NAME) and name (set to given argument)`, () => {

		const result = actions.editNewMemberName("name")
		const expected = {
			type: "EDIT_NEW_MEMBER_NAME",
			name: "name"
		}
		expect(result).toEqual(expected);
	})

	it(`editGoalAmount: returns an object with properties action (set to
		EDIT_NEW_MEMBER_GOAL) and amount (set to given argument)`, () => {

		const result = actions.editNewMemberGoal(100)
		const expected = {
			type: "EDIT_NEW_MEMBER_GOAL",
			amount: 100
		}
		expect(result).toEqual(expected);
	})

})
