import axios from 'axios'

export function payWithToken(token) {
	return {
		type: 'SUBMIT_PAYMENT',
		payload: axios.post(`${process.env.API_URL}/charges`, {token: token})
	}
}