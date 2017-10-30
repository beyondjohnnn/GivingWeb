import axios from 'axios'

export function getFeaturedMembers() {
	return {
		type: 'GET_FEATURED_MEMBERS',
		payload: axios.get(`${process.env.API_URL}/featured_members`)
	}
}
