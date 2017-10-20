import axios from 'axios'

// needs to be pull into dashboard sidebar
// change to update instead of a create
export function getCharityFeaturedMembers(charity_id) {
	return {
		type: 'GET_CHARITY_FEATURED_MEMBERS',
		payload: axios.get('http://localhost:3000/charity_featured_members/'+ charity_id)
	}
}
export function createFeaturedMember(data) {
	return {
		type: 'POST_CHARITY_FEATURED_MEMBERS',
		payload: axios.post('http://localhost:3000/charity_featured_members/', data)
	}
}

export function deleteFeaturedMember(member_id) {
	return {
		type: 'DELETE_CHARITY_FEATURED_MEMBERS',
		payload: axios.delete('http://localhost:3000/charity_featured_members/'+ member_id)
	}
}
