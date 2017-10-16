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

export function getCharity()
	return {
		type: 'GET_CHARITY_ID',
		payload: axios.get('http://localhost:3000/charities')
	}
}

export function getCharityFeaturedMembers(charity_id) {
	const id = charity_id.toString
	return {
		type: 'GET_CHARITY_FEATURED_MEMBERS',
		payload: axios.get('http://localhost:3000/charity_featured_members/'+ id)
	}
}
