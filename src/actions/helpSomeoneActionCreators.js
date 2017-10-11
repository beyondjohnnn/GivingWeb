import axios from 'axios'

export function setMembersShown(count) {
	return {
		type: 'SET_MEMBERS_COUNT',
		payload: count
	}
}

export function getMembers() {
	return {
		type: 'GET_MEMBERS',
		payload: axios.get('http://localhost:3000/members')
	}
}

export function getSingleMember(id) {
	return {
		type: 'GET_SINGLE_MEMBER',
		payload: axios.get(`http://localhost:3000/members/${id}`)
	}
}

export function setCurrentMember(member) {
	return {
		type: 'SET_CURRENT_MEMBER',
		member: member
	}
}
