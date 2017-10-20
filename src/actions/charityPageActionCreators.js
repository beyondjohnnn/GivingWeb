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
		payload: axios.get("http://localhost:3000/charity_featured_members/" + charity_id)
	}
}
