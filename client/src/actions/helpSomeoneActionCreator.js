import axios from 'axios'

export function getMembers() {
	return {
		type: 'MEMBERS',
		payload: axios.get('http://localhost:3000/members')
	}
}
