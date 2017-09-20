import axios from 'axios'

export function signup(newUserDetails) {
	return {
		type: 'SIGNUP_POST',
		payload: axios.post('http://localhost:3000/v1/users', newUserDetails)
	}
}