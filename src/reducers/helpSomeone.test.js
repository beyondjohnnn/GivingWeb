import helpSomeoneReducer from './helpSomeone'

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

	it('should add property fetching when passed action GET_MEMBERS_PENDING', () => {
		const action = {
			type: "GET_MEMBERS_PENDING"
		}
		const result = helpSomeoneReducer(defaultState, action)
		defaultState.fetching = true
		expect(result).toMatchObject(defaultState)
	})

	it(`should add property fetching and error, with error set to the payload given,
			when passed GET_MEMBERS_REJECTED`, () => {
		const errorPayload = {error: "returned object"}
		const action = {
			type: "GET_MEMBERS_REJECTED",
			payload: errorPayload
		}

		const result = helpSomeoneReducer(defaultState, action)
		defaultState.fetching = true
		defaultState.error = {error: "returned object"}
		expect(result).toMatchObject(defaultState)
	})

	it(`When passed action type GET_MEMBERS_FULFILLED should: add property
			fetching and fetched. Also should set property members
		 	to payload.data`, () => {
		const payload = {data: ["member1", "member2"]}
		const action = {
			type: "GET_MEMBERS_FULFILLED",
			payload: payload
		}

		const result = helpSomeoneReducer(defaultState, action)
		let state = defaultState
		state.fetching = true
		state.fetched = true
		state.members = payload.data
		expect(result).toMatchObject(state)
	})

	it('should add property fetching when passed action GET_SINGLE_MEMBER_PENDING', () => {
		const action = {
			type: "GET_SINGLE_MEMBER_PENDING"
		}
		const result = helpSomeoneReducer(defaultState, action)
		defaultState.fetching = true
		expect(result).toMatchObject(defaultState)
	})

	it(`should add property fetching and error, with error set to the payload given,
			when passed GET_SINGLE_MEMBER_REJECTED`, () => {
		const errorPayload = {error: "returned object"}
		const action = {
			type: "GET_SINGLE_MEMBER_REJECTED",
			payload: errorPayload
		}

		const result = helpSomeoneReducer(defaultState, action)
		defaultState.fetching = true
		defaultState.error = {error: "returned object"}
		expect(result).toMatchObject(defaultState)
	})

	it(`When passed action type GET_SINGLE_MEMBER_FULFILLED should: add property
			fetching and fetched. Also should set property current_member
		 	to payload.data`, () => {
		const payload = {data: "current_member"}
		const action = {
			type: "GET_SINGLE_MEMBER_FULFILLED",
			payload: payload
		}

		const result = helpSomeoneReducer(defaultState, action)
		let state = defaultState
		state.fetching = true
		state.fetched = true
		state.current_member = payload.data
		expect(result).toMatchObject(state)
	})

	it(`Should set current_member to the value of action.member when the action
			type is SET_CURRENT_MEMBER`, () => {
		const action = {
			type: "SET_CURRENT_MEMBER",
			member: "current_member"
		}

		const result = helpSomeoneReducer(defaultState, action)
		let state = defaultState
		state.current_member = "current_member"
		expect(result).toMatchObject(state)
	})
})
