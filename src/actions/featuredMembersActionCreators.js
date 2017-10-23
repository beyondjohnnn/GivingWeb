import axios from 'axios'

export function getFeaturedMembers() {
	return {
		type: 'GET_FEATURED_MEMBERS',
		payload: axios.get('http://localhost:3000/featured_members')
	}
}
