import axios from 'axios'

export function toggleAboutUsSection() {
  return {
    type: 'TOGGLE_ABOUT_US'
  }
}

export function toggleVideo() {
  return {
    type: 'TOGGLE_VIDEO'
  }
}

export function getCharityFeaturedMembers(charity_id) {
	return {
		type: 'GET_CHARITY_FEATURED_MEMBERS',
		payload: axios.get(`${process.env.API_URL}/charity_featured_members/${charity_id}`)
	}
}

export function toggleModal() {
  return {
    type: 'TOGGLE_MODAL'
  }
}

