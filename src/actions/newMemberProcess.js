import axios from 'axios'

export function setCurrentTab(tab) {
	return {
		type: 'SET_CURRENT_NEW_MEMBER_TAB',
		tab
	}
}

export function readFile(file, result) {
	return {
		type: 'CHANGE_IMAGE',
		file: file,
		imagePreviewUrl: result
	}
}

export function submitNewMemberBasics(details) {
	return {
		type: 'SUBMIT_NEW_MEMBER_BASICS',
		details
	}
}

export function editNewMemberName(name) {
	return {
		type: 'EDIT_NEW_MEMBER_NAME',
		name: name
	}
}

export function editNewMemberGoal(amount) {
	return {
		type: 'EDIT_NEW_MEMBER_GOAL',
		amount: amount
	}
}

export function submitNewMemberStory(details) {
	return {
		type: 'SUBMIT_NEW_MEMBER_STORY',
		details
	}
}

export function submitNewMember(member) {
	return {
		type: 'SUBMIT_NEW_MEMBER',
		payload: axios.post('http://localhost:3000/members', member)
	}
}
