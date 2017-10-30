import axios from 'axios'

export function signup(newUserDetails) {
	return {
		type: 'SIGNUP_POST',
		payload: axios.post(`${process.env.API_URL}/registrations`, newUserDetails)
	}
}

export function login(loginDetails) {
	return {
		type: 'LOGIN_POST',
		payload: axios.post(`${process.env.API_URL}/sessions`, loginDetails)
	}
}

export function charitySignup(newCharityDetails) {
	return {
		type: 'CHARITY_SIGNUP_POST',
		payload: axios.post(`${process.env.API_URL}/registrations/charities`, newCharityDetails)
	}
}

export function charityLogin(loginDetails) {
	return {
		type: 'CHARITY_LOGIN_POST',
		payload: axios.post(`${process.env.API_URL}/sessions/charities`, loginDetails)
	}
}
