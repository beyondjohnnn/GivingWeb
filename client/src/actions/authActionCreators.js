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
		payload: axios.post('http://localhost:3000/v1/users', loginDetails)
	}
}