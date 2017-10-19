import axios from 'axios'

export function payWithToken(token) {
	return {
		type: 'SUBMIT_PAYMENT',
		payload: axios.post('http://localhost:3000/charges', {token: token})
	}
}