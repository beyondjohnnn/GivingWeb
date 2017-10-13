import axios from 'axios'

export function signup(newUserDetails) {
	return {
		type: 'SIGNUP_POST',
		payload: axios.post('http://localhost:3000/registrations', newUserDetails)
	}
}

export function login(loginDetails) {
	return {
		type: 'LOGIN_POST',
		payload: axios.post('http://localhost:3000/sessions', loginDetails)
	}
}

export function charitySignup(newCharityDetails) {
	return {
		type: 'CHARITY_SIGNUP_POST',
		payload: axios.post('http://localhost:3000/registrations/charities', newCharityDetails)
	}
}

export function charityLogin(loginDetails) {
	return {
		type: 'CHARITY_LOGIN_POST',
		payload: axios.post('http://localhost:3000/sessions/charities', loginDetails)
	}
}
